import type { Config } from "@react-router/dev/config";

export default {
  // [핵심] 순수 정적 웹사이트(SSG+SPA)로 빌드하기 위해 SSR 모드 비활성화.
  // 이 옵션이 꺼져 있어야 페이지 전환 시 서버에 JSON(데이터)을 요청하지 않습니다.
  ssr: false,
  // 미리 생성할 정적 경로들
  async prerender() {
    return ["/", "/about", "/solutions", "/careers"];
  },
};
