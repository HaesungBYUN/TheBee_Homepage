import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/svg-mkahh9klrl";
import imgBigDataAnalytics from "@/assets/bee0d7335ba9c7d1cb6f76e9c25452666693add1.png";
import imgBigDataAnalytics1 from "@/assets/ff2dc884f57040b6d2fe9b9f95fcce46c1b5fe1c.png";
import imgbutton_manufacture from "@/assets/imgbutton_manufacture.png";
import imgbutton_finance from "@/assets/imgbutton_finance.png";
import imgbutton_distrubution from "@/assets/imgbutton_distrubution.png";
import imgbutton_telecom from "@/assets/imgbutton_telecom.png";
import imgbutton_service from "@/assets/imgbutton_service.png";
import imgbutton_public from "@/assets/imgbutton_public.png";
import clsx from "clsx";

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <div className={clsx("relative rounded-[10px] self-stretch shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative">{children}</div>
    </div>
  );
}

function BackgroundText({ text }: { text: string }) {
  return (
    <Wrapper2 additionalClassNames="bg-[#fff0e6]">
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c04800] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </Wrapper2>
  );
}

function BackgroundText1({ text }: { text: string }) {
  return (
    <Wrapper2 additionalClassNames="bg-[#f1f2f3]">
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3b648c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </Wrapper2>
  );
}

function BackgroundText2({ text }: { text: string }) {
  return (
    <div className="bg-[#e4f6f1] h-full relative rounded-[10px] shrink-0">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c7b63] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2fc85a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ContainerText({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 flex-1">
      <div className="flex flex-col font-light justify-center leading-[0] not-italic relative shrink-0 text-[#e0e7ff] text-[16px] break-keep">
        <p className="leading-[1.4]">{children}</p>
      </div>
    </div>
  );
}

function HeadingText({ text }: { text: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d293d] text-[18px] break-keep">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-normal justify-center leading-[0] lg:max-w-none max-w-[520px] not-italic relative shrink-0 text-[#45556c] text-[16px] w-full">{children}</div>
    </div>
  );
}

function Heading({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#1b5cfe] text-[12px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        <p className="leading-[16px]">{children}</p>
      </div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[6px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Text({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[12px] py-[5px] relative">
        <p className="font-normal leading-[1.4] not-italic relative shrink-0 text-[#364153] text-[12px] text-center whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

function Svg1({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <div className={clsx("relative size-[32px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}

function Frame11Helper({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div style={{ "--transform-inner-width": "1182", "--transform-inner-height": "22" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 size-[32px]", className)}>
      <div className="-rotate-90 flex-none">{children}</div>
    </div>
  );
}

function Helper({ text, text1, text2, additionalClassNames = "" }: { text: string; text1: string; text2: string; additionalClassNames?: string }) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[24px] relative", additionalClassNames)}>
      <div className="flex flex-col font-bold justify-center opacity-23 relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.4]">{text1}</p>
      </div>
      <div className="flex flex-col font-normal justify-center min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-[min-content]">
        <p className="leading-[1.4]">{text2}</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[4px] bg-[#f3f6fa] h-auto min-h-px min-w-px relative rounded-[14px] w-full">
      <div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center w-full h-auto">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] md:p-[31.667px] relative w-full h-auto">{children}</div>
      </div>
    </div>
  );
}

function HeadingText1({ text }: { text: string }) {
  return (
    <div className="relative shrink-0 w-[438.67px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
      <div className="absolute inset-0 overflow-hidden rounded-[10px]">{children}</div>
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0 rounded-[10px]" />
    </div>
  );
}

function Text1({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative size-full">
        <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-shadow-[0px_1px_10px_rgba(0,0,0,0.84)] text-white whitespace-nowrap">
          <p className="leading-[20px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Helper1({ text, text1 }: { text: string; text1: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-bold relative shrink-0 text-[#101828] text-[18px] md:text-[20px] w-full">{text}</p>
      <p className="font-normal relative shrink-0 text-[#4a5565] text-[14px] md:text-[16px] w-full">{text1}</p>
    </div>
  );
}

function Container40CardProject({ children, additionalClassNames = "", bgColor = "bg-white" }: React.PropsWithChildren<{ additionalClassNames?: string; bgColor?: string }>) {
  return (
    <div className={clsx(bgColor, "justify-self-stretch min-h-[160px] md:min-h-[205px] relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] px-[32px] py-[20px] md:py-[32px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export function SolutionsContent() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[56px] h-[550px] items-center overflow-clip pt-[140px] px-[24px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden z-0">
          <video autoPlay className="absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" loop playsInline muted>
            <source src={`${import.meta.env.BASE_URL}videos/solution_video_short.mp4`} type="video/mp4" />
          </video>
          <div aria-hidden="true" className="absolute bg-[#0f172a] inset-0 mix-blend-color z-1" />
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 z-2" />
        </div>
        <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] relative shrink-0 w-full z-10">
          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
            <div className="bg-white content-stretch flex items-start justify-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.4]">Enterprise Solutions</p>
              </div>
            </div>
            <div className="flex flex-col font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[56px] text-center text-white">
              <p className="leading-[1.3] break-keep">
                차세대 솔루션 기반{" "}
                <br className="hidden lg:block" aria-hidden="true" />
                비즈니스 설계
              </p>
            </div>
            <div className="flex flex-col font-normal justify-center leading-[1.4] not-italic opacity-80 relative shrink-0 text-[16px] md:text-[20px] text-center text-white w-full max-w-[530px]">
              <p className="mb-0 break-keep">{`현장을 잘 이해하기에 가능한 혁신. `}</p>
              <p className="break-keep">더비소프트는 복잡한 비즈니스 과제를 명쾌하게 해결하는 최적화된 엔터프라이즈 솔루션을 설계하고 구축합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ERP Integration Solution */}
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] px-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full">
          <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] break-keep">
            <p className="leading-[1.4]">ERP Integration Solution</p>
          </div>
          <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px] break-keep">
            <p className="leading-[1.4]">엔터프라이즈 전사적 자원 관리 통합 솔루션</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-[32px] lg:gap-[56px] items-center lg:items-start justify-center min-h-[440.67px] max-w-[1200px] relative shrink-0 w-full">
          <div className="bg-[#0f172a] flex-1 lg:flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px] self-stretch w-full">
            <div className="flex flex-col justify-center overflow-clip rounded-[inherit] w-full h-full">
              <div className="content-stretch flex flex-col items-start justify-start p-[32px] sm:p-[40px] relative w-full h-full">
                <div className="content-stretch flex flex-col items-start gap-[32px] relative w-full">
                  <div className="flex flex-col items-start gap-[24px] w-full">
                    {/* Icon Section */}
                    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] p-[12px] rounded-[14px]">
                      <div className="relative shrink-0 size-[40px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          <g id="SVG">
                            <path d={svgPaths.p18129c20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d={svgPaths.p37d13800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M25 3.33301V6.66634" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M25 33.333V36.6663" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M3.33594 25H6.66927" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M3.33594 15H6.66927" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M33.3359 25H36.6693" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M33.3359 15H36.6693" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M15 3.33301V6.66634" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                            <path d="M15 33.333V36.6663" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    {/* Title Section */}
                    <div className="flex flex-col font-bold justify-center leading-[1.4] not-italic relative shrink-0 text-[24px] text-white break-keep">
                      <p className="mb-0">성공적인 ERP 구축,</p>
                      <p>왜 더비소프트와 함께해야 할까요?</p>
                    </div>
                  </div>
                  {/* List Section */}
                  <div className="flex flex-col gap-[16px] items-start w-full">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0">
                        <Svg />
                      </div>
                      <ContainerText>15년 이상의 구축 노하우</ContainerText>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0">
                        <Svg />
                      </div>
                      <ContainerText>정규직 중심의 ERP 전담 팀 보유</ContainerText>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0">
                        <Svg />
                      </div>
                      <ContainerText>글로벌 표준부터 로컬 규제까지 대응</ContainerText>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0">
                        <Svg />
                      </div>
                      <ContainerText>{`ORACLE / SAP 간의 상호 전환 프로젝트 진행 `}</ContainerText>
                    </div>
                  </div>
                  {/* Bottom Border & Metric Section */}
                  <div className="w-full pt-[32px] border-t border-[rgba(255,255,255,0.1)]">
                    <div className="flex gap-[8px] items-center">
                      <div className="bg-[#ff6000] rounded-full shrink-0 size-[8px]" />
                      <div className="flex flex-col flex-1 font-light justify-center leading-[1.4] not-italic text-[#c6d2ff] text-[14px] break-keep">
                        <p>15+ 대기업 프로젝트 완료</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] lg:gap-[48px] items-start justify-center py-[16px] relative shrink-0 w-full lg:flex-[1.5_1_0%]">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
                <div className="h-[24px] relative shrink-0 w-[189.168px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189.168 24">
                    <path d={svgPaths.p29912300} fill="var(--fill-0, black)" id="Union" />
                  </svg>
                </div>
                <HeadingText text="Oracle ERP Implementation" />
              </div>
              <Container1>
                <p className="leading-[1.4] break-keep">
                  {`대규모 데이터 처리에 최적화된 Oracle 기반의 재무, 생산, 영업, 물류, 인사, 서비스 시스템 구축. `}
                  <br />
                  {`클라우드 전환 및 마이그레이션 전문 솔루션을 제공합니다.`}
                </p>
              </Container1>
              <div className="content-stretch flex flex-wrap gap-[0px_7.99px] h-[33px] items-start pt-[8px] relative shrink-0 w-full">
                <BackgroundText text="Cloud Migration" />
                <BackgroundText text="Enterprise Scale" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
                <div className="h-[32px] relative shrink-0 w-[65px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 32">
                    <g clipPath="url(#clip0_1_2851)" id="sap-3 1">
                      <path clipRule="evenodd" d={svgPaths.p1ee81a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                      <path clipRule="evenodd" d={svgPaths.p2cd70b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                      <g id="Vector_3" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2851">
                        <rect fill="white" height="32" width="65" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <HeadingText text="SAP ERP Optimization" />
              </div>
              <Container1>
                <p className="leading-[1.4] break-keep">
                  {`글로벌 표준 프로세스인 SAP S/4HANA 컨설팅 및 구축.`}
                  <br />
                  {`고도화된 ABAP 개발 및 인터페이스 최적화를 통해 경영 효율성을 극대화합니다.`}
                </p>
              </Container1>
              <div className="content-stretch flex flex-wrap gap-[0px_8px] h-[33px] items-start pt-[8px] relative shrink-0 w-full">
                <BackgroundText1 text="S/4HANA" />
                <BackgroundText1 text="ABAP Development" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big Data Analytics Section */}
      <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center px-[24px] py-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full">
            <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] break-keep">
              <p className="leading-[1.4]">비즈니스 성과로 이어지는 디지털 솔루션</p>
            </div>
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px]">
              <p className="leading-[1.4]">운영 효율을 높이고, 의사결정을 빠르게 만드는 실무 중심 솔루션을 제공합니다.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
            <div className="bg-white content-stretch flex flex-col isolate items-start min-h-px min-w-px overflow-clip relative rounded-[24px] self-stretch shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="bg-white content-stretch flex flex-col h-[200px] sm:h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 overflow-hidden">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBigDataAnalytics} />
                    </div>
                    <img alt="" className="absolute max-w-none object-cover size-full" src={imgBigDataAnalytics1} />
                  </div>
                </div>
                <div className="absolute bg-[rgba(67,66,66,0.5)] inset-[0.33px_0_-0.33px_0]" />
                <div className="absolute backdrop-blur-[6px] bg-[rgba(255,242,242,0.1)] content-stretch flex flex-col items-start left-[24px] p-[12.667px] rounded-[14px] top-[24px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="SVG">
                        <path d={svgPaths.p11feba00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p1b1afa80} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p3eed8380} id="Vector_3" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full z-[1]">
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[24px] w-full">
                      <p className="leading-[32px]">Big Data Analytics</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45556c] text-[16px] w-full">
                      <p className="leading-[26px] break-keep">흩어진 데이터를 수집·정리해 한눈에 파악할 수 있도록 분석합니다. 매출, 고객 행동, 운영 지표를 기반으로 더 바른 의사결정을 지원합니다.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-wrap gap-[8px] items-start pt-[8px] relative shrink-0 w-full">
                    <BackgroundText2 text="Data Analysis" />
                    <BackgroundText2 text="Business Insights" />
                    <BackgroundText2 text="Data Warehouse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 산업 특성에 최적화된 맞춤형 시스템 구축 Section */}
      <div className="content-stretch flex flex-col items-center overflow-clip py-[80px] px-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1200px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 w-full text-center">
            <div className="flex flex-col font-bold items-center justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] break-keep w-full">
              <p className="leading-[1.4]">산업 특성에 최적화된 맞춤형 시스템 구축</p>
            </div>
            <div className="flex flex-col font-normal items-center justify-center relative shrink-0 text-[16px] md:text-[18px] text-[rgba(85,85,85,0.8)] w-full">
              <p className="leading-[1.4] break-keep">다년간의 노하우와 최신 기술 스택을 결합하여 귀사의 산업 특성에 최적화된 맞춤형 시스템을 구현합니다.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[4px] items-center relative shrink-0 w-full">
              <div className="backdrop-blur-[8.5px] bg-[#2a3142] w-full md:flex-1 h-auto min-h-[120px] relative rounded-[14px]">
                <Helper text="01" text1="요구사항 분석" text2="산업·업무 특성을 고려한 비즈니스 요구사항 분석" additionalClassNames="size-full p-[20px]" />
              </div>
              <Frame11Helper className="rotate-90 md:rotate-0">
                <Svg1>
                  <path d="M8 12L16 20L24 12" id="Vector" stroke="var(--stroke-0, #2A3142)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Svg1>
              </Frame11Helper>
              <div className="backdrop-blur-[8.5px] bg-[#273456] w-full md:flex-1 h-auto min-h-[120px] relative rounded-[14px]">
                <Helper text="02" text1="맞춤형 설계" text2="고객 시스템 환경에 적합한 기술 · 솔루션 · 프레임워크 선정" additionalClassNames="w-full p-[20px]" />
              </div>
              <Frame11Helper className="rotate-90 md:rotate-0">
                <Svg1>
                  <path d="M8 12L16 20L24 12" id="Vector" stroke="var(--stroke-0, #2A3142)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
                </Svg1>
              </Frame11Helper>
              <div className="backdrop-blur-[8.5px] bg-[#162a62] w-full md:flex-1 h-auto min-h-[120px] relative rounded-[14px]">
                <Helper text="03" text1="구축 및 운영" text2="검증된 기술 기반 맞춤형 시스템 구축·운영" additionalClassNames="w-full p-[20px]" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="bg-[#f3f6fa] content-stretch flex flex-col gap-[16px] items-start px-[20px] md:px-[32px] py-[32px] md:py-[40px] relative rounded-[30px] shrink-0 w-full max-w-[1200px]">
                <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] max-w-[1200px] relative shrink-0 text-center w-full">
                  <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#333] text-[20px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
                    <p className="leading-[1.4]">{`Proven Tech Stack `}</p>
                  </div>
                  <div className="flex flex-col font-normal not-italic relative shrink-0 text-[#45556c] text-[14px]">
                    <p className="leading-[1.4]">고객 환경에 맞춰 검증된 기술 스택을 유연하게 적용합니다.</p>
                  </div>
                </div>
                <div className="content-stretch grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[32px] h-auto items-start justify-center pt-[24px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[rgba(42,49,66,0.1)] border-solid border-t inset-0 pointer-events-none" />
                  <div className="backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch">
                    <Heading>{`Frontend `}</Heading>
                    <Container2>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="HTML5" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="React" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Vue.js" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Angular" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Bootstrap" />
                      </div>
                    </Container2>
                  </div>
                  <div className="backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch">
                    <Heading>{`Backend `}</Heading>
                    <Container2>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Java" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Python" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Spring" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Django" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Flask" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Node.js" />
                      </div>
                    </Container2>
                  </div>
                  <div className="backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch">
                    <Heading>{`Database `}</Heading>
                    <Container2>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Oracle" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="SQL Server" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="MySQL" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="MongoDB" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="PostgreSQL" />
                      </div>
                    </Container2>
                  </div>
                  <div className="backdrop-blur-[4px] content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch">
                    <Heading>{`Infra / DevOps `}</Heading>
                    <Container2>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="AWS" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Azure" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Docker" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Kubernetes" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Jenkins" />
                      </div>
                      <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0">
                        <Text text="Git" />
                      </div>
                    </Container2>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full overflow-hidden">
                <div className="h-auto relative shrink-0 w-full max-w-[605px] flex items-center justify-center px-[24px]">
                  <div className="w-full relative">
                    <svg className="block w-full h-auto" fill="none" viewBox="0 0 605.506 33.5">
                      <g id="Frame 12">
                        <path d={svgPaths.p3acc1cf1} fill="var(--fill-0, #2A3142)" fillOpacity="0.3" id="Union" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch grid grid-cols-2 gap-[12px] md:gap-[24px] h-auto items-stretch justify-items-center relative shrink-0 w-full max-w-[1200px]">
                <OverlayBorderOverlayBlur>
                  <div className="flex flex-col items-center gap-[12px] w-full">
                    <Svg1 additionalClassNames="shrink-0">
                      <path d={svgPaths.p2140f00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                      <path d="M10.6641 28H21.3307" id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                      <path d="M16 22.667V28.0003" id="Vector_3" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                    </Svg1>
                    <div className="flex flex-col font-semibold justify-center not-italic relative shrink-0 text-[#101828] text-[14px] md:text-[16px] text-center w-full">
                      <p className="leading-[1.4]">Desktop UI Architecture</p>
                    </div>
                  </div>
                </OverlayBorderOverlayBlur>
                <OverlayBorderOverlayBlur>
                  <div className="flex flex-col items-center gap-[12px] w-full">
                    <Svg1 additionalClassNames="shrink-0">
                      <path d={svgPaths.pdee8b00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                      <path d="M16 24H16.0133" id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                    </Svg1>
                    <div className="flex flex-col font-semibold justify-center not-italic relative shrink-0 text-[#101828] text-[14px] md:text-[16px] text-center w-full">
                      <p className="leading-[1.4]">Mobile UI Architecture</p>
                    </div>
                  </div>
                </OverlayBorderOverlayBlur>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full pt-[32px] md:pt-[40px]">
              <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-center text-white w-full">
                <p className="font-semibold text-[24px] break-keep px-[24px]">
                  <span className="leading-[1.4] text-[#0f172a]">시스템 구축을 넘어 산업 및 업무 환경에 맞춘 </span>
                  <span className="leading-[1.4]">
                    <br className="hidden lg:block" aria-hidden="true" />
                  </span>
                  <span className="bg-clip-text bg-gradient-to-r from-[#1b5cfe] leading-[1.4] text-[transparent] to-[#00d3f2]">성공적인 비즈니스 트랜스포메이션</span>
                  <span className="leading-[1.4] text-[#0f172a]">을 실현합니다.</span>
                </p>
              </div>
            </div>
            <div className="content-start grid grid-cols-3 md:grid-cols-6 gap-[12px] h-auto items-start justify-center relative shrink-0 w-full">
              <div className="h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden">
                <Wrapper4>
                  <img alt="" className="size-full object-cover" src={imgbutton_manufacture} />
                </Wrapper4>
                <Text1 text="제조" />
              </div>
              <div className="h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden">
                <Wrapper4>
                  <img alt="" className="size-full object-cover" src={imgbutton_finance} />
                </Wrapper4>
                <Text1 text="금융" />
              </div>
              <div className="h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden">
                <Wrapper4>
                  <img alt="" className="size-full object-cover" src={imgbutton_distrubution} />
                </Wrapper4>
                <Text1 text="유통" />
              </div>
              <div className="h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden">
                <Wrapper4>
                  <img alt="" className="size-full object-cover" src={imgbutton_telecom} />
                </Wrapper4>
                <Text1 text="통신" />
              </div>
              <div className="h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden">
                <Wrapper4>
                  <img alt="" className="size-full object-cover" src={imgbutton_service} />
                </Wrapper4>
                <Text1 text="서비스" />
              </div>
              <div className="h-[80px] min-h-px min-w-px relative rounded-[10px] overflow-hidden">
                <Wrapper4>
                  <img alt="" className="size-full object-cover" src={imgbutton_public} />
                </Wrapper4>
                <Text1 text="공공" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 주요 프로젝트 Section */}
      <div className="bg-[#f3f6fa] content-stretch flex flex-col gap-[32px] items-center py-[80px] px-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center w-full px-[24px]">
          <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
            <p className="leading-[1.4]">{`주요 프로젝트 `}</p>
          </div>
          <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#334155] text-[16px] md:text-[18px] break-keep" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            <p className="leading-[1.4]">{`다양한 산업군에서 성공적인 디지털 트랜스포메이션을 이끌어왔습니다. `}</p>
          </div>
        </div>
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-1 md:grid-cols-3 items-stretch max-w-[1200px] relative shrink-0 w-full">
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
              <Helper1 text="LG전자 차세대 ERP 구축" text1="차세대 ERP(생산/재경) 구축 참여" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="ERP" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="생산" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="재경" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
              <Helper1 text="LG전자 커머스 플랫폼 운영" text1="LG.com 글로벌 커머스 플랫폼 운영" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="e커머스" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="글로벌" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="플랫폼" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
              <Helper1 text="LG CNS CDP 솔루션 및 SINGLEX 운영" text1="고객 데이터 플랫폼(CDP) 솔루션 개발 및 SINGLEX UAS/HR 시스템 운영" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="CDP" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="SINGLEX" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="HR" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
              <Helper1 text="LG에너지솔루션 품질시스템 고도화" text1="품질 시스템 고도화 및 소재 개발 Workplace 구축" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="품질관리" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="Workplace" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="고도화" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
              <Helper1 text="LG이노텍 차세대 ERP 분석/설계" text1="차세대 ERP 구축 분석/설계 및 ERP 재무 모듈 운영" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="ERP" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="차세대" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="분석/설계" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
              <Helper1 text="LIG넥스원 Oracle ERP HR 컨설팅" text1="Oracle ERP HR 경량화 컨설팅 및 시스템 개발" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="ERP" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="HR" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
              <Helper1 text="LG생활건강 경영관리시스템 고도화" text1="전사 경영관리 시스템 기능 고도화 수행" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="경영관리시스템" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="고도화" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2024</p>
              <Helper1 text="LG전자 ERP 운영/유지보수" text1="LG전자 ERP 재무, 공통 모듈 운영 및 유지보수" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="ERP" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="재무" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="운영/유지보수" />
              </div>
            </div>
          </Container40CardProject>
          <Container40CardProject additionalClassNames="h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
              <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2024</p>
              <Helper1 text="LG CNS 데이터 파이프라인 관리" text1="DATA 파이프라인 관리 및 고객 데이터 플랫폼 운영/기술지원" />
            </div>
            <div className="h-[12px] w-full" />
            <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="DATA" />
              </div>
              <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                <Text text="CDP" />
              </div>
            </div>
          </Container40CardProject>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden w-full flex justify-center"
            >
              <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-1 md:grid-cols-3 items-stretch max-w-[1200px] relative shrink-0 w-full mt-[16px] pb-[16px]">
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2024</p>
                    <Helper1 text="LG에너지솔루션 품질시스템 고도화" text1="양산 품질, 협력사 품질 Data 관리 고도화" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="품질관리" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="고도화" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2024</p>
                    <Helper1 text="LG화학 시스템 고도화" text1="물동 관리 시스템 기능 개선" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="물류관리" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="고도화" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2024</p>
                    <Helper1 text="LX세미콘 ERP 운영/유지보수" text1="LX세미콘 ERP 영업, 생산 모듈 운영 및 유지보수" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="ERP" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="영업" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="생산" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2023</p>
                    <Helper1 text="LG전자 차세대 ERP 개발" text1="LG전자 차세대 ERP 관세환급 개발 및 재무, 공통 모듈 운영" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="ERP" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="재무" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="관세환급" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2023</p>
                    <Helper1 text="LG이노텍 ERP 운영/유지보수" text1="LG이노텍 ERP 재무 모듈 운영 및 세무조정 고도화 DB 개발" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="ERP" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="재무" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="DB" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2023</p>
                    <Helper1 text="법무부 형사사법정보시스템 유지보수" text1="형사사법정보시스템 유지보수" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="법무부" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="유지보수" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2022</p>
                    <Helper1 text="LX판토스 차세대 시스템 구축" text1="LX판토스 차세대 포워딩 시스템 구축" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="물류" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="차세대" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2022</p>
                    <Helper1 text="LG유플러스 콘텐츠 관리 시스템 고도화" text1="LG유플러스 콘텐츠 관리 시스템, UCube 시스템 구축" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="콘텐츠 관리" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="고도화" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="텔레콤" />
                    </div>
                  </div>
                </Container40CardProject>
                <Container40CardProject additionalClassNames="h-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                    <p className="font-bold relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2022</p>
                    <Helper1 text="히타치엘지 데이터스토리지 운영/유지보수" text1="MES 시스템 운영 및 유지보수" />
                  </div>
                  <div className="h-[12px] w-full" />
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="MES" />
                    </div>
                    <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0">
                      <Text text="운영/유지보수" />
                    </div>
                  </div>
                </Container40CardProject>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          onClick={() => setShowMore(!showMore)}
          className="bg-black content-stretch flex gap-[12px] items-center overflow-clip px-[48px] py-[20px] relative rounded-[999px] shrink-0 cursor-pointer hover:bg-[#1a1a1a] transition-colors"
        >
          <div className="flex items-center justify-center relative shrink-0">
            <div className={clsx("flex-none transition-transform", showMore ? "" : "rotate-180")}>
              <div className="relative size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="keyboard_arrow_up">
                    <path d={svgPaths.p31396200} fill="var(--fill-0, white)" id="icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">{showMore ? "접기" : "더 보기"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
