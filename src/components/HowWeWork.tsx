import { motion } from "motion/react";
import svgPathsWork from "@/imports/svg-oy58ye79l5";
import org_culture from "@/assets/org_culture.png";
import clsx from "clsx";

type Icon3VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon3VectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon3VectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute bottom-[49.98%] top-[36.56%]", additionalClassNames)}>
      <div className="absolute inset-[-0.49%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298.56 97.8588">
          {children}
        </svg>
      </div>
    </div>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex items-center justify-center p-[12px]", additionalClassNames)}>
      <p className="font-semibold leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-center whitespace-nowrap">{text}</p>
    </div>
  );
}

export function HowWeWork() {
  return (
    <>
      {/* 핵심 가치 Section */}
      <div className="bg-white content-stretch flex flex-col gap-[72px] items-center overflow-clip pb-[120px] pt-[80px] px-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full">
          <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
            <p className="leading-[1.4]">핵심 가치</p>
          </div>
          <div className="flex flex-col font-normal justify-center leading-[1.4] relative shrink-0 text-[#555] text-[16px] md:text-[18px]">
            <p className="mb-0">사람 중심의 기술, 혁신과 신뢰를 바탕으로 고객과 함께 성장합니다.</p>
            <p>{`전문성에 더해 함께 나누는 더비(The Bee)다움을 항상 생각합니다. `}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col md:flex-row gap-[32px] lg:gap-[72px] items-stretch max-w-[1200px] relative shrink-0 w-full">
          {/* 카드 1 */}
          <div className="content-stretch flex flex-1 flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px] cursor-default">
            <div className="content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
              <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative shrink-0 size-[28px]"
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                    <g id="Icon">
                      <path d={svgPathsWork.p159a2680} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                    </g>
                  </svg>
                </motion.div>
              </div>
              <p className="flex-1 font-bold leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]">부지런함과 책임감</p>
            </div>
            <p className="font-normal leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full flex-1">{`쉼 없이 움직이며 자연에 기여하는 꿀벌처럼, TheBeeSoft의 개발자들 모두는 부지런함과 책임감을 개인의 소중한 가치로 생각합니다.  `}</p>
          </div>
          {/* 카드 2 */}
          <div className="content-stretch flex flex-1 flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px] cursor-default">
            <div className="content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
              <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="relative shrink-0 size-[28px]"
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                    <g id="Icon">
                      <path d={svgPathsWork.p38589280} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                    </g>
                  </svg>
                </motion.div>
              </div>
              <p className="flex-1 font-bold leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]">협력과 소통</p>
            </div>
            <div className="font-normal leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full flex-1">
              <p className="mb-0">{`개인의 성실성을 바탕으로 긴밀한 커뮤니케이션을 더해야만 최선의 조직 성과를 낼 수 있다고 믿습니다. `}</p>
            </div>
          </div>
          {/* 카드 3 */}
          <div className="content-stretch flex flex-1 flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px] cursor-default">
            <div className="content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
              <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="relative shrink-0 size-[28px]"
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                    <g id="Icon">
                      <path d={svgPathsWork.pfb41f00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                    </g>
                  </svg>
                </motion.div>
              </div>
              <p className="flex-1 font-bold leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]">가치를 나누는 기쁨</p>
            </div>
            <p className="font-normal leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full flex-1">{`꿀벌의 여정이 꿀로 남듯, 우리의 노력도 세상에 달콤한 변화를 남길 수 있도록 노력하고 있습니다. 노력의 결실을 임직원 및 사회와 함께 나누려 노력합니다. `}</p>
          </div>
        </div>
      </div>

      {/* 조직 구성 Section */}
      <div className="bg-[#e9e9e9] content-stretch flex flex-col gap-[12px] items-center overflow-clip py-[80px] px-[24px] relative shrink-0 w-full">
        <div className="absolute bg-[#f3f6fa] h-full left-0 top-0 w-full" />
        <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full z-10">
          <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
            <p className="leading-[1.4]">조직 구성</p>
          </div>
          <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#334155] text-[16px] md:text-[18px] px-[24px]">
            <p className="leading-[1.4]">
              전문성을 갖춘 각 그룹이 유기적으로 협력하여 최상의 결과를 만듭니다.
              <br aria-hidden="true" />
              {`고객이 원하는 해결책을 더 빠르게, 더 정확하게 제공하기 위해 간결한 조직 구조를 통한 유연한 대응을 지향합니다 `}
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 z-10">
          <div className="h-[89px] relative shrink-0 w-full max-w-[256px]">
            <div className="absolute h-[177.604px] left-1/2 -translate-x-1/2 rounded-[16px] top-0 w-full max-w-[256px]">
              <div className="absolute bg-[#0f172a] h-[51px] left-1/2 -translate-x-1/2 rounded-[14px] top-[38px] w-[192px]">
                <p className="-translate-x-1/2 absolute font-bold leading-[33.6px] left-1/2 not-italic text-[24px] text-center text-white top-[8px] whitespace-nowrap">대표이사</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex content-stretch h-[75px] items-start justify-center relative shrink-0 w-full max-w-[556px]">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none">
                <div className="h-[85px] relative w-[547px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 547 85">
                    <g id="Frame 11" opacity="0.6">
                      <path d="M273.5 25L273.5 73" id="Vector 27" stroke="url(#paint0_linear_1_1938)" strokeLinecap="round" />
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1938" x1="273" x2="273" y1="25" y2="73">
                        <stop stopColor="#262E3F" />
                        <stop offset="1" stopColor="#252E3F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden h-[40px] w-px bg-slate-300 my-[10px]" />
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-6 max-w-[1200px] relative shrink-0 w-full px-[16px] min-[320px]:px-0">
            {['전략기획실', '경영지원실', '솔루션사업부', 'ITO사업부', '정보보안위원회', '품질위원회'].map((dept, idx) => (
              <div key={idx} className="bg-white content-stretch flex flex-col h-[86px] lg:h-[173px] items-center justify-center p-[20px] relative rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
                <div className="bg-white h-[46px] relative rounded-[12px] w-full max-w-[180px]">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                    <p className="font-semibold leading-[25.2px] not-italic relative shrink-0 text-[#182234] text-[18px] text-center">{dept}</p>
                  </div>
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[225.333px] max-w-[1200px] relative rounded-[16px] shrink-0 w-full z-10 mt-[40px] hidden lg:block overflow-hidden" style={{ backgroundImage: "linear-gradient(169.365deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }}>
          <div className="max-w-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pb-[48.667px] pt-[48.667px] px-[48.667px] relative size-full">
              <div className="h-[48px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[16px] items-center relative size-full">
                    <div className="h-[33.604px] relative shrink-0 w-[88.5px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-bold leading-[33.6px] left-0 not-italic text-[#101828] text-[24px] top-0 whitespace-nowrap">조직 문화</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-normal leading-[28px] not-italic relative shrink-0 text-[#364153] text-[20px] whitespace-nowrap">
                <p className="mb-0">수평적인 조직문화를 통해 누구의 의견이든</p>
                <p>자유롭게 제안되고, 경청되는 환경을 지향합니다.</p>
              </div>
              <div className="absolute h-[433px] left-[587.16px] opacity-80 top-[-121.4px] w-[746px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-9.98%] max-w-none top-0 w-[121.79%] grayscale" src={org_culture} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile version */}
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative rounded-[16px] shrink-0 w-full z-10 mt-[40px] lg:hidden" style={{ backgroundImage: "linear-gradient(169.365deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }}>
          <p className="font-bold leading-[33.6px] not-italic text-[#101828] text-[24px]">조직 문화</p>
          <div className="font-normal leading-[28px] not-italic text-[#364153] text-[16px] md:text-[20px]">
            <p className="mb-0">수평적인 조직문화를 통해 누구의 의견이든</p>
            <p>자유롭게 제안되고, 경청되는 환경을 지향합니다.</p>
          </div>
          <div className="relative w-[calc(100%+48px)] ml-[-24px] h-[220px] rounded-b-[16px] overflow-hidden">
            <img alt="" className="absolute h-full object-cover w-full grayscale object-bottom opacity-80" src={org_culture} />
          </div>
        </div>
      </div>

      {/* 윤리실천강령 Section */}
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] px-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
            <p className="leading-[1.4]">윤리실천강령</p>
          </div>
          <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#334155] text-[16px] md:text-[18px]">
            <p className="leading-[1.4]">TheBeeSoft의 모든 임직원은 아래의 윤리규범을 준수하고 실천해 나가겠습니다.</p>
          </div>
        </div>

        {/* Center Icon (Always Visible with Responsive Scaling) */}
        <div className="flex content-stretch h-[320px] sm:h-[450px] md:h-[600px] lg:h-[720px] items-center justify-center overflow-visible relative shrink-0 w-full lg:w-[896px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.38] min-[400px]:scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-center transition-transform duration-300 w-[896px] h-[720px]">
            {/* Vertical line top */}
            <div className="absolute bottom-[49.98%] left-1/2 right-1/2 top-[6.46%]">
              <div className="absolute inset-[0_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 313.6">
                  <path d="M0.5 313.6V0" id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
                </svg>
              </div>
            </div>

            {/* Diagonal lines */}
            <Icon3VectorBackgroundImage additionalClassNames="left-1/2 right-[16.71%]">
              <path d={svgPathsWork.p3f383700} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
            </Icon3VectorBackgroundImage>

            <div className="absolute bottom-[14.75%] left-1/2 right-[29.43%] top-[50.02%]">
              <div className="absolute inset-[-0.12%_-0.22%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.139 254.296">
                  <path d={svgPathsWork.p370a3a00} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-[14.75%] left-[29.43%] right-1/2 top-[50.02%]">
              <div className="absolute inset-[-0.12%_-0.22%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.138 254.296">
                  <path d={svgPathsWork.p28d6c300} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
                </svg>
              </div>
            </div>

            <Icon3VectorBackgroundImage additionalClassNames="left-[16.71%] right-1/2">
              <path d={svgPathsWork.p9c3a900} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
            </Icon3VectorBackgroundImage>

            {/* Large outer circle with gradient */}
            <div className="absolute bottom-[18.9%] left-1/4 right-1/4 top-[18.88%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
                <path d={svgPathsWork.p10d45240} fill="url(#paint0_linear_1_1890)" id="Vector" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1890" x1="224" x2="224" y1="213.141" y2="632.516">
                    <stop stopColor="#FFE8DA" />
                    <stop offset="1" stopColor="#FFC1D6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Radial gradient circle */}
            <div className="absolute inset-[3.35%_12.5%_3.32%_12.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 672 672">
                <path d={svgPathsWork.p2f65900} fill="url(#paint0_radial_1_1913)" id="Vector" />
                <defs>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(33600 33600) scale(336)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1913" r="1">
                    <stop stopColor="#FF6000" stopOpacity="0.15" />
                    <stop offset="0.5" stopColor="#FF6000" stopOpacity="0.08" />
                    <stop offset="1" stopColor="#FF6000" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Border circle */}
            <div className="absolute inset-[6.46%_15%_6.43%_15%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 628.32 628.32">
                <path d={svgPathsWork.p16f3bf00} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="1.12" />
              </svg>
            </div>

            {/* Medium circle with multiply blend */}
            <div className="absolute inset-[24.16%_29.24%_24.18%_29.24%] mix-blend-multiply">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 372">
                <g id="Vector" style={{ mixBlendMode: "multiply" }}>
                  <path d={svgPathsWork.p15537840} fill="url(#paint0_linear_1_1928)" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1928" x1="186" x2="186" y1="176.983" y2="525.214">
                    <stop stopColor="#FFE8DA" />
                    <stop offset="1" stopColor="#FFC1D6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Labels around the circle */}
            <BackgroundImageAndText1 text="임직원의 기본윤리" additionalClassNames="left-[356.17px] top-[17.67px]" />
            <BackgroundImageAndText1 text="임직원에 대한 존중" additionalClassNames="left-[719.16px] overflow-clip top-[239.67px]" />
            <BackgroundImageAndText1 text="국가, 사회에 대한 책임" additionalClassNames="left-[568.17px] overflow-clip top-[599.67px]" />
            <BackgroundImageAndText1 text="공정한 경쟁 및 거래" additionalClassNames="left-[178.17px] overflow-clip top-[599.67px]" />
            <BackgroundImageAndText1 text="고객에 대한 책임" additionalClassNames="left-[46.17px] overflow-clip top-[239.67px]" />

            {/* Center circle with gradient */}
            <div className="absolute inset-[29.8%_33.75%_29.76%_33.75%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 291.2 291.2">
                <path d={svgPathsWork.pd624900} fill="url(#paint0_linear_1_1907)" id="Vector" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1907" x1="145.6" x2="145.6" y1="132.413" y2="341.913">
                    <stop stopColor="#FF6000" />
                    <stop offset="1" stopColor="#BF068B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Center text */}
            <div className="absolute font-bold inset-[44.68%_39.86%_44.77%_39.83%] leading-[normal] not-italic text-[31.36px] text-center text-white whitespace-nowrap">
              <p className="mb-0">TheBeeSoft</p>
              <p>윤리실천강령</p>
            </div>
          </div>
        </div>

        {/* Ethics Cards Grid */}
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1152px] relative shrink-0 w-full">
          <div className="bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0">
            <div className="content-stretch flex flex-col gap-[16px] items-start flex-1 not-italic relative shrink-0 w-full">
              <p className="font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">임직원의 기본윤리</p>
              <p className="font-normal leading-[22.4px] relative shrink-0 text-[#4a5565] text-[16px]">더비소프트의 임직원은 올바른 가치관을 확립하고, 회사에 대한 자긍심을 가지고 품위있고 정직하게 행동하며 공정하게 직무를 수행한다.</p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
              <div className="relative shrink-0 size-[48px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g id="Icon" opacity="0.8">
                    <path d={svgPathsWork.p30533c80} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0">
            <div className="content-stretch flex flex-col gap-[16px] items-start flex-1 not-italic relative shrink-0 w-full">
              <p className="font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">고객에 대한 책임</p>
              <p className="font-normal leading-[22.4px] relative shrink-0 text-[#4a5565] text-[16px]">고객의 의견을 항상 존중하고,고객에게 도움이 되는 가치를 창출하여 제공함으로써 고객과의 신뢰관계를 구축한다.</p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
              <div className="relative shrink-0 size-[48px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g id="Icon" opacity="0.8">
                    <path d={svgPathsWork.p2d30d480} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPathsWork.p23a04200} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M14 42H34" id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M24 6V42" id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPathsWork.p26c16460} id="Vector_5" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0">
            <div className="content-stretch flex flex-col gap-[12px] items-start flex-1 relative shrink-0">
              <p className="font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">임직원에 대한 존중</p>
              <p className="font-normal leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full">임직원 개개인의 인간적 존엄과 가치를 존중하고 능력과 업적에 따라 공정하게 대우하며,임직원의 창의성이 충분히 발휘 되도록 노력한다.</p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
              <div className="relative shrink-0 size-[48px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g id="Icon" opacity="0.8">
                    <path d="M44 14L27 31L17 21L4 34" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M32 14H44V26" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0">
            <div className="content-stretch flex flex-col gap-[12px] items-start flex-1 relative shrink-0">
              <p className="font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">공정한 경쟁 및 거래</p>
              <p className="font-normal leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full">모든 사업활동에서 경쟁사와 선의의 경쟁을 펼치고, 투명하고 공정한 거래를 통해 상호신뢰와 협력관계를 구축한다.</p>
            </div>
            <div className="relative shrink-0 size-[48px]">
              <div className="absolute inset-[-2.08%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                  <g id="Container">
                    <g id="Vector">
                      <path d={svgPathsWork.p12267900} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPathsWork.pae0a480} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPathsWork.p5a18740} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPathsWork.p2c746780} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f6fa] content-stretch flex items-start gap-[24px] p-[32px] relative rounded-[16px] shrink-0">
            <div className="content-stretch flex flex-col gap-[12px] items-start flex-1 relative shrink-0">
              <p className="font-bold leading-[28px] not-italic text-[#101828] text-[20px] whitespace-nowrap">국가, 사회에 대한 책임</p>
              <p className="font-normal leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full">국가 및 지역의 법규와 사회적 가치관을 존중하며 깨끗한 환경의 보전을 위해 노력하며, 국민의 풍요로운 삶과 사회발전에 기여한다.</p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
              <div className="relative shrink-0 size-[48px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g id="Icon" opacity="0.8">
                    <path d={svgPathsWork.p2b3c4500} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPathsWork.p31eb3600} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPathsWork.p39ff1860} id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPathsWork.p26525340} id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}