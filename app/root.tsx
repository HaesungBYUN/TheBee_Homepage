import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import ts from "./styles/index.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/favicon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: ts },
];

export const meta: Route.MetaFunction = () => [
  { title: "더비소프트(TheBeeSoft) | DX, AX 솔루션 전문가 그룹" },
  { name: "description", content: "고도화된 기술력과 Domain Knowledge를 바탕으로 성공적인 DX, AX 솔루션을 제공하는 전문가 그룹 더비소프트입니다." },
  { name: "keywords", content: "더비소프트, TheBeeSoft, IT개발, ERP구축, 시스템구축, DX, AX, 솔루션" },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://thebeesoft.com/" },
  { property: "og:title", content: "더비소프트(TheBeeSoft)" },
  { property: "og:description", content: "DX, AX 솔루션 전문가 그룹" },
  { property: "og:image", content: "https://thebeesoft.com/og-image.png" },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "더비소프트(TheBeeSoft)" },
  { name: "twitter:description", content: "DX, AX 솔루션 전문가 그룹" },
  { name: "twitter:image", content: "https://thebeesoft.com/og-image.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
