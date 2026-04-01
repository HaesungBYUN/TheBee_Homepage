import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, Meta, Links, ScrollRestoration, Scripts, Link, useLocation } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useInView, useSpring, useTransform, motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/.well-known/")) {
    return new Response(null, { status: 404 });
  }
  const userAgent = request.headers.get("user-agent");
  const isBot = userAgent ? isbot(userAgent) : false;
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [isBot ? "onAllReady" : "onShellReady"]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html; charset=utf-8");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, 5e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const ts = "/assets/index-B7dHekYq.css";
const links = () => [{
  rel: "icon",
  type: "image/png",
  href: "/favicon.png"
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: ts
}];
const meta$3 = () => [{
  title: "더비소프트(TheBeeSoft) | DX, AX 솔루션 전문가 그룹"
}, {
  name: "description",
  content: "고도화된 기술력과 Domain Knowledge를 바탕으로 성공적인 DX, AX 솔루션을 제공하는 전문가 그룹 더비소프트입니다."
}, {
  name: "keywords",
  content: "더비소프트, TheBeeSoft, IT개발, ERP구축, 시스템구축, DX, AX, 솔루션"
}, {
  property: "og:type",
  content: "website"
}, {
  property: "og:url",
  content: "https://thebeesoft.com/"
}, {
  property: "og:title",
  content: "더비소프트(TheBeeSoft)"
}, {
  property: "og:description",
  content: "DX, AX 솔루션 전문가 그룹"
}, {
  property: "og:image",
  content: "https://thebeesoft.com/og-image.png"
}, {
  property: "og:image:width",
  content: "1200"
}, {
  property: "og:image:height",
  content: "630"
}, {
  name: "twitter:card",
  content: "summary_large_image"
}, {
  name: "twitter:title",
  content: "더비소프트(TheBeeSoft)"
}, {
  name: "twitter:description",
  content: "DX, AX 솔루션 전문가 그룹"
}, {
  name: "twitter:image",
  content: "https://thebeesoft.com/og-image.png"
}];
function Layout$1({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "ko",
    suppressHydrationWarning: true,
    children: [/* @__PURE__ */ jsxs("head", {
      suppressHydrationWarning: true,
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      suppressHydrationWarning: true,
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout: Layout$1,
  default: root,
  links,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const thebeelogo = "/assets/thebeelogo-BT_Ay7BN.png";
const thebeelogoColor = "/assets/thebeelogo_color-DTzWY2PQ.png";
function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed left-0 top-0 w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`,
        children: /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[5px] bg-black/20 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-center px-[24px] relative w-full", children: /* @__PURE__ */ jsx("div", { className: "h-[80px] max-w-[1200px] mx-auto relative shrink-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "h-[30px] relative shrink-0 w-[158px]", children: /* @__PURE__ */ jsx("img", { alt: "TheBeeSoft", className: "absolute inset-0 max-w-none object-cover pointer-events-none size-full", src: thebeelogo }) }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex items-center relative shrink-0", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "sm:hidden text-white p-2",
                onClick: () => setIsMobileMenuOpen(true),
                "aria-label": "메뉴 열기",
                children: /* @__PURE__ */ jsx(Menu, { size: 24 })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex content-stretch gap-[40px] h-[26px] items-start relative shrink-0", children: [
              /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0", children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[25.5px]", children: "About" }) }) }),
              /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0", children: /* @__PURE__ */ jsx(Link, { to: "/solutions", className: "flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[25.5px]", children: "Solutions" }) }) }),
              /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0", children: /* @__PURE__ */ jsx(Link, { to: "/careers", className: "flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[25.5px]", children: "인재채용" }) }) })
            ] })
          ] })
        ] }) }) }) })
      }
    ),
    isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[60] sm:hidden flex justify-end", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/60 animate-in fade-in duration-300",
          onClick: () => setIsMobileMenuOpen(false),
          "aria-label": "메뉴 닫기 배경"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative w-[300px] max-w-[85vw] bg-white/90 h-full shadow-[-4px_0px_20px_rgba(0,0,0,0.1)] animate-in slide-in-from-right duration-300 flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-5 border-b border-black/10", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "shrink-0 w-[120px]", children: /* @__PURE__ */ jsx("img", { alt: "TheBeeSoft", className: "w-full h-auto object-contain pointer-events-none", src: thebeelogoColor }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "text-black p-2 cursor-pointer -mr-2 hover:opacity-70 transition-opacity",
              onClick: () => setIsMobileMenuOpen(false),
              "aria-label": "메뉴 닫기",
              children: /* @__PURE__ */ jsx(X, { size: 28 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 p-6 mt-2", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/about",
              className: "text-lg font-medium text-black hover:text-gray-600 transition-colors",
              onClick: () => setIsMobileMenuOpen(false),
              children: "About"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/solutions",
              className: "text-lg font-medium text-black hover:text-gray-600 transition-colors",
              onClick: () => setIsMobileMenuOpen(false),
              children: "Solutions"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/careers",
              className: "text-lg font-medium text-black hover:text-gray-600 transition-colors",
              onClick: () => setIsMobileMenuOpen(false),
              children: "인재채용"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const bee_footer = "/assets/bee_footer-C7PEHupj.png";
function HeadingBackgroundImageAndText3({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start pb-[0.58px] relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[13.3px] whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: text }) }) });
}
function ItemBackgroundImageAndText1({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "content-stretch flex isolate items-center relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]", children: /* @__PURE__ */ jsx("p", { className: "leading-[20px]", children: text }) }) });
}
function ThebeeLogoWhiteBackgroundImage() {
  return /* @__PURE__ */ jsx("div", { className: "h-[30px] relative shrink-0 w-[158px]", children: /* @__PURE__ */ jsx("img", { alt: "TheBeeSoft", className: "absolute inset-0 max-w-none object-cover pointer-events-none size-full", src: thebeelogo }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("div", { className: "bg-black relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col items-start pb-[40px] pt-[79px] px-[24px] relative w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute h-[450px] md:h-[675px] lg:h-[888px] left-1/2 top-1/2 -translate-y-1/2 ml-[-150px] md:ml-[-250px] lg:ml-[-300px] opacity-50 w-[800px] md:w-[1200px] lg:w-[1578px] hidden sm:block overflow-hidden pointer-events-none", children: /* @__PURE__ */ jsx("img", { alt: "", className: "absolute inset-0 max-w-none mix-blend-luminosity object-cover pointer-events-none size-full grayscale", src: bee_footer }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] relative shrink-0 w-full mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col lg:flex-row gap-[40px] items-start lg:items-end relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start relative shrink-0 lg:w-[320px]", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(ThebeeLogoWhiteBackgroundImage, {}) }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start relative shrink-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-normal justify-center leading-[1.4] not-italic relative shrink-0 text-[#aaa] text-[16px] w-full whitespace-pre-wrap", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-0", children: "주식회사 더비소프트" }),
            /* @__PURE__ */ jsx("p", { className: "mb-0", children: `서울특별시 영등포구 선유로 13길 25, 213호 ` }),
            /* @__PURE__ */ jsx("p", { children: "(문래동6가 에이스하이테크시티2)" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-end gap-[24px] lg:gap-[40px]", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-start relative", children: [
          /* @__PURE__ */ jsx(HeadingBackgroundImageAndText3, { text: "Contact" }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex isolate items-center relative shrink-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] z-[1]", children: /* @__PURE__ */ jsx("p", { className: "leading-[20px]", children: "TEL) 02-6052-3889" }) }) }),
          /* @__PURE__ */ jsx(ItemBackgroundImageAndText1, { text: "FAX) 02-6008-3838" }),
          /* @__PURE__ */ jsx(ItemBackgroundImageAndText1, { text: "master@thebeesoft.com" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.8px] relative w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[23.8px]", children: "Copyright@ 2026 TheBeeSoft Inc. All Rights Reserved." }) }) }) })
      ] })
    ] }) })
  ] }) }) });
}
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
const Layout = UNSAFE_withComponentProps(function Layout2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [/* @__PURE__ */ jsx(ScrollToTop, {}), /* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
      className: "flex-1",
      children: /* @__PURE__ */ jsx(Outlet, {})
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout
}, Symbol.toStringTag, { value: "Module" }));
const svgPaths$3 = {
  p11feba00: "M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z",
  p13b4cd00: "M9 3H4C3.44772 3 3 3.44772 3 4V11C3 11.5523 3.44772 12 4 12H9C9.55228 12 10 11.5523 10 11V4C10 3.44772 9.55228 3 9 3Z",
  p185ca980: "M9.67033 4.13615C9.72543 3.55649 9.99466 3.0182 10.4254 2.62643C10.8562 2.23467 11.4176 2.01758 11.9998 2.01758C12.5821 2.01758 13.1435 2.23467 13.5742 2.62643C14.005 3.0182 14.2742 3.55649 14.3293 4.13615C14.3624 4.51061 14.4853 4.87157 14.6875 5.18849C14.8896 5.50541 15.1652 5.76896 15.4908 5.95683C15.8164 6.1447 16.1825 6.25135 16.558 6.26777C16.9336 6.28419 17.3076 6.20989 17.6483 6.05115C18.1774 5.81093 18.777 5.77617 19.3303 5.95364C19.8837 6.1311 20.3512 6.5081 20.6418 7.01126C20.9325 7.51441 21.0256 8.10772 20.903 8.67572C20.7803 9.24372 20.4507 9.74577 19.9783 10.0842C19.6707 10.3 19.4196 10.5868 19.2462 10.9202C19.0729 11.2536 18.9824 11.6239 18.9824 11.9997C18.9824 12.3754 19.0729 12.7457 19.2462 13.0791C19.4196 13.4125 19.6707 13.6993 19.9783 13.9152C20.4507 14.2535 20.7803 14.7556 20.903 15.3236C21.0256 15.8916 20.9325 16.4849 20.6418 16.988C20.3512 17.4912 19.8837 17.8682 19.3303 18.0457C18.777 18.2231 18.1774 18.1884 17.6483 17.9482C17.3076 17.7894 16.9336 17.7151 16.558 17.7315C16.1825 17.7479 15.8164 17.8546 15.4908 18.0425C15.1652 18.2303 14.8896 18.4939 14.6875 18.8108C14.4853 19.1277 14.3624 19.4887 14.3293 19.8632C14.2742 20.4428 14.005 20.9811 13.5742 21.3729C13.1435 21.7646 12.5821 21.9817 11.9998 21.9817C11.4176 21.9817 10.8562 21.7646 10.4254 21.3729C9.99466 20.9811 9.72543 20.4428 9.67033 19.8632C9.63727 19.4886 9.51443 19.1275 9.31219 18.8104C9.10996 18.4934 8.8343 18.2298 8.50856 18.0419C8.18282 17.854 7.8166 17.7474 7.44091 17.7311C7.06522 17.7147 6.69113 17.7892 6.35033 17.9482C5.82122 18.1884 5.22165 18.2231 4.66833 18.0457C4.115 17.8682 3.6475 17.4912 3.35681 16.988C3.06612 16.4849 2.97304 15.8916 3.09569 15.3236C3.21833 14.7556 3.54793 14.2535 4.02033 13.9152C4.32795 13.6993 4.57906 13.4125 4.75242 13.0791C4.92577 12.7457 5.01628 12.3754 5.01628 11.9997C5.01628 11.6239 4.92577 11.2536 4.75242 10.9202C4.57906 10.5868 4.32795 10.3 4.02033 10.0842C3.54859 9.7456 3.21958 9.24375 3.09723 8.67613C2.97488 8.10852 3.06794 7.51569 3.35831 7.01286C3.64869 6.51004 4.11564 6.13313 4.66842 5.95539C5.2212 5.77766 5.82031 5.81179 6.34933 6.05115C6.69009 6.20989 7.06407 6.28419 7.43963 6.26777C7.81519 6.25135 8.18126 6.1447 8.50687 5.95683C8.83247 5.76896 9.10802 5.50541 9.31019 5.18849C9.51237 4.87157 9.63521 4.51061 9.66833 4.13615",
  p1b1afa80: "M3 5V19C3 19.7956 3.94821 20.5587 5.63604 21.1213C7.32387 21.6839 9.61305 22 12 22C14.3869 22 16.6761 21.6839 18.364 21.1213C20.0518 20.5587 21 19.7956 21 19V5",
  p1e42320: "M14.5 2C15.3337 5.33375 15.75 8.66625 15.75 12C15.75 15.3338 15.3337 18.6662 14.5 22M9.5 2C8.66625 5.33375 8.25 8.66625 8.25 12C8.25 15.3338 8.66625 18.6662 9.5 22M2.625 17H21.375M21.375 7H2.625M6.0975 2H17.9025C18.3934 2.00015 18.8735 2.14485 19.2827 2.41605C19.6919 2.68725 20.0123 3.07293 20.2037 3.525C21.4012 6.35 22 9.175 22 12C22 14.825 21.4012 17.65 20.2037 20.475C20.0123 20.9271 19.6919 21.3128 19.2827 21.584C18.8735 21.8551 18.3934 21.9998 17.9025 22H6.0975C5.60656 21.9998 5.12653 21.8551 4.71729 21.584C4.30805 21.3128 3.98772 20.9271 3.79625 20.475C2.59875 17.65 2 14.825 2 12C2 9.175 2.59875 6.35 3.79625 3.525C3.98772 3.07293 4.30805 2.68725 4.71729 2.41605C5.12653 2.14485 5.60656 2.00015 6.0975 2Z",
  p1f6eb400: "M387.5 0.5V319.5H4.5V0.5H387.5Z",
  p20de0972: "M9 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V17C10 16.4477 9.55228 16 9 16Z",
  p27c543b0: "M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z",
  p28d93e00: "M8.93142 2.74978L14.182 8.00041M14.182 8.00041L8.93142 13.251M14.182 8.00041L1.818 8.00036",
  p2d59bff0: "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
  p32939e80: "M20 3H15C14.4477 3 14 3.44772 14 4V7C14 7.55228 14.4477 8 15 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z",
  p3498b580: "M3.9995 13.9997C3.81027 14.0003 3.62474 13.9473 3.46446 13.8467C3.30418 13.746 3.17574 13.602 3.09405 13.4313C3.01237 13.2606 2.9808 13.0703 3.003 12.8823C3.02521 12.6944 3.10028 12.5166 3.2195 12.3697L13.1195 2.16967C13.1938 2.08396 13.295 2.02603 13.4065 2.00541C13.518 1.98478 13.6332 2.00269 13.7332 2.05618C13.8332 2.10967 13.9121 2.19557 13.9568 2.29978C14.0016 2.40399 14.0096 2.52032 13.9795 2.62967L12.0595 8.64967C12.0029 8.8012 11.9839 8.96419 12.0041 9.12468C12.0243 9.28517 12.0832 9.43836 12.1756 9.5711C12.268 9.70385 12.3913 9.81219 12.5348 9.88684C12.6783 9.96148 12.8377 10.0002 12.9995 9.99967H19.9995C20.1887 9.99903 20.3743 10.0521 20.5345 10.1527C20.6948 10.2533 20.8233 10.3973 20.905 10.568C20.9866 10.7387 21.0182 10.9291 20.996 11.117C20.9738 11.3049 20.8987 11.4827 20.7795 11.6297L10.8795 21.8297C10.8052 21.9154 10.704 21.9733 10.5925 21.9939C10.481 22.0146 10.3658 21.9967 10.2658 21.9432C10.1658 21.8897 10.0869 21.8038 10.0422 21.6996C9.99742 21.5954 9.98943 21.479 10.0195 21.3697L11.9395 15.3497C11.9961 15.1982 12.0151 15.0352 11.9949 14.8747C11.9747 14.7142 11.9158 14.561 11.8234 14.4282C11.731 14.2955 11.6077 14.1872 11.4642 14.1125C11.3207 14.0379 11.1613 13.9991 10.9995 13.9997H3.9995Z",
  p3cccb600: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
  p3e480a50: "M12 31.5H24M18 25.5V31.5M18 25.5C19.9891 25.5 21.8968 24.7098 23.3033 23.3033C24.7098 21.8968 25.5 19.9891 25.5 18V6H10.5V18C10.5 19.9891 11.2902 21.8968 12.6967 23.3033C14.1032 24.7098 16.0109 25.5 18 25.5ZM4.5 13.5C4.5 14.2956 4.81607 15.0587 5.37868 15.6213C5.94129 16.1839 6.70435 16.5 7.5 16.5C8.29565 16.5 9.05871 16.1839 9.62132 15.6213C10.1839 15.0587 10.5 14.2956 10.5 13.5C10.5 12.7044 10.1839 11.9413 9.62132 11.3787C9.05871 10.8161 8.29565 10.5 7.5 10.5C6.70435 10.5 5.94129 10.8161 5.37868 11.3787C4.81607 11.9413 4.5 12.7044 4.5 13.5ZM25.5 13.5C25.5 14.2956 25.8161 15.0587 26.3787 15.6213C26.9413 16.1839 27.7044 16.5 28.5 16.5C29.2956 16.5 30.0587 16.1839 30.6213 15.6213C31.1839 15.0587 31.5 14.2956 31.5 13.5C31.5 12.7044 31.1839 11.9413 30.6213 11.3787C30.0587 10.8161 29.2956 10.5 28.5 10.5C27.7044 10.5 26.9413 10.8161 26.3787 11.3787C25.8161 11.9413 25.5 12.7044 25.5 13.5Z",
  p3eed8380: "M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12",
  pdaa2b00: "M10.1 2.6C10.1 4.7138 10.7591 6.7756 11.985 8.4981L12.05 8.5891C13.3185 10.371 14.0001 12.504 14 14.6913V22.75C14 23.4396 13.7261 24.1009 13.2385 24.5885C12.7509 25.0761 12.0896 25.35 11.4 25.35H3.6C2.91044 25.35 2.24912 25.0761 1.76152 24.5885C1.27393 24.1009 1 23.4396 1 22.75V14.69C1 12.5034 1.6812 10.3714 2.95 8.5891L3.015 8.4981C4.24112 6.77579 4.9 4.71417 4.9 2.6M1 17.294C1.52 17.0704 1.96938 16.7095 2.3 16.25C2.59532 15.8386 2.98636 15.5052 3.43935 15.2788C3.89234 15.0523 4.39365 14.9394 4.9 14.95C5.40634 14.9394 5.90766 15.0523 6.36065 15.2788C6.81364 15.5052 7.20468 15.8386 7.5 16.25C7.79532 16.6615 8.18636 16.9949 8.63935 17.2213C9.09234 17.4478 9.59365 17.5607 10.1 17.55C10.6063 17.5607 11.1077 17.4478 11.5606 17.2213C12.0136 16.9949 12.4047 16.6615 12.7 16.25C13.0303 15.7896 13.4797 15.4279 14 15.2035M4.9 4.55H10.1V1.95C10.1 1.60522 9.96304 1.27456 9.71924 1.03076C9.47544 0.786964 9.14478 0.650001 8.8 0.650001H6.2C5.85522 0.650001 5.52456 0.786964 5.28076 1.03076C5.03696 1.27456 4.9 1.60522 4.9 1.95V4.55Z",
  pdc9c900: "M20 12H15C14.4477 12 14 12.4477 14 13V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V13C21 12.4477 20.5523 12 20 12Z"
};
function CountUp({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(from, {
    duration: duration * 1e3,
    bounce: 0
  });
  const displayValue = useTransform(spring, (current) => {
    return `${prefix}${current.toFixed(decimals)}${suffix}`;
  });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (isInView && mounted) {
      spring.set(to);
    }
  }, [isInView, spring, to, mounted]);
  return /* @__PURE__ */ jsx(motion.span, { ref, children: mounted ? displayValue : `${prefix}${from.toFixed(decimals)}${suffix}` });
}
const prime_partner = "/assets/prime_partner-34s24v_J.png";
const meeting = "/assets/meeting-F0IIem4Q.png";
const lgcns = "/assets/lgcns-DVcbI1KW.png";
const lgelectronis = "/assets/lgelectronis-DLNHvH_D.png";
const lginnotek = "/assets/lginnotek-BVV-kxZq.png";
const lguplus = "/assets/lguplus-DOMz2xau.png";
const lgensol = "/assets/lgensol-BSB7UaKL.png";
const lgchem = "/assets/lgchem-C0W1QadB.png";
const lxsemicon = "/assets/lxsemicon-DZOTgSPZ.png";
const hldatastorage = "/assets/hldatastorage-Dla1Wg7o.png";
const wooribank = "/assets/wooribank-Cx_wtoDd.png";
const lxpantos = "/assets/lxpantos-ChXVH28i.png";
const biztechi = "/assets/biztechi-CZQ65Y5p.png";
const oracle = "/assets/oracle-SMM3u_H9.png";
const ibm = "/assets/ibm-ws9t8CRk.png";
const sap = "/assets/sap-DvPQItK6.png";
const gsretail = "/assets/gsretail-Dnjvpefr.png";
const unikorea = "/assets/unikorea-UnUs97NB.png";
const police = "/assets/police-BnIdO_sW.png";
const prosecution = "/assets/prosecution-CEp_XtLW.png";
const imgOverlayTalent = "/assets/talent-BmDURjJl.png";
const imgOverlayWelfare = "/assets/welfare-5caf2iAQ.png";
const imgOverlayRecruit = "/assets/recruit-JTiQXVsm.png";
function BackgroundImage3({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-row items-end overflow-clip rounded-[inherit] size-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "content-stretch flex items-end p-[32px] relative size-full",
      children
    })
  });
}
function BackgroundBorderBackgroundImage({
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] h-full",
    children: [/* @__PURE__ */ jsx("div", {
      "aria-hidden": "true",
      className: "absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]"
    }), /* @__PURE__ */ jsx("div", {
      className: "content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[24px] md:px-[41px] md:py-[31px] relative w-full h-full",
      children
    })]
  });
}
function BackgroundBackgroundImage({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-[#fff0e6] relative rounded-[12px] shrink-0 size-[48px]",
    children: /* @__PURE__ */ jsx("div", {
      className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full",
      children
    })
  });
}
function BackgroundImage2({
  children,
  additionalClassNames = ""
}) {
  return /* @__PURE__ */ jsx("div", {
    className: clsx("relative shrink-0", additionalClassNames),
    children: /* @__PURE__ */ jsx("div", {
      className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full",
      children
    })
  });
}
function BackgroundImage1({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "relative shrink-0 size-[24px]",
    children: /* @__PURE__ */ jsx("svg", {
      className: "absolute block size-full",
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 24 24",
      children
    })
  });
}
function BackgroundImage({
  children,
  additionalClassNames = ""
}) {
  return /* @__PURE__ */ jsx("div", {
    className: clsx("content-stretch flex flex-col items-start relative shrink-0 w-full", additionalClassNames),
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-inherit justify-center not-italic relative shrink-0 text-[#334155] text-[18px] w-full",
      children
    })
  });
}
function ContainerBackgroundImage({
  children,
  additionalClassNames = ""
}) {
  return /* @__PURE__ */ jsx(BackgroundImage, {
    additionalClassNames,
    children: /* @__PURE__ */ jsx("p", {
      children
    })
  });
}
function SvgBackgroundImage({
  children
}) {
  return /* @__PURE__ */ jsx(BackgroundImage1, {
    children: /* @__PURE__ */ jsx("g", {
      id: "SVG",
      children
    })
  });
}
function BackgroundImageAndText({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-[#ff6000] content-stretch flex items-center justify-center px-[8px] py-[3px] relative rounded-[20px] shrink-0",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function ContainerBackgroundImageAndText5({
  text
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "content-stretch flex gap-[4px] items-center opacity-90 pb-[0.695px] relative shrink-0 w-full",
    children: [/* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "relative shrink-0 size-[16px]",
      children: /* @__PURE__ */ jsx("svg", {
        className: "absolute block size-full",
        fill: "none",
        preserveAspectRatio: "none",
        viewBox: "0 0 16 16",
        children: /* @__PURE__ */ jsx("g", {
          id: "Frame 11",
          children: /* @__PURE__ */ jsx("path", {
            d: svgPaths$3.p28d93e00,
            id: "Rectangle 3",
            stroke: "var(--stroke-0, white)"
          })
        })
      })
    })]
  });
}
function ContainerBackgroundImageAndText4({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start opacity-90 pb-[0.695px] relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[14px] text-white w-full",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function HeadingBackgroundImageAndText2({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[24px] text-white",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function ContainerBackgroundImageAndText3({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-center relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[#555] text-[16px] md:text-[18px] text-center",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function HeadingBackgroundImageAndText1({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-center relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] text-center",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function ContainerBackgroundImageAndText2({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-center relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[16px] text-center text-white whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function ContainerBackgroundImageAndText1({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-center relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff6000] text-[36px] text-center whitespace-nowrap",
      children: /* @__PURE__ */ jsx("div", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function ContainerBackgroundImageAndText({
  text
}) {
  return /* @__PURE__ */ jsx(BackgroundImage2, {
    additionalClassNames: "w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] w-full",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function HeadingBackgroundImageAndText({
  text
}) {
  return /* @__PURE__ */ jsx(BackgroundImage2, {
    additionalClassNames: "w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#334155] text-[20px] md:text-[24px]",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
const Home = UNSAFE_withComponentProps(function Home2() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  return /* @__PURE__ */ jsx(motion.div, {
    initial: false,
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    },
    className: "bg-white content-stretch flex flex-col items-start relative size-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "content-stretch flex flex-col gap-[80px] items-center pb-[120px] relative shrink-0 w-full",
      children: [/* @__PURE__ */ jsx("div", {
        className: "h-[800px] relative shrink-0 w-full overflow-hidden bg-[#0f172a]",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex flex-col items-center justify-center size-full",
          children: /* @__PURE__ */ jsxs("div", {
            className: "content-stretch flex flex-col items-center justify-center px-[24px] pt-[120px] pb-[40px] relative size-full",
            children: [/* @__PURE__ */ jsx("div", {
              className: "absolute inset-0 overflow-hidden",
              style: {
                zIndex: 0
              },
              children: /* @__PURE__ */ jsx("video", {
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                className: "absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                children: /* @__PURE__ */ jsx("source", {
                  src: `${"/"}videos/home_video_short.mp4`,
                  type: "video/mp4"
                })
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "absolute inset-0",
              style: {
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.4)"
              }
            }), /* @__PURE__ */ jsx("div", {
              className: "max-w-[1200px] mx-auto relative shrink-0 w-full",
              style: {
                zIndex: 2
              },
              children: /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] px-[24px] relative w-full",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "content-stretch flex flex-col items-start max-full lg:max-w-[600px] relative shrink-0 w-full",
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "flex flex-col font-extrabold justify-center leading-[1.3] not-italic relative shrink-0 text-[32px] md:text-[56px] text-white w-full lg:w-[900px] whitespace-pre-wrap",
                    children: [/* @__PURE__ */ jsx("p", {
                      className: "mb-0",
                      children: `기업 IT 변화의 시작부터 성공까지.  `
                    }), /* @__PURE__ */ jsx("p", {
                      children: `'Bee the Best with TheBeeSoft.'`
                    })]
                  })
                }), /* @__PURE__ */ jsx("div", {
                  className: "content-stretch flex flex-col items-start max-w-full lg:max-w-[600px] relative shrink-0 lg:w-[600px]",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] md:text-[20px] text-white w-full",
                    children: /* @__PURE__ */ jsx("p", {
                      className: "leading-[1.4]"
                    })
                  })
                })]
              })
            })]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "max-w-[1200px] relative shrink-0 w-full px-[24px]",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex flex-col items-center max-w-[inherit] size-full",
          children: /* @__PURE__ */ jsxs("div", {
            className: "content-stretch flex flex-col gap-[8px] items-center max-w-[inherit] relative w-full",
            children: [/* @__PURE__ */ jsx("div", {
              className: "content-stretch flex flex-col items-center relative shrink-0 w-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "flex flex-col font-bold justify-center leading-[1.4] not-italic relative shrink-0 text-[#0f172a] text-[22px] md:text-[28px] text-center w-full",
                children: /* @__PURE__ */ jsxs("p", {
                  children: ["더비소프트는 고도화된 기술력과 Domain Knowledge를 바탕으로 ", /* @__PURE__ */ jsx("br", {
                    className: "hidden lg:inline"
                  }), " 고객에게 성공적인 DX, AX 솔루션을 제공하는 전문가 그룹입니다."]
                })
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "content-stretch flex flex-row flex-wrap gap-[40px] items-start justify-center pt-[40px] relative shrink-0 w-full",
              children: [/* @__PURE__ */ jsx("div", {
                className: "content-stretch flex flex-[1.2_1_400px] flex-col gap-[32px] items-start relative min-w-[300px]",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "bg-[#f8f8f8] content-stretch flex flex-col gap-[16px] items-start px-[40px] py-[32px] relative rounded-[24px] w-full",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "content-stretch flex font-normal justify-start leading-[1.5] not-italic relative shrink-0 text-[#64748b] text-[16px] w-full",
                      children: /* @__PURE__ */ jsxs(BackgroundImage, {
                        additionalClassNames: "font-normal",
                        children: [/* @__PURE__ */ jsx("p", {
                          className: "mb-0",
                          children: `ERP에서 다진 견고한 실무 경험, `
                        }), /* @__PURE__ */ jsx("p", {
                          className: "mb-0",
                          children: `폭넓은 산업군에서의 업무 경험과 IT 기술로 완성한 혁신. `
                        }), /* @__PURE__ */ jsx("p", {
                          className: "mb-0",
                          children: `더비소프트는 LG CNS의 전략적 프라임 파트너(Prime Partner)로서 그 역량을 증명하고 있습니다. `
                        })]
                      })
                    })
                  }), /* @__PURE__ */ jsxs(motion.div, {
                    initial: isMounted ? "hidden" : false,
                    whileInView: "show",
                    viewport: {
                      once: true,
                      margin: "-100px"
                    },
                    variants: {
                      hidden: {
                        opacity: 0
                      },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.4
                        }
                      }
                    },
                    className: "content-stretch flex flex-col gap-[12px] items-start py-[12px] relative shrink-0 w-full",
                    children: [/* @__PURE__ */ jsxs(motion.div, {
                      variants: {
                        hidden: {
                          opacity: 0,
                          y: 20
                        },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.8
                          }
                        }
                      },
                      className: "content-stretch flex gap-[20px] items-center relative shrink-0 w-full",
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0",
                        children: /* @__PURE__ */ jsxs(SvgBackgroundImage, {
                          children: [/* @__PURE__ */ jsx("path", {
                            d: svgPaths$3.p27c543b0,
                            id: "Vector",
                            stroke: "var(--stroke-0, black)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2"
                          }), /* @__PURE__ */ jsx("path", {
                            d: svgPaths$3.p2d59bff0,
                            id: "Vector_2",
                            stroke: "var(--stroke-0, black)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2"
                          })]
                        })
                      }), /* @__PURE__ */ jsx("div", {
                        className: "content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative",
                        children: /* @__PURE__ */ jsxs(ContainerBackgroundImage, {
                          additionalClassNames: "font-bold",
                          children: [/* @__PURE__ */ jsx("span", {
                            className: "leading-[28px] text-[#ff6000]",
                            children: "꿀벌처럼 부지런히"
                          }), /* @__PURE__ */ jsx("span", {
                            className: "leading-[28px]",
                            children: ` 현장을 누비고, `
                          })]
                        })
                      })]
                    }), /* @__PURE__ */ jsxs(motion.div, {
                      variants: {
                        hidden: {
                          opacity: 0,
                          y: 20
                        },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.8
                          }
                        }
                      },
                      className: "content-stretch flex gap-[20px] items-center relative shrink-0 w-full",
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]",
                        children: /* @__PURE__ */ jsx(BackgroundImage1, {
                          children: /* @__PURE__ */ jsx("g", {
                            id: "Frame",
                            children: /* @__PURE__ */ jsx("path", {
                              d: svgPaths$3.p1e42320,
                              id: "Vector",
                              stroke: "var(--stroke-0, black)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2"
                            })
                          })
                        })
                      }), /* @__PURE__ */ jsx("div", {
                        className: "content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative",
                        children: /* @__PURE__ */ jsxs(ContainerBackgroundImage, {
                          additionalClassNames: "font-bold",
                          children: [/* @__PURE__ */ jsx("span", {
                            className: "leading-[28px] text-[#ff6000]",
                            children: "벌집처럼 정교하게"
                          }), /* @__PURE__ */ jsx("span", {
                            className: "leading-[28px]",
                            children: ` 시스템을 설계하며, `
                          })]
                        })
                      })]
                    }), /* @__PURE__ */ jsxs(motion.div, {
                      variants: {
                        hidden: {
                          opacity: 0,
                          y: 20
                        },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.8
                          }
                        }
                      },
                      className: "content-stretch flex gap-[20px] items-center relative shrink-0 w-full",
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]",
                        children: /* @__PURE__ */ jsx("div", {
                          className: "h-[26px] relative shrink-0 w-[15px]",
                          children: /* @__PURE__ */ jsxs("svg", {
                            className: "absolute block size-full",
                            fill: "none",
                            preserveAspectRatio: "none",
                            viewBox: "0 0 15 26",
                            children: [/* @__PURE__ */ jsx("g", {
                              clipPath: "url(#clip0_1_450)",
                              id: "Frame",
                              children: /* @__PURE__ */ jsx("path", {
                                d: svgPaths$3.pdaa2b00,
                                id: "Vector",
                                stroke: "var(--stroke-0, black)",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                              })
                            }), /* @__PURE__ */ jsx("defs", {
                              children: /* @__PURE__ */ jsx("clipPath", {
                                id: "clip0_1_450",
                                children: /* @__PURE__ */ jsx("rect", {
                                  fill: "white",
                                  height: "26",
                                  width: "15"
                                })
                              })
                            })]
                          })
                        })
                      }), /* @__PURE__ */ jsx("div", {
                        className: "content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative",
                        children: /* @__PURE__ */ jsxs(BackgroundImage, {
                          additionalClassNames: "font-bold",
                          children: [/* @__PURE__ */ jsxs("p", {
                            className: "mb-0",
                            children: [/* @__PURE__ */ jsx("span", {
                              className: "leading-[28px]",
                              children: `고객에게 성과라는 `
                            }), /* @__PURE__ */ jsx("span", {
                              className: "leading-[28px] text-[#ff6000]",
                              children: "달콤한 결실"
                            }), /* @__PURE__ */ jsx("span", {
                              className: "leading-[28px]",
                              children: "을 안겨드리는"
                            })]
                          }), /* @__PURE__ */ jsx("p", {
                            className: "leading-[28px]",
                            children: `IT 시스템 파트너입니다. `
                          })]
                        })
                      })]
                    })]
                  })]
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "mx-auto flex-[1_1_300px] min-w-[200px] max-w-[90%] md:max-w-[450px] relative shrink",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "LG CNS Prime Partner",
                  className: "backdrop-blur-[2px] object-contain pointer-events-none w-full h-auto rounded-[inherit]",
                  src: prime_partner
                })
              })]
            })]
          })
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "content-stretch flex flex-col gap-[32px] items-center max-w-[1200px] relative shrink-0 w-full px-[24px]",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]",
            children: /* @__PURE__ */ jsx("p", {
              className: "leading-[1.4]",
              children: "Our Core Expertise"
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px]",
            children: /* @__PURE__ */ jsx("p", {
              className: "leading-[1.4]",
              children: "더비소프트는 고도화된 기술력과 산업 이해도를 바탕으로 최적의 해결책을 제공합니다."
            })
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "content-stretch grid grid-cols-1 md:grid-cols-2 gap-[16px] items-stretch relative shrink-0 w-full",
          children: [/* @__PURE__ */ jsxs(BackgroundBorderBackgroundImage, {
            children: [/* @__PURE__ */ jsx(BackgroundBackgroundImage, {
              children: /* @__PURE__ */ jsxs(SvgBackgroundImage, {
                children: [/* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p13b4cd00,
                  id: "Vector",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                }), /* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p32939e80,
                  id: "Vector_2",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                }), /* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.pdc9c900,
                  id: "Vector_3",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                }), /* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p20de0972,
                  id: "Vector_4",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                })]
              })
            }), /* @__PURE__ */ jsx(HeadingBackgroundImageAndText, {
              text: "ERP 솔루션 구축"
            }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText, {
              text: "업무 프로세스를 통합하여 운영 효율성을 극대화하고 실시간 데이터 경영 환경을 제공합니다."
            })]
          }), /* @__PURE__ */ jsxs(BackgroundBorderBackgroundImage, {
            children: [/* @__PURE__ */ jsx(BackgroundBackgroundImage, {
              children: /* @__PURE__ */ jsx(SvgBackgroundImage, {
                children: /* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p3498b580,
                  id: "Vector",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                })
              })
            }), /* @__PURE__ */ jsx(HeadingBackgroundImageAndText, {
              text: "디지털 전환 (DX)"
            }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText, {
              text: "산업 맞춤형 시스템을 구축하고, 레거시 시스템의 클라우드 아키텍처로의 유연한 비즈니스 전환을 지원합니다."
            })]
          }), /* @__PURE__ */ jsxs(BackgroundBorderBackgroundImage, {
            children: [/* @__PURE__ */ jsx(BackgroundBackgroundImage, {
              children: /* @__PURE__ */ jsxs(SvgBackgroundImage, {
                children: [/* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p11feba00,
                  id: "Vector",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                }), /* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p1b1afa80,
                  id: "Vector_2",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                }), /* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p3eed8380,
                  id: "Vector_3",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                })]
              })
            }), /* @__PURE__ */ jsx(HeadingBackgroundImageAndText, {
              text: "데이터 사이언스"
            }), /* @__PURE__ */ jsx(BackgroundImage2, {
              additionalClassNames: "w-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "flex flex-col font-normal justify-center leading-[1.4] not-italic relative shrink-0 text-[#334155] text-[16px] w-full",
                children: /* @__PURE__ */ jsx("p", {
                  className: "mb-0",
                  children: "빅데이터 분석과 시각화를 통해 데이터에 숨겨진 비즈니스 인사이트를 발굴합니다."
                })
              })
            })]
          }), /* @__PURE__ */ jsxs(BackgroundBorderBackgroundImage, {
            children: [/* @__PURE__ */ jsx(BackgroundBackgroundImage, {
              children: /* @__PURE__ */ jsxs(SvgBackgroundImage, {
                children: [/* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p185ca980,
                  id: "Vector",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                }), /* @__PURE__ */ jsx("path", {
                  d: svgPaths$3.p3cccb600,
                  id: "Vector_2",
                  stroke: "var(--stroke-0, #FF6000)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2"
                })]
              })
            }), /* @__PURE__ */ jsx(HeadingBackgroundImageAndText, {
              text: "유지보수 및 운영"
            }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText, {
              text: "구축 이후에도 지속적인 모니터링과 기술 지원으로 비즈니스의 연속성을 보장합니다."
            })]
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "content-stretch flex flex-col items-start relative shrink-0 w-full",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "relative shrink-0 w-full",
          children: [/* @__PURE__ */ jsxs("div", {
            "aria-hidden": "true",
            className: "absolute inset-0 pointer-events-none",
            children: [/* @__PURE__ */ jsx("div", {
              className: "absolute bg-[#0b101c] inset-0"
            }), /* @__PURE__ */ jsx("img", {
              alt: "",
              className: "absolute max-w-none object-cover opacity-20 size-full",
              src: meeting
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "flex flex-col items-center overflow-clip rounded-[inherit] size-full",
            children: /* @__PURE__ */ jsx("div", {
              className: "content-stretch flex flex-col items-center px-[24px] py-[80px] relative w-full max-w-[1200px] mx-auto",
              children: /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-start p-[16px] relative rounded-[16px] shrink-0",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "relative shrink-0 size-[36px]",
                    children: /* @__PURE__ */ jsx("svg", {
                      className: "absolute block size-full",
                      fill: "none",
                      preserveAspectRatio: "none",
                      viewBox: "0 0 36 36",
                      children: /* @__PURE__ */ jsx("g", {
                        id: "tabler-icon-trophy",
                        children: /* @__PURE__ */ jsx("path", {
                          d: svgPaths$3.p3e480a50,
                          id: "Vector",
                          stroke: "var(--stroke-0, white)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2"
                        })
                      })
                    })
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[8px] items-center relative shrink-0",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "content-stretch flex flex-col items-center relative shrink-0 w-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-center text-white",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[1.4]",
                        children: "숫자로 증명하는 신뢰"
                      })
                    })
                  }), /* @__PURE__ */ jsx("div", {
                    className: "content-stretch flex flex-col items-center max-w-full lg:max-w-[768px] relative shrink-0 w-full",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col font-light justify-center leading-[1.4] not-italic relative shrink-0 text-[#e0e7ff] text-[16px] lg:text-[20px] text-center",
                      children: [/* @__PURE__ */ jsx("p", {
                        className: "mb-0",
                        children: "결과로 말하고 데이터로 증명합니다."
                      }), /* @__PURE__ */ jsx("p", {
                        children: "타협하지 않는 품질과 더비소프트의 고객을 향한 진심의 결실입니다."
                      })]
                    })
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "relative shrink-0 w-full",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch grid grid-cols-2 sm:grid-cols-4 gap-x-[24px] gap-y-[32px] sm:gap-[32px] items-start justify-center relative size-full",
                      children: [/* @__PURE__ */ jsxs("div", {
                        className: "content-stretch flex flex-col gap-[8px] items-center sm:items-start relative",
                        children: [/* @__PURE__ */ jsx(ContainerBackgroundImageAndText1, {
                          text: /* @__PURE__ */ jsx(CountUp, {
                            to: 25,
                            suffix: "+"
                          })
                        }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText2, {
                          text: "기업 고객사"
                        })]
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "content-stretch flex flex-col gap-[8px] items-center sm:items-start relative",
                        children: [/* @__PURE__ */ jsx(ContainerBackgroundImageAndText1, {
                          text: /* @__PURE__ */ jsx(CountUp, {
                            to: 85,
                            suffix: "+"
                          })
                        }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText2, {
                          text: "연간 진행 프로젝트"
                        })]
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "content-stretch flex flex-col gap-[8px] items-center sm:items-start relative",
                        children: [/* @__PURE__ */ jsx(ContainerBackgroundImageAndText1, {
                          text: /* @__PURE__ */ jsx(CountUp, {
                            to: 98,
                            suffix: "%"
                          })
                        }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText2, {
                          text: "고객 만족도"
                        })]
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "content-stretch flex flex-col gap-[8px] items-center sm:items-start relative",
                        children: [/* @__PURE__ */ jsx(ContainerBackgroundImageAndText1, {
                          text: /* @__PURE__ */ jsx(CountUp, {
                            to: 15,
                            suffix: "Y+"
                          })
                        }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText2, {
                          text: "업계 누적 경력"
                        })]
                      })]
                    })
                  })
                })]
              })
            })
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "bg-[#f3f6fa] content-stretch flex flex-col items-center py-[80px] relative shrink-0 w-full",
          children: /* @__PURE__ */ jsxs("div", {
            className: "content-stretch flex flex-col gap-[32px] items-center max-w-[1200px] px-[24px] relative shrink-0 w-full",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full",
              children: [/* @__PURE__ */ jsx(HeadingBackgroundImageAndText1, {
                text: "Trusted Partners"
              }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText3, {
                text: "더비소프트는 다양한 산업군의 리딩 기업들과 함께 혁신을 만들어가고 있습니다."
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "content-start grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px] relative shrink-0 w-full",
              children: [/* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lgcns
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lgelectronis
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lginnotek
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lguplus
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lgensol
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lgchem
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lxsemicon
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: hldatastorage
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: wooribank
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: lxpantos
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: biztechi
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: oracle
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: ibm
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: sap
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: gsretail
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: unikorea
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: police
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "max-w-none object-contain pointer-events-none size-full",
                  src: prosecution
                })
              })]
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] px-[24px] relative shrink-0 w-full",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",
          children: [/* @__PURE__ */ jsx(HeadingBackgroundImageAndText1, {
            text: "Careers at TheBeeSoft"
          }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText3, {
            text: "더비소프트는 최고보다 최선을 다하는 사람들의 성장 공동체입니다."
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "content-stretch flex flex-col items-start relative shrink-0 w-full",
          children: /* @__PURE__ */ jsxs("div", {
            className: "content-stretch flex flex-col md:flex-row gap-[24px] items-stretch justify-center relative shrink-0 w-full",
            children: [/* @__PURE__ */ jsx("div", {
              className: "bg-size-[479.40073013305664px_319.9999873638153px] bg-top-left flex-none md:flex-1 h-[320px] min-h-px min-w-px relative rounded-[24px]",
              style: {
                backgroundImage: `url('${imgOverlayTalent}')`
              },
              children: /* @__PURE__ */ jsxs(BackgroundImage3, {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "absolute inset-[0_-1.04%_-2.5%_-1.04%]",
                  children: /* @__PURE__ */ jsxs("svg", {
                    className: "block size-full",
                    fill: "none",
                    preserveAspectRatio: "none",
                    viewBox: "0 0 392 328",
                    children: [/* @__PURE__ */ jsxs("g", {
                      filter: "url(#filter0_d_1_420)",
                      id: "Gradient",
                      children: [/* @__PURE__ */ jsx("path", {
                        d: "M4 0H388V320H4V0Z",
                        fill: "url(#paint0_linear_1_420)",
                        shapeRendering: "crispEdges"
                      }), /* @__PURE__ */ jsx("path", {
                        d: svgPaths$3.p1f6eb400,
                        shapeRendering: "crispEdges",
                        stroke: "var(--stroke-0, black)"
                      })]
                    }), /* @__PURE__ */ jsxs("defs", {
                      children: [/* @__PURE__ */ jsxs("filter", {
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                        height: "328",
                        id: "filter0_d_1_420",
                        width: "392",
                        x: "0",
                        y: "0",
                        children: [/* @__PURE__ */ jsx("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix"
                        }), /* @__PURE__ */ jsx("feColorMatrix", {
                          in: "SourceAlpha",
                          result: "hardAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        }), /* @__PURE__ */ jsx("feOffset", {
                          dy: "4"
                        }), /* @__PURE__ */ jsx("feGaussianBlur", {
                          stdDeviation: "2"
                        }), /* @__PURE__ */ jsx("feComposite", {
                          in2: "hardAlpha",
                          operator: "out"
                        }), /* @__PURE__ */ jsx("feColorMatrix", {
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        }), /* @__PURE__ */ jsx("feBlend", {
                          in2: "BackgroundImageFix",
                          mode: "normal",
                          result: "effect1_dropShadow_1_420"
                        }), /* @__PURE__ */ jsx("feBlend", {
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_1_420",
                          mode: "normal",
                          result: "shape"
                        })]
                      }), /* @__PURE__ */ jsxs("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint0_linear_1_420",
                        x1: "196",
                        x2: "196",
                        y1: "320",
                        y2: "147.529",
                        children: [/* @__PURE__ */ jsx("stop", {
                          stopOpacity: "0.8"
                        }), /* @__PURE__ */ jsx("stop", {
                          offset: "1",
                          stopOpacity: "0"
                        })]
                      })]
                    })]
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[6.895px] items-start relative z-10",
                  children: [/* @__PURE__ */ jsx(BackgroundImageAndText, {
                    text: "Talent"
                  }), /* @__PURE__ */ jsx(HeadingBackgroundImageAndText2, {
                    text: "인재상"
                  }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText4, {
                    text: "전문 역량, 성실함과 책임감, 협력과 소통의 자세를 지닌 인재를 육성하고자 합니다."
                  }), /* @__PURE__ */ jsx(Link, {
                    to: "/careers#values",
                    className: "w-full",
                    children: /* @__PURE__ */ jsx(ContainerBackgroundImageAndText5, {
                      text: "자세히 보기"
                    })
                  })]
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-size-[479.40073013305664px_319.9999873638153px] bg-top-left flex-none md:flex-1 h-[320px] min-h-px min-w-px relative rounded-[24px]",
              style: {
                backgroundImage: `url('${imgOverlayWelfare}')`
              },
              children: /* @__PURE__ */ jsxs(BackgroundImage3, {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[53.897%] to-[rgba(0,0,0,0)]"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[6.895px] items-start relative z-10",
                  children: [/* @__PURE__ */ jsx(BackgroundImageAndText, {
                    text: "Welfare"
                  }), /* @__PURE__ */ jsx(HeadingBackgroundImageAndText2, {
                    text: "복리후생"
                  }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText4, {
                    text: "자유로운 업무 환경 속에서 구성원의 성장을 위한 모든 여정을 세심하게 살핍니다."
                  }), /* @__PURE__ */ jsx(Link, {
                    to: "/careers#culture",
                    className: "w-full",
                    children: /* @__PURE__ */ jsx(ContainerBackgroundImageAndText5, {
                      text: "자세히 보기"
                    })
                  })]
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "bg-size-[480.3001880645752px_320.0000002980232px] bg-top-left flex-none md:flex-1 h-[320px] min-h-px min-w-px relative rounded-[24px]",
              style: {
                backgroundImage: `url('${imgOverlayRecruit}')`
              },
              children: /* @__PURE__ */ jsxs(BackgroundImage3, {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "absolute bg-gradient-to-t from-[25.549%] from-[rgba(0,0,0,0.8)] inset-0 to-[53.897%] to-[rgba(0,0,0,0)]"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[6.895px] items-start relative z-10",
                  children: [/* @__PURE__ */ jsx(BackgroundImageAndText, {
                    text: "Process"
                  }), /* @__PURE__ */ jsx(HeadingBackgroundImageAndText2, {
                    text: "채용절차"
                  }), /* @__PURE__ */ jsx(ContainerBackgroundImageAndText4, {
                    text: "서류부터 최종 합격까지, 투명하고 빠른 채용 경험을 제공합니다."
                  }), /* @__PURE__ */ jsx(Link, {
                    to: "/careers#process",
                    className: "w-full",
                    children: /* @__PURE__ */ jsx(ContainerBackgroundImageAndText5, {
                      text: "자세히 보기"
                    })
                  })]
                })]
              })
            })]
          })
        })]
      })]
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const svgPaths$2 = {
  p13268cc7: "M2 8.66667L12 15.3333L22 8.66667M2 8.66667L12 2L22 8.66667M2 8.66667V19.7778M22 8.66667V19.7778M22 19.7778C22 20.3671 21.7659 20.9324 21.3491 21.3491C20.9324 21.7659 20.3671 22 19.7778 22H4.22222C3.63285 22 3.06762 21.7659 2.65087 21.3491C2.23413 20.9324 2 20.3671 2 19.7778M22 19.7778L15.3333 13.1111M2 19.7778L8.66667 13.1111",
  p18211080: "M6 2V3.33333M10 2V3.33333M6 12.6667V14M10 12.6667V14M3.33333 6H2M3.33333 10H2M14 6H12.6667M14 10H12.6667M4.66667 12.6667H11.3333C11.687 12.6667 12.0261 12.5262 12.2761 12.2761C12.5262 12.0261 12.6667 11.687 12.6667 11.3333V4.66667C12.6667 4.31304 12.5262 3.97391 12.2761 3.72386C12.0261 3.47381 11.687 3.33333 11.3333 3.33333H4.66667C4.31304 3.33333 3.97391 3.47381 3.72386 3.72386C3.47381 3.97391 3.33333 4.31304 3.33333 4.66667V11.3333C3.33333 11.687 3.47381 12.0261 3.72386 12.2761C3.97391 12.5262 4.31304 12.6667 4.66667 12.6667ZM6 6H10V10H6V6Z",
  p206f1780: "M119.702 19.5272H140.191L160.241 -0.527151H119.702V19.5272Z",
  p23bfda80: "M9 10.5C11.4853 10.5 13.5 8.48528 13.5 6C13.5 3.51472 11.4853 1.5 9 1.5C6.51472 1.5 4.5 3.51472 4.5 6C4.5 8.48528 6.51472 10.5 9 10.5Z",
  p2424db80: "M143.761 4.00066H139.757L139.77 13.3904L136.284 3.99755H132.827L129.851 11.8422C129.535 9.84606 127.465 9.15727 125.837 8.64134C124.761 8.29694 123.62 7.79035 123.631 7.23043C123.64 6.77094 124.242 6.34478 125.438 6.40832C126.24 6.45143 126.948 6.51586 128.358 7.19488L129.744 4.78633C128.459 4.13398 126.681 3.72204 125.224 3.7207H125.215C123.516 3.7207 122.101 4.26951 121.224 5.17383C120.613 5.80485 120.283 6.6074 120.269 7.49483C120.247 8.71599 120.696 9.58165 121.639 10.2736C122.436 10.8557 123.455 11.2334 124.353 11.5107C125.46 11.8529 126.365 12.1506 126.354 12.7843C126.346 13.0167 126.253 13.2381 126.091 13.4055C125.815 13.69 125.391 13.7966 124.805 13.8082C123.675 13.8322 122.837 13.6548 121.502 12.8678L120.269 15.3075C121.602 16.0638 123.018 16.4433 124.627 16.4433L124.989 16.4407C126.389 16.4153 127.526 16.0807 128.428 15.3564C128.48 15.3151 128.526 15.2733 128.575 15.2311L128.423 16.0096L131.801 15.999L132.407 14.4516C133.045 14.6685 133.769 14.7885 134.538 14.7885C135.288 14.7885 135.993 14.6747 136.618 14.4703L137.041 15.999L143.102 16.0047L143.116 12.4772H144.406C147.523 12.4772 149.366 10.8952 149.366 8.24228C149.365 5.28759 147.574 4.00066 143.761 4.00066ZM134.538 12.0271C134.102 12.03 133.669 11.9545 133.26 11.804L134.524 7.82456H134.549L135.792 11.8151C135.418 11.9484 134.992 12.0271 134.538 12.0271ZM143.995 9.74074H143.115V6.53364H143.996C145.168 6.53364 146.103 6.92291 146.103 8.11652C146.103 9.3519 145.168 9.74074 143.996 9.74074",
  p24ded780: "M10 0.5C13.5716 0.5 16.032 0.891894 17.4619 1.61426C18.1607 1.96732 18.6621 2.42514 18.9922 2.97949C19.323 3.53522 19.5 4.2193 19.5 5.05273V17.0527C19.5 18.1682 19.1269 19.088 18.3799 19.8438C17.6332 20.599 16.7251 20.9744 15.625 20.9736L13.9863 20.9727L15.3457 21.8887L17 23.002V23.5H3V23.002L4.6543 21.8887L6.01172 20.9736H4.375C3.2756 20.9736 2.3678 20.5985 1.62012 19.8438C0.872458 19.089 0.499252 18.1691 0.5 17.0527V5.05273C0.5 4.25793 0.68175 3.59668 1.02539 3.04883C1.36954 2.50019 1.89545 2.03496 2.63184 1.66309C4.03405 0.954973 6.26013 0.552993 9.36719 0.504883L10 0.5ZM2 17.0527C2.00002 17.7191 2.22048 18.3026 2.67578 18.7627C3.13143 19.223 3.71112 19.4473 4.375 19.4473H15.625C16.2889 19.4473 16.8686 19.223 17.3242 18.7627C17.7795 18.3026 18 17.7191 18 17.0527V12.1318H2V17.0527ZM5.62402 14.3945C6.0136 14.3952 6.32898 14.5273 6.59863 14.7998C6.86823 15.0723 6.99991 15.3923 7 15.7891C7 16.1844 6.86935 16.5045 6.60156 16.7773C6.32727 17.0501 6.00989 17.1826 5.62305 17.1846C5.23997 17.1864 4.92606 17.0558 4.65332 16.7803C4.38035 16.5044 4.24875 16.1844 4.25 15.791C4.25127 15.3952 4.38378 15.0741 4.6543 14.7988C4.92271 14.5257 5.23585 14.3939 5.62402 14.3945ZM14.374 14.3945C14.7636 14.3952 15.079 14.5273 15.3486 14.7998C15.6182 15.0723 15.7499 15.3923 15.75 15.7891C15.75 16.1844 15.6193 16.5045 15.3516 16.7773C15.0773 17.0501 14.7599 17.1826 14.373 17.1846C13.99 17.1864 13.6761 17.0558 13.4033 16.7803C13.1303 16.5044 12.9988 16.1844 13 15.791C13.0013 15.3952 13.1338 15.0741 13.4043 14.7988C13.6727 14.5257 13.9859 14.3939 14.374 14.3945ZM2 10.6055H9.25V5.81543H2V10.6055ZM10.75 10.6055H18V5.81543H10.75V10.6055ZM10 2.02637C8.19185 2.02637 6.67522 2.132 5.45898 2.34961C4.25894 2.56435 3.318 2.9004 2.73242 3.41406L1.73438 4.28906H18.1777L17.4355 3.45703C16.9385 2.89906 16.0092 2.56181 14.8232 2.34961C13.6048 2.13162 11.993 2.02637 10 2.02637Z",
  p27c543b0: "M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z",
  p2d59bff0: "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
  p3a2d4980: "M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z",
  pb72e280: "M12.6667 14V3.33333C12.6667 2.97971 12.5262 2.64057 12.2761 2.39052C12.0261 2.14048 11.687 2 11.3333 2H4.66667C4.31304 2 3.97391 2.14048 3.72386 2.39052C3.47381 2.64057 3.33333 2.97971 3.33333 3.33333V14M12.6667 14H14M12.6667 14H9.33333M3.33333 14H2M3.33333 14H6.66667M9.33333 14V10.6667C9.33333 10.4899 9.2631 10.3203 9.13807 10.1953C9.01305 10.0702 8.84348 10 8.66667 10H7.33333C7.15652 10 6.98695 10.0702 6.86193 10.1953C6.7369 10.3203 6.66667 10.4899 6.66667 10.6667V14M9.33333 14H6.66667M6 4.66667H6.66667M6 7.33333H6.66667M9.33333 4.66667H10M9.33333 7.33333H10",
  pbdb6380: "M38.1436 5.16992C38.601 4.47033 39.6774 4.4702 40.0811 5.14258L46.6445 15.5H44.4922L39.1396 7.02637L36.8525 10.6045H41.0488L39.9463 12.3789H35.75L33.7861 15.5H31.6338L38.1436 5.16992ZM27.7568 4.63574C28.6118 4.6358 29.4316 4.97558 30.0361 5.58008C30.6408 6.18471 30.9805 7.00527 30.9805 7.86035C30.9803 8.71526 30.6407 9.53513 30.0361 10.1396C29.4316 10.7442 28.6118 11.0839 27.7568 11.084L26.4785 11.0879L31.0518 15.4873H28.4814L22.0947 9.31543H27.7568C28.1426 9.31537 28.5123 9.16144 28.7852 8.88867C29.0579 8.61589 29.2118 8.24611 29.2119 7.86035C29.2119 7.47442 29.0581 7.10395 28.7852 6.83105C28.5123 6.55829 28.1426 6.40436 27.7568 6.4043H20.6953V15.499H18.7051V4.63184L27.7568 4.63574ZM62.4844 4.63184V13.7236H70.1777L69.0479 15.499H60.709V4.63184H62.4844ZM12.666 4.63574C15.6647 4.63574 17.6395 7.06628 17.6396 10.0654C17.6396 13.0648 15.6649 15.4961 12.666 15.4961H4.97266C1.97403 15.4959 0 13.0646 0 10.0654C0.000164032 7.06641 1.97416 4.63596 4.97266 4.63574H12.666ZM58.2236 6.4043H50.7588C48.7369 6.40436 47.5552 8.04352 47.5547 10.0654C47.5547 12.0878 48.7369 13.7266 50.7588 13.7266H59.1377L57.9961 15.4873L50.7041 15.4961C47.7058 15.496 45.7315 13.0651 45.7314 10.0654C45.7314 7.06661 47.7053 4.63581 50.7041 4.63574L59.3242 4.62988L58.2236 6.4043ZM82.7168 6.4043H75.252C73.5503 6.40434 72.4395 7.57805 72.1318 9.15137H82.6621L81.5322 10.9268H72.1318C72.4207 12.5338 73.5258 13.7266 75.252 13.7266H83.6309L82.4893 15.4873L75.1982 15.4961C72.199 15.4961 70.2247 13.0652 70.2246 10.0654C70.2246 7.06659 72.1985 4.63577 75.1982 4.63574L83.8184 4.62988L82.7168 6.4043ZM4.97266 6.4043C2.95108 6.40451 1.7687 8.04379 1.76855 10.0654C1.76855 12.0872 2.95096 13.7263 4.97266 13.7266H12.666C14.688 13.7266 15.8701 12.0874 15.8701 10.0654C15.87 8.04365 14.6878 6.4043 12.666 6.4043H4.97266ZM85.7217 4.5C86.2499 4.5 86.7019 4.90995 86.7021 5.4668C86.7021 6.02894 86.2505 6.43945 85.7217 6.43945C85.1879 6.43937 84.7373 6.02842 84.7373 5.4668C84.7375 4.91047 85.188 4.50008 85.7217 4.5ZM85.7217 4.66113C85.2783 4.66122 84.9316 5.00759 84.9316 5.4668C84.9317 5.93384 85.2783 6.27726 85.7217 6.27734C86.1605 6.27734 86.5068 5.93389 86.5068 5.4668C86.5068 5.008 86.1605 4.66113 85.7217 4.66113ZM85.7764 4.91211C86.041 4.91211 86.1719 5.00988 86.1719 5.23047C86.1717 5.43045 86.0458 5.51771 85.8818 5.53809L86.1992 6.03027H86.0107L85.7148 5.5459H85.5195V6.03027H85.3506V4.91211H85.7764ZM85.5195 5.05566V5.40234L85.7217 5.40137C85.8657 5.40137 85.995 5.39144 85.9951 5.21973C85.9951 5.08116 85.8687 5.05566 85.751 5.05566H85.5195Z",
  pc4bcb80: "M11.6061 9.66699L12.7423 16.0615C12.7551 16.1368 12.7445 16.2142 12.7121 16.2833C12.6796 16.3524 12.6268 16.41 12.5608 16.4483C12.4947 16.4867 12.4186 16.5039 12.3425 16.4978C12.2663 16.4916 12.1939 16.4624 12.1348 16.414L9.44985 14.3987C9.32023 14.3019 9.16277 14.2496 9.00097 14.2496C8.83918 14.2496 8.68172 14.3019 8.5521 14.3987L5.8626 16.4132C5.80359 16.4616 5.73125 16.4908 5.65522 16.4969C5.57919 16.503 5.5031 16.4859 5.4371 16.4476C5.37109 16.4094 5.31831 16.352 5.28579 16.283C5.25327 16.214 5.24256 16.1367 5.2551 16.0615L6.3906 9.66699"
};
const imgImage4898 = "/assets/65ace069c3cfaba46adf9b0e117b4b0db0b2e1e5-DNa7TtYS.png";
const steps = "/assets/steps-BNN2lyWn.png";
const svgPathsWork = {
  p10d45240: "M224 448C347.712 448 448 347.712 448 224C448 100.288 347.712 0 224 0C100.288 0 0 100.288 0 224C0 347.712 100.288 448 224 448Z",
  p12267900: "M25.0004 19.6673L15.9429 10.4952C14.9115 9.44597 14.3335 8.03359 14.3335 6.56232C14.3335 5.09105 14.9115 3.67867 15.9429 2.62948C16.4493 2.11352 17.0534 1.70367 17.72 1.42389C18.3865 1.1441 19.1022 1 19.8251 1C20.548 1 21.2637 1.1441 21.9302 1.42389C22.5968 1.70367 23.2009 2.11352 23.7073 2.62948L25.0004 3.66935L26.2936 2.62948C26.7999 2.11352 27.404 1.70367 28.0706 1.42389C28.7372 1.1441 29.4528 1 30.1757 1C30.8987 1 31.6143 1.1441 32.2809 1.42389C32.9475 1.70367 33.5516 2.11352 34.0579 2.62948C35.0893 3.67867 35.6673 5.09105 35.6673 6.56232C35.6673 8.03359 35.0893 9.44597 34.0579 10.4952L25.0004 19.6673Z",
  p15537840: "M186 372C288.725 372 372 288.725 372 186C372 83.275 288.725 0 186 0C83.275 0 0 83.275 0 186C0 288.725 83.275 372 186 372Z",
  p159a2680: "M15.1641 11.6667V3.5L4.66406 16.3333H12.8307V24.5L23.3307 11.6667H15.1641Z",
  p16f3bf00: "M314.16 627.76C487.357 627.76 627.76 487.357 627.76 314.16C627.76 140.964 487.357 0.56 314.16 0.56C140.964 0.56 0.56 140.964 0.56 314.16C0.56 487.357 140.964 627.76 314.16 627.76Z",
  p23a04200: "M4 32L10 16L16 32C14.26 33.3 12.16 34 10 34C7.84 34 5.74 33.3 4 32Z",
  p26525340: "M32 6.26001C33.7208 6.70061 35.2461 7.70141 36.3353 9.10463C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7864 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76",
  p26c16460: "M6 14H10C14 14 20 12 24 10C28 12 34 14 38 14H42",
  p28d6c300: "M184.734 0.293893L0.404509 254.002",
  p2b3c4500: "M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H12C9.87827 30 7.84344 30.8429 6.34315 32.3431C4.84285 33.8434 4 35.8783 4 38V42",
  p2c746780: "M19.6672 25L10.4951 15.9424C9.44593 14.911 8.03355 14.333 6.56229 14.333C5.09103 14.333 3.67865 14.911 2.62947 15.9424C2.11352 16.4488 1.70367 17.0529 1.42389 17.7195C1.1441 18.3861 1 19.1017 1 19.8246C1 20.5475 1.1441 21.2632 1.42389 21.9298C1.70367 22.5963 2.11352 23.2005 2.62947 23.7068L3.66934 25L2.62947 26.2931C2.11352 26.7995 1.70367 27.4036 1.42389 28.0702C1.1441 28.7368 1 29.4524 1 30.1753C1 30.8982 1.1441 31.6139 1.42389 32.2805C1.70367 32.947 2.11352 33.5512 2.62947 34.0575C3.67865 35.0889 5.09103 35.6669 6.56229 35.6669C8.03355 35.6669 9.44593 35.0889 10.4951 34.0575L19.6672 25Z",
  p2d30d480: "M32 32L38 16L44 32C42.26 33.3 40.16 34 38 34C35.84 34 33.74 33.3 32 32Z",
  p2f65900: "M336 672C521.568 672 672 521.568 672 336C672 150.432 521.568 0 336 0C150.432 0 0 150.432 0 336C0 521.568 150.432 672 336 672Z",
  p30533c80: "M40 26C40 36 33 41 24.68 43.9C24.2443 44.0476 23.7711 44.0406 23.34 43.88C15 41 8 36 8 26V12C8 11.4696 8.21071 10.9609 8.58579 10.5858C8.96086 10.2107 9.46957 10 10 10C14 10 19 7.6 22.48 4.56C22.9037 4.198 23.4427 3.9991 24 3.9991C24.5573 3.9991 25.0963 4.198 25.52 4.56C29.02 7.62 34 10 38 10C38.5304 10 39.0391 10.2107 39.4142 10.5858C39.7893 10.9609 40 11.4696 40 12V26Z",
  p31eb3600: "M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z",
  p370a3a00: "M0.404509 0.293893L184.734 254.002",
  p38589280: "M14 5.07967C14.627 4.36882 15.4556 3.86576 16.3756 3.63743C17.2955 3.40909 18.2632 3.46631 19.1498 3.80147C20.0365 4.13663 20.8 4.73383 21.3389 5.51362C21.8778 6.29341 22.1664 7.2188 22.1664 8.16667C22.1664 9.11453 21.8778 10.0399 21.3389 10.8197C20.8 11.5995 20.0365 12.1967 19.1498 12.5319C18.2632 12.867 17.2955 12.9242 16.3756 12.6959C15.4556 12.4676 14.627 11.9645 14 11.2537M17.5 24.5H3.5V23.3333C3.5 21.4768 4.2375 19.6963 5.55025 18.3836C6.86301 17.0708 8.64348 16.3333 10.5 16.3333C12.3565 16.3333 14.137 17.0708 15.4497 18.3836C16.7625 19.6963 17.5 21.4768 17.5 23.3333V24.5ZM17.5 24.5H24.5V23.3333C24.5002 22.1045 24.1769 20.8973 23.5625 19.833C22.9482 18.7687 22.0646 17.8849 21.0004 17.2704C19.9363 16.6559 18.7291 16.3324 17.5002 16.3323C16.2714 16.3323 15.0642 16.6557 14 17.2702M15.1667 8.16667C15.1667 9.40434 14.675 10.5913 13.7998 11.4665C12.9247 12.3417 11.7377 12.8333 10.5 12.8333C9.26232 12.8333 8.07534 12.3417 7.20017 11.4665C6.325 10.5913 5.83333 9.40434 5.83333 8.16667C5.83333 6.92899 6.325 5.742 7.20017 4.86684C8.07534 3.99167 9.26232 3.5 10.5 3.5C11.7377 3.5 12.9247 3.99167 13.7998 4.86684C14.675 5.742 15.1667 6.92899 15.1667 8.16667Z",
  p39ff1860: "M44 42V38C43.9987 36.2275 43.4087 34.5056 42.3227 33.1046C41.2368 31.7037 39.7163 30.7031 38 30.26",
  p3f383700: "M0.154508 97.3832L298.406 0.475528",
  p5a18740: "M30.3328 25L39.5049 15.9424C40.5541 14.911 41.9665 14.333 43.4377 14.333C44.909 14.333 46.3213 14.911 47.3705 15.9424C47.8865 16.4488 48.2963 17.0529 48.5761 17.7195C48.8559 18.3861 49 19.1017 49 19.8246C49 20.5475 48.8559 21.2632 48.5761 21.9298C48.2963 22.5963 47.8865 23.2005 47.3705 23.7068L46.3307 25L47.3705 26.2931C47.8865 26.7995 48.2963 27.4036 48.5761 28.0702C48.8559 28.7368 49 29.4524 49 30.1753C49 30.8982 48.8559 31.6139 48.5761 32.2805C48.2963 32.947 47.8865 33.5512 47.3705 34.0575C46.3213 35.0889 44.909 35.6669 43.4377 35.6669C41.9665 35.6669 40.5541 35.0889 39.5049 34.0575L30.3328 25Z",
  p9c3a900: "M298.406 97.3832L0.154508 0.475528",
  pae0a480: "M25.0004 30.3327L15.9429 39.5048C14.9115 40.554 14.3335 41.9664 14.3335 43.4377C14.3335 44.909 14.9115 46.3213 15.9429 47.3705C16.4493 47.8865 17.0534 48.2963 17.72 48.5761C18.3865 48.8559 19.1022 49 19.8251 49C20.548 49 21.2637 48.8559 21.9302 48.5761C22.5968 48.2963 23.2009 47.8865 23.7073 47.3705L25.0004 46.3307L26.2936 47.3705C26.7999 47.8865 27.404 48.2963 28.0706 48.5761C28.7372 48.8559 29.4528 49 30.1757 49C30.8987 49 31.6143 48.8559 32.2809 48.5761C32.9475 48.2963 33.5516 47.8865 34.0579 47.3705C35.0893 46.3213 35.6673 44.909 35.6673 43.4377C35.6673 41.9664 35.0893 40.554 34.0579 39.5048L25.0004 30.3327Z",
  pd624900: "M145.6 291.2C226.013 291.2 291.2 226.013 291.2 145.6C291.2 65.1873 226.013 0 145.6 0C65.1873 0 0 65.1873 0 145.6C0 226.013 65.1873 291.2 145.6 291.2Z",
  pfb41f00: "M10.5 14L12.8333 16.3333L17.5 11.6667M24.0543 6.98133C20.3655 7.17723 16.7495 5.90172 14 3.43467C11.2505 5.90172 7.63455 7.17723 3.94567 6.98133C3.64879 8.13063 3.49904 9.31298 3.5 10.5C3.5 17.0228 7.96133 22.505 14 24.059C20.0387 22.505 24.5 17.024 24.5 10.5C24.5 9.28433 24.3448 8.106 24.0543 6.98133Z"
};
const org_culture = "/assets/org_culture-D7jotjZW.png";
function Icon3VectorBackgroundImage({ children, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("absolute bottom-[49.98%] top-[36.56%]", additionalClassNames), children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-0.49%_0]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 298.56 97.8588", children }) }) });
}
function BackgroundImageAndText1({ text, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("absolute bg-white content-stretch flex items-center justify-center p-[12px]", additionalClassNames), children: /* @__PURE__ */ jsx("p", { className: "font-semibold leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-center whitespace-nowrap", children: text }) });
}
function HowWeWork() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white content-stretch flex flex-col gap-[72px] items-center overflow-clip pb-[120px] pt-[80px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "핵심 가치" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-normal justify-center leading-[1.4] relative shrink-0 text-[#555] text-[16px] md:text-[18px]", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-0", children: "사람 중심의 기술, 혁신과 신뢰를 바탕으로 고객과 함께 성장합니다." }),
          /* @__PURE__ */ jsx("p", { children: `전문성에 더해 함께 나누는 더비(The Bee)다움을 항상 생각합니다. ` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col md:flex-row gap-[32px] lg:gap-[72px] items-stretch max-w-[1200px] relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-1 flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px] cursor-default", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -4, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                className: "relative shrink-0 size-[28px]",
                children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 28 28", children: /* @__PURE__ */ jsx("g", { id: "Icon", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p159a2680, id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.33333" }) }) })
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "flex-1 font-bold leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]", children: "부지런함과 책임감" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full flex-1", children: `쉼 없이 움직이며 자연에 기여하는 꿀벌처럼, TheBeeSoft의 개발자들 모두는 부지런함과 책임감을 개인의 소중한 가치로 생각합니다.  ` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-1 flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px] cursor-default", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -4, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                className: "relative shrink-0 size-[28px]",
                children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 28 28", children: /* @__PURE__ */ jsx("g", { id: "Icon", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p38589280, id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.33333" }) }) })
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "flex-1 font-bold leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]", children: "협력과 소통" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "font-normal leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full flex-1", children: /* @__PURE__ */ jsx("p", { className: "mb-0", children: `개인의 성실성을 바탕으로 긴밀한 커뮤니케이션을 더해야만 최선의 조직 성과를 낼 수 있다고 믿습니다. ` }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-1 flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px] cursor-default", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -4, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                className: "relative shrink-0 size-[28px]",
                children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 28 28", children: /* @__PURE__ */ jsx("g", { id: "Icon", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.pfb41f00, id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.33333" }) }) })
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "flex-1 font-bold leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]", children: "가치를 나누는 기쁨" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full flex-1", children: `꿀벌의 여정이 꿀로 남듯, 우리의 노력도 세상에 달콤한 변화를 남길 수 있도록 노력하고 있습니다. 노력의 결실을 임직원 및 사회와 함께 나누려 노력합니다. ` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#e9e9e9] content-stretch flex flex-col gap-[12px] items-center overflow-clip py-[80px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute bg-[#f3f6fa] h-full left-0 top-0 w-full" }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "조직 구성" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center relative shrink-0 text-[#334155] text-[16px] md:text-[18px] px-[24px]", children: /* @__PURE__ */ jsxs("p", { className: "leading-[1.4]", children: [
          "전문성을 갖춘 각 그룹이 유기적으로 협력하여 최상의 결과를 만듭니다.",
          /* @__PURE__ */ jsx("br", { "aria-hidden": "true" }),
          `고객이 원하는 해결책을 더 빠르게, 더 정확하게 제공하기 위해 간결한 조직 구조를 통한 유연한 대응을 지향합니다 `
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col items-center relative shrink-0 z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "h-[89px] relative shrink-0 w-full max-w-[256px]", children: /* @__PURE__ */ jsx("div", { className: "absolute h-[177.604px] left-1/2 -translate-x-1/2 rounded-[16px] top-0 w-full max-w-[256px]", children: /* @__PURE__ */ jsx("div", { className: "absolute bg-[#0f172a] h-[51px] left-1/2 -translate-x-1/2 rounded-[14px] top-[38px] w-[192px]", children: /* @__PURE__ */ jsx("p", { className: "-translate-x-1/2 absolute font-bold leading-[33.6px] left-1/2 not-italic text-[24px] text-center text-white top-[8px] whitespace-nowrap", children: "대표이사" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex content-stretch h-[75px] items-start justify-center relative shrink-0 w-full max-w-[556px]", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center relative shrink-0", children: /* @__PURE__ */ jsx("div", { className: "-scale-y-100 flex-none", children: /* @__PURE__ */ jsx("div", { className: "h-[85px] relative w-[547px]", children: /* @__PURE__ */ jsxs("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 547 85", children: [
          /* @__PURE__ */ jsx("g", { id: "Frame 11", opacity: "0.6", children: /* @__PURE__ */ jsx("path", { d: "M273.5 25L273.5 73", id: "Vector 27", stroke: "url(#paint0_linear_1_1938)", strokeLinecap: "round" }) }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_1_1938", x1: "273", x2: "273", y1: "25", y2: "73", children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#262E3F" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#252E3F" })
          ] }) })
        ] }) }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden h-[40px] w-px bg-slate-300 my-[10px]" }),
        /* @__PURE__ */ jsx("div", { className: "gap-x-[24px] gap-y-[24px] grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-6 max-w-[1200px] relative shrink-0 w-full px-[16px] min-[320px]:px-0", children: ["전략기획실", "경영지원실", "솔루션사업부", "ITO사업부", "정보보안위원회", "품질위원회"].map((dept, idx) => /* @__PURE__ */ jsx("div", { className: "bg-white content-stretch flex flex-col h-[86px] lg:h-[173px] items-center justify-center p-[20px] relative rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-white h-[46px] relative rounded-[12px] w-full max-w-[180px]", children: [
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full", children: /* @__PURE__ */ jsx("p", { className: "font-semibold leading-[25.2px] not-italic relative shrink-0 text-[#182234] text-[18px] text-center", children: dept }) }),
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" })
        ] }) }, idx)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-[225.333px] max-w-[1200px] relative rounded-[16px] shrink-0 w-full z-10 mt-[40px] hidden lg:block overflow-hidden", style: { backgroundImage: "linear-gradient(169.365deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }, children: /* @__PURE__ */ jsx("div", { className: "max-w-[inherit] size-full", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pb-[48.667px] pt-[48.667px] px-[48.667px] relative size-full", children: [
        /* @__PURE__ */ jsx("div", { className: "h-[48px] relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center size-full", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex gap-[16px] items-center relative size-full", children: /* @__PURE__ */ jsx("div", { className: "h-[33.604px] relative shrink-0 w-[88.5px]", children: /* @__PURE__ */ jsx("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid relative size-full", children: /* @__PURE__ */ jsx("p", { className: "absolute font-bold leading-[33.6px] left-0 not-italic text-[#101828] text-[24px] top-0 whitespace-nowrap", children: "조직 문화" }) }) }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "font-normal leading-[28px] not-italic relative shrink-0 text-[#364153] text-[20px] whitespace-nowrap", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-0", children: "수평적인 조직문화를 통해 누구의 의견이든" }),
          /* @__PURE__ */ jsx("p", { children: "자유롭게 제안되고, 경청되는 환경을 지향합니다." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute h-[433px] left-[587.16px] opacity-80 top-[-121.4px] w-[746px]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ jsx("img", { alt: "", className: "absolute h-full left-[-9.98%] max-w-none top-0 w-[121.79%] grayscale", src: org_culture }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative rounded-[16px] shrink-0 w-full z-10 mt-[40px] lg:hidden", style: { backgroundImage: "linear-gradient(169.365deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }, children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold leading-[33.6px] not-italic text-[#101828] text-[24px]", children: "조직 문화" }),
        /* @__PURE__ */ jsxs("div", { className: "font-normal leading-[28px] not-italic text-[#364153] text-[16px] md:text-[20px]", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-0", children: "수평적인 조직문화를 통해 누구의 의견이든" }),
          /* @__PURE__ */ jsx("p", { children: "자유롭게 제안되고, 경청되는 환경을 지향합니다." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative w-[calc(100%+48px)] ml-[-24px] h-[220px] rounded-b-[16px] overflow-hidden", children: /* @__PURE__ */ jsx("img", { alt: "", className: "absolute h-full object-cover w-full grayscale object-bottom opacity-80", src: org_culture }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "윤리실천강령" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center relative shrink-0 text-[#334155] text-[16px] md:text-[18px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "TheBeeSoft의 모든 임직원은 아래의 윤리규범을 준수하고 실천해 나가겠습니다." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex content-stretch h-[320px] sm:h-[450px] md:h-[600px] lg:h-[720px] items-center justify-center overflow-visible relative shrink-0 w-full lg:w-[896px]", children: /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.38] min-[400px]:scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-center transition-transform duration-300 w-[896px] h-[720px]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[49.98%] left-1/2 right-1/2 top-[6.46%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[0_-0.5px]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 1 313.6", children: /* @__PURE__ */ jsx("path", { d: "M0.5 313.6V0", id: "Vector", stroke: "var(--stroke-0, #7C7C7C)", strokeDasharray: "6 6" }) }) }) }),
        /* @__PURE__ */ jsx(Icon3VectorBackgroundImage, { additionalClassNames: "left-1/2 right-[16.71%]", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p3f383700, id: "Vector", stroke: "var(--stroke-0, #7C7C7C)", strokeDasharray: "6 6" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[14.75%] left-1/2 right-[29.43%] top-[50.02%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-0.12%_-0.22%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 185.139 254.296", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p370a3a00, id: "Vector", stroke: "var(--stroke-0, #7C7C7C)", strokeDasharray: "6 6" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[14.75%] left-[29.43%] right-1/2 top-[50.02%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-0.12%_-0.22%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 185.138 254.296", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p28d6c300, id: "Vector", stroke: "var(--stroke-0, #7C7C7C)", strokeDasharray: "6 6" }) }) }) }),
        /* @__PURE__ */ jsx(Icon3VectorBackgroundImage, { additionalClassNames: "left-[16.71%] right-1/2", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p9c3a900, id: "Vector", stroke: "var(--stroke-0, #7C7C7C)", strokeDasharray: "6 6" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[18.9%] left-1/4 right-1/4 top-[18.88%]", children: /* @__PURE__ */ jsxs("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 448 448", children: [
          /* @__PURE__ */ jsx("path", { d: svgPathsWork.p10d45240, fill: "url(#paint0_linear_1_1890)", id: "Vector" }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_1_1890", x1: "224", x2: "224", y1: "213.141", y2: "632.516", children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#FFE8DA" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#FFC1D6" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-[3.35%_12.5%_3.32%_12.5%]", children: /* @__PURE__ */ jsxs("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 672 672", children: [
          /* @__PURE__ */ jsx("path", { d: svgPathsWork.p2f65900, fill: "url(#paint0_radial_1_1913)", id: "Vector" }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { cx: "0", cy: "0", gradientTransform: "translate(33600 33600) scale(336)", gradientUnits: "userSpaceOnUse", id: "paint0_radial_1_1913", r: "1", children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#FF6000", stopOpacity: "0.15" }),
            /* @__PURE__ */ jsx("stop", { offset: "0.5", stopColor: "#FF6000", stopOpacity: "0.08" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#FF6000", stopOpacity: "0" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-[6.46%_15%_6.43%_15%]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 628.32 628.32", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p16f3bf00, id: "Vector", stroke: "var(--stroke-0, #E5E7EB)", strokeWidth: "1.12" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-[24.16%_29.24%_24.18%_29.24%] mix-blend-multiply", children: /* @__PURE__ */ jsxs("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 372 372", children: [
          /* @__PURE__ */ jsx("g", { id: "Vector", style: { mixBlendMode: "multiply" }, children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p15537840, fill: "url(#paint0_linear_1_1928)" }) }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_1_1928", x1: "186", x2: "186", y1: "176.983", y2: "525.214", children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#FFE8DA" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#FFC1D6" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(BackgroundImageAndText1, { text: "임직원의 기본윤리", additionalClassNames: "left-[356.17px] top-[17.67px]" }),
        /* @__PURE__ */ jsx(BackgroundImageAndText1, { text: "임직원에 대한 존중", additionalClassNames: "left-[719.16px] overflow-clip top-[239.67px]" }),
        /* @__PURE__ */ jsx(BackgroundImageAndText1, { text: "국가, 사회에 대한 책임", additionalClassNames: "left-[568.17px] overflow-clip top-[599.67px]" }),
        /* @__PURE__ */ jsx(BackgroundImageAndText1, { text: "공정한 경쟁 및 거래", additionalClassNames: "left-[178.17px] overflow-clip top-[599.67px]" }),
        /* @__PURE__ */ jsx(BackgroundImageAndText1, { text: "고객에 대한 책임", additionalClassNames: "left-[46.17px] overflow-clip top-[239.67px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-[29.8%_33.75%_29.76%_33.75%]", children: /* @__PURE__ */ jsxs("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 291.2 291.2", children: [
          /* @__PURE__ */ jsx("path", { d: svgPathsWork.pd624900, fill: "url(#paint0_linear_1_1907)", id: "Vector" }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_1_1907", x1: "145.6", x2: "145.6", y1: "132.413", y2: "341.913", children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#FF6000" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#BF068B" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute font-bold inset-[44.68%_39.86%_44.77%_39.83%] leading-[normal] not-italic text-[31.36px] text-center text-white whitespace-nowrap", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-0", children: "TheBeeSoft" }),
          /* @__PURE__ */ jsx("p", { children: "윤리실천강령" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "gap-x-[32px] gap-y-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1152px] relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start flex-1 not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap", children: "임직원의 기본윤리" }),
            /* @__PURE__ */ jsx("p", { className: "font-normal leading-[22.4px] relative shrink-0 text-[#4a5565] text-[16px]", children: "더비소프트의 임직원은 올바른 가치관을 확립하고, 회사에 대한 자긍심을 가지고 품위있고 정직하게 행동하며 공정하게 직무를 수행한다." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex items-center justify-center relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 48 48", children: /* @__PURE__ */ jsx("g", { id: "Icon", opacity: "0.8", children: /* @__PURE__ */ jsx("path", { d: svgPathsWork.p30533c80, id: "Vector", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start flex-1 not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap", children: "고객에 대한 책임" }),
            /* @__PURE__ */ jsx("p", { className: "font-normal leading-[22.4px] relative shrink-0 text-[#4a5565] text-[16px]", children: "고객의 의견을 항상 존중하고,고객에게 도움이 되는 가치를 창출하여 제공함으로써 고객과의 신뢰관계를 구축한다." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex items-center justify-center relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 48 48", children: /* @__PURE__ */ jsxs("g", { id: "Icon", opacity: "0.8", children: [
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p2d30d480, id: "Vector", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p23a04200, id: "Vector_2", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M14 42H34", id: "Vector_3", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M24 6V42", id: "Vector_4", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p26c16460, id: "Vector_5", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start flex-1 relative shrink-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap", children: "임직원에 대한 존중" }),
            /* @__PURE__ */ jsx("p", { className: "font-normal leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full", children: "임직원 개개인의 인간적 존엄과 가치를 존중하고 능력과 업적에 따라 공정하게 대우하며,임직원의 창의성이 충분히 발휘 되도록 노력한다." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex items-center justify-center relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 48 48", children: /* @__PURE__ */ jsxs("g", { id: "Icon", opacity: "0.8", children: [
            /* @__PURE__ */ jsx("path", { d: "M44 14L27 31L17 21L4 34", id: "Vector", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M32 14H44V26", id: "Vector_2", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start flex-1 relative shrink-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap", children: "공정한 경쟁 및 거래" }),
            /* @__PURE__ */ jsx("p", { className: "font-normal leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full", children: "모든 사업활동에서 경쟁사와 선의의 경쟁을 펼치고, 투명하고 공정한 거래를 통해 상호신뢰와 협력관계를 구축한다." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-2.08%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 50 50", children: /* @__PURE__ */ jsx("g", { id: "Container", children: /* @__PURE__ */ jsxs("g", { id: "Vector", children: [
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p12267900, stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.pae0a480, stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p5a18740, stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p2c746780, stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
          ] }) }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start flex-1 relative shrink-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[28px] not-italic text-[#101828] text-[20px] whitespace-nowrap", children: "국가, 사회에 대한 책임" }),
            /* @__PURE__ */ jsx("p", { className: "font-normal leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full", children: "국가 및 지역의 법규와 사회적 가치관을 존중하며 깨끗한 환경의 보전을 위해 노력하며, 국민의 풍요로운 삶과 사회발전에 기여한다." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex items-center justify-center relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 48 48", children: /* @__PURE__ */ jsxs("g", { id: "Icon", opacity: "0.8", children: [
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p2b3c4500, id: "Vector", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p31eb3600, id: "Vector_2", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p39ff1860, id: "Vector_3", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: svgPathsWork.p26525340, id: "Vector_4", stroke: "var(--stroke-0, #333333)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
          ] }) }) }) })
        ] })
      ] })
    ] })
  ] });
}
const meta$2 = () => [{
  title: "기업소개 | 더비소프트(TheBeeSoft)"
}, {
  name: "description",
  content: "더비소프트의 멈추지 않는 성장의 기록과 핵심 가치를 확인해 보십시요."
}];
function Container5({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "backdrop-blur-[4px] bg-[rgba(255,255,255,0.8)] flex-none sm:flex-1 relative rounded-[24px] w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "content-stretch flex flex-col gap-[16px] items-start p-[24px] sm:p-[40px] relative w-full h-full",
      children
    })
  });
}
function Container4({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "flex-[1_0_0] min-h-px min-w-px relative",
    children: /* @__PURE__ */ jsx("div", {
      className: "content-stretch flex flex-col items-start pl-[48px] sm:pl-[48px] relative w-full",
      children
    })
  });
}
function OverlayBorder({
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] sm:flex-1 min-h-px min-w-px relative rounded-[24px] self-stretch h-auto",
    children: [/* @__PURE__ */ jsx("div", {
      "aria-hidden": "true",
      className: "absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]"
    }), /* @__PURE__ */ jsx("div", {
      className: "content-stretch flex flex-col items-start gap-[8px] sm:gap-[32px] px-[41px] py-[20px] sm:py-[33px] relative w-full h-full",
      children
    })]
  });
}
function Container3$1({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[8.8px] relative w-full",
      children
    })
  });
}
function Wrapper5({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "relative shrink-0",
    children: /* @__PURE__ */ jsx("div", {
      className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative",
      children
    })
  });
}
function Wrapper4$1({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start relative w-full",
      children
    })
  });
}
function TabHelper({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-row items-center justify-center size-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "content-stretch flex items-center justify-center pb-[10px] relative",
      children
    })
  });
}
function Svg1$1({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "relative shrink-0 size-[24px]",
    children: /* @__PURE__ */ jsx("svg", {
      className: "absolute block size-full",
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx("g", {
        id: "SVG",
        children
      })
    })
  });
}
function Icon$1({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "absolute left-[13px] size-[16px] top-[7px]",
    children: /* @__PURE__ */ jsx("svg", {
      className: "absolute block size-full",
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ jsx("g", {
        id: "Icon",
        children
      })
    })
  });
}
function Wrapper2$2({
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "bg-[rgba(246,246,246,0.93)] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]",
    children: [/* @__PURE__ */ jsx("div", {
      "aria-hidden": "true",
      className: "absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]"
    }), /* @__PURE__ */ jsx("div", {
      className: "flex flex-col items-center justify-center size-full",
      children: /* @__PURE__ */ jsx("div", {
        className: "content-stretch flex flex-col items-center justify-center px-[14px] py-[8px] relative w-full",
        children
      })
    })]
  });
}
function Wrapper1$1({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "relative shrink-0 size-[18px]",
    children: /* @__PURE__ */ jsx("svg", {
      className: "absolute block size-full",
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 18 18",
      children: /* @__PURE__ */ jsx("g", {
        id: "SVG",
        children
      })
    })
  });
}
function Wrapper({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "flex-[1_0_0] min-h-px min-w-px relative",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col items-start sm:items-end size-full",
      children: /* @__PURE__ */ jsx("div", {
        className: "content-stretch flex flex-col items-start sm:items-end pl-[48px] sm:pl-0 sm:pr-[48px] relative w-full",
        children
      })
    })
  });
}
function ContainerText7({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start relative min-w-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative min-w-0 text-[#6b7280] text-[16px]",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[24px] break-all sm:break-normal",
        children: text
      })
    })
  });
}
function Container2$2({
  text,
  text1
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start relative min-w-0 w-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col font-normal justify-center leading-[24px] not-italic relative min-w-0 text-[#6b7280] text-[16px]",
      children: [/* @__PURE__ */ jsx("p", {
        className: "mb-0 break-all sm:break-normal",
        children: text
      }), /* @__PURE__ */ jsx("p", {
        className: "break-all sm:break-normal",
        children: text1
      })]
    })
  });
}
function ContainerText6({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start relative min-w-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-bold justify-center leading-[0] not-italic relative min-w-0 text-[#1a1a1a] text-[18px]",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[28px] break-all sm:break-normal",
        children: text
      })
    })
  });
}
function Helper1$1({
  text,
  text1
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0",
    children: [/* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-semibold justify-center relative shrink-0 text-[#777] text-[16px] md:text-[18px] uppercase w-full lg:w-[474px]",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[24px] md:text-[32px] w-full lg:w-[474px]",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text1
      })
    })]
  });
}
function Container1$2({
  text,
  text1,
  isMounted
}) {
  return /* @__PURE__ */ jsxs(Wrapper, {
    children: [/* @__PURE__ */ jsxs(motion.div, {
      initial: isMounted ? {
        opacity: 0,
        x: -20
      } : false,
      whileInView: {
        opacity: 1,
        x: 0
      },
      viewport: {
        once: true,
        margin: "-50px"
      },
      transition: {
        duration: 0.6
      },
      children: [/* @__PURE__ */ jsx("div", {
        className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left sm:text-right",
        children: /* @__PURE__ */ jsx("p", {
          className: "leading-[32px]",
          children: text
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left sm:text-right",
        children: /* @__PURE__ */ jsx("p", {
          className: "leading-[28px]",
          children: text1
        })
      })]
    }), /* @__PURE__ */ jsx(BackgroundBorder, {
      isMounted,
      additionalClassNames: "left-[11.5px] sm:left-auto sm:right-[-8.5px] top-[8px]"
    })]
  });
}
function BackgroundBorder({
  additionalClassNames = "",
  isMounted
}) {
  return /* @__PURE__ */ jsx(motion.div, {
    initial: isMounted ? {
      scale: 0
    } : false,
    whileInView: {
      scale: 1
    },
    viewport: {
      once: true
    },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    },
    className: clsx("absolute bg-white rounded-[9999px] size-[17px] z-10", additionalClassNames),
    children: /* @__PURE__ */ jsx("div", {
      "aria-hidden": "true",
      className: "absolute border-4 border-[#262e3f] border-solid inset-0 pointer-events-none rounded-[9999px]"
    })
  });
}
function ContainerText5({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start relative shrink-0",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[28px]",
        children: text
      })
    })
  });
}
function Svg$1() {
  return /* @__PURE__ */ jsxs(Wrapper1$1, {
    children: [/* @__PURE__ */ jsx("path", {
      d: svgPaths$2.pc4bcb80,
      id: "Vector",
      stroke: "var(--stroke-0, #FF6000)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /* @__PURE__ */ jsx("path", {
      d: svgPaths$2.p23bfda80,
      id: "Vector_2",
      stroke: "var(--stroke-0, #FF6000)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    })]
  });
}
function ContainerText4({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[40px] text-black w-full",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[40px]",
        children: text
      })
    })
  });
}
function ContainerText3({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function ContainerText2({
  text
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[175.667px]",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function Container$1({
  text,
  text1,
  additionalClassNames = ""
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: clsx("content-stretch flex flex-col gap-[4px] leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap", additionalClassNames),
    children: [/* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-semibold justify-center relative shrink-0 text-[#777] text-[16px] md:text-[18px] uppercase",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text1
      })
    })]
  });
}
function ContainerText1({
  text
}) {
  return /* @__PURE__ */ jsx(Wrapper2$2, {
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function ContainerText$1({
  text
}) {
  return /* @__PURE__ */ jsx(Wrapper2$2, {
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    })
  });
}
function Helper$2({
  text,
  text1
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "content-stretch flex gap-[16px] items-center leading-[0] not-italic relative shrink-0",
    children: [/* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-normal justify-center relative shrink-0 text-[#444] text-[13px] w-[50px]",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex flex-col font-semibold justify-center relative shrink-0 text-[#1a1a1a] text-[18px] whitespace-nowrap",
      children: /* @__PURE__ */ jsx("p", {
        className: "leading-[1.4]",
        children: text1
      })
    })]
  });
}
const About = UNSAFE_withComponentProps(function About2() {
  const [activeTab, setActiveTab] = useState("intro");
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  return /* @__PURE__ */ jsxs(motion.div, {
    initial: isMounted ? {
      opacity: 0
    } : false,
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    },
    className: "bg-white content-stretch flex flex-col items-center relative size-full",
    children: [/* @__PURE__ */ jsx("div", {
      className: "bg-[#0f172a] h-[550px] relative shrink-0 w-full overflow-hidden",
      children: /* @__PURE__ */ jsxs("div", {
        className: "content-stretch flex flex-col gap-[56px] items-center pt-[140px] relative size-full",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "absolute inset-0 overflow-hidden z-0",
          children: [/* @__PURE__ */ jsx("video", {
            autoPlay: true,
            className: "absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            loop: true,
            playsInline: true,
            muted: true,
            children: /* @__PURE__ */ jsx("source", {
              src: `${"/"}videos/about_video_short.mp4`,
              type: "video/mp4"
            })
          }), /* @__PURE__ */ jsx("div", {
            "aria-hidden": "true",
            className: "absolute bg-[#0f172a] inset-0 mix-blend-color z-1"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] px-[24px] relative shrink-0 w-full",
          children: /* @__PURE__ */ jsxs("div", {
            className: "content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "bg-white content-stretch flex items-start justify-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0",
              children: [/* @__PURE__ */ jsx("div", {
                "aria-hidden": "true",
                className: "absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              }), /* @__PURE__ */ jsx("div", {
                className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap",
                children: /* @__PURE__ */ jsx("p", {
                  className: "leading-[1.4]",
                  children: `Best People & Best Partner`
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[56px] text-center text-white",
              children: [/* @__PURE__ */ jsx("p", {
                className: "leading-[1.3] mb-0",
                children: "사람을 위한 기술,"
              }), /* @__PURE__ */ jsxs("p", {
                className: "leading-[1.3]",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-white",
                  children: "TheBeeSoft"
                }), /* @__PURE__ */ jsx("span", {
                  children: "가 만듭니다."
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col font-normal justify-center leading-[1.4] not-italic opacity-80 relative shrink-0 text-[16px] md:text-[20px] text-center text-white",
              children: [/* @__PURE__ */ jsx("p", {
                className: "mb-0",
                children: "더비소프트는 2011년부터 기업의 디지털 트랜스포메이션을 선도하며,"
              }), /* @__PURE__ */ jsx("p", {
                children: "기술 그 이상의 가치를 고객과 함께 만들어가고 있습니다."
              })]
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "w-full flex flex-col items-center",
      children: [/* @__PURE__ */ jsx("div", {
        className: "bg-[#111827] h-[72px] relative shrink-0 w-full z-20",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex flex-col items-center size-full",
          children: /* @__PURE__ */ jsx("div", {
            className: "content-stretch flex flex-col items-center px-[24px] relative size-full justify-center",
            children: /* @__PURE__ */ jsxs("div", {
              className: "content-stretch flex gap-[32px] items-center max-w-[1200px] relative shrink-0 w-full",
              children: [/* @__PURE__ */ jsx("button", {
                onClick: () => setActiveTab("intro"),
                className: clsx("relative shrink-0 cursor-pointer", activeTab === "intro" && "border-b-2 border-solid border-white"),
                children: /* @__PURE__ */ jsx(TabHelper, {
                  children: /* @__PURE__ */ jsx("div", {
                    className: clsx("flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap", activeTab === "intro" ? "font-semibold" : "font-normal opacity-70"),
                    children: /* @__PURE__ */ jsx("p", {
                      className: "leading-[1.4]",
                      children: "기업소개"
                    })
                  })
                })
              }), /* @__PURE__ */ jsx("button", {
                onClick: () => setActiveTab("work"),
                className: clsx("relative shrink-0 cursor-pointer", activeTab === "work" && "border-b-2 border-solid border-white"),
                children: /* @__PURE__ */ jsx(TabHelper, {
                  children: /* @__PURE__ */ jsx("div", {
                    className: clsx("flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap", activeTab === "work" ? "font-semibold" : "font-normal opacity-70"),
                    children: /* @__PURE__ */ jsx("p", {
                      className: "leading-[1.4]",
                      children: "How We Work"
                    })
                  })
                })
              })]
            })
          })
        })
      }), /* @__PURE__ */ jsx(AnimatePresence, {
        mode: "wait",
        children: activeTab === "intro" ? /* @__PURE__ */ jsxs(motion.div, {
          initial: isMounted ? {
            opacity: 0
          } : false,
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: 0.3
          },
          className: "w-full flex flex-col items-center",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "content-stretch flex flex-col gap-[32px] items-center overflow-clip py-[80px] relative shrink-0 w-full",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "absolute h-[255px] left-0 overflow-clip top-[199px] w-[461px] hidden lg:block",
              children: [/* @__PURE__ */ jsx("div", {
                className: "absolute flex h-[554px] items-center justify-center left-[186.98px] top-[-57px] w-[291px]",
                children: /* @__PURE__ */ jsx("div", {
                  className: "-scale-y-100 flex-none rotate-180",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "h-[554px] opacity-30 relative w-[291px]",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "absolute inset-0 overflow-hidden pointer-events-none",
                      children: /* @__PURE__ */ jsx("img", {
                        alt: "",
                        className: "absolute h-[157.02%] left-[-231.71%] max-w-none top-[-56.96%] w-[612.92%]",
                        src: imgImage4898
                      })
                    })
                  })
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "absolute flex h-[461px] items-center justify-center left-[-0.02px] top-[11px] w-[233px]",
                children: /* @__PURE__ */ jsx("div", {
                  className: "-scale-y-100 flex-none rotate-180",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "h-[461px] opacity-30 relative w-[233px]",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "absolute inset-0 overflow-hidden pointer-events-none",
                      children: /* @__PURE__ */ jsx("img", {
                        alt: "",
                        className: "absolute h-[157.02%] left-[-388.86%] max-w-none top-[-56.96%] w-[636.72%]",
                        src: imgImage4898
                      })
                    })
                  })
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start max-w-[1200px] px-[24px] relative shrink-0 w-full",
              children: [/* @__PURE__ */ jsx("div", {
                className: "content-stretch flex flex-col items-start relative shrink-0",
                children: /* @__PURE__ */ jsx("div", {
                  className: "content-stretch flex items-start max-w-[1200px] relative shrink-0",
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-center whitespace-nowrap",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[1.4]",
                        children: `주식회사 더비소프트 `
                      })
                    }), /* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-semibold justify-center not-italic relative shrink-0 text-[#777] text-[16px] md:text-[18px]",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[1.4]",
                        children: "TheBeeSoft Inc."
                      })
                    })]
                  })
                })
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex flex-1 flex-col gap-[32px] items-start min-h-px min-w-px relative",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full",
                  children: [/* @__PURE__ */ jsx(Helper$2, {
                    text: "대표이사",
                    text1: "이광섭"
                  }), /* @__PURE__ */ jsx(Helper$2, {
                    text: "설립일",
                    text1: "2011. 02. 01"
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex gap-[20px] items-start relative rounded-[16px] shrink-0 w-full",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "relative shrink-0",
                      children: /* @__PURE__ */ jsx("div", {
                        className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative",
                        children: /* @__PURE__ */ jsx("div", {
                          className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[13px] w-[50px]",
                          children: /* @__PURE__ */ jsx("p", {
                            className: "leading-[1.4]",
                            children: "사업분야"
                          })
                        })
                      })
                    }), /* @__PURE__ */ jsx("div", {
                      className: "flex-[1_0_0] min-h-px min-w-px relative",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative w-full",
                        children: [/* @__PURE__ */ jsx("div", {
                          className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px]",
                          children: /* @__PURE__ */ jsx("p", {
                            className: "leading-[1.4]",
                            children: "기업 및 공공 기관 시스템 구축·운영, 솔루션 개발, 컨설팅"
                          })
                        }), /* @__PURE__ */ jsx("div", {
                          className: "h-[20px] relative shrink-0 w-[160.702px]",
                          children: /* @__PURE__ */ jsxs("svg", {
                            className: "absolute block size-full",
                            fill: "none",
                            preserveAspectRatio: "none",
                            viewBox: "0 0 160.702 20",
                            children: [/* @__PURE__ */ jsxs("g", {
                              id: "Frame 13",
                              children: [/* @__PURE__ */ jsx("path", {
                                d: svgPaths$2.pbdb6380,
                                fill: "var(--fill-0, black)",
                                id: "Union"
                              }), /* @__PURE__ */ jsx("rect", {
                                fill: "var(--fill-0, #D9D9D9)",
                                height: "12",
                                id: "Rectangle 8",
                                width: "1",
                                x: "102.702",
                                y: "4"
                              }), /* @__PURE__ */ jsxs("g", {
                                clipPath: "url(#clip0_1_1002)",
                                id: "sap-3 1",
                                children: [/* @__PURE__ */ jsx("path", {
                                  clipRule: "evenodd",
                                  d: svgPaths$2.p206f1780,
                                  fill: "var(--fill-0, black)",
                                  fillRule: "evenodd",
                                  id: "Vector"
                                }), /* @__PURE__ */ jsx("path", {
                                  clipRule: "evenodd",
                                  d: svgPaths$2.p2424db80,
                                  fill: "var(--fill-0, white)",
                                  fillRule: "evenodd",
                                  id: "Vector_2"
                                }), /* @__PURE__ */ jsx("g", {
                                  id: "Vector_3"
                                })]
                              })]
                            }), /* @__PURE__ */ jsx("defs", {
                              children: /* @__PURE__ */ jsx("clipPath", {
                                id: "clip0_1_1002",
                                children: /* @__PURE__ */ jsx("rect", {
                                  fill: "white",
                                  height: "20",
                                  transform: "translate(119.702)",
                                  width: "41"
                                })
                              })
                            })]
                          })
                        })]
                      })
                    })]
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col md:flex-row gap-[18px] items-stretch relative shrink-0 w-full",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-[174px] min-w-px relative rounded-[16px]",
                    children: [/* @__PURE__ */ jsx("div", {
                      "aria-hidden": "true",
                      className: "absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[16px]"
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full",
                      children: [/* @__PURE__ */ jsxs("div", {
                        className: "bg-[rgba(255,105,0,0.1)] h-[30px] relative rounded-[33554400px] shrink-0 w-[150px]",
                        children: [/* @__PURE__ */ jsx("div", {
                          "aria-hidden": "true",
                          className: "absolute border border-[rgba(255,105,0,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]"
                        }), /* @__PURE__ */ jsxs("div", {
                          className: "bg-clip-padding border-0 border-[transparent] border-solid relative size-full",
                          children: [/* @__PURE__ */ jsx(Icon$1, {
                            children: /* @__PURE__ */ jsx("path", {
                              d: svgPaths$2.p18211080,
                              id: "Vector",
                              stroke: "var(--stroke-0, #FF8904)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "1.33333"
                            })
                          }), /* @__PURE__ */ jsx("div", {
                            className: "absolute h-[15px] left-[37px] top-[7.5px] w-[84.078px]",
                            children: /* @__PURE__ */ jsx("p", {
                              className: "absolute font-bold leading-[15px] left-0 not-italic text-[#ff8904] text-[10px] top-0 tracking-[0.5px] uppercase whitespace-nowrap",
                              children: "ERP Solutions"
                            })
                          })]
                        })]
                      }), /* @__PURE__ */ jsx("div", {
                        className: "relative shrink-0 w-full",
                        children: /* @__PURE__ */ jsxs("div", {
                          className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center leading-[0] not-italic relative text-[#333] w-full",
                          children: [/* @__PURE__ */ jsx("div", {
                            className: "flex flex-col font-semibold justify-center relative shrink-0 text-[18px]",
                            children: /* @__PURE__ */ jsx("p", {
                              className: "leading-[1.4]",
                              children: `ERP 구축 및 운영 `
                            })
                          }), /* @__PURE__ */ jsx("div", {
                            className: "flex flex-col font-normal justify-center relative shrink-0 text-[14px] uppercase",
                            children: /* @__PURE__ */ jsx("p", {
                              className: "leading-[1.4]",
                              children: "(Oracle, SAP)"
                            })
                          })]
                        })
                      }), /* @__PURE__ */ jsxs(Wrapper4$1, {
                        children: [/* @__PURE__ */ jsx(ContainerText$1, {
                          text: "재무"
                        }), /* @__PURE__ */ jsx(ContainerText$1, {
                          text: "생산"
                        }), /* @__PURE__ */ jsx(ContainerText$1, {
                          text: "영업"
                        }), /* @__PURE__ */ jsx(ContainerText$1, {
                          text: "인사"
                        }), /* @__PURE__ */ jsx(ContainerText$1, {
                          text: "서비스"
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-[174px] min-w-px relative rounded-[16px]",
                    children: [/* @__PURE__ */ jsx("div", {
                      "aria-hidden": "true",
                      className: "absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[16px]"
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full",
                      children: [/* @__PURE__ */ jsxs("div", {
                        className: "bg-[rgba(43,127,255,0.1)] h-[30px] relative rounded-[33554400px] shrink-0 w-[180px]",
                        children: [/* @__PURE__ */ jsx("div", {
                          "aria-hidden": "true",
                          className: "absolute border border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]"
                        }), /* @__PURE__ */ jsx(Icon$1, {
                          children: /* @__PURE__ */ jsx("path", {
                            d: svgPaths$2.pb72e280,
                            id: "Vector",
                            stroke: "var(--stroke-0, #51A2FF)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.33333"
                          })
                        }), /* @__PURE__ */ jsx("div", {
                          className: "absolute content-stretch flex items-end justify-center left-[36.5px] top-[11px]",
                          children: /* @__PURE__ */ jsx("p", {
                            className: "font-bold leading-[10px] not-italic relative shrink-0 text-[#51a2ff] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap",
                            children: "CustomIZED Systems"
                          })
                        })]
                      }), /* @__PURE__ */ jsx("div", {
                        className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[18px]",
                        children: /* @__PURE__ */ jsx("p", {
                          className: "leading-[1.4]",
                          children: "산업 맞춤형 시스템 구축 및 운영"
                        })
                      }), /* @__PURE__ */ jsxs(Wrapper4$1, {
                        children: [/* @__PURE__ */ jsx(ContainerText1, {
                          text: "제조"
                        }), /* @__PURE__ */ jsx(ContainerText1, {
                          text: "통신"
                        }), /* @__PURE__ */ jsx(ContainerText1, {
                          text: "유통"
                        }), /* @__PURE__ */ jsx(ContainerText1, {
                          text: "공공기관"
                        })]
                      })]
                    })]
                  })]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-[#f3f6fa] content-stretch flex flex-col items-center overflow-clip py-[80px] lg:py-[120px] relative shrink-0 w-full",
            children: [/* @__PURE__ */ jsx("div", {
              className: "absolute h-[250px] sm:h-[350px] md:h-[450px] lg:h-[457px] right-0 mix-blend-multiply top-[100px] lg:top-[163px] w-full lg:w-[1404px] block",
              children: /* @__PURE__ */ jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: /* @__PURE__ */ jsx("img", {
                  alt: "",
                  className: "absolute inset-0 w-full h-full object-cover object-right lg:object-center pointer-events-none",
                  src: steps
                })
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "content-stretch flex flex-col lg:flex-row gap-[32px] items-start justify-center max-w-[1200px] px-[24px] relative shrink-0 w-full",
              children: [/* @__PURE__ */ jsx("div", {
                className: "relative shrink-0 w-full lg:w-auto",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[24px] items-start pb-[10px] lg:pr-[32px] relative",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "content-stretch flex items-center relative shrink-0 w-full",
                    children: /* @__PURE__ */ jsx(Container$1, {
                      text: "Growth Metrics",
                      text1: "멈추지 않는 성장의 기록",
                      additionalClassNames: "items-start"
                    })
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic relative shrink-0",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-medium justify-center relative shrink-0 text-[#6d7074] text-[16px]",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[1.4]",
                        children: "CAGR(설립이후 매출액 연평균 성장율)"
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col font-bold items-start relative shrink-0 text-[#ff6000]",
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "flex flex-col justify-center relative shrink-0 text-[28px] md:text-[30px]",
                        children: /* @__PURE__ */ jsx("p", {
                          className: "leading-none",
                          children: "CAGR"
                        })
                      }), /* @__PURE__ */ jsx("div", {
                        className: "flex flex-col justify-center relative shrink-0 text-[40px] md:text-[48px]",
                        children: /* @__PURE__ */ jsx("p", {
                          className: "leading-none",
                          children: "23.7%↑"
                        })
                      })]
                    })]
                  })]
                })
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex flex-col sm:flex-row gap-[24px] items-stretch flex-1 min-w-0 w-full lg:w-auto",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "backdrop-blur-[12px] bg-[rgba(15,23,42,0.9)] flex-1 min-h-px min-w-px relative rounded-[24px]",
                  children: [/* @__PURE__ */ jsx("div", {
                    "aria-hidden": "true",
                    className: "absolute border border-[#0f172a] border-solid inset-0 pointer-events-none rounded-[24px]"
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex flex-col items-start gap-[8px] sm:gap-[32px] px-[41px] py-[20px] sm:py-[33px] relative w-full h-full",
                    children: [/* @__PURE__ */ jsxs(Wrapper5, {
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "content-stretch flex flex-col items-start opacity-70 relative shrink-0",
                        children: /* @__PURE__ */ jsx("div", {
                          className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap",
                          children: /* @__PURE__ */ jsx("p", {
                            className: "leading-[1.4]",
                            children: "2024 리포트"
                          })
                        })
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "content-stretch flex flex-col gap-[4px] items-start relative shrink-0",
                        children: [/* @__PURE__ */ jsx("div", {
                          className: "content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full",
                          children: /* @__PURE__ */ jsx("div", {
                            className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full",
                            children: /* @__PURE__ */ jsx("p", {
                              className: "leading-[1.4]",
                              children: "매출액"
                            })
                          })
                        }), /* @__PURE__ */ jsx("div", {
                          className: "content-stretch flex flex-col items-start relative shrink-0 w-full",
                          children: /* @__PURE__ */ jsx("div", {
                            className: "flex flex-col font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[40px] text-white w-full",
                            children: /* @__PURE__ */ jsx("p", {
                              className: "leading-[40px]",
                              children: "140.2억"
                            })
                          })
                        })]
                      })]
                    }), /* @__PURE__ */ jsxs(Container3$1, {
                      children: [/* @__PURE__ */ jsxs(Wrapper1$1, {
                        children: [/* @__PURE__ */ jsx("path", {
                          d: svgPaths$2.pc4bcb80,
                          id: "Vector",
                          stroke: "var(--stroke-0, white)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "1.5"
                        }), /* @__PURE__ */ jsx("path", {
                          d: svgPaths$2.p23bfda80,
                          id: "Vector_2",
                          stroke: "var(--stroke-0, white)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "1.5"
                        })]
                      }), /* @__PURE__ */ jsx("div", {
                        className: "content-stretch flex flex-col items-start relative shrink-0",
                        children: /* @__PURE__ */ jsx("div", {
                          className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap",
                          children: /* @__PURE__ */ jsx("p", {
                            className: "leading-[28px]",
                            children: "신용등급 BB0"
                          })
                        })
                      })]
                    })]
                  })]
                }), /* @__PURE__ */ jsxs(OverlayBorder, {
                  children: [/* @__PURE__ */ jsxs(Wrapper5, {
                    children: [/* @__PURE__ */ jsx(ContainerText2, {
                      text: "2023 리포트"
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[4px] items-start relative shrink-0 flex-1 min-w-0",
                      children: [/* @__PURE__ */ jsx(ContainerText3, {
                        text: "매출액"
                      }), /* @__PURE__ */ jsx(ContainerText4, {
                        text: "121.8억"
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs(Container3$1, {
                    children: [/* @__PURE__ */ jsx(Svg$1, {}), /* @__PURE__ */ jsx(ContainerText5, {
                      text: "신용등급 BBB-"
                    })]
                  })]
                }), /* @__PURE__ */ jsxs(OverlayBorder, {
                  children: [/* @__PURE__ */ jsxs(Wrapper5, {
                    children: [/* @__PURE__ */ jsx(ContainerText2, {
                      text: "2022 리포트"
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[4px] items-start relative shrink-0 flex-1 min-w-0",
                      children: [/* @__PURE__ */ jsx(ContainerText3, {
                        text: "매출액"
                      }), /* @__PURE__ */ jsx(ContainerText4, {
                        text: "102.8억"
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs(Container3$1, {
                    children: [/* @__PURE__ */ jsx(Svg$1, {}), /* @__PURE__ */ jsx(ContainerText5, {
                      text: "신용등급 BB+"
                    })]
                  })]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] lg:py-[120px] px-[24px] relative shrink-0 w-full",
            children: [/* @__PURE__ */ jsx(Container$1, {
              text: "History",
              text1: "TheBeeSoft Journey",
              additionalClassNames: "items-center w-full lg:w-[900px]"
            }), /* @__PURE__ */ jsxs("div", {
              className: "content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full lg:w-[900px]",
              children: [/* @__PURE__ */ jsx(motion.div, {
                initial: isMounted ? {
                  scaleY: 0
                } : false,
                whileInView: {
                  scaleY: 1
                },
                viewport: {
                  once: true
                },
                transition: {
                  duration: 1.5,
                  ease: "easeInOut"
                },
                style: {
                  originY: 0
                },
                className: "absolute bg-[rgba(37,46,63,0.3)] bottom-[38px] left-[20px] sm:left-[calc(50%+1.5px)] top-[16px] w-[2px] sm:w-px sm:-translate-x-1/2"
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsxs(Wrapper, {
                  children: [/* @__PURE__ */ jsxs(motion.div, {
                    initial: isMounted ? {
                      opacity: 0,
                      x: -20
                    } : false,
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: true,
                      margin: "-50px"
                    },
                    transition: {
                      duration: 0.6
                    },
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left sm:text-right",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[32px]",
                        children: "2025"
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left sm:text-right",
                      children: [/* @__PURE__ */ jsx("p", {
                        className: "mb-0",
                        children: "LG이노텍 N-ERP 구축사업 참여"
                      }), /* @__PURE__ */ jsx("p", {
                        className: "text-[16px] md:text-[18px]",
                        children: `LG전자 ERP 재무 모듈 운영/유지보수 `
                      })]
                    })]
                  }), /* @__PURE__ */ jsx(BackgroundBorder, {
                    isMounted,
                    additionalClassNames: "left-[11.5px] sm:left-auto sm:right-[-8.5px] top-[8px]"
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] min-h-px min-w-px relative self-stretch hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col items-end size-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "size-full"
                    })
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col items-end size-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "size-full"
                    })
                  })
                }), /* @__PURE__ */ jsxs(Container4, {
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left",
                    children: /* @__PURE__ */ jsx("p", {
                      className: "leading-[32px]",
                      children: "2024"
                    })
                  }), /* @__PURE__ */ jsxs(motion.div, {
                    initial: isMounted ? {
                      opacity: 0,
                      x: 20
                    } : false,
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: true,
                      margin: "-50px"
                    },
                    transition: {
                      duration: 0.6
                    },
                    className: "flex flex-col font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left",
                    children: [/* @__PURE__ */ jsx("p", {
                      className: "mb-0",
                      children: "LG전자 NEPS 구축 프로젝트"
                    }), /* @__PURE__ */ jsx("p", {
                      className: "mb-0",
                      children: "LG.com D2X 플랫폼 구축"
                    }), /* @__PURE__ */ jsx("p", {
                      children: "LG생활건강 BW고도화"
                    })]
                  }), /* @__PURE__ */ jsx(BackgroundBorder, {
                    isMounted,
                    additionalClassNames: "left-[11.5px] sm:left-[-8.5px] top-[9px]"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsxs(Wrapper, {
                  children: [/* @__PURE__ */ jsxs(motion.div, {
                    initial: isMounted ? {
                      opacity: 0,
                      x: -20
                    } : false,
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: true,
                      margin: "-50px"
                    },
                    transition: {
                      duration: 0.6
                    },
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left sm:text-right",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[32px]",
                        children: "2023"
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left sm:text-right",
                      children: [/* @__PURE__ */ jsx("p", {
                        className: "mb-0",
                        children: "LG전자 차세대 ERP개발"
                      }), /* @__PURE__ */ jsx("p", {
                        className: "mb-0",
                        children: "LG CNS 고객데이터 통합 ETL개발"
                      }), /* @__PURE__ */ jsx("p", {
                        className: "mb-0",
                        children: "LG CNS 공상평 SINGLEX 구매개발"
                      }), /* @__PURE__ */ jsx("p", {
                        children: "LG이노텍 세무조정 고도화 DB개발"
                      })]
                    })]
                  }), /* @__PURE__ */ jsx(BackgroundBorder, {
                    isMounted,
                    additionalClassNames: "left-[11.5px] sm:left-auto sm:right-[-8.5px] top-[9px]"
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "size-full"
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col items-end size-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "size-full"
                    })
                  })
                }), /* @__PURE__ */ jsxs(Container4, {
                  children: [/* @__PURE__ */ jsxs(motion.div, {
                    initial: isMounted ? {
                      opacity: 0,
                      x: 20
                    } : false,
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: true,
                      margin: "-50px"
                    },
                    transition: {
                      duration: 0.6
                    },
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[32px]",
                        children: "2022"
                      })
                    }), /* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left",
                      children: /* @__PURE__ */ jsxs("p", {
                        className: "leading-[28px]",
                        children: ["LG전자 ERP 재무 모듈 운영/유지보수", /* @__PURE__ */ jsx("br", {
                          "aria-hidden": "true"
                        }), "LG이노텍 금융정보화 고도화 DB개발"]
                      })
                    })]
                  }), /* @__PURE__ */ jsx(BackgroundBorder, {
                    isMounted,
                    additionalClassNames: "left-[11.5px] sm:left-[-8.5px] top-[9px]"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsx(Container1$2, {
                  isMounted,
                  text: "2020",
                  text1: "LG CNS Oracle ERP 재무영역 도급 운영사 재선정"
                }), /* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col items-end size-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "size-full"
                    })
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col items-end size-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "size-full"
                    })
                  })
                }), /* @__PURE__ */ jsxs(Container4, {
                  children: [/* @__PURE__ */ jsxs(motion.div, {
                    initial: isMounted ? {
                      opacity: 0,
                      x: 20
                    } : false,
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: true,
                      margin: "-50px"
                    },
                    transition: {
                      duration: 0.6
                    },
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[32px]",
                        children: "2017"
                      })
                    }), /* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[28px]",
                        children: "LG CNS Prime Partner사 선정"
                      })
                    }), /* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[28px]",
                        children: "LG전자/LG이노텍 Oracle ERP 재무영역 도급 운영사 선정"
                      })
                    })]
                  }), /* @__PURE__ */ jsx(BackgroundBorder, {
                    isMounted,
                    additionalClassNames: "left-[11.5px] sm:left-[-8.5px] top-[9px]"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsx(Container1$2, {
                  isMounted,
                  text: "2013",
                  text1: "LG CNS ORACLE ERP 전문 협력사 등록"
                }), /* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col items-end size-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "size-full"
                    })
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "content-stretch flex items-start relative shrink-0 w-full",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "flex flex-col items-end size-full",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "size-full"
                    })
                  })
                }), /* @__PURE__ */ jsxs(Container4, {
                  children: [/* @__PURE__ */ jsxs(motion.div, {
                    initial: isMounted ? {
                      opacity: 0,
                      x: 20
                    } : false,
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: true,
                      margin: "-50px"
                    },
                    transition: {
                      duration: 0.6
                    },
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[32px]",
                        children: "2011"
                      })
                    }), /* @__PURE__ */ jsx("div", {
                      className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left",
                      children: /* @__PURE__ */ jsx("p", {
                        className: "leading-[28px]",
                        children: "주식회사 더비소프트 설립"
                      })
                    })]
                  }), /* @__PURE__ */ jsx(BackgroundBorder, {
                    isMounted,
                    additionalClassNames: "left-[11.5px] sm:left-[-8.5px] top-[9px]"
                  })]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "bg-[#f3f6fa] content-stretch flex flex-col items-center justify-center overflow-clip py-[80px] lg:py-[120px] relative shrink-0 w-full",
            children: /* @__PURE__ */ jsxs("div", {
              className: "content-stretch flex flex-col sm:flex-row gap-[40px] lg:gap-[80px] items-start sm:items-stretch max-w-[1200px] px-[24px] relative shrink-0 w-full",
              children: [/* @__PURE__ */ jsxs(Container5, {
                children: [/* @__PURE__ */ jsx(Helper1$1, {
                  text: "Location",
                  text1: "찾아오시는 길"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] relative shrink-0 w-full",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex gap-[20px] items-start relative shrink-0 w-full",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0",
                      children: /* @__PURE__ */ jsxs(Svg1$1, {
                        children: [/* @__PURE__ */ jsx("path", {
                          d: svgPaths$2.p27c543b0,
                          id: "Vector",
                          stroke: "var(--stroke-0, black)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2"
                        }), /* @__PURE__ */ jsx("path", {
                          d: svgPaths$2.p2d59bff0,
                          id: "Vector_2",
                          stroke: "var(--stroke-0, black)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2"
                        })]
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0",
                      children: [/* @__PURE__ */ jsx(ContainerText6, {
                        text: "주소"
                      }), /* @__PURE__ */ jsx(Container2$2, {
                        text: "서울특별시 영등포구 선유로 13길 25, 213호",
                        text1: "(문래동6가 에이스하이테크시티2)"
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex gap-[20px] items-start relative shrink-0 w-full",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]",
                      children: /* @__PURE__ */ jsx("div", {
                        className: "h-[24px] relative shrink-0 w-[20px]",
                        children: /* @__PURE__ */ jsxs("svg", {
                          className: "absolute block size-full",
                          fill: "none",
                          preserveAspectRatio: "none",
                          viewBox: "0 0 20 24",
                          children: [/* @__PURE__ */ jsx("g", {
                            clipPath: "url(#clip0_1_964)",
                            id: "Frame",
                            children: /* @__PURE__ */ jsx("path", {
                              d: svgPaths$2.p24ded780,
                              fill: "var(--fill-0, black)",
                              id: "Vector",
                              stroke: "var(--stroke-0, black)"
                            })
                          }), /* @__PURE__ */ jsx("defs", {
                            children: /* @__PURE__ */ jsx("clipPath", {
                              id: "clip0_1_964",
                              children: /* @__PURE__ */ jsx("rect", {
                                fill: "white",
                                height: "24",
                                width: "20"
                              })
                            })
                          })]
                        })
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0",
                      children: [/* @__PURE__ */ jsx(ContainerText6, {
                        text: "지하철"
                      }), /* @__PURE__ */ jsx(ContainerText7, {
                        text: "지하철 2호선 문래역 도보 10분"
                      })]
                    })]
                  })]
                })]
              }), /* @__PURE__ */ jsxs(Container5, {
                children: [/* @__PURE__ */ jsx(Helper1$1, {
                  text: "CONTACT",
                  text1: "연락처"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] relative shrink-0 w-full",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex gap-[20px] items-start relative shrink-0 w-full",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0",
                      children: /* @__PURE__ */ jsx(Svg1$1, {
                        children: /* @__PURE__ */ jsx("path", {
                          d: svgPaths$2.p3a2d4980,
                          id: "Vector",
                          stroke: "var(--stroke-0, black)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2"
                        })
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0",
                      children: [/* @__PURE__ */ jsx(ContainerText6, {
                        text: "전화 및 FAX"
                      }), /* @__PURE__ */ jsx(Container2$2, {
                        text: "TEL. 02-6052-3889 | FAX. 02-6008-3838",
                        text1: " "
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "content-stretch flex gap-[20px] items-start relative shrink-0 w-full",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0",
                      children: /* @__PURE__ */ jsx(Svg1$1, {
                        children: /* @__PURE__ */ jsx("path", {
                          d: svgPaths$2.p13268cc7,
                          id: "Vector",
                          stroke: "var(--stroke-0, black)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2"
                        })
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0",
                      children: [/* @__PURE__ */ jsx(ContainerText6, {
                        text: "이메일"
                      }), /* @__PURE__ */ jsx(ContainerText7, {
                        text: "master@thebeesoft.com"
                      })]
                    })]
                  })]
                })]
              })]
            })
          })]
        }, "intro") : /* @__PURE__ */ jsx(motion.div, {
          initial: isMounted ? {
            opacity: 0
          } : false,
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: 0.3
          },
          className: "w-full",
          children: /* @__PURE__ */ jsx(HowWeWork, {})
        }, "work")
      })]
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const svgPaths$1 = {
  p11feba00: "M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z",
  p18129c20: "M29.9974 6.66699H9.9974C8.15645 6.66699 6.66406 8.15938 6.66406 10.0003V30.0003C6.66406 31.8413 8.15645 33.3337 9.9974 33.3337H29.9974C31.8383 33.3337 33.3307 31.8413 33.3307 30.0003V10.0003C33.3307 8.15938 31.8383 6.66699 29.9974 6.66699Z",
  p1b1afa80: "M3 5V19C3 19.7956 3.94821 20.5587 5.63604 21.1213C7.32387 21.6839 9.61305 22 12 22C14.3869 22 16.6761 21.6839 18.364 21.1213C20.0518 20.5587 21 19.7956 21 19V5",
  p1ee81a00: "M-1.091e-06 31.3968H32.4816L64.2695 -0.396719H-1.091e-06V31.3968Z",
  p2140f00: "M26.6641 4H5.33073C3.85797 4 2.66406 5.19391 2.66406 6.66667V20C2.66406 21.4728 3.85797 22.6667 5.33073 22.6667H26.6641C28.1368 22.6667 29.3307 21.4728 29.3307 20V6.66667C29.3307 5.19391 28.1368 4 26.6641 4Z",
  p29912300: "M83.2217 1.46191C84.2196 -0.064796 86.5674 -0.0645532 87.4482 1.40234L101.77 24H97.0742L85.3955 5.5127L80.4062 13.3184H89.5615L87.1553 17.1914H78L73.7158 23.999H69.0195L83.2217 1.46191ZM60.5596 0.295898C62.4252 0.295898 64.215 1.03724 65.5342 2.35645C66.8534 3.67564 67.5947 5.46543 67.5947 7.33105C67.5946 9.19649 66.8532 10.9856 65.5342 12.3047C64.215 13.6239 62.4252 14.3652 60.5596 14.3652L57.7725 14.374L67.749 23.9717H62.1426L48.2061 10.5059H60.5596C61.4016 10.5059 62.2093 10.1706 62.8047 9.5752C63.3999 8.97989 63.7352 8.1729 63.7354 7.33105C63.7354 6.48902 63.4001 5.68135 62.8047 5.08594C62.2093 4.49052 61.4016 4.15527 60.5596 4.15527H45.1533V23.998H40.8105V0.288086L60.5596 0.295898ZM136.329 0.288086V20.124H153.116L150.65 23.998H132.457V0.288086H136.329ZM27.6357 0.294922C34.1787 0.294922 38.4863 5.59958 38.4863 12.1436C38.4863 18.6875 34.1787 23.9922 27.6357 23.9922H10.8506C4.30763 23.9922 0 18.6875 0 12.1436C7.53296e-06 5.59958 4.30764 0.294922 10.8506 0.294922H27.6357ZM127.033 4.1543H110.747C106.336 4.1543 103.756 7.73106 103.755 12.1426C103.755 16.5551 106.335 20.1318 110.746 20.1318H129.027L126.536 23.9727L110.628 23.9922C104.086 23.9922 99.7783 18.6876 99.7783 12.1426C99.7783 5.59961 104.085 0.294922 110.628 0.294922L129.435 0.28418L127.033 4.1543ZM180.473 4.1543H164.187C160.474 4.1543 158.05 6.7148 157.379 10.1475H180.354L177.89 14.0215H157.379C158.009 17.5279 160.419 20.1318 164.186 20.1318H182.467L179.977 23.9727L164.069 23.9922C157.525 23.9922 153.218 18.6876 153.218 12.1426C153.218 5.59961 157.524 0.294922 164.069 0.294922L182.876 0.28418L180.473 4.1543ZM10.8506 4.1543C6.43908 4.1543 3.85938 7.73204 3.85938 12.1436C3.85938 16.5551 6.43907 20.1318 10.8506 20.1318H27.6357C32.0473 20.1318 34.627 16.5551 34.627 12.1436C34.6269 7.73204 32.0472 4.1543 27.6357 4.1543H10.8506ZM187.029 0C188.182 0 189.168 0.894984 189.168 2.11035C189.168 3.33677 188.183 4.23242 187.029 4.23242C185.865 4.23221 184.881 3.33561 184.881 2.11035C184.881 0.89614 185.865 0.000213676 187.029 0ZM187.029 0.351562C186.062 0.351779 185.306 1.1075 185.306 2.10938C185.306 3.12835 186.062 3.87869 187.029 3.87891C187.987 3.87891 188.741 3.1285 188.741 2.10938C188.741 1.10836 187.987 0.351562 187.029 0.351562ZM187.147 0.898438C187.725 0.898444 188.009 1.11181 188.009 1.59277C188.009 2.02958 187.735 2.22114 187.377 2.26562L188.069 3.33984H187.657L187.013 2.28223H186.586V3.33984H186.217V0.898438H187.147ZM186.586 1.21191V1.96875L187.028 1.96777C187.343 1.96776 187.623 1.94504 187.623 1.57031C187.623 1.26799 187.349 1.21191 187.092 1.21191H186.586Z",
  p2cd70b00: "M38.142 6.40106H31.7946L31.8158 21.4247L26.2887 6.39608H20.8082L16.0901 18.9475C15.5884 15.7537 12.3074 14.6516 9.72572 13.8261C8.02088 13.2751 6.21148 12.4646 6.22985 11.5687C6.24398 10.8335 7.19779 10.1516 9.09338 10.2533C10.3651 10.3223 11.4885 10.4254 13.7232 11.5118L15.9205 7.65813C13.8829 6.61436 11.0653 5.95526 8.75496 5.95312H8.74083C6.04686 5.95312 3.80366 6.83122 2.41322 8.27813C1.44387 9.28776 0.921046 10.5718 0.899851 11.9917C0.864524 13.9456 1.57599 15.3306 3.07099 16.4377C4.33425 17.3691 5.95007 17.9735 7.37371 18.4171C9.12942 18.9646 10.5637 19.441 10.546 20.4549C10.5342 20.8267 10.3857 21.181 10.1291 21.4489C9.6911 21.9039 9.01991 22.0746 8.09083 22.0931C6.29838 22.1315 4.97012 21.8478 2.85338 20.5886L0.898438 24.492C3.01306 25.7021 5.25768 26.3093 7.80822 26.3093L8.38192 26.3051C10.6018 26.2646 12.4034 25.7292 13.8349 24.5702C13.9168 24.5041 13.9903 24.4373 14.0666 24.3697L13.8264 25.6154L19.1818 25.5983L20.1427 23.1226C21.153 23.4696 22.3018 23.6615 23.5213 23.6615C24.7096 23.6615 25.8274 23.4795 26.8186 23.1525L27.4884 25.5983L37.0971 25.6076L37.1204 19.9636H39.1651C44.1072 19.9636 47.0287 17.4324 47.0287 13.1877C47.0272 8.46015 44.187 6.40106 38.142 6.40106ZM23.5213 19.2433C22.83 19.2481 22.1435 19.1271 21.495 18.8864L23.4987 12.5193H23.5375L25.5087 18.9042C24.9152 19.1175 24.2398 19.2433 23.5213 19.2433ZM38.5137 15.5852H37.119V10.4538H38.5144C40.3725 10.4538 41.8562 11.0767 41.8562 12.9864C41.8548 14.963 40.3725 15.5852 38.5144 15.5852",
  p2fc85a80: "M13.3307 4L5.9974 11.3333L2.66406 8",
  p31396200: "M10.1641 8.30405L3.26406 14.5203L1.16406 12.6284L10.1641 4.52026L19.1641 12.6284L17.0641 14.5203L10.1641 8.30405Z",
  p37d13800: "M23.3333 15H16.6667C15.7462 15 15 15.7462 15 16.6667V23.3333C15 24.2538 15.7462 25 16.6667 25H23.3333C24.2538 25 25 24.2538 25 23.3333V16.6667C25 15.7462 24.2538 15 23.3333 15Z",
  p3acc1cf1: "M302.756 0C303.17 0 303.506 0.335786 303.506 0.75C303.506 2.09176 303.516 3.54246 304.571 5.07129C305.64 6.61896 307.863 8.3567 312.585 9.97266C322.042 13.2093 341.103 15.8203 379.447 15.8203H588.604C597.955 15.8203 605.506 23.4016 605.506 32.75C605.506 33.1642 605.17 33.5 604.756 33.5C604.342 33.5 604.006 33.1642 604.006 32.75C604.006 24.2267 597.123 17.3203 588.604 17.3203H379.447C341.1 17.3203 321.815 14.7177 312.1 11.3926C307.235 9.72768 304.665 7.84704 303.337 5.92285C303.103 5.58398 302.912 5.2464 302.753 4.91406C302.594 5.2464 302.403 5.58399 302.169 5.92285C300.841 7.84704 298.271 9.72769 293.406 11.3926C283.69 14.7177 264.405 17.3203 226.059 17.3203H16.9023C8.38241 17.3203 1.5 24.2267 1.5 32.75C1.5 33.1642 1.16421 33.5 0.75 33.5C0.335797 33.5 0 33.1642 0 32.75C0 23.4016 7.55061 15.8203 16.9023 15.8203H226.059C264.403 15.8203 283.464 13.2093 292.921 9.97266C297.642 8.3567 299.866 6.61896 300.935 5.07129C301.99 3.54246 302 2.09176 302 0.75C302 0.335794 302.336 1.23694e-05 302.75 0H302.756Z",
  p3eed8380: "M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12",
  pdee8b00: "M22.6641 2.66699H9.33073C7.85797 2.66699 6.66406 3.8609 6.66406 5.33366V26.667C6.66406 28.1398 7.85797 29.3337 9.33073 29.3337H22.6641C24.1368 29.3337 25.3307 28.1398 25.3307 26.667V5.33366C25.3307 3.8609 24.1368 2.66699 22.6641 2.66699Z"
};
const imgBigDataAnalytics = "/assets/bee0d7335ba9c7d1cb6f76e9c25452666693add1-DBdCJvGk.png";
const imgBigDataAnalytics1 = "/assets/ff2dc884f57040b6d2fe9b9f95fcce46c1b5fe1c-BQ12RcFi.png";
const imgbutton_manufacture = "/assets/imgbutton_manufacture-CSNgH56L.png";
const imgbutton_finance = "/assets/imgbutton_finance-iNa71lTo.png";
const imgbutton_distrubution = "/assets/imgbutton_distrubution-DNA97Lpl.png";
const imgbutton_telecom = "/assets/imgbutton_telecom-Ev5yKtYU.png";
const imgbutton_service = "/assets/imgbutton_service-BxwdHg_T.png";
const imgbutton_public = "/assets/desk-CLfWTf0E.png";
function Wrapper2$1({ children, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("relative rounded-[10px] self-stretch shrink-0", additionalClassNames), children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative", children }) });
}
function BackgroundText({ text }) {
  return /* @__PURE__ */ jsx(Wrapper2$1, { additionalClassNames: "bg-[#fff0e6]", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c04800] text-[12px] whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: text }) }) });
}
function BackgroundText1({ text }) {
  return /* @__PURE__ */ jsx(Wrapper2$1, { additionalClassNames: "bg-[#f1f2f3]", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3b648c] text-[12px] whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: text }) }) });
}
function BackgroundText2({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-[#e4f6f1] h-full relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c7b63] text-[12px] whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[16px]", children: text }) }) }) });
}
function Svg() {
  return /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[16px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("g", { id: "SVG", children: /* @__PURE__ */ jsx("path", { d: svgPaths$1.p2fc85a80, id: "Vector", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.33333" }) }) }) });
}
function ContainerText({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start relative shrink-0 flex-1", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-light justify-center leading-[0] not-italic relative shrink-0 text-[#e0e7ff] text-[16px] break-keep", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children }) }) });
}
function HeadingText$1({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start relative shrink-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d293d] text-[18px] break-keep", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: text }) }) });
}
function Container1$1({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center leading-[0] lg:max-w-none max-w-[520px] not-italic relative shrink-0 text-[#45556c] text-[16px] w-full", children }) });
}
function Heading({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#1b5cfe] text-[12px] text-center uppercase whitespace-nowrap", style: { fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }, children: /* @__PURE__ */ jsx("p", { className: "leading-[16px]", children }) }) });
}
function Container2$1({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[6px] items-start relative w-full", children }) });
}
function Text({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center min-w-[inherit] size-full", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex items-center justify-center min-w-[inherit] px-[12px] py-[5px] relative", children: /* @__PURE__ */ jsx("p", { className: "font-normal leading-[1.4] not-italic relative shrink-0 text-[#364153] text-[12px] text-center whitespace-nowrap", children: text }) }) });
}
function Svg1({ children, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("relative size-[32px]", additionalClassNames), children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 32 32", children: /* @__PURE__ */ jsx("g", { id: "SVG", children }) }) });
}
function Frame11Helper({ children, className = "" }) {
  return /* @__PURE__ */ jsx("div", { style: { "--transform-inner-width": "1182", "--transform-inner-height": "22" }, className: clsx("flex items-center justify-center relative shrink-0 size-[32px]", className), children: /* @__PURE__ */ jsx("div", { className: "-rotate-90 flex-none", children }) });
}
function Helper$1({ text, text1, text2, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsxs("div", { className: clsx("content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[24px] relative", additionalClassNames), children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center opacity-23 relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: text }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center relative shrink-0 text-[18px] text-center text-white whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: text1 }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-[min-content]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: text2 }) })
  ] });
}
function OverlayBorderOverlayBlur({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-[4px] bg-[#f3f6fa] h-auto min-h-px min-w-px relative rounded-[14px] w-full", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border-0 border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center w-full h-auto", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col gap-[12px] items-center p-[24px] md:p-[31.667px] relative w-full h-auto", children }) })
  ] });
}
function Wrapper4({ children }) {
  return /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none rounded-[10px]", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden rounded-[10px]", children }),
    /* @__PURE__ */ jsx("div", { className: "absolute bg-[rgba(0,0,0,0.3)] inset-0 rounded-[10px]" })
  ] });
}
function Text1({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative size-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-shadow-[0px_1px_10px_rgba(0,0,0,0.84)] text-white whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[20px]", children: text }) }) }) });
}
function Helper1({ text, text1 }) {
  return /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full", children: [
    /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#101828] text-[18px] md:text-[20px] w-full", children: text }),
    /* @__PURE__ */ jsx("p", { className: "font-normal relative shrink-0 text-[#4a5565] text-[14px] md:text-[16px] w-full", children: text1 })
  ] });
}
function Container40CardProject({ children, additionalClassNames = "", bgColor = "bg-white" }) {
  return /* @__PURE__ */ jsxs("div", { className: clsx(bgColor, "justify-self-stretch min-h-[160px] md:min-h-[205px] relative rounded-[16px] shrink-0", additionalClassNames), children: [
    /* @__PURE__ */ jsx("div", { className: "min-h-[inherit] overflow-clip rounded-[inherit] size-full", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start justify-between min-h-[inherit] px-[32px] py-[20px] md:py-[32px] relative size-full", children }) }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]" })
  ] });
}
function SolutionsContent() {
  const [showMore, setShowMore] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#f8f9fa] content-stretch flex flex-col gap-[56px] h-[550px] items-center overflow-clip pt-[140px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden z-0", children: [
        /* @__PURE__ */ jsx("video", { autoPlay: true, className: "absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", loop: true, playsInline: true, muted: true, children: /* @__PURE__ */ jsx("source", { src: `${"/"}videos/solution_video_short.mp4`, type: "video/mp4" }) }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute bg-[#0f172a] inset-0 mix-blend-color z-1" }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-black border-solid inset-0 z-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] relative shrink-0 w-full z-10", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white content-stretch flex items-start justify-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0", children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "Enterprise Solutions" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[56px] text-center text-white", children: /* @__PURE__ */ jsxs("p", { className: "leading-[1.3] break-keep", children: [
          "차세대 솔루션 기반",
          " ",
          /* @__PURE__ */ jsx("br", { className: "hidden lg:block", "aria-hidden": "true" }),
          "비즈니스 설계"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-normal justify-center leading-[1.4] not-italic opacity-80 relative shrink-0 text-[16px] md:text-[20px] text-center text-white w-full max-w-[530px]", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-0 break-keep", children: `현장을 잘 이해하기에 가능한 혁신. ` }),
          /* @__PURE__ */ jsx("p", { className: "break-keep", children: "더비소프트는 복잡한 비즈니스 과제를 명쾌하게 해결하는 최적화된 엔터프라이즈 솔루션을 설계하고 구축합니다." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] break-keep", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "ERP Integration Solution" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px] break-keep", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "엔터프라이즈 전사적 자원 관리 통합 솔루션" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col lg:flex-row gap-[32px] lg:gap-[56px] items-center lg:items-start justify-center min-h-[440.67px] max-w-[1200px] relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-[#0f172a] flex-1 lg:flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px] self-stretch w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center overflow-clip rounded-[inherit] w-full h-full", children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start justify-start p-[32px] sm:p-[40px] relative w-full h-full", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col items-start gap-[32px] relative w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-[24px] w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] p-[12px] rounded-[14px]", children: /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[40px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 40 40", children: /* @__PURE__ */ jsxs("g", { id: "SVG", children: [
              /* @__PURE__ */ jsx("path", { d: svgPaths$1.p18129c20, id: "Vector", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: svgPaths$1.p37d13800, id: "Vector_2", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M25 3.33301V6.66634", id: "Vector_3", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M25 33.333V36.6663", id: "Vector_4", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M3.33594 25H6.66927", id: "Vector_5", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M3.33594 15H6.66927", id: "Vector_6", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M33.3359 25H36.6693", id: "Vector_7", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M33.3359 15H36.6693", id: "Vector_8", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M15 3.33301V6.66634", id: "Vector_9", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" }),
              /* @__PURE__ */ jsx("path", { d: "M15 33.333V36.6663", id: "Vector_10", stroke: "var(--stroke-0, white)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.33333" })
            ] }) }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-bold justify-center leading-[1.4] not-italic relative shrink-0 text-[24px] text-white break-keep", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-0", children: "성공적인 ERP 구축," }),
              /* @__PURE__ */ jsx("p", { children: "왜 더비소프트와 함께해야 할까요?" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] items-start w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[12px] items-center relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Svg, {}) }),
              /* @__PURE__ */ jsx(ContainerText, { children: "15년 이상의 구축 노하우" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[12px] items-center relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Svg, {}) }),
              /* @__PURE__ */ jsx(ContainerText, { children: "정규직 중심의 ERP 전담 팀 보유" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[12px] items-center relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Svg, {}) }),
              /* @__PURE__ */ jsx(ContainerText, { children: "글로벌 표준부터 로컬 규제까지 대응" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[12px] items-center relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Svg, {}) }),
              /* @__PURE__ */ jsx(ContainerText, { children: `ORACLE / SAP 간의 상호 전환 프로젝트 진행 ` })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full pt-[32px] border-t border-[rgba(255,255,255,0.1)]", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-[8px] items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#ff6000] rounded-full shrink-0 size-[8px]" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-1 font-light justify-center leading-[1.4] not-italic text-[#c6d2ff] text-[14px] break-keep", children: /* @__PURE__ */ jsx("p", { children: "15+ 대기업 프로젝트 완료" }) })
          ] }) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[32px] lg:gap-[48px] items-start justify-center py-[16px] relative shrink-0 w-full lg:flex-[1.5_1_0%]", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "h-[24px] relative shrink-0 w-[189.168px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 189.168 24", children: /* @__PURE__ */ jsx("path", { d: svgPaths$1.p29912300, fill: "var(--fill-0, black)", id: "Union" }) }) }),
              /* @__PURE__ */ jsx(HeadingText$1, { text: "Oracle ERP Implementation" })
            ] }),
            /* @__PURE__ */ jsx(Container1$1, { children: /* @__PURE__ */ jsxs("p", { className: "leading-[1.4] break-keep", children: [
              `대규모 데이터 처리에 최적화된 Oracle 기반의 재무, 생산, 영업, 물류, 인사, 서비스 시스템 구축. `,
              /* @__PURE__ */ jsx("br", {}),
              `클라우드 전환 및 마이그레이션 전문 솔루션을 제공합니다.`
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-wrap gap-[0px_7.99px] h-[33px] items-start pt-[8px] relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx(BackgroundText, { text: "Cloud Migration" }),
              /* @__PURE__ */ jsx(BackgroundText, { text: "Enterprise Scale" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "h-[32px] relative shrink-0 w-[65px]", children: /* @__PURE__ */ jsxs("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 65 32", children: [
                /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_1_2851)", id: "sap-3 1", children: [
                  /* @__PURE__ */ jsx("path", { clipRule: "evenodd", d: svgPaths$1.p1ee81a00, fill: "var(--fill-0, black)", fillRule: "evenodd", id: "Vector" }),
                  /* @__PURE__ */ jsx("path", { clipRule: "evenodd", d: svgPaths$1.p2cd70b00, fill: "var(--fill-0, white)", fillRule: "evenodd", id: "Vector_2" }),
                  /* @__PURE__ */ jsx("g", { id: "Vector_3" })
                ] }),
                /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_1_2851", children: /* @__PURE__ */ jsx("rect", { fill: "white", height: "32", width: "65" }) }) })
              ] }) }),
              /* @__PURE__ */ jsx(HeadingText$1, { text: "SAP ERP Optimization" })
            ] }),
            /* @__PURE__ */ jsx(Container1$1, { children: /* @__PURE__ */ jsxs("p", { className: "leading-[1.4] break-keep", children: [
              `글로벌 표준 프로세스인 SAP S/4HANA 컨설팅 및 구축.`,
              /* @__PURE__ */ jsx("br", {}),
              `고도화된 ABAP 개발 및 인터페이스 최적화를 통해 경영 효율성을 극대화합니다.`
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-wrap gap-[0px_8px] h-[33px] items-start pt-[8px] relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx(BackgroundText1, { text: "S/4HANA" }),
              /* @__PURE__ */ jsx(BackgroundText1, { text: "ABAP Development" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#f3f6fa] content-stretch flex flex-col items-center px-[24px] py-[80px] relative shrink-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] break-keep", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "비즈니스 성과로 이어지는 디지털 솔루션" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "운영 효율을 높이고, 의사결정을 빠르게 만드는 실무 중심 솔루션을 제공합니다." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start justify-center relative shrink-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-white content-stretch flex flex-col isolate items-start min-h-px min-w-px overflow-clip relative rounded-[24px] self-stretch shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white content-stretch flex flex-col h-[200px] sm:h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-[1_0_0] min-h-px min-w-px relative w-full", children: /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsx("img", { alt: "", className: "absolute left-0 max-w-none size-full top-0", src: imgBigDataAnalytics }) }),
            /* @__PURE__ */ jsx("img", { alt: "", className: "absolute max-w-none object-cover size-full", src: imgBigDataAnalytics1 })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute bg-[rgba(67,66,66,0.5)] inset-[0.33px_0_-0.33px_0]" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute backdrop-blur-[6px] bg-[rgba(255,242,242,0.1)] content-stretch flex flex-col items-start left-[24px] p-[12.667px] rounded-[14px] top-[24px]", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" }),
            /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[24px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { id: "SVG", children: [
              /* @__PURE__ */ jsx("path", { d: svgPaths$1.p11feba00, id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
              /* @__PURE__ */ jsx("path", { d: svgPaths$1.p1b1afa80, id: "Vector_2", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
              /* @__PURE__ */ jsx("path", { d: svgPaths$1.p3eed8380, id: "Vector_3", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative shrink-0 w-full z-[1]", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start p-[32px] relative w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[24px] w-full", children: /* @__PURE__ */ jsx("p", { className: "leading-[32px]", children: "Big Data Analytics" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-start relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45556c] text-[16px] w-full", children: /* @__PURE__ */ jsx("p", { className: "leading-[26px] break-keep", children: "흩어진 데이터를 수집·정리해 한눈에 파악할 수 있도록 분석합니다. 매출, 고객 행동, 운영 지표를 기반으로 더 바른 의사결정을 지원합니다." }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-wrap gap-[8px] items-start pt-[8px] relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(BackgroundText2, { text: "Data Analysis" }),
            /* @__PURE__ */ jsx(BackgroundText2, { text: "Business Insights" }),
            /* @__PURE__ */ jsx(BackgroundText2, { text: "Data Warehouse" })
          ] })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-center overflow-clip py-[80px] px-[24px] relative shrink-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[48px] items-center max-w-[1200px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 w-full text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold items-center justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] break-keep w-full", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "산업 특성에 최적화된 맞춤형 시스템 구축" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal items-center justify-center relative shrink-0 text-[16px] md:text-[18px] text-[rgba(85,85,85,0.8)] w-full", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4] break-keep", children: "다년간의 노하우와 최신 기술 스택을 결합하여 귀사의 산업 특성에 최적화된 맞춤형 시스템을 구현합니다." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[4px] items-center relative shrink-0 w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[8.5px] bg-[#2a3142] w-full md:flex-1 h-auto min-h-[120px] relative rounded-[14px]", children: /* @__PURE__ */ jsx(Helper$1, { text: "01", text1: "요구사항 분석", text2: "산업·업무 특성을 고려한 비즈니스 요구사항 분석", additionalClassNames: "size-full p-[20px]" }) }),
          /* @__PURE__ */ jsx(Frame11Helper, { className: "rotate-90 md:rotate-0", children: /* @__PURE__ */ jsx(Svg1, { children: /* @__PURE__ */ jsx("path", { d: "M8 12L16 20L24 12", id: "Vector", stroke: "var(--stroke-0, #2A3142)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.66667" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[8.5px] bg-[#273456] w-full md:flex-1 h-auto min-h-[120px] relative rounded-[14px]", children: /* @__PURE__ */ jsx(Helper$1, { text: "02", text1: "맞춤형 설계", text2: "고객 시스템 환경에 적합한 기술 · 솔루션 · 프레임워크 선정", additionalClassNames: "w-full p-[20px]" }) }),
          /* @__PURE__ */ jsx(Frame11Helper, { className: "rotate-90 md:rotate-0", children: /* @__PURE__ */ jsx(Svg1, { children: /* @__PURE__ */ jsx("path", { d: "M8 12L16 20L24 12", id: "Vector", stroke: "var(--stroke-0, #2A3142)", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: "0.4", strokeWidth: "1.66667" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "backdrop-blur-[8.5px] bg-[#162a62] w-full md:flex-1 h-auto min-h-[120px] relative rounded-[14px]", children: /* @__PURE__ */ jsx(Helper$1, { text: "03", text1: "구축 및 운영", text2: "검증된 기술 기반 맞춤형 시스템 구축·운영", additionalClassNames: "w-full p-[20px]" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] content-stretch flex flex-col gap-[16px] items-start px-[20px] md:px-[32px] py-[32px] md:py-[40px] relative rounded-[30px] shrink-0 w-full max-w-[1200px]", children: [
            /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] max-w-[1200px] relative shrink-0 text-center w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[#333] text-[20px]", style: { fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }, children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: `Proven Tech Stack ` }) }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal not-italic relative shrink-0 text-[#45556c] text-[14px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "고객 환경에 맞춰 검증된 기술 스택을 유연하게 적용합니다." }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "content-stretch grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[32px] h-auto items-start justify-center pt-[24px] relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border-[rgba(42,49,66,0.1)] border-solid border-t inset-0 pointer-events-none" }),
              /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch", children: [
                /* @__PURE__ */ jsx(Heading, { children: `Frontend ` }),
                /* @__PURE__ */ jsxs(Container2$1, { children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "HTML5" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "React" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Vue.js" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Angular" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Bootstrap" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch", children: [
                /* @__PURE__ */ jsx(Heading, { children: `Backend ` }),
                /* @__PURE__ */ jsxs(Container2$1, { children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Java" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Python" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Spring" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Django" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Flask" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Node.js" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch", children: [
                /* @__PURE__ */ jsx(Heading, { children: `Database ` }),
                /* @__PURE__ */ jsxs(Container2$1, { children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Oracle" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "SQL Server" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "MySQL" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "MongoDB" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "PostgreSQL" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch", children: [
                /* @__PURE__ */ jsx(Heading, { children: `Infra / DevOps ` }),
                /* @__PURE__ */ jsxs(Container2$1, { children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "AWS" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Azure" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Docker" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Kubernetes" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Jenkins" }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white min-w-[48px] relative rounded-[10px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Git" }) })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-center relative shrink-0 w-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-auto relative shrink-0 w-full max-w-[605px] flex items-center justify-center px-[24px]", children: /* @__PURE__ */ jsx("div", { className: "w-full relative", children: /* @__PURE__ */ jsx("svg", { className: "block w-full h-auto", fill: "none", viewBox: "0 0 605.506 33.5", children: /* @__PURE__ */ jsx("g", { id: "Frame 12", children: /* @__PURE__ */ jsx("path", { d: svgPaths$1.p3acc1cf1, fill: "var(--fill-0, #2A3142)", fillOpacity: "0.3", id: "Union" }) }) }) }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch grid grid-cols-2 gap-[12px] md:gap-[24px] h-auto items-stretch justify-items-center relative shrink-0 w-full max-w-[1200px]", children: [
            /* @__PURE__ */ jsx(OverlayBorderOverlayBlur, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-[12px] w-full", children: [
              /* @__PURE__ */ jsxs(Svg1, { additionalClassNames: "shrink-0", children: [
                /* @__PURE__ */ jsx("path", { d: svgPaths$1.p2140f00, id: "Vector", stroke: "var(--stroke-0, #666666)", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: "0.8", strokeWidth: "2.66667" }),
                /* @__PURE__ */ jsx("path", { d: "M10.6641 28H21.3307", id: "Vector_2", stroke: "var(--stroke-0, #666666)", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: "0.8", strokeWidth: "2.66667" }),
                /* @__PURE__ */ jsx("path", { d: "M16 22.667V28.0003", id: "Vector_3", stroke: "var(--stroke-0, #666666)", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: "0.8", strokeWidth: "2.66667" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center not-italic relative shrink-0 text-[#101828] text-[14px] md:text-[16px] text-center w-full", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "Desktop UI Architecture" }) })
            ] }) }),
            /* @__PURE__ */ jsx(OverlayBorderOverlayBlur, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-[12px] w-full", children: [
              /* @__PURE__ */ jsxs(Svg1, { additionalClassNames: "shrink-0", children: [
                /* @__PURE__ */ jsx("path", { d: svgPaths$1.pdee8b00, id: "Vector", stroke: "var(--stroke-0, #666666)", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: "0.8", strokeWidth: "2.66667" }),
                /* @__PURE__ */ jsx("path", { d: "M16 24H16.0133", id: "Vector_2", stroke: "var(--stroke-0, #666666)", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: "0.8", strokeWidth: "2.66667" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col font-semibold justify-center not-italic relative shrink-0 text-[#101828] text-[14px] md:text-[16px] text-center w-full", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "Mobile UI Architecture" }) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col items-center relative shrink-0 w-full pt-[32px] md:pt-[40px]", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-center text-white w-full", children: /* @__PURE__ */ jsxs("p", { className: "font-semibold text-[24px] break-keep px-[24px]", children: [
          /* @__PURE__ */ jsx("span", { className: "leading-[1.4] text-[#0f172a]", children: "시스템 구축을 넘어 산업 및 업무 환경에 맞춘 " }),
          /* @__PURE__ */ jsx("span", { className: "leading-[1.4]", children: /* @__PURE__ */ jsx("br", { className: "hidden lg:block", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("span", { className: "bg-clip-text bg-gradient-to-r from-[#1b5cfe] leading-[1.4] text-[transparent] to-[#00d3f2]", children: "성공적인 비즈니스 트랜스포메이션" }),
          /* @__PURE__ */ jsx("span", { className: "leading-[1.4] text-[#0f172a]", children: "을 실현합니다." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "content-start grid grid-cols-3 md:grid-cols-6 gap-[12px] h-auto items-start justify-center relative shrink-0 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(Wrapper4, { children: /* @__PURE__ */ jsx("img", { alt: "", className: "size-full object-cover", src: imgbutton_manufacture }) }),
            /* @__PURE__ */ jsx(Text1, { text: "제조" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(Wrapper4, { children: /* @__PURE__ */ jsx("img", { alt: "", className: "size-full object-cover", src: imgbutton_finance }) }),
            /* @__PURE__ */ jsx(Text1, { text: "금융" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(Wrapper4, { children: /* @__PURE__ */ jsx("img", { alt: "", className: "size-full object-cover", src: imgbutton_distrubution }) }),
            /* @__PURE__ */ jsx(Text1, { text: "유통" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(Wrapper4, { children: /* @__PURE__ */ jsx("img", { alt: "", className: "size-full object-cover", src: imgbutton_telecom }) }),
            /* @__PURE__ */ jsx(Text1, { text: "통신" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(Wrapper4, { children: /* @__PURE__ */ jsx("img", { alt: "", className: "size-full object-cover", src: imgbutton_service }) }),
            /* @__PURE__ */ jsx(Text1, { text: "서비스" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(Wrapper4, { children: /* @__PURE__ */ jsx("img", { alt: "", className: "size-full object-cover", src: imgbutton_public }) }),
            /* @__PURE__ */ jsx(Text1, { text: "공공" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] content-stretch flex flex-col gap-[32px] items-center py-[80px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center w-full px-[24px]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: `주요 프로젝트 ` }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center relative shrink-0 text-[#334155] text-[16px] md:text-[18px] break-keep", style: { fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }, children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: `다양한 산업군에서 성공적인 디지털 트랜스포메이션을 이끌어왔습니다. ` }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "gap-x-[16px] gap-y-[16px] grid grid-cols-1 md:grid-cols-3 items-stretch max-w-[1200px] relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2025" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG전자 차세대 ERP 구축", text1: "차세대 ERP(생산/재경) 구축 참여" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "ERP" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "생산" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "재경" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2025" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG전자 커머스 플랫폼 운영", text1: "LG.com 글로벌 커머스 플랫폼 운영" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "e커머스" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "글로벌" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "플랫폼" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2025" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG CNS CDP 솔루션 및 SINGLEX 운영", text1: "고객 데이터 플랫폼(CDP) 솔루션 개발 및 SINGLEX UAS/HR 시스템 운영" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "CDP" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "SINGLEX" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "HR" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2025" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG에너지솔루션 품질시스템 고도화", text1: "품질 시스템 고도화 및 소재 개발 Workplace 구축" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "품질관리" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "Workplace" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "고도화" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2025" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG이노텍 차세대 ERP 분석/설계", text1: "차세대 ERP 구축 분석/설계 및 ERP 재무 모듈 운영" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "ERP" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "차세대" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "분석/설계" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2025" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LIG넥스원 Oracle ERP HR 컨설팅", text1: "Oracle ERP HR 경량화 컨설팅 및 시스템 개발" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "ERP" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "HR" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2025" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG생활건강 경영관리시스템 고도화", text1: "전사 경영관리 시스템 기능 고도화 수행" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "경영관리시스템" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "고도화" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2024" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG전자 ERP 운영/유지보수", text1: "LG전자 ERP 재무, 공통 모듈 운영 및 유지보수" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "ERP" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "재무" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "운영/유지보수" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2024" }),
            /* @__PURE__ */ jsx(Helper1, { text: "LG CNS 데이터 파이프라인 관리", text1: "DATA 파이프라인 관리 및 고객 데이터 플랫폼 운영/기술지원" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "DATA" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "CDP" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(AnimatePresence, { children: showMore && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.4, ease: "easeInOut" },
          className: "overflow-hidden w-full flex justify-center",
          children: /* @__PURE__ */ jsxs("div", { className: "gap-x-[16px] gap-y-[16px] grid grid-cols-1 md:grid-cols-3 items-stretch max-w-[1200px] relative shrink-0 w-full mt-[16px] pb-[16px]", children: [
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2024" }),
                /* @__PURE__ */ jsx(Helper1, { text: "LG에너지솔루션 품질시스템 고도화", text1: "양산 품질, 협력사 품질 Data 관리 고도화" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "품질관리" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "고도화" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2024" }),
                /* @__PURE__ */ jsx(Helper1, { text: "LG화학 시스템 고도화", text1: "물동 관리 시스템 기능 개선" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "물류관리" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "고도화" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2024" }),
                /* @__PURE__ */ jsx(Helper1, { text: "LX세미콘 ERP 운영/유지보수", text1: "LX세미콘 ERP 영업, 생산 모듈 운영 및 유지보수" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "ERP" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "영업" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "생산" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2023" }),
                /* @__PURE__ */ jsx(Helper1, { text: "LG전자 차세대 ERP 개발", text1: "LG전자 차세대 ERP 관세환급 개발 및 재무, 공통 모듈 운영" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "ERP" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "재무" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "관세환급" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2023" }),
                /* @__PURE__ */ jsx(Helper1, { text: "LG이노텍 ERP 운영/유지보수", text1: "LG이노텍 ERP 재무 모듈 운영 및 세무조정 고도화 DB 개발" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "ERP" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "재무" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "DB" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2023" }),
                /* @__PURE__ */ jsx(Helper1, { text: "법무부 형사사법정보시스템 유지보수", text1: "형사사법정보시스템 유지보수" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "법무부" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "유지보수" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2022" }),
                /* @__PURE__ */ jsx(Helper1, { text: "LX판토스 차세대 시스템 구축", text1: "LX판토스 차세대 포워딩 시스템 구축" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "물류" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "차세대" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2022" }),
                /* @__PURE__ */ jsx(Helper1, { text: "LG유플러스 콘텐츠 관리 시스템 고도화", text1: "LG유플러스 콘텐츠 관리 시스템, UCube 시스템 구축" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "콘텐츠 관리" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "고도화" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "텔레콤" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Container40CardProject, { additionalClassNames: "h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap", children: "2022" }),
                /* @__PURE__ */ jsx(Helper1, { text: "히타치엘지 데이터스토리지 운영/유지보수", text1: "MES 시스템 운영 및 유지보수" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[12px] w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[7px] items-start relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "MES" }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0", children: /* @__PURE__ */ jsx(Text, { text: "운영/유지보수" }) })
              ] })
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => setShowMore(!showMore),
          className: "bg-black content-stretch flex gap-[12px] items-center overflow-clip px-[48px] py-[20px] relative rounded-[999px] shrink-0 cursor-pointer hover:bg-[#1a1a1a] transition-colors",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center relative shrink-0", children: /* @__PURE__ */ jsx("div", { className: clsx("flex-none transition-transform", showMore ? "" : "rotate-180"), children: /* @__PURE__ */ jsx("div", { className: "relative size-[20px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("g", { id: "keyboard_arrow_up", children: /* @__PURE__ */ jsx("path", { d: svgPaths$1.p31396200, fill: "var(--fill-0, white)", id: "icon" }) }) }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[24px]", children: showMore ? "접기" : "더 보기" }) })
          ]
        }
      )
    ] })
  ] });
}
const meta$1 = () => [{
  title: "솔루션 | 더비소프트(TheBeeSoft)"
}, {
  name: "description",
  content: "ERP 구축부터 시스템 고도화까지, 귀사의 경쟁력을 높여줄 더비소프트의 IT 솔루션과 시스템 구축 서비스를 소개합니다."
}];
const Solutions = UNSAFE_withComponentProps(function Solutions2() {
  return /* @__PURE__ */ jsx(motion.div, {
    initial: false,
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    },
    className: "bg-white content-stretch flex flex-col items-center relative size-full",
    children: /* @__PURE__ */ jsx(SolutionsContent, {})
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Solutions,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const svgPaths = {
  p11b86180: "M15 7V5C15 3.93913 14.5786 2.92172 13.8284 2.17157C13.0783 1.42143 12.0609 1 11 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V7",
  p13e21ac0: "M1 4C1 5.5913 1.63214 7.11742 2.75736 8.24264C3.88258 9.36786 5.4087 10 7 10C8.5913 10 10.1174 9.36786 11.2426 8.24264C12.3679 7.11742 13 5.5913 13 4V1",
  p15891e00: "M20.4188 6.92236C20.5978 6.84338 20.7498 6.71363 20.8558 6.54916C20.9617 6.3847 21.0172 6.19275 21.0151 5.99709C21.0131 5.80144 20.9537 5.61068 20.8444 5.44844C20.735 5.2862 20.5804 5.15961 20.3998 5.08436L11.8288 1.18036C11.5683 1.06151 11.2852 1 10.9988 1C10.7124 1 10.4294 1.06151 10.1688 1.18036L1.59882 5.08036C1.42079 5.15833 1.26934 5.28649 1.16299 5.44917C1.05664 5.61185 1 5.802 1 5.99636C1 6.19072 1.05664 6.38086 1.16299 6.54354C1.26934 6.70622 1.42079 6.83438 1.59882 6.91236L10.1688 10.8204C10.4294 10.9392 10.7124 11.0007 10.9988 11.0007C11.2852 11.0007 11.5683 10.9392 11.8288 10.8204L20.4188 6.92236Z",
  p19976900: "M4.00024 6.87024V4.87024C3.99958 3.98397 3.7046 3.12301 3.16161 2.42256C2.61862 1.7221 1.85837 1.22181 1.00024 1.00024",
  p1ac06600: "M0 14C0 6.26801 6.26801 0 14 0H34C41.732 0 48 6.26801 48 14V34C48 41.732 41.732 48 34 48H14C6.26801 48 0 41.732 0 34V14Z",
  p1b764040: "M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z",
  p1e545d00: "M25.3337 16V25.3333C25.3337 26.0406 25.0527 26.7189 24.5526 27.219C24.0525 27.719 23.3742 28 22.667 28H9.33366C8.62641 28 7.94814 27.719 7.44804 27.219C6.94794 26.7189 6.66699 26.0406 6.66699 25.3333V16",
  p25b06500: "M4 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7V3C13 2.46957 12.7893 1.96086 12.4142 1.58579C12.0391 1.21071 11.5304 1 11 1H10",
  p26770600: "M1 1V4.5C1 5.29565 1.63214 6.05871 2.75736 6.62132C3.88258 7.18393 5.4087 7.5 7 7.5C8.5913 7.5 10.1174 7.18393 11.2426 6.62132C12.3679 6.05871 13 5.29565 13 4.5V1",
  p278361f0: "M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z",
  p27bfab00: "M21.3333 26.1053C21.3333 28.7853 22.4571 31.3557 24.4575 33.2508C26.4579 35.1459 29.171 36.2105 32 36.2105M21.3333 26.1053C21.3333 23.4252 22.4571 20.8549 24.4575 18.9598C26.4579 17.0647 29.171 16 32 16M21.3333 26.1053H42.6667M32 36.2105C34.829 36.2105 37.5421 35.1459 39.5425 33.2508C41.5429 31.3557 42.6667 28.7853 42.6667 26.1053M32 36.2105C34.3698 35.6497 35.5556 32.2813 35.5556 26.1053C35.5556 19.9293 34.3698 16.5608 32 16M32 36.2105C29.6302 35.6497 28.4444 32.2813 28.4444 26.1053C28.4444 19.9293 29.6302 16.5608 32 16M32 36.2105V41.2632M42.6667 26.1053C42.6667 23.4252 41.5429 20.8549 39.5425 18.9598C37.5421 17.0647 34.829 16 32 16M16 44.6316H28.4444M28.4444 44.6316C28.4444 45.5249 28.819 46.3817 29.4858 47.0134C30.1526 47.6451 31.057 48 32 48C32.943 48 33.8474 47.6451 34.5142 47.0134C35.181 46.3817 35.5556 45.5249 35.5556 44.6316M28.4444 44.6316C28.4444 43.7382 28.819 42.8814 29.4858 42.2497C30.1526 41.618 31.057 41.2632 32 41.2632M35.5556 44.6316H48M35.5556 44.6316C35.5556 43.7382 35.181 42.8814 34.5142 42.2497C33.8474 41.618 32.943 41.2632 32 41.2632",
  p28ecba80: "M16 0.5H48C56.5604 0.5 63.5 7.43959 63.5 16V48C63.5 56.5604 56.5604 63.5 48 63.5H16C7.43959 63.5 0.5 56.5604 0.5 48V16C0.5 7.43959 7.43959 0.5 16 0.5Z",
  p29500900: "M1.00024 1.00024C1.86066 1.22054 2.62328 1.72094 3.16788 2.42255C3.71248 3.12416 4.00808 3.98707 4.00808 4.87524C4.00808 5.76341 3.71248 6.62632 3.16788 7.32793C2.62328 8.02954 1.86066 8.52994 1.00024 8.75024",
  p2e3a3800: "M4.00033 24C3.6467 24 3.30756 23.8595 3.05752 23.6095C2.80747 23.3594 2.66699 23.0203 2.66699 22.6667V5.33333C2.66699 4.97971 2.80747 4.64057 3.05752 4.39052C3.30756 4.14048 3.6467 4 4.00033 4H10.667C12.0815 4 13.438 4.5619 14.4382 5.5621C15.4384 6.56229 16.0003 7.91885 16.0003 9.33333C16.0003 7.91885 16.5622 6.56229 17.5624 5.5621C18.5626 4.5619 19.9192 4 21.3337 4H28.0003C28.3539 4 28.6931 4.14048 28.9431 4.39052C29.1932 4.64057 29.3337 4.97971 29.3337 5.33333V22.6667C29.3337 23.0203 29.1932 23.3594 28.9431 23.6095C28.6931 23.8595 28.3539 24 28.0003 24H20.0003C18.9395 24 17.922 24.4214 17.1719 25.1716C16.4218 25.9217 16.0003 26.9391 16.0003 28C16.0003 26.9391 15.5789 25.9217 14.8288 25.1716C14.0786 24.4214 13.0612 24 12.0003 24H4.00033Z",
  p2ea4dd00: "M26.6667 10.6667H5.33333C4.59695 10.6667 4 11.2636 4 12V14.6667C4 15.403 4.59695 16 5.33333 16H26.6667C27.403 16 28 15.403 28 14.6667V12C28 11.2636 27.403 10.6667 26.6667 10.6667Z",
  p31e16900: "M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",
  p37146800: "M8.75027 1.00027C9.69558 1.3527 10.5368 1.9378 11.196 2.70147C11.8553 3.46514 12.3113 4.38271 12.522 5.36934C12.7327 6.35597 12.6912 7.37979 12.4013 8.34612C12.1115 9.31245 11.5826 10.1901 10.8637 10.8979C10.1448 11.6057 9.25899 12.1208 8.28826 12.3955C7.31752 12.6702 6.29317 12.6958 5.30996 12.4697C4.32674 12.2437 3.41639 11.7734 2.6631 11.1023C1.90981 10.4312 1.33791 9.58096 1.00027 8.63027",
  p371e6400: "M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z",
  p7762d80: "M10.0003 10.6668C9.11627 10.6668 8.26842 10.3156 7.6433 9.69045C7.01818 9.06533 6.66699 8.21748 6.66699 7.33343C6.66699 6.44937 7.01818 5.60153 7.6433 4.97641C8.26842 4.35128 9.11627 4.00009 10.0003 4.00009C11.2866 3.97768 12.547 4.60177 13.6173 5.79098C14.6876 6.98018 15.518 8.6793 16.0003 10.6668C16.4826 8.6793 17.3131 6.98018 18.3833 5.79098C19.4536 4.60177 20.7141 3.97768 22.0003 4.00009C22.8844 4.00009 23.7322 4.35128 24.3573 4.97641C24.9825 5.60153 25.3337 6.44937 25.3337 7.33343C25.3337 8.21748 24.9825 9.06533 24.3573 9.69045C23.7322 10.3156 22.8844 10.6668 22.0003 10.6668",
  p79e4000: "M12.0003 14.6667C14.9458 14.6667 17.3337 12.2789 17.3337 9.33333C17.3337 6.38781 14.9458 4 12.0003 4C9.05481 4 6.66699 6.38781 6.66699 9.33333C6.66699 12.2789 9.05481 14.6667 12.0003 14.6667Z",
  p8c3e000: "M23.5064 31.3941L16.0064 23.5543C15.5117 23.0462 15.122 22.4355 14.862 21.7607C14.6019 21.0859 14.477 20.3615 14.4951 19.6332C14.5133 18.905 14.6742 18.1886 14.9676 17.5291C15.261 16.8697 15.6805 16.2815 16.1999 15.8016C16.7192 15.3217 17.3271 14.9605 17.9852 14.7408C18.6433 14.521 19.3374 14.4475 20.0238 14.5248C20.7101 14.602 21.3739 14.8285 21.9733 15.1898C22.5727 15.5511 23.0947 16.0395 23.5064 16.6242C23.9065 16.0683 24.4071 15.6016 24.9792 15.2513C25.5513 14.901 26.1837 14.674 26.8395 14.5834C27.4954 14.4928 28.1617 14.5405 28.8 14.7237C29.4383 14.9068 30.0358 15.2218 30.5579 15.6504C31.08 16.079 31.5164 16.6127 31.8417 17.2206C32.167 17.8284 32.3748 18.4984 32.4531 19.1916C32.5314 19.8848 32.4785 20.5875 32.2977 21.259C32.1168 21.9305 31.8115 22.5575 31.3994 23.1036M30.5066 33.505V27.1724M30.5066 27.1724L33.5066 30.3387M30.5066 27.1724L27.5066 30.3387",
  p9c04210: "M21.3337 28V25.3333C21.3337 23.9188 20.7718 22.5623 19.7716 21.5621C18.7714 20.5619 17.4148 20 16.0003 20H8.00033C6.58584 20 5.22928 20.5619 4.22909 21.5621C3.2289 22.5623 2.66699 23.9188 2.66699 25.3333V28",
  pafef4f0: "M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z",
  pb08b100: "M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z",
  pb60700: "M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
};
const imgSection = "/assets/desk-CLfWTf0E.png";
const desk = "/assets/desk-CLfWTf0E.png";
function Container3({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-[#f9fafb] flex-[1_0_auto] md:flex-1 w-full min-h-[140px] md:h-[157.333px] relative rounded-[24px]", children: /* @__PURE__ */ jsx("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid flex flex-col gap-[8px] items-center justify-center relative size-full p-4", children }) });
}
function Container2({ children, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: "hover",
      className: clsx("backdrop-blur-[12px] bg-[rgba(255,255,255,0.7)] h-full justify-self-stretch relative rounded-[16px] shrink-0 cursor-default", additionalClassNames),
      children: /* @__PURE__ */ jsx("div", { className: "content-stretch flex flex-col gap-[16px] items-start p-[24px] relative h-full w-full", children })
    }
  );
}
function Container1({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-[rgba(194,204,224,0.5)] relative rounded-[14px] shrink-0 size-[48px]", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: {
        hover: {
          y: [0, -4, 0],
          transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
        }
      },
      className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full",
      children
    }
  ) });
}
function Wrapper2({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "absolute h-[78px] left-[24px] top-[144px] sm:top-[172.67px] w-[calc(100%-48px)]", children: /* @__PURE__ */ jsx("p", { className: "absolute font-normal leading-[26px] left-0 not-italic text-[#4b5563] text-[16px] top-[-0.67px] w-full", children }) });
}
function Wrapper1({ children, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: additionalClassNames, children: /* @__PURE__ */ jsx("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid relative size-full", children }) });
}
function Vector({ children, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("absolute", additionalClassNames), children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-8.33%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 14 14", children }) }) });
}
function Icon({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[32px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 32 32", children: /* @__PURE__ */ jsx("g", { id: "Icon", children }) }) });
}
function Container() {
  return /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[24px]", children: /* @__PURE__ */ jsx("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full", children: /* @__PURE__ */ jsxs("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-1px_-7.14%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 16 2", children: /* @__PURE__ */ jsx("path", { d: "M1 1H15", id: "Vector", stroke: "var(--stroke-0, #D1D5DC)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-7.14%_-14.29%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 9 16", children: /* @__PURE__ */ jsx("path", { d: "M1 1L8 8L1 15", id: "Vector", stroke: "var(--stroke-0, #D1D5DC)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })
  ] }) }) });
}
function HeadingText2({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "font-bold leading-[1.2] text-[#111827] text-[18px] sm:text-[20px] text-center whitespace-nowrap", children: text }) });
}
function Icon9Vector({ additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("absolute", additionalClassNames), children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-50%_-1px]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 2 4", children: /* @__PURE__ */ jsx("path", { d: "M1 1V3", id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) });
}
function Icon8Vector({ additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("absolute bottom-3/4 top-[8.33%]", additionalClassNames), children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-25%_-1px]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 2 6", children: /* @__PURE__ */ jsx("path", { d: "M1 1V5", id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) });
}
function HeadingText1({ text, additionalClassNames = "" }) {
  return /* @__PURE__ */ jsx(Wrapper1, { additionalClassNames: clsx("h-[28px] relative shrink-0", additionalClassNames), children: /* @__PURE__ */ jsx("p", { className: "absolute font-bold leading-[28px] left-0 not-italic text-[#111827] text-[18px] top-[-0.33px] whitespace-nowrap", children: text }) });
}
function ParagraphText({ text }) {
  return /* @__PURE__ */ jsx(Wrapper2, { children: text });
}
function HeadingText({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "absolute h-[32px] left-[24px] top-[104px] sm:top-[128.67px] w-[calc(100%-48px)]", children: /* @__PURE__ */ jsx("p", { className: "absolute font-bold leading-[32px] left-0 not-italic text-[#111827] text-[20px] md:text-[24px] top-[-0.67px] whitespace-nowrap", children: text }) });
}
function Helper({ text, text1 }) {
  return /* @__PURE__ */ jsx("div", { className: "relative shrink-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start not-italic relative w-full", children: [
    /* @__PURE__ */ jsx("p", { className: "font-bold leading-[28px] relative shrink-0 text-[#111827] text-[18px] whitespace-nowrap w-[70px]", children: text }),
    /* @__PURE__ */ jsx("p", { className: "flex-[1_0_0] font-normal leading-[1.6] min-h-px min-w-0 relative text-[#4b5563] text-[14px] break-all", children: text1 })
  ] }) });
}
function CareersContent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#f8f9fa] content-stretch flex flex-col gap-[56px] min-h-[550px] h-auto items-center justify-center overflow-clip pt-[140px] pb-[60px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden z-0", children: [
        /* @__PURE__ */ jsx("video", { autoPlay: true, className: "absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", loop: true, playsInline: true, muted: true, children: /* @__PURE__ */ jsx("source", { src: `${"/"}videos/talent_video_short.mp4`, type: "video/mp4" }) }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute bg-[#0f172a] inset-0 mix-blend-color z-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-[17px] bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center p-[32px] md:p-[48px] relative rounded-[32px] shrink-0 w-full max-w-[480px] lg:max-w-none lg:w-max z-10", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none rounded-[32px] shadow-[0px_5px_30px_0px_rgba(0,0,0,0.13)]" }),
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center text-white w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0 font-extrabold justify-center leading-[1.3] relative shrink-0 text-[32px] md:text-[56px] break-keep", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-0", children: "모여서 만드는 지혜," }),
            /* @__PURE__ */ jsx("p", { children: "나누는 가치" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center leading-[1.4] opacity-80 relative shrink-0 text-[16px] md:text-[20px] break-keep", children: /* @__PURE__ */ jsx("p", { children: `더비소프트의 철학은 언제나 '사람'을 향합니다.` }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "values", className: "bg-white relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center size-full", children: /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[32px] items-center px-[24px] py-[80px] relative w-full max-w-[1200px] mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: `더비소프트는 이런 진심을 가지고 있습니다. ` }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: `채용부터 성장, 일하는 즐거움, 성과의 공유까지 구성원의 모든 여정을 세심하게 살피려고 합니다. ` }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch gap-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center relative shrink-0 w-full max-w-[1200px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[24px] p-px rounded-[16px] size-[64px] top-[24px] sm:top-[40.67px]", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" }),
            /* @__PURE__ */ jsxs(Icon, { children: [
              /* @__PURE__ */ jsx("path", { d: svgPaths.p9c04210, id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" }),
              /* @__PURE__ */ jsx("path", { d: svgPaths.p79e4000, id: "Vector_2", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" }),
              /* @__PURE__ */ jsx("path", { d: "M25.333 10.6667V18.6667", id: "Vector_3", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" }),
              /* @__PURE__ */ jsx("path", { d: "M29.333 14.6667H21.333", id: "Vector_4", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(HeadingText, { text: "잘 뽑고" }),
          /* @__PURE__ */ jsx(ParagraphText, { text: "기술만큼이나, 함께 일하는 즐거움을 중요하게 생각하는 사람인지를 면접 단계에서부터 세심하게 살펴봅니다." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[24px] p-px rounded-[16px] size-[64px] top-[24px] sm:top-[40.67px]", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" }),
            /* @__PURE__ */ jsxs(Icon, { children: [
              /* @__PURE__ */ jsx("path", { d: "M16 9.33333V28", id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" }),
              /* @__PURE__ */ jsx("path", { d: svgPaths.p2e3a3800, id: "Vector_2", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(HeadingText, { text: "잘 교육하고" }),
          /* @__PURE__ */ jsx(Wrapper2, { children: `멘토 제도를 시작으로 사내 학습 소모임 등을 통해 최신의 IT 기술과 업무 역량을 쌓을 수 있는 다양한 교육제도를 운영합니다. ` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-[24px] size-[64px] top-[24px] sm:top-[40.67px]", children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 64 64", children: /* @__PURE__ */ jsxs("g", { id: "Container", children: [
            /* @__PURE__ */ jsx("path", { d: svgPaths.p278361f0, fill: "var(--fill-0, #FFF2F2)" }),
            /* @__PURE__ */ jsx("path", { d: svgPaths.p28ecba80, stroke: "var(--stroke-0, #FF6000)", strokeOpacity: "0.2" }),
            /* @__PURE__ */ jsx("path", { d: svgPaths.p27bfab00, id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
          ] }) }) }),
          /* @__PURE__ */ jsx(HeadingText, { text: "즐겁게 일하고" }),
          /* @__PURE__ */ jsx(ParagraphText, { text: "수평적인 조직문화 속에서 몰입과 즐거움이 공존할 수 있도록 다양한 사내 이벤트를 운영합니다." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[24px] p-px rounded-[16px] size-[64px] top-[24px] sm:top-[40.67px]", children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" }),
            /* @__PURE__ */ jsxs(Icon, { children: [
              /* @__PURE__ */ jsx("path", { d: svgPaths.p2ea4dd00, id: "Vector", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" }),
              /* @__PURE__ */ jsx("path", { d: "M16 10.6667V28", id: "Vector_2", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" }),
              /* @__PURE__ */ jsx("path", { d: svgPaths.p1e545d00, id: "Vector_3", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" }),
              /* @__PURE__ */ jsx("path", { d: svgPaths.p7762d80, id: "Vector_4", stroke: "var(--stroke-0, #FF6000)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.66667" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(HeadingText, { text: "잘 나눈다" }),
          /* @__PURE__ */ jsx("div", { className: "absolute h-[78px] left-[24px] top-[144px] sm:top-[173px] w-[calc(100%-48px)]", children: /* @__PURE__ */ jsx("p", { className: "absolute font-normal leading-[26px] left-0 text-[#4b5563] text-[16px] top-[-1px] w-full", children: `'함께 만든 성과를 함께 나눈다'는 믿음으로, 구성원의 노력과 열정이 정당하게 보상받는 문화를 만들어갑니다. ` }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { id: "culture", className: "content-stretch flex flex-col gap-[32px] items-center overflow-clip py-[120px] px-[24px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsx("img", { alt: "", className: "absolute max-w-none object-cover size-full", src: imgSection }),
        /* @__PURE__ */ jsx("div", { className: "absolute bg-[rgba(0,0,0,0.3)] inset-0" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "-translate-x-1/2 absolute h-[1047px] left-1/2 top-[-189.33px] w-full", children: /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsx("img", { alt: "", className: "absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full", src: desk }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute backdrop-blur-[5px] bg-[rgba(175,190,209,0.5)] inset-0" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] relative shrink-0 text-center w-full z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[28px] md:text-[32px] text-black", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: `일의 성취와 즐거움이 조화를 이루는 조직문화를 만들어 가고 있습니다. ` }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center not-italic relative shrink-0 text-[#555] text-[16px] md:text-[18px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "구성원의 행복이 곧 더비소프트의 경쟁력입니다." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "gap-x-[24px] gap-y-[24px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] relative shrink-0 w-full z-10", children: [
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(Container1, { children: /* @__PURE__ */ jsxs("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx(Vector, { additionalClassNames: "inset-[8.33%_41.67%_41.67%_8.33%]", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p31e16900, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[43.21%_8.36%_8.37%_43.08%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-8.61%_-8.58%_-8.6%_-8.58%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 13.6543 13.6223", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p37146800, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-[58.33%] left-[29.17%] right-[66.67%] top-1/4", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-25%_-100%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 3 6", children: /* @__PURE__ */ jsx("path", { d: "M1 1H2V5", id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[57.83%_27.46%_27.46%_60.79%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-28.33%_-35.46%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 4.82 5.53", children: /* @__PURE__ */ jsx("path", { d: "M3.12 1L3.82 1.71L1 4.53", id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })
            ] }) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "성과 보상", additionalClassNames: "w-[66.375px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "프로젝트 성과금, 우수 사원 포상, 장기 근속 포상(5/10/15년)을 지급합니다." })
        ] }),
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(Container1, { children: /* @__PURE__ */ jsxs("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[8.33%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-5%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 22 22", children: /* @__PURE__ */ jsx("path", { d: svgPaths.pb60700, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-12.5%_-25.01%_-12.5%_-25%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 6.00022 10.0002", children: /* @__PURE__ */ jsx("path", { d: "M1 1V7L5 9", id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })
            ] }) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "워라밸 보장", additionalClassNames: "w-[81.938px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "주 52시간 준수, 자유로운 연차 사용, 정시 퇴근 문화를 지향합니다." })
        ] }),
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(Container1, { children: /* @__PURE__ */ jsxs("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[20.83%_8.27%_37.5%_8.34%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-10%_-5%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 22.0152 12.0007", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p15891e00, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[41.67%_8.33%_33.33%_91.67%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-16.67%_-1px]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 2 8", children: /* @__PURE__ */ jsx("path", { d: "M1 1V7", id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-15.38%_-8.33%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 14 8.5", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p26770600, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })
            ] }) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "자기 계발", additionalClassNames: "w-[66.375px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "도서 구입비, 자격증 취득 비용, 사내외 교육 및 스터디 활동을 지원합니다." })
        ] }),
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(Container1, { children: /* @__PURE__ */ jsx("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[12.5%_8.33%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-5.56%_-5%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 22 20", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p1b764040, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }) }) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "가족 친화", additionalClassNames: "w-[66.375px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "자녀 학자금, 출산 축하금, 각종 경조사비 및 경조 휴가를 지원합니다." })
        ] }),
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(Container1, { children: /* @__PURE__ */ jsxs("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx(Icon9Vector, { additionalClassNames: "inset-[8.33%_54.17%_83.33%_45.83%]" }),
              /* @__PURE__ */ jsx(Icon9Vector, { additionalClassNames: "inset-[8.33%_79.17%_83.33%_20.83%]" }),
              /* @__PURE__ */ jsx(Vector, { additionalClassNames: "inset-[12.5%_41.67%_37.5%_8.33%]", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p25b06500, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-[12.5%] left-[33.33%] right-[16.67%] top-1/2", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-11.11%_-8.33%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 14 11", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p13e21ac0, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/2 left-3/4 right-[8.33%] top-[33.33%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-25%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 6 6", children: /* @__PURE__ */ jsx("path", { d: svgPaths.pafef4f0, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })
            ] }) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "건강 검진", additionalClassNames: "w-[66.375px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "임직원의 건강 관리를 위해 가족 1인을 포함한 종합 건강 검진을 지원합니다." })
        ] }),
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(Container1, { children: /* @__PURE__ */ jsxs("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx(Icon8Vector, { additionalClassNames: "left-[33.33%] right-[66.67%]" }),
              /* @__PURE__ */ jsx(Icon8Vector, { additionalClassNames: "left-[66.67%] right-[33.33%]" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[16.67%_12.5%_8.33%_12.5%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-5.56%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p371e6400, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[41.67%_12.5%_58.33%_12.5%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-1px_-5.56%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 20 2", children: /* @__PURE__ */ jsx("path", { d: "M1 1H19", id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })
            ] }) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "리프레시", additionalClassNames: "w-[62.229px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "창립기념일 휴무, 노동절 휴무, 워크샵 및 체육대회로 활력을 충전합니다." })
        ] }),
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx(Container1, { children: /* @__PURE__ */ jsxs("div", { className: "h-[24px] overflow-clip relative shrink-0 w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[62.5%_33.33%_12.5%_8.33%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-16.67%_-7.14%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 16 8", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p11b86180, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[12.5%_45.83%_54.17%_20.83%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-12.5%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 10 10", children: /* @__PURE__ */ jsx("path", { d: svgPaths.pb08b100, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[63.04%_8.33%_12.5%_79.17%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 5.00024 7.87024", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p19976900, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[13.04%_20.8%_54.67%_66.67%]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[-12.91%_-33.25%]", children: /* @__PURE__ */ jsx("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 5.00808 9.75048", children: /* @__PURE__ */ jsx("path", { d: svgPaths.p29500900, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }) })
            ] }) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "동호회 지원", additionalClassNames: "w-[81.938px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "취미 활동을 공유하는 사내 동호회 운영비 및 활동을 적극 지원합니다." })
        ] }),
        /* @__PURE__ */ jsxs(Container2, { children: [
          /* @__PURE__ */ jsxs("div", { className: "content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "relative shrink-0 size-[48px]", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                variants: {
                  hover: {
                    y: [0, -4, 0],
                    transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                  }
                },
                className: "size-full",
                children: /* @__PURE__ */ jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 48 48", children: /* @__PURE__ */ jsxs("g", { id: "Container", children: [
                  /* @__PURE__ */ jsx("path", { d: svgPaths.p1ac06600, fill: "var(--fill-0, #C2CCE0)", fillOpacity: "0.5" }),
                  /* @__PURE__ */ jsx("path", { d: svgPaths.p8c3e000, id: "Vector", stroke: "var(--stroke-0, #364153)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
                ] }) })
              }
            ) }),
            /* @__PURE__ */ jsx(HeadingText1, { text: "지역사회 기부", additionalClassNames: "w-[68.906px]" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full", children: "임직원이 참여하는 기부 활동을 통해 지역사회에 선한 영향력을 전합니다." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "process", className: "bg-white content-stretch flex flex-col gap-[30px] items-center px-[24px] py-[80px] relative shrink-0 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[32px] items-center max-w-[896px] relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] whitespace-nowrap", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "채용 프로세스" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px] max-w-[487px]", children: /* @__PURE__ */ jsx("p", { className: "leading-[1.4]", children: "더비소프트의 가족이 되는 과정을 안내해 드립니다." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:flex md:flex-row gap-[16px] items-stretch md:items-center relative shrink-0 w-full max-w-[896px]", children: [
          /* @__PURE__ */ jsx(Container3, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-[4px]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center", children: "01" }),
            /* @__PURE__ */ jsx(HeadingText2, { text: "서류전형" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center", children: /* @__PURE__ */ jsx(Container, {}) }),
          /* @__PURE__ */ jsx(Container3, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-[4px]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center", children: "02" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "font-bold leading-[1.2] text-[#111827] text-[18px] sm:text-[20px] text-center whitespace-nowrap", children: "1차면접" }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center", children: /* @__PURE__ */ jsx(Container, {}) }),
          /* @__PURE__ */ jsx(Container3, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-[4px]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center", children: "03" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "font-bold leading-[1.2] text-[#111827] text-[18px] sm:text-[20px] text-center whitespace-nowrap", children: "2차면접" }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center", children: /* @__PURE__ */ jsx(Container, {}) }),
          /* @__PURE__ */ jsx(Container3, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-[4px]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center", children: "04" }),
            /* @__PURE__ */ jsx(HeadingText2, { text: "최종합격" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#f9fafb] content-stretch flex flex-col gap-[13px] items-start px-[24px] md:px-[40px] py-[24px] relative rounded-[24px] shrink-0 w-full max-w-[420px]", children: [
        /* @__PURE__ */ jsx(Helper, { text: "지원방법", text1: "E-mail 접수" }),
        /* @__PURE__ */ jsx(Helper, { text: "제출서류", text1: "이력서, 자기소개서" }),
        /* @__PURE__ */ jsx(Helper, { text: "채용문의", text1: "recruit@thebeesoft.com" })
      ] })
    ] })
  ] });
}
const meta = () => [{
  title: "인재채용 | 더비소프트(TheBeeSoft)"
}, {
  name: "description",
  content: "채용부터 성장, 일하는 즐거움, 성과의 공유까지 구성원의 모든 여정을 세심하게 살피는 더비소프트의 진심을 확인해 보십시요."
}];
const Careers = UNSAFE_withComponentProps(function Careers2() {
  return /* @__PURE__ */ jsx(motion.div, {
    initial: false,
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    },
    className: "bg-white content-stretch flex flex-col items-center relative size-full",
    children: /* @__PURE__ */ jsx(CareersContent, {})
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Careers,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-oCtYSlOv.js", "imports": ["/assets/chunk-UVKPFVEO-CQAnADNe.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/root-DNJyEk-d.js", "imports": ["/assets/chunk-UVKPFVEO-CQAnADNe.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "components/Layout": { "id": "components/Layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/Layout-D-bU6Q7l.js", "imports": ["/assets/chunk-UVKPFVEO-CQAnADNe.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/Home": { "id": "pages/Home", "parentId": "components/Layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/Home-CR_RYCt1.js", "imports": ["/assets/chunk-UVKPFVEO-CQAnADNe.js", "/assets/clsx-pRV64KDS.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/About": { "id": "pages/About", "parentId": "components/Layout", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/About-BMiLhuAZ.js", "imports": ["/assets/chunk-UVKPFVEO-CQAnADNe.js", "/assets/clsx-pRV64KDS.js", "/assets/index-D9KPfNwa.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/Solutions": { "id": "pages/Solutions", "parentId": "components/Layout", "path": "solutions", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/Solutions-B0TLpXkg.js", "imports": ["/assets/chunk-UVKPFVEO-CQAnADNe.js", "/assets/clsx-pRV64KDS.js", "/assets/index-D9KPfNwa.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/Careers": { "id": "pages/Careers", "parentId": "components/Layout", "path": "careers", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/Careers-CqImFZnP.js", "imports": ["/assets/chunk-UVKPFVEO-CQAnADNe.js", "/assets/clsx-pRV64KDS.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-1797f0db.js", "version": "1797f0db", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_passThroughRequests": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "unstable_previewServerPrerendering": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = ["/", "/about", "/solutions", "/careers"];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "components/Layout": {
    id: "components/Layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "pages/Home": {
    id: "pages/Home",
    parentId: "components/Layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "pages/About": {
    id: "pages/About",
    parentId: "components/Layout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "pages/Solutions": {
    id: "pages/Solutions",
    parentId: "components/Layout",
    path: "solutions",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "pages/Careers": {
    id: "pages/Careers",
    parentId: "components/Layout",
    path: "careers",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
