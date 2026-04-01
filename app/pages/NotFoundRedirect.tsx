import { Navigate } from "react-router";

export default function NotFoundRedirect() {
  // 실행되는 즉시 주소창을 "/"로 바꾸고 홈 화면으로 이동시킵니다.
  return <Navigate to="/" replace />;
}
