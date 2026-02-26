# 广州云脑科技有限公司 | Guangzhou Cloudbrain Tech Ltd.

专业的服务器产品代理、销售及系统集成服务 | Professional server product agency, sales and system integration services

🌐 **官方网站：** [cloudbraintech.cn](https://cloudbraintech.cn)

## 项目介绍 | Project Introduction

这是广州云脑科技有限公司的官方网站，使用 Next.js 15 + TypeScript + Tailwind CSS 构建，支持中英文双语切换。

This is the official website of Guangzhou Cloudbrain Tech Ltd., built with Next.js 15 + TypeScript + Tailwind CSS, supporting bilingual switching between Chinese and English.

## 技术栈 | Tech Stack

- **Next.js 15** - React 框架 | React Framework
- **TypeScript** - 类型安全 | Type Safety
- **Tailwind CSS** - 样式框架 | Styling Framework
- **React Context** - 状态管理 | State Management

## 功能特性 | Features

- ✅ 中英文双语支持 | Bilingual Support (Chinese/English)
- ✅ 响应式设计 | Responsive Design
- ✅ 现代化 UI | Modern UI
- ✅ SEO 优化 | SEO Optimized
- ✅ 快速页面加载 | Fast Page Loading
- ✅ SSL/HTTPS 支持 | SSL/HTTPS Support
- ✅ Docker 部署支持 | Docker Deployment Support

## 页面结构 | Page Structure

- **首页 (Home)** - 公司介绍和服务概览 | Company introduction and service overview
- **关于我们 (About)** - 公司详情、使命和价值观 | Company details, mission and values
- **产品服务 (Products)** - 服务器销售、系统集成、技术支持 | Server sales, system integration, technical support
- **解决方案 (Solutions)** - 行业解决方案 | Industry solutions
- **联系我们 (Contact)** - 联系方式和留言表单 | Contact information and message form

## 开始使用 | Getting Started

### 安装依赖 | Install Dependencies

```bash
npm install
```

### 运行开发服务器 | Run Development Server

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看网站。

Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the website.

### 构建生产版本 | Build for Production

```bash
npm run build
```

### 启动生产服务器 | Start Production Server

```bash
npm start
```

## 部署 | Deployment

详细的部署指南请参考 [DEPLOYMENT.md](DEPLOYMENT.md)，包括：

Detailed deployment guide available in [DEPLOYMENT.md](DEPLOYMENT.md), including:

- ✅ Vercel 部署（推荐） | Vercel Deployment (Recommended)
- ✅ 阿里云/腾讯云部署 | Alibaba Cloud/Tencent Cloud Deployment
- ✅ Docker 部署 | Docker Deployment
- ✅ SSL 证书配置 | SSL Certificate Configuration
- ✅ 域名解析设置 | DNS Configuration

### 快速部署到 Vercel | Quick Deploy to Vercel

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com) 并导入项目
3. 配置自定义域名 `cloudbraintech.cn`
4. Vercel 会自动配置 SSL 证书

## 项目结构 | Project Structure

```
yunnao/
├── src/
│   ├── app/                 # 页面路由 | Page routes
│   │   ├── about/          # 关于我们页面 | About page
│   │   ├── products/       # 产品服务页面 | Products page
│   │   ├── solutions/      # 解决方案页面 | Solutions page
│   │   ├── contact/        # 联系我们页面 | Contact page
│   │   ├── layout.tsx      # 根布局 | Root layout
│   │   ├── page.tsx        # 首页 | Home page
│   │   └── globals.css     # 全局样式 | Global styles
│   ├── components/         # React 组件 | React components
│   │   ├── Header.tsx      # 导航头部 | Navigation header
│   │   ├── Footer.tsx      # 页脚 | Footer
│   │   └── HomePage.tsx    # 首页内容 | Home page content
│   ├── contexts/           # React Context
│   │   └── LanguageContext.tsx  # 语言切换 | Language switching
│   └── lib/                # 工具库 | Libraries
│       └── translations.ts # 翻译文件 | Translation file
├── public/                 # 静态资源 | Static assets
├── .github/               # GitHub 配置 | GitHub config
├── Dockerfile             # Docker 配置
├── docker-compose.yml     # Docker Compose 配置
├── nginx.conf             # Nginx 配置示例
├── DEPLOYMENT.md          # 部署指南
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 自定义内容 | Customization

### 更新联系信息 | Update Contact Information

编辑 [src/lib/translations.ts](src/lib/translations.ts) 文件，修改联系方式：

Edit the [src/lib/translations.ts](src/lib/translations.ts) file to modify contact information:

- ✉️ 邮箱 Email: `admin@cloudbraintech.cn`
- 📍 地址 Address: 广东省广州市越秀区王府井大厦8楼B06 | Floor 8 B06, Wangfujing Building, Yuexiu District, Guangzhou
- 🕐 工作时间 Business Hours: 周一至周五 9:00-18:00 | Mon-Fri 9:00-18:00

### 添加更多内容 | Add More Content

您可以根据需要在 [src/lib/translations.ts](src/lib/translations.ts) 中添加更多中英文翻译内容。

You can add more bilingual translation content in [src/lib/translations.ts](src/lib/translations.ts) as needed.

## 环境变量 | Environment Variables

复制 `.env.example` 为 `.env.local` 并配置：

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://cloudbraintech.cn
NEXT_PUBLIC_CONTACT_EMAIL=admin@cloudbraintech.cn
```

## 合规说明 | Compliance

- ✅ 内容符合中国广告法要求
- ✅ 不含夸大宣传用语
- ✅ 避免使用"最"、"第一"等绝对化表述
- ✅ 真实客观描述业务范围

## 技术支持 | Technical Support

- 📧 Email: admin@cloudbraintech.cn
- 📖 [Next.js 文档](https://nextjs.org/docs)
- 📖 [Tailwind CSS 文档](https://tailwindcss.com/docs)

## License

© 2026 广州云脑科技有限公司 版权所有 | Guangzhou Cloudbrain Tech Ltd. All rights reserved

---

Built with ❤️ using Next.js 15
