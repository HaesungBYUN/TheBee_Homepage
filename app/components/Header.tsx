import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import thebeelogo from "@/assets/thebeelogo.png";
import thebeelogoColor from "@/assets/thebeelogo_color.png";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 최상단 근처에서는 항상 노출
      if (currentScrollY < 50) {
        setIsVisible(true);
      }
      // 아래로 스크롤 시 숨김
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // 위로 스크롤 시 노출
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed left-0 top-0 w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="backdrop-blur-[5px] bg-black/20 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-full overflow-hidden">
          <div className="content-stretch flex flex-col items-center px-[24px] relative w-full">
            <div className="h-[80px] max-w-[1200px] mx-auto relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                <Link to="/" className="h-[30px] relative shrink-0 w-[158px]">
                  <img alt="TheBeeSoft" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={thebeelogo} />
                </Link>
                <div className="content-stretch flex items-center relative shrink-0">
                  {/* 햄버거 버튼 (모바일) */}
                  <button
                    className="sm:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="메뉴 열기"
                  >
                    <Menu size={24} />
                  </button>

                  {/* 데스크탑 메뉴 영역 */}
                  <div className="hidden sm:flex content-stretch gap-[40px] h-[26px] items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0">
                      <Link to="/about" className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
                        <p className="leading-[25.5px]">About</p>
                      </Link>
                    </div>
                    <div className="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0">
                      <Link to="/solutions" className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
                        <p className="leading-[25.5px]">Solutions</p>
                      </Link>
                    </div>
                    <div className="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0">
                      <Link to="/careers" className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
                        <p className="leading-[25.5px]">인재채용</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 (사이드바 형태) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] sm:hidden flex justify-end">
          {/* 어두운 반투명 배경 (클릭 시 닫힘) */}
          <div
            className="absolute inset-0 bg-black/60 animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="메뉴 닫기 배경"
          />

          {/* 우측 슬라이드 메뉴 패널 */}
          <div className="relative w-[300px] max-w-[85vw] bg-white/90 h-full shadow-[-4px_0px_20px_rgba(0,0,0,0.1)] animate-in slide-in-from-right duration-300 flex flex-col">
            {/* 메뉴 상단 (로고 및 닫기 버튼) */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="shrink-0 w-[120px]">
                <img alt="TheBeeSoft" className="w-full h-auto object-contain pointer-events-none" src={thebeelogoColor} />
              </Link>
              <button
                className="text-black p-2 cursor-pointer -mr-2 hover:opacity-70 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="메뉴 닫기"
              >
                <X size={28} />
              </button>
            </div>

            {/* 메뉴 리스트 */}
            <div className="flex flex-col gap-6 p-6 mt-2">
              <Link
                to="/about"
                className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/solutions"
                className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/careers"
                className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                인재채용
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
