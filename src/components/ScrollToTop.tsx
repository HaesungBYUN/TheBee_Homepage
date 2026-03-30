import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 해시가 있는 경우 해당 요소로 스크롤
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 해시가 없는 경우 최상단으로 스크롤
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}