# 域名配置和SSL证书部署指南

## 概述
本文档说明如何将网站部署到域名 `cloudbraintech.cn` 并配置SSL证书。

## 部署选项

### 选项1：使用 Vercel（推荐）

Vercel 是 Next.js 的官方部署平台，提供免费的 SSL 证书和全球 CDN。

#### 步骤：

1. **准备代码仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <你的GitHub仓库地址>
   git push -u origin main
   ```

2. **注册并部署到 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录
   - 点击 "Import Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动识别 Next.js 项目并部署

3. **配置自定义域名**
   - 在 Vercel 项目设置中，找到 "Domains"
   - 添加域名：`cloudbraintech.cn` 和 `www.cloudbraintech.cn`
   - Vercel 会提供DNS配置信息

4. **配置DNS解析**
   
   前往您的域名注册商（如阿里云、腾讯云等）管理面板：
   
   **A记录配置：**
   - 类型：A
   - 主机记录：@
   - 记录值：76.76.21.21（Vercel的IP地址）
   
   **CNAME配置（推荐）：**
   - 类型：CNAME
   - 主机记录：@
   - 记录值：cname.vercel-dns.com
   
   **WWW子域名：**
   - 类型：CNAME
   - 主机记录：www
   - 记录值：cname.vercel-dns.com

5. **SSL证书自动配置**
   - Vercel 会自动为您的域名签发并配置 Let's Encrypt SSL 证书
   - 证书会自动续期，无需手动操作
   - 支持 HTTPS 自动重定向

#### 优势：
- ✅ 完全免费（个人项目）
- ✅ 自动SSL证书管理
- ✅ 全球CDN加速
- ✅ 自动部署（Git push 自动触发）
- ✅ 预览环境（每个分支独立预览URL）

---

### 选项2：使用阿里云/腾讯云（国内备案）

如果需要在中国大陆备案，建议使用国内云服务商。

#### 步骤：

1. **域名备案**
   - 在阿里云或腾讯云完成ICP备案
   - 备案通常需要 10-20 个工作日

2. **购买服务器**
   - ECS（阿里云）或 CVM（腾讯云）
   - 推荐配置：2核4G，适合小型网站

3. **构建项目**
   ```bash
   npm run build
   ```

4. **上传代码到服务器**
   ```bash
   # 使用 SCP 或 SFTP 上传
   scp -r .next package.json package-lock.json root@your-server:/var/www/cloudbraintech
   ```

5. **服务器配置**
   
   安装 Node.js 和 PM2：
   ```bash
   # 安装 Node.js (v18+)
   curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
   apt-get install -y nodejs
   
   # 安装 PM2
   npm install -g pm2
   
   # 安装依赖
   cd /var/www/cloudbraintech
   npm install --production
   
   # 启动应用
   pm2 start npm --name "cloudbraintech" -- start
   pm2 save
   pm2 startup
   ```

6. **配置 Nginx**
   
   创建配置文件 `/etc/nginx/sites-available/cloudbraintech.cn`:
   ```nginx
   server {
       listen 80;
       server_name cloudbraintech.cn www.cloudbraintech.cn;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
   
   启用配置：
   ```bash
   ln -s /etc/nginx/sites-available/cloudbraintech.cn /etc/nginx/sites-enabled/
   nginx -t
   systemctl reload nginx
   ```

7. **配置SSL证书（使用 Certbot）**
   
   ```bash
   # 安装 Certbot
   apt-get install certbot python3-certbot-nginx
   
   # 获取并配置SSL证书
   certbot --nginx -d cloudbraintech.cn -d www.cloudbraintech.cn
   
   # 测试自动续期
   certbot renew --dry-run
   ```
   
   Certbot 会自动修改 Nginx 配置，添加 HTTPS 支持。

8. **配置DNS解析**
   - 类型：A
   - 主机记录：@
   - 记录值：你的服务器公网IP
   
   - 类型：A
   - 主机记录：www
   - 记录值：你的服务器公网IP

---

### 选项3：使用 Docker + Nginx（通用方案）

#### 1. 创建 Dockerfile
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

#### 2. 修改 next.config.ts
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

#### 3. 构建和运行
```bash
# 构建镜像
docker build -t cloudbraintech .

# 运行容器
docker run -d -p 3000:3000 --name cloudbraintech cloudbraintech
```

#### 4. 配置 Nginx 和 SSL（同选项2的步骤6-7）

---

## SSL证书选择

### Let's Encrypt（免费，推荐）
- 完全免费的SSL证书
- 自动续期
- 被所有主流浏览器信任
- Vercel、Certbot 都使用此方案

### 阿里云SSL证书（付费）
- 单域名证书：免费版（1年有效期）
- 通配符证书：约2000元/年
- 提供中文技术支持

---

## 推荐方案总结

| 场景 | 推荐方案 | 原因 |
|------|---------|------|
| **快速上线、海外访问** | Vercel | 免费、简单、自动SSL、全球CDN |
| **需要ICP备案** | 阿里云/腾讯云 | 符合中国大陆法规要求 |
| **完全控制** | 自建服务器 + Docker | 灵活度高，成本可控 |

---

## Next.js 配置优化

为了更好的生产环境性能，建议在 `next.config.ts` 中添加：

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 生成独立输出，便于Docker部署
  output: 'standalone',
  
  // 启用严格模式
  reactStrictMode: true,
  
  // 压缩
  compress: true,
  
  // 图片优化
  images: {
    domains: ['cloudbraintech.cn'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // 配置域名（用于Vercel等平台）
  // 如果使用自定义域名，添加环境变量
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://cloudbraintech.cn',
  },
};

export default nextConfig;
```

---

## 环境变量配置

创建 `.env.production` 文件：

```bash
# 网站URL
NEXT_PUBLIC_SITE_URL=https://cloudbraintech.cn

# Node环境
NODE_ENV=production
```

**重要提示：** 不要将 `.env` 文件提交到 Git 仓库中。

---

## 检查清单

部署前请确认：

- [ ] 域名已购买并完成实名认证
- [ ] （如在中国大陆）ICP备案已完成
- [ ] DNS解析已正确配置
- [ ] SSL证书已配置并生效
- [ ] 网站可通过 HTTPS 访问
- [ ] HTTP 自动重定向到 HTTPS
- [ ] 所有页面正常加载
- [ ] 中英文切换功能正常
- [ ] 联系表单可以正常提交

---

## 常见问题

### Q: SSL证书多久需要续期？
A: Let's Encrypt 证书有效期为90天，但 Certbot 和 Vercel 都会自动续期。

### Q: 如何强制使用 HTTPS？
A: Nginx 配置中添加重定向，或使用 Vercel 的自动 HTTPS 重定向功能。

### Q: 域名解析需要多久生效？
A: 通常 10 分钟到 48 小时，建议使用 `dig` 或 `nslookup` 命令检查。

### Q: 如何测试 SSL 配置是否正确？
A: 使用 https://www.ssllabs.com/ssltest/ 进行在线测试。

---

## 技术支持

如需进一步的技术支持：
- Vercel文档：https://vercel.com/docs
- Next.js文档：https://nextjs.org/docs
- Let's Encrypt：https://letsencrypt.org/
- Certbot：https://certbot.eff.org/

---

**祝部署顺利！🚀**
