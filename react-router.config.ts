import type { Config } from "@react-router/dev/config";

export default {
  // SSR 활성화 (SSG를 위해 필요)
  ssr: true,
  // 미리 생성할 정적 경로들
  async prerender() {
    return ["/", "/about", "/solutions", "/careers"];
  },
} satisfies Config;
