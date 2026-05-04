<div class="bg-black relative shrink-0 w-full">
    <div class="overflow-clip rounded-[inherit] size-full">
        <div class="content-stretch flex flex-col items-start pb-[40px] pt-[79px] px-[24px] relative w-full">
            <div
                class="absolute h-[450px] md:h-[675px] lg:h-[888px] left-1/2 top-1/2 -translate-y-1/2 ml-[-150px] md:ml-[-250px] lg:ml-[-300px] opacity-50 w-[800px] md:w-[1200px] lg:w-[1578px] hidden sm:block overflow-hidden pointer-events-none">
                <img alt=""
                    class="absolute inset-0 max-w-none mix-blend-luminosity object-cover pointer-events-none size-full grayscale"
                    src="assets/images/bee_footer.png" />
            </div>
            <div class="max-w-[1200px] relative shrink-0 w-full mx-auto">
                <div
                    class="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
                    <div
                        class="content-stretch flex flex-col lg:flex-row gap-[40px] items-start lg:items-end relative shrink-0 w-full">
                        <div
                            class="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 lg:w-[320px]">
                            <a href="/" data-discover="true">
                                <div class="h-[30px] relative shrink-0 w-[158px]"><img alt="TheBeeSoft"
                                        class="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                                        src="assets/images/thebeelogo.png" /></div>
                            </a>
                            <div class="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div
                                    class="flex flex-col font-normal justify-center leading-[1.4] not-italic relative shrink-0 text-[#aaa] text-[16px] w-full whitespace-pre-wrap">
                                    <p class="mb-0">주식회사 더비소프트</p>
                                    <p class="mb-0">서울특별시 영등포구 선유로 13길 25, 213호 </p>
                                    <p>(문래동6가 에이스하이테크시티2)</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row items-end gap-[24px] lg:gap-[40px]">
                            <div class="content-stretch flex flex-col gap-[8px] items-start relative">
                                <div
                                    class="content-stretch flex flex-col items-start pb-[0.58px] relative shrink-0 w-full">
                                    <div
                                        class="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[13.3px] whitespace-nowrap">
                                        <p class="leading-[1.4]">Contact</p>
                                    </div>
                                </div>
                                <div class="content-stretch flex isolate items-center relative shrink-0">
                                    <div
                                        class="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] z-[1]">
                                        <p class="leading-[20px]">TEL) 02-6052-3889</p>
                                    </div>
                                </div>
                                <div class="content-stretch flex isolate items-center relative shrink-0 w-full">
                                    <div
                                        class="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]">
                                        <p class="leading-[20px]">FAX) 02-6008-3838</p>
                                    </div>
                                </div>
                                <div class="content-stretch flex isolate items-center relative shrink-0 w-full">
                                    <div
                                        class="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]">
                                        <p class="leading-[20px]">master@thebeesoft.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full">
                        <div aria-hidden="true"
                            class="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none">
                        </div>
                        <div class="relative shrink-0 w-full">
                            <div
                                class="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.8px] relative w-full">
                                <div
                                    class="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                                    <p class="leading-[23.8px]">Copyright@ 2026 TheBeeSoft Inc. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        // 1. Header Scroll Logic
        const header = document.querySelector('div.fixed.left-0.top-0');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (!header) return;
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // Scrolling down -> hide header
                header.classList.remove('translate-y-0');
                header.classList.add('-translate-y-full');
            } else {
                // Scrolling up -> show header
                header.classList.remove('-translate-y-full');
                header.classList.add('translate-y-0');
            }
            lastScrollY = currentScrollY;
        }, { passive: true });
    });
</script>
</div> <!-- Close min-h-screen -->
</body>

</html>