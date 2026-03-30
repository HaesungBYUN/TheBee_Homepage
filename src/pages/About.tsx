
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import svgPaths from "@/imports/svg-rrbtbsqu4o";
import imgImage4898 from "@/assets/65ace069c3cfaba46adf9b0e117b4b0db0b2e1e5.png";
import steps from "@/assets/steps.png";
import { HowWeWork } from '@/components/HowWeWork';



// Helper Components
function Container5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.8)] flex-none sm:flex-1 relative rounded-[24px] w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] sm:p-[40px] relative w-full h-full">{children}</div>
    </div>
  );
}

function Container4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start pl-[48px] sm:pl-[48px] relative w-full">{children}</div>
    </div>
  );
}

function OverlayBorder({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] sm:flex-1 min-h-px min-w-px relative rounded-[24px] self-stretch h-auto">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start gap-[8px] sm:gap-[32px] px-[41px] py-[20px] sm:py-[33px] relative w-full h-full">{children}</div>
    </div>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[8.8px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start relative w-full">{children}</div>
    </div>
  );
}

function TabHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-[10px] relative">{children}</div>
    </div>
  );
}

function Svg1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-[13px] size-[16px] top-[7px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(246,246,246,0.93)] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-start sm:items-end size-full">
        <div className="content-stretch flex flex-col items-start sm:items-end pl-[48px] sm:pl-0 sm:pr-[48px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

type ContainerText7Props = {
  text: string;
};

function ContainerText7({ text }: ContainerText7Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative min-w-0 w-full">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative min-w-0 text-[#6b7280] text-[16px]">
        <p className="leading-[24px] break-all sm:break-normal">{text}</p>
      </div>
    </div>
  );
}

type Container2Props = {
  text: string;
  text1: string;
};

function Container2({ text, text1 }: Container2Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative min-w-0 w-full">
      <div className="flex flex-col font-normal justify-center leading-[24px] not-italic relative min-w-0 text-[#6b7280] text-[16px]">
        <p className="mb-0 break-all sm:break-normal">{text}</p>
        <p className="break-all sm:break-normal">{text1}</p>
      </div>
    </div>
  );
}

type ContainerText6Props = {
  text: string;
};

function ContainerText6({ text }: ContainerText6Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative min-w-0 w-full">
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative min-w-0 text-[#1a1a1a] text-[18px]">
        <p className="leading-[28px] break-all sm:break-normal">{text}</p>
      </div>
    </div>
  );
}

type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#777] text-[16px] md:text-[18px] uppercase w-full lg:w-[474px]">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[24px] md:text-[32px] w-full lg:w-[474px]">
        <p className="leading-[1.4]">{text1}</p>
      </div>
    </div>
  );
}

type Container1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Container1({ text, text1 }: Container1Props) {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left sm:text-right">
          <p className="leading-[32px]">{text}</p>
        </div>
        <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left sm:text-right">
          <p className="leading-[28px]">{text1}</p>
        </div>
      </motion.div>
      <BackgroundBorder additionalClassNames="left-[11.5px] sm:left-auto sm:right-[-8.5px] top-[8px]" />
    </Wrapper>
  );
}

type BackgroundBorderProps = {
  additionalClassNames?: string;
};

function BackgroundBorder({ additionalClassNames = "" }: BackgroundBorderProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={clsx("absolute bg-white rounded-[9999px] size-[17px] z-10", additionalClassNames)}
    >
      <div aria-hidden="true" className="absolute border-4 border-[#262e3f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </motion.div>
  );
}

type ContainerText5Props = {
  text: string;
};

function ContainerText5({ text }: ContainerText5Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <Wrapper1>
      <path d={svgPaths.pc4bcb80} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p23bfda80} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Wrapper1>
  );
}

type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[40px] text-black w-full">
        <p className="leading-[40px]">{text}</p>
      </div>
    </div>
  );
}

type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[175.667px]">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type ContainerProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Container({ text, text1, additionalClassNames = "" }: ContainerProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[4px] leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap", additionalClassNames)}>
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#777] text-[16px] md:text-[18px] uppercase">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
        <p className="leading-[1.4]">{text1}</p>
      </div>
    </div>
  );
}

type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <Wrapper2>
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </Wrapper2>
  );
}

type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <Wrapper2>
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </Wrapper2>
  );
}

type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#444] text-[13px] w-[50px]">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#1a1a1a] text-[18px] whitespace-nowrap">
        <p className="leading-[1.4]">{text1}</p>
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<'intro' | 'work'>('intro');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white content-stretch flex flex-col items-center relative size-full"
    >
      {/* Hero Section */}
      <div className="bg-[#0f172a] h-[550px] relative shrink-0 w-full overflow-hidden">
        <div className="content-stretch flex flex-col gap-[56px] items-center pt-[140px] relative size-full">
          <div className="absolute inset-0 overflow-hidden z-0">
            <video autoPlay className="absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" loop playsInline muted>
              <source src={`${import.meta.env.BASE_URL}videos/about_video_short.mp4`} type="video/mp4" />
            </video>
            <div aria-hidden="true" className="absolute bg-[#0f172a] inset-0 mix-blend-color z-1" />
          </div>
          <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] px-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              <div className="bg-white content-stretch flex items-start justify-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.4]">{`Best People & Best Partner`}</p>
                </div>
              </div>
              <div className="flex flex-col font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[56px] text-center text-white">
                <p className="leading-[1.3] mb-0">사람을 위한 기술,</p>
                <p className="leading-[1.3]">
                  <span className="text-white">TheBeeSoft</span>
                  <span>가 만듭니다.</span>
                </p>
              </div>
              <div className="flex flex-col font-normal justify-center leading-[1.4] not-italic opacity-80 relative shrink-0 text-[16px] md:text-[20px] text-center text-white">
                <p className="mb-0">더비소프트는 2011년부터 기업의 디지털 트랜스포메이션을 선도하며,</p>
                <p>기술 그 이상의 가치를 고객과 함께 만들어가고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Menu & Content Area */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-[#111827] h-[72px] relative shrink-0 w-full z-20">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center px-[24px] relative size-full justify-center">
              <div className="content-stretch flex gap-[32px] items-center max-w-[1200px] relative shrink-0 w-full">
                <button
                  onClick={() => setActiveTab('intro')}
                  className={clsx(
                    "relative shrink-0 cursor-pointer",
                    activeTab === 'intro' && "border-b-2 border-solid border-white"
                  )}
                >
                  <TabHelper>
                    <div className={clsx(
                      "flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap",
                      activeTab === 'intro' ? "font-semibold" : "font-normal opacity-70"
                    )}>
                      <p className="leading-[1.4]">기업소개</p>
                    </div>
                  </TabHelper>
                </button>
                <button
                  onClick={() => setActiveTab('work')}
                  className={clsx(
                    "relative shrink-0 cursor-pointer",
                    activeTab === 'work' && "border-b-2 border-solid border-white"
                  )}
                >
                  <TabHelper>
                    <div className={clsx(
                      "flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap",
                      activeTab === 'work' ? "font-semibold" : "font-normal opacity-70"
                    )}>
                      <p className="leading-[1.4]">How We Work</p>
                    </div>
                  </TabHelper>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'intro' ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              {/* Company Info Section */}
              <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip py-[80px] relative shrink-0 w-full">
                <div className="absolute h-[255px] left-0 overflow-clip top-[199px] w-[461px] hidden lg:block">
                  <div className="absolute flex h-[554px] items-center justify-center left-[186.98px] top-[-57px] w-[291px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="h-[554px] opacity-30 relative w-[291px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute h-[157.02%] left-[-231.71%] max-w-none top-[-56.96%] w-[612.92%]" src={imgImage4898} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[461px] items-center justify-center left-[-0.02px] top-[11px] w-[233px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="h-[461px] opacity-30 relative w-[233px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute h-[157.02%] left-[-388.86%] max-w-none top-[-56.96%] w-[636.72%]" src={imgImage4898} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start max-w-[1200px] px-[24px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex items-start max-w-[1200px] relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-center whitespace-nowrap">
                        <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
                          <p className="leading-[1.4]">{`주식회사 더비소프트 `}</p>
                        </div>
                        <div className="flex flex-col font-semibold justify-center not-italic relative shrink-0 text-[#777] text-[16px] md:text-[18px]">
                          <p className="leading-[1.4]">TheBeeSoft Inc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-1 flex-col gap-[32px] items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                      <Helper text="대표이사" text1="이광섭" />
                      <Helper text="설립일" text1="2011. 02. 01" />
                      <div className="content-stretch flex gap-[20px] items-start relative rounded-[16px] shrink-0 w-full">
                        <div className="relative shrink-0">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
                            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[13px] w-[50px]">
                              <p className="leading-[1.4]">사업분야</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative w-full">
                            <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px]">
                              <p className="leading-[1.4]">기업 및 공공 기관 시스템 구축·운영, 솔루션 개발, 컨설팅</p>
                            </div>
                            <div className="h-[20px] relative shrink-0 w-[160.702px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.702 20">
                                <g id="Frame 13">
                                  <path d={svgPaths.pbdb6380} fill="var(--fill-0, black)" id="Union" />
                                  <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Rectangle 8" width="1" x="102.702" y="4" />
                                  <g clipPath="url(#clip0_1_1002)" id="sap-3 1">
                                    <path clipRule="evenodd" d={svgPaths.p206f1780} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                                    <path clipRule="evenodd" d={svgPaths.p2424db80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                                    <g id="Vector_3" />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_1002">
                                    <rect fill="white" height="20" transform="translate(119.702)" width="41" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col md:flex-row gap-[18px] items-stretch relative shrink-0 w-full">
                      <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-[174px] min-w-px relative rounded-[16px]">
                        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
                          <div className="bg-[rgba(255,105,0,0.1)] h-[30px] relative rounded-[33554400px] shrink-0 w-[150px]">
                            <div aria-hidden="true" className="absolute border border-[rgba(255,105,0,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <Icon>
                                <path d={svgPaths.p18211080} id="Vector" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </Icon>
                              <div className="absolute h-[15px] left-[37px] top-[7.5px] w-[84.078px]">
                                <p className="absolute font-bold leading-[15px] left-0 not-italic text-[#ff8904] text-[10px] top-0 tracking-[0.5px] uppercase whitespace-nowrap">ERP Solutions</p>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center leading-[0] not-italic relative text-[#333] w-full">
                              <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[18px]">
                                <p className="leading-[1.4]">{`ERP 구축 및 운영 `}</p>
                              </div>
                              <div className="flex flex-col font-normal justify-center relative shrink-0 text-[14px] uppercase">
                                <p className="leading-[1.4]">(Oracle, SAP)</p>
                              </div>
                            </div>
                          </div>
                          <Wrapper4>
                            <ContainerText text="재무" />
                            <ContainerText text="생산" />
                            <ContainerText text="영업" />
                            <ContainerText text="인사" />
                            <ContainerText text="서비스" />
                          </Wrapper4>
                        </div>
                      </div>
                      <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-[174px] min-w-px relative rounded-[16px]">
                        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
                          <div className="bg-[rgba(43,127,255,0.1)] h-[30px] relative rounded-[33554400px] shrink-0 w-[180px]">
                            <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                            <Icon>
                              <path d={svgPaths.pb72e280} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </Icon>
                            <div className="absolute content-stretch flex items-end justify-center left-[36.5px] top-[11px]">
                              <p className="font-bold leading-[10px] not-italic relative shrink-0 text-[#51a2ff] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">CustomIZED Systems</p>
                            </div>
                          </div>
                          <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[18px]">
                            <p className="leading-[1.4]">산업 맞춤형 시스템 구축 및 운영</p>
                          </div>
                          <Wrapper4>
                            <ContainerText1 text="제조" />
                            <ContainerText1 text="통신" />
                            <ContainerText1 text="유통" />
                            <ContainerText1 text="공공기관" />
                          </Wrapper4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Metrics Section */}
              <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center overflow-clip py-[80px] lg:py-[120px] relative shrink-0 w-full">
                <div className="absolute h-[250px] sm:h-[350px] md:h-[450px] lg:h-[457px] right-0 mix-blend-multiply top-[100px] lg:top-[163px] w-full lg:w-[1404px] block">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover object-right lg:object-center pointer-events-none" src={steps} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start justify-center max-w-[1200px] px-[24px] relative shrink-0 w-full">
                  <div className="relative shrink-0 w-full lg:w-auto">
                    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[10px] lg:pr-[32px] relative">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <Container text="Growth Metrics" text1="멈추지 않는 성장의 기록" additionalClassNames="items-start" />
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic relative shrink-0">
                        <div className="flex flex-col font-medium justify-center relative shrink-0 text-[#6d7074] text-[16px]">
                          <p className="leading-[1.4]">CAGR(설립이후 매출액 연평균 성장율)</p>
                        </div>
                        <div className="content-stretch flex flex-col font-bold items-start relative shrink-0 text-[#ff6000]">
                          <div className="flex flex-col justify-center relative shrink-0 text-[28px] md:text-[30px]">
                            <p className="leading-none">CAGR</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[40px] md:text-[48px]">
                            <p className="leading-none">23.7%↑</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[24px] items-stretch flex-1 min-w-0 w-full lg:w-auto">
                    <div className="backdrop-blur-[12px] bg-[rgba(15,23,42,0.9)] flex-1 min-h-px min-w-px relative rounded-[24px]">
                      <div aria-hidden="true" className="absolute border border-[#0f172a] border-solid inset-0 pointer-events-none rounded-[24px]" />
                      <div className="content-stretch flex flex-col items-start gap-[8px] sm:gap-[32px] px-[41px] py-[20px] sm:py-[33px] relative w-full h-full">
                        <Wrapper5>
                          <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0">
                            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                              <p className="leading-[1.4]">2024 리포트</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                            <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full">
                              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                                <p className="leading-[1.4]">매출액</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className="flex flex-col font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[40px] text-white w-full">
                                <p className="leading-[40px]">140.2억</p>
                              </div>
                            </div>
                          </div>
                        </Wrapper5>
                        <Container3>
                          <Wrapper1>
                            <path d={svgPaths.pc4bcb80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p23bfda80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </Wrapper1>
                          <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
                              <p className="leading-[28px]">신용등급 BB0</p>
                            </div>
                          </div>
                        </Container3>
                      </div>
                    </div>
                    <OverlayBorder>
                      <Wrapper5>
                        <ContainerText2 text="2023 리포트" />
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 flex-1 min-w-0">
                          <ContainerText3 text="매출액" />
                          <ContainerText4 text="121.8억" />
                        </div>
                      </Wrapper5>
                      <Container3>
                        <Svg />
                        <ContainerText5 text="신용등급 BBB-" />
                      </Container3>
                    </OverlayBorder>
                    <OverlayBorder>
                      <Wrapper5>
                        <ContainerText2 text="2022 리포트" />
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 flex-1 min-w-0">
                          <ContainerText3 text="매출액" />
                          <ContainerText4 text="102.8억" />
                        </div>
                      </Wrapper5>
                      <Container3>
                        <Svg />
                        <ContainerText5 text="신용등급 BB+" />
                      </Container3>
                    </OverlayBorder>
                  </div>
                </div>
              </div>

              {/* History Section */}
              <div className="bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] lg:py-[120px] px-[24px] relative shrink-0 w-full">
                <Container text="History" text1="TheBeeSoft Journey" additionalClassNames="items-center w-full lg:w-[900px]" />
                <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full lg:w-[900px]">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ originY: 0 }}
                    className="absolute bg-[rgba(37,46,63,0.3)] bottom-[38px] left-[20px] sm:left-[calc(50%+1.5px)] top-[16px] w-[2px] sm:w-px sm:-translate-x-1/2"
                  />

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <Wrapper>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left sm:text-right">
                          <p className="leading-[32px]">2025</p>
                        </div>
                        <div className="flex flex-col font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left sm:text-right">
                          <p className="mb-0">LG이노텍 N-ERP 구축사업 참여</p>
                          <p className="text-[16px] md:text-[18px]">{`LG전자 ERP 재무 모듈 운영/유지보수 `}</p>
                        </div>
                      </motion.div>
                      <BackgroundBorder additionalClassNames="left-[11.5px] sm:left-auto sm:right-[-8.5px] top-[8px]" />
                    </Wrapper>
                    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch hidden sm:block">
                      <div className="flex flex-col items-end size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block">
                      <div className="flex flex-col items-end size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                    <Container4>
                      <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left">
                        <p className="leading-[32px]">2024</p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left"
                      >
                        <p className="mb-0">LG전자 NEPS 구축 프로젝트</p>
                        <p className="mb-0">LG.com D2X 플랫폼 구축</p>
                        <p>LG생활건강 BW고도화</p>
                      </motion.div>
                      <BackgroundBorder additionalClassNames="left-[11.5px] sm:left-[-8.5px] top-[9px]" />
                    </Container4>
                  </div>

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <Wrapper>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left sm:text-right">
                          <p className="leading-[32px]">2023</p>
                        </div>
                        <div className="flex flex-col font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left sm:text-right">
                          <p className="mb-0">LG전자 차세대 ERP개발</p>
                          <p className="mb-0">LG CNS 고객데이터 통합 ETL개발</p>
                          <p className="mb-0">LG CNS 공상평 SINGLEX 구매개발</p>
                          <p>LG이노텍 세무조정 고도화 DB개발</p>
                        </div>
                      </motion.div>
                      <BackgroundBorder additionalClassNames="left-[11.5px] sm:left-auto sm:right-[-8.5px] top-[9px]" />
                    </Wrapper>
                    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block">
                      <div className="size-full" />
                    </div>
                  </div>

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block">
                      <div className="flex flex-col items-end size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                    <Container4>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left">
                          <p className="leading-[32px]">2022</p>
                        </div>
                        <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left">
                          <p className="leading-[28px]">
                            LG전자 ERP 재무 모듈 운영/유지보수
                            <br aria-hidden="true" />
                            LG이노텍 금융정보화 고도화 DB개발
                          </p>
                        </div>
                      </motion.div>
                      <BackgroundBorder additionalClassNames="left-[11.5px] sm:left-[-8.5px] top-[9px]" />
                    </Container4>
                  </div>

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <Container1 text="2020" text1="LG CNS Oracle ERP 재무영역 도급 운영사 재선정" />
                    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block">
                      <div className="flex flex-col items-end size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block">
                      <div className="flex flex-col items-end size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                    <Container4>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left">
                          <p className="leading-[32px]">2017</p>
                        </div>
                        <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left">
                          <p className="leading-[28px]">LG CNS Prime Partner사 선정</p>
                        </div>
                        <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left">
                          <p className="leading-[28px]">LG전자/LG이노텍 Oracle ERP 재무영역 도급 운영사 선정</p>
                        </div>
                      </motion.div>
                      <BackgroundBorder additionalClassNames="left-[11.5px] sm:left-[-8.5px] top-[9px]" />
                    </Container4>
                  </div>

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <Container1 text="2013" text1="LG CNS ORACLE ERP 전문 협력사 등록" />
                    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block">
                      <div className="flex flex-col items-end size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative hidden sm:block">
                      <div className="flex flex-col items-end size-full">
                        <div className="size-full" />
                      </div>
                    </div>
                    <Container4>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#252e3f] text-[20px] text-left">
                          <p className="leading-[32px]">2011</p>
                        </div>
                        <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[16px] md:text-[18px] text-[#6b7280] text-left">
                          <p className="leading-[28px]">주식회사 더비소프트 설립</p>
                        </div>
                      </motion.div>
                      <BackgroundBorder additionalClassNames="left-[11.5px] sm:left-[-8.5px] top-[9px]" />
                    </Container4>
                  </div>
                </div>
              </div>

              {/* Location & Contact Section */}
              <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center justify-center overflow-clip py-[80px] lg:py-[120px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col sm:flex-row gap-[40px] lg:gap-[80px] items-start sm:items-stretch max-w-[1200px] px-[24px] relative shrink-0 w-full">
                  <Container5>
                    <Helper1 text="Location" text1="찾아오시는 길" />
                    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                        <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
                          <Svg1>
                            <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </Svg1>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
                          <ContainerText6 text="주소" />
                          <Container2 text="서울특별시 영등포구 선유로 13길 25, 213호" text1="(문래동6가 에이스하이테크시티2)" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                        <div className="bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]">
                          <div className="h-[24px] relative shrink-0 w-[20px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
                              <g clipPath="url(#clip0_1_964)" id="Frame">
                                <path d={svgPaths.p24ded780} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_964">
                                  <rect fill="white" height="24" width="20" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
                          <ContainerText6 text="지하철" />
                          <ContainerText7 text="지하철 2호선 문래역 도보 10분" />
                        </div>
                      </div>
                    </div>
                  </Container5>
                  <Container5>
                    <Helper1 text="CONTACT" text1="연락처" />
                    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                        <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
                          <Svg1>
                            <path d={svgPaths.p3a2d4980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </Svg1>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
                          <ContainerText6 text="전화 및 FAX" />
                          <Container2 text="TEL. 02-6052-3889 | FAX. 02-6008-3838" text1=" " />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                        <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
                          <Svg1>
                            <path d={svgPaths.p13268cc7} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </Svg1>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
                          <ContainerText6 text="이메일" />
                          <ContainerText7 text="master@thebeesoft.com" />
                        </div>
                      </div>
                    </div>
                  </Container5>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <HowWeWork />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}