<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : '더비소프트(TheBeeSoft) | DX, AX 솔루션 전문가 그룹'; ?></title>
    <link rel="icon" type="image/png" href="assets/images/favicon.png">

    <!-- 기존 React PWA 캐시(Service Worker) 강제 삭제 스크립트 -->
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                    registration.unregister();
                }
            });
        }
    </script>

    <!-- 기본 SEO -->
    <meta name="description" content="<?php echo isset($pageDescription) ? $pageDescription : '고도화된 기술력과 Domain Knowledge를 바탕으로 성공적인 DX, AX 솔루션을 제공하는 전문가 그룹 더비소프트입니다.'; ?>">
    <meta name="keywords" content="<?php echo isset($pageKeywords) ? $pageKeywords : '더비소프트, TheBeeSoft, IT개발, ERP구축, 시스템구축, DX, AX, 솔루션'; ?>">
    <?php if (isset($canonicalUrl)): ?>
    <link rel="canonical" href="<?php echo $canonicalUrl; ?>">
    <?php endif; ?>

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo isset($canonicalUrl) ? $canonicalUrl : 'https://thebeesoft.com/'; ?>">
    <meta property="og:title" content="<?php echo isset($ogTitle) ? $ogTitle : (isset($pageTitle) ? $pageTitle : '더비소프트(TheBeeSoft)'); ?>">
    <meta property="og:description" content="<?php echo isset($ogDescription) ? $ogDescription : (isset($pageDescription) ? $pageDescription : 'DX, AX 솔루션 전문가 그룹'); ?>">
    <meta property="og:image" content="<?php echo isset($ogImage) ? $ogImage : 'assets/images/og-image.png'; ?>">

    <link rel="stylesheet" href="assets/css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
</head>

<body>
    <div class="min-h-screen flex flex-col">
        <div class="fixed left-0 top-0 w-full z-50 transition-transform duration-300 ease-in-out translate-y-0">
            <div
                class="backdrop-blur-[5px] bg-black/20 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-full overflow-hidden">
                <div class="content-stretch flex flex-col items-center px-[24px] relative w-full">
                    <div class="h-[80px] max-w-[1200px] mx-auto relative shrink-0 w-full">
                        <div
                            class="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                            <a class="h-[30px] relative shrink-0 w-[158px]" href="index.php" data-discover="true"><img
                                    alt="TheBeeSoft"
                                    class="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                                    src="assets/images/thebeelogo.png" /></a>
                            <div class="content-stretch flex items-center relative shrink-0"><button
                                    id="open-menu-btn" class="sm:hidden text-white p-2" aria-label="메뉴 열기"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-menu">
                                        <line x1="4" x2="20" y1="12" y2="12"></line>
                                        <line x1="4" x2="20" y1="6" y2="6"></line>
                                        <line x1="4" x2="20" y1="18" y2="18"></line>
                                    </svg></button>
                                <div
                                    class="hidden sm:flex content-stretch gap-[40px] h-[26px] items-start relative shrink-0">
                                    <div
                                        class="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0">
                                        <a class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap"
                                            href="about" data-discover="true">
                                            <p class="leading-[25.5px]">About</p>
                                        </a>
                                    </div>
                                    <div
                                        class="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0">
                                        <a class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap"
                                            href="solutions" data-discover="true">
                                            <p class="leading-[25.5px]">Solutions</p>
                                        </a>
                                    </div>
                                    <div
                                        class="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative self-stretch shrink-0">
                                        <a class="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap"
                                            href="careers" data-discover="true">
                                            <p class="leading-[25.5px]">인재채용</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 모바일 메뉴 오버레이 (사이드바 형태) -->
        <div id="mobile-menu-overlay" class="fixed inset-0 z-[60] sm:hidden flex justify-end" style="display: none;">
            <!-- 어두운 반투명 배경 (클릭 시 닫힘) -->
            <div id="mobile-menu-backdrop" class="absolute inset-0 bg-black/60 opacity-0" aria-label="메뉴 닫기 배경"></div>

            <!-- 우측 슬라이드 메뉴 패널 -->
            <div id="mobile-menu-panel"
                class="relative w-[300px] max-w-[85vw] bg-white/90 h-full shadow-[-4px_0px_20px_rgba(0,0,0,0.1)] flex flex-col"
                style="transform: translateX(100%);">
                <!-- 메뉴 상단 (로고 및 닫기 버튼) -->
                <div class="flex items-center justify-between px-6 py-5 border-b border-black/10">
                    <a href="/" class="shrink-0 w-[120px]">
                        <img alt="TheBeeSoft" class="w-full h-auto object-contain pointer-events-none"
                            src="assets/images/thebeelogo_color.png" />
                    </a>
                    <button id="close-menu-btn"
                        class="text-black p-2 cursor-pointer -mr-2 hover:opacity-70 transition-opacity" aria-label="메뉴 닫기">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-x">
                            <line x1="18" x2="6" y1="6" y2="18"></line>
                            <line x1="6" x2="18" y1="6" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <!-- 메뉴 리스트 -->
                <div class="flex flex-col gap-6 p-6 mt-2">
                    <a href="about"
                        class="text-lg font-medium text-black hover:text-gray-600 transition-colors">About</a>
                    <a href="solutions"
                        class="text-lg font-medium text-black hover:text-gray-600 transition-colors">Solutions</a>
                    <a href="careers"
                        class="text-lg font-medium text-black hover:text-gray-600 transition-colors">인재채용</a>
                </div>
            </div>
        </div>

        <script>
        document.addEventListener('DOMContentLoaded', () => {
            const openBtn = document.getElementById('open-menu-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const backdrop = document.getElementById('mobile-menu-backdrop');
            const overlay = document.getElementById('mobile-menu-overlay');
            const panel = document.getElementById('mobile-menu-panel');

            const openMenu = () => {
                overlay.style.display = 'flex';
                // GSAP 애니메이션
                gsap.to(backdrop, {
                    opacity: 1,
                    duration: 0.3
                });
                gsap.to(panel, {
                    x: '0%',
                    duration: 0.3,
                    ease: 'power2.out'
                });
                document.body.style.overflow = 'hidden';
            };

            const closeMenu = () => {
                gsap.to(backdrop, {
                    opacity: 0,
                    duration: 0.3
                });
                gsap.to(panel, {
                    x: '100%',
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        overlay.style.display = 'none';
                        document.body.style.overflow = '';
                    }
                });
            };

            if (openBtn) openBtn.addEventListener('click', openMenu);
            if (closeBtn) closeBtn.addEventListener('click', closeMenu);
            if (backdrop) backdrop.addEventListener('click', closeMenu);
        });
        </script>