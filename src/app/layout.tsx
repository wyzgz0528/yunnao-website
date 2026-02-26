import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "广州云脑科技有限公司 | Guangzhou Cloudbrain Tech Ltd.",
  description: "专业的服务器产品代理、销售及系统集成服务 | Professional server product agency, sales and system integration services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
