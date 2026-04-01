
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import { Link } from "react-router";
import svgPaths from "@/imports/svg-zjy6vz25xq";
import { CountUp } from "@/components/CountUp";
import prime_partner from "@/assets/prime_partner.png";
import meeting from "@/assets/meeting.png";
import lgcns from "@/assets/lgcns.png";
import lgelectronis from "@/assets/lgelectronis.png";
import lginnotek from "@/assets/lginnotek.png";
import lguplus from "@/assets/lguplus.png";
import lgensol from "@/assets/lgensol.png";
import lgchem from "@/assets/lgchem.png";
import lxsemicon from "@/assets/lxsemicon.png";
import hldatastorage from "@/assets/hldatastorage.png";


import wooribank from "@/assets/wooribank.png";
import lxpantos from "@/assets/lxpantos.png";
import biztechi from "@/assets/biztechi.png";
import oracle from "@/assets/oracle.png";
import ibm from "@/assets/ibm.png";
import sap from "@/assets/sap.png";
import gsretail from "@/assets/gsretail.png";
import unikorea from "@/assets/unikorea.png";
import police from "@/assets/police.png";
import prosecution from "@/assets/prosecution.png";
import imgOverlayTalent from "@/assets/talent.png";
import imgOverlayWelfare from "@/assets/welfare.png";
import imgOverlayRecruit from "@/assets/recruit.png";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-end p-[32px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundBorderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] h-full">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[24px] md:px-[41px] md:py-[31px] relative w-full h-full">{children}</div>
    </div>
  );
}

function BackgroundBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fff0e6] relative rounded-[12px] shrink-0 size-[48px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-col font-inherit justify-center not-italic relative shrink-0 text-[#334155] text-[18px] w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <BackgroundImage additionalClassNames={additionalClassNames}>
      <p>{children}</p>
    </BackgroundImage>
  );
}

function SvgBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1>
      <g id="SVG">{children}</g>
    </BackgroundImage1>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-[#ff6000] content-stretch flex items-center justify-center px-[8px] py-[3px] relative rounded-[20px] shrink-0">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type ContainerBackgroundImageAndText5Props = {
  text: string;
};

function ContainerBackgroundImageAndText5({ text }: ContainerBackgroundImageAndText5Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center opacity-90 pb-[0.695px] relative shrink-0 w-full">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Frame 11">
            <path d={svgPaths.p28d93e00} id="Rectangle 3" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

type ContainerBackgroundImageAndText4Props = {
  text: string;
};

function ContainerBackgroundImageAndText4({ text }: ContainerBackgroundImageAndText4Props) {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 pb-[0.695px] relative shrink-0 w-full">
      <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type HeadingBackgroundImageAndText2Props = {
  text: string;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full">
      <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[24px] text-white">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type ContainerBackgroundImageAndText3Props = {
  text: string;
};

function ContainerBackgroundImageAndText3({ text }: ContainerBackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[#555] text-[16px] md:text-[18px] text-center">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] text-center">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type ContainerBackgroundImageAndText2Props = {
  text: string;
};

function ContainerBackgroundImageAndText2({ text }: ContainerBackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: { text: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff6000] text-[36px] text-center whitespace-nowrap">
        <div className="leading-[1.4]">{text}</div>
      </div>
    </div>
  );
}

type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames="w-full">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] w-full">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </BackgroundImage2>
  );
}

type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames="w-full">
      <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#334155] text-[20px] md:text-[24px]">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </BackgroundImage2>
  );
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white content-stretch flex flex-col items-start relative size-full"
    >
      <div className="content-stretch flex flex-col gap-[80px] items-center pb-[120px] relative shrink-0 w-full">
        <div className="h-[800px] relative shrink-0 w-full overflow-hidden bg-[#0f172a]">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[24px] pt-[120px] pb-[40px] relative size-full">
              <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <source src={`${import.meta.env.BASE_URL}videos/home_video_short.mp4`} type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
              <div className="max-w-[1200px] mx-auto relative shrink-0 w-full" style={{ zIndex: 2 }}>
                <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] px-[24px] relative w-full">
                  <div className="content-stretch flex flex-col items-start max-full lg:max-w-[600px] relative shrink-0 w-full">
                    <div className="flex flex-col font-extrabold justify-center leading-[1.3] not-italic relative shrink-0 text-[32px] md:text-[56px] text-white w-full lg:w-[900px] whitespace-pre-wrap">
                      <p className="mb-0">{`기업 IT 변화의 시작부터 성공까지.  `}</p>
                      <p>{`'Bee the Best with TheBeeSoft.'`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start max-w-full lg:max-w-[600px] relative shrink-0 lg:w-[600px]">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] md:text-[20px] text-white w-full">
                      <p className="leading-[1.4]"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] relative shrink-0 w-full px-[24px]">
          <div className="flex flex-col items-center max-w-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[inherit] relative w-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-bold justify-center leading-[1.4] not-italic relative shrink-0 text-[#0f172a] text-[22px] md:text-[28px] text-center w-full">
                  <p>더비소프트는 고도화된 기술력과 Domain Knowledge를 바탕으로 <br className="hidden lg:inline" /> 고객에게 성공적인 DX, AX 솔루션을 제공하는 전문가 그룹입니다.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-row flex-wrap gap-[40px] items-start justify-center pt-[40px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1.2_1_400px] flex-col gap-[32px] items-start relative min-w-[300px]">
                  <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[16px] items-start px-[40px] py-[32px] relative rounded-[24px] w-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex font-normal justify-start leading-[1.5] not-italic relative shrink-0 text-[#64748b] text-[16px] w-full">
                        <BackgroundImage additionalClassNames="font-normal">
                          <p className="mb-0">{`ERP에서 다진 견고한 실무 경험, `}</p>
                          <p className="mb-0">{`폭넓은 산업군에서의 업무 경험과 IT 기술로 완성한 혁신. `}</p>
                          <p className="mb-0">{`더비소프트는 LG CNS의 전략적 프라임 파트너(Prime Partner)로서 그 역량을 증명하고 있습니다. `}</p>
                        </BackgroundImage>
                      </div>
                    </div>
                    <motion.div
                      initial={isMounted ? "hidden" : false}
                      whileInView="show"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.4
                          }
                        }
                      }}
                      className="content-stretch flex flex-col gap-[12px] items-start py-[12px] relative shrink-0 w-full"
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8 }
                          }
                        }}
                        className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full"
                      >
                        <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
                          <SvgBackgroundImage>
                            <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </SvgBackgroundImage>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <ContainerBackgroundImage additionalClassNames="font-bold">
                            <span className="leading-[28px] text-[#ff6000]">꿀벌처럼 부지런히</span>
                            <span className="leading-[28px]">{` 현장을 누비고, `}</span>
                          </ContainerBackgroundImage>
                        </div>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8 }
                          }
                        }}
                        className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full"
                      >
                        <div className="bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]">
                          <BackgroundImage1>
                            <g id="Frame">
                              <path d={svgPaths.p1e42320} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                          </BackgroundImage1>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                          <ContainerBackgroundImage additionalClassNames="font-bold">
                            <span className="leading-[28px] text-[#ff6000]">벌집처럼 정교하게</span>
                            <span className="leading-[28px]">{` 시스템을 설계하며, `}</span>
                          </ContainerBackgroundImage>
                        </div>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8 }
                          }
                        }}
                        className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full"
                      >
                        <div className="bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]">
                          <div className="h-[26px] relative shrink-0 w-[15px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 26">
                              <g clipPath="url(#clip0_1_450)" id="Frame">
                                <path d={svgPaths.pdaa2b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_450">
                                  <rect fill="white" height="26" width="15" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                          <BackgroundImage additionalClassNames="font-bold">
                            <p className="mb-0">
                              <span className="leading-[28px]">{`고객에게 성과라는 `}</span>
                              <span className="leading-[28px] text-[#ff6000]">달콤한 결실</span>
                              <span className="leading-[28px]">을 안겨드리는</span>
                            </p>
                            <p className="leading-[28px]">{`IT 시스템 파트너입니다. `}</p>
                          </BackgroundImage>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="mx-auto flex-[1_1_300px] min-w-[200px] max-w-[90%] md:max-w-[450px] relative shrink">
                  <img alt="LG CNS Prime Partner" className="backdrop-blur-[2px] object-contain pointer-events-none w-full h-auto rounded-[inherit]" src={prime_partner} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1200px] relative shrink-0 w-full px-[24px]">
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
              <p className="leading-[1.4]">Our Core Expertise</p>
            </div>
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px]">
              <p className="leading-[1.4]">더비소프트는 고도화된 기술력과 산업 이해도를 바탕으로 최적의 해결책을 제공합니다.</p>
            </div>
          </div>
          <div className="content-stretch grid grid-cols-1 md:grid-cols-2 gap-[16px] items-stretch relative shrink-0 w-full">
            <BackgroundBorderBackgroundImage>
              <BackgroundBackgroundImage>
                <SvgBackgroundImage>
                  <path d={svgPaths.p13b4cd00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p32939e80} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pdc9c900} id="Vector_3" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p20de0972} id="Vector_4" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </SvgBackgroundImage>
              </BackgroundBackgroundImage>
              <HeadingBackgroundImageAndText text="ERP 솔루션 구축" />
              <ContainerBackgroundImageAndText text="업무 프로세스를 통합하여 운영 효율성을 극대화하고 실시간 데이터 경영 환경을 제공합니다." />
            </BackgroundBorderBackgroundImage>
            <BackgroundBorderBackgroundImage>
              <BackgroundBackgroundImage>
                <SvgBackgroundImage>
                  <path d={svgPaths.p3498b580} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </SvgBackgroundImage>
              </BackgroundBackgroundImage>
              <HeadingBackgroundImageAndText text="디지털 전환 (DX)" />
              <ContainerBackgroundImageAndText text="산업 맞춤형 시스템을 구축하고, 레거시 시스템의 클라우드 아키텍처로의 유연한 비즈니스 전환을 지원합니다." />
            </BackgroundBorderBackgroundImage>
            <BackgroundBorderBackgroundImage>
              <BackgroundBackgroundImage>
                <SvgBackgroundImage>
                  <path d={svgPaths.p11feba00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p1b1afa80} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p3eed8380} id="Vector_3" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </SvgBackgroundImage>
              </BackgroundBackgroundImage>
              <HeadingBackgroundImageAndText text="데이터 사이언스" />
              <BackgroundImage2 additionalClassNames="w-full">
                <div className="flex flex-col font-normal justify-center leading-[1.4] not-italic relative shrink-0 text-[#334155] text-[16px] w-full">
                  <p className="mb-0">빅데이터 분석과 시각화를 통해 데이터에 숨겨진 비즈니스 인사이트를 발굴합니다.</p>
                </div>
              </BackgroundImage2>
            </BackgroundBorderBackgroundImage>
            <BackgroundBorderBackgroundImage>
              <BackgroundBackgroundImage>
                <SvgBackgroundImage>
                  <path d={svgPaths.p185ca980} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </SvgBackgroundImage>
              </BackgroundBackgroundImage>
              <HeadingBackgroundImageAndText text="유지보수 및 운영" />
              <ContainerBackgroundImageAndText text="구축 이후에도 지속적인 모니터링과 기술 지원으로 비즈니스의 연속성을 보장합니다." />
            </BackgroundBorderBackgroundImage>
          </div>
        </div>

        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[#0b101c] inset-0" />
              <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={meeting} />
            </div>
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center px-[24px] py-[80px] relative w-full max-w-[1200px] mx-auto">
                <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
                  <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-start p-[16px] relative rounded-[16px] shrink-0">
                    <div className="relative shrink-0 size-[36px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                        <g id="tabler-icon-trophy">
                          <path d={svgPaths.p3e480a50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-center text-white">
                        <p className="leading-[1.4]">숫자로 증명하는 신뢰</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center max-w-full lg:max-w-[768px] relative shrink-0 w-full">
                      <div className="flex flex-col font-light justify-center leading-[1.4] not-italic relative shrink-0 text-[#e0e7ff] text-[16px] lg:text-[20px] text-center">
                        <p className="mb-0">결과로 말하고 데이터로 증명합니다.</p>
                        <p>타협하지 않는 품질과 더비소프트의 고객을 향한 진심의 결실입니다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch grid grid-cols-2 sm:grid-cols-4 gap-x-[24px] gap-y-[32px] sm:gap-[32px] items-start justify-center relative size-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-center sm:items-start relative">
                          <ContainerBackgroundImageAndText1 text={<CountUp to={25} suffix="+" />} />
                          <ContainerBackgroundImageAndText2 text="기업 고객사" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center sm:items-start relative">
                          <ContainerBackgroundImageAndText1 text={<CountUp to={85} suffix="+" />} />
                          <ContainerBackgroundImageAndText2 text="연간 진행 프로젝트" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center sm:items-start relative">
                          <ContainerBackgroundImageAndText1 text={<CountUp to={98} suffix="%" />} />
                          <ContainerBackgroundImageAndText2 text="고객 만족도" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-center sm:items-start relative">
                          <ContainerBackgroundImageAndText1 text={<CountUp to={15} suffix="Y+" />} />
                          <ContainerBackgroundImageAndText2 text="업계 누적 경력" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center py-[80px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1200px] px-[24px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <HeadingBackgroundImageAndText1 text="Trusted Partners" />
                <ContainerBackgroundImageAndText3 text="더비소프트는 다양한 산업군의 리딩 기업들과 함께 혁신을 만들어가고 있습니다." />
              </div>
              <div className="content-start grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px] relative shrink-0 w-full">
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lgcns} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lgelectronis} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lginnotek} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lguplus} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lgensol} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lgchem} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lxsemicon} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={hldatastorage} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={wooribank} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={lxpantos} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={biztechi} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={oracle} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={ibm} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={sap} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={gsretail} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={unikorea} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={police} />
                </div>
                <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center p-[5px] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)]">
                  <img alt="" className="max-w-none object-contain pointer-events-none size-full" src={prosecution} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] px-[24px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <HeadingBackgroundImageAndText1 text="Careers at TheBeeSoft" />
            <ContainerBackgroundImageAndText3 text="더비소프트는 최고보다 최선을 다하는 사람들의 성장 공동체입니다." />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col md:flex-row gap-[24px] items-stretch justify-center relative shrink-0 w-full">
              <div className="bg-size-[479.40073013305664px_319.9999873638153px] bg-top-left flex-none md:flex-1 h-[320px] min-h-px min-w-px relative rounded-[24px]" style={{ backgroundImage: `url('${imgOverlayTalent}')` }}>
                <BackgroundImage3>
                  <div className="absolute inset-[0_-1.04%_-2.5%_-1.04%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392 328">
                      <g filter="url(#filter0_d_1_420)" id="Gradient">
                        <path d="M4 0H388V320H4V0Z" fill="url(#paint0_linear_1_420)" shapeRendering="crispEdges" />
                        <path d={svgPaths.p1f6eb400} shapeRendering="crispEdges" stroke="var(--stroke-0, black)" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="328" id="filter0_d_1_420" width="392" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_420" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_420" mode="normal" result="shape" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_420" x1="196" x2="196" y1="320" y2="147.529">
                          <stop stopOpacity="0.8" />
                          <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-col gap-[6.895px] items-start relative z-10">
                    <BackgroundImageAndText text="Talent" />
                    <HeadingBackgroundImageAndText2 text="인재상" />
                    <ContainerBackgroundImageAndText4 text="전문 역량, 성실함과 책임감, 협력과 소통의 자세를 지닌 인재를 육성하고자 합니다." />
                    <Link to="/careers#values" className="w-full">
                      <ContainerBackgroundImageAndText5 text="자세히 보기" />
                    </Link>
                  </div>
                </BackgroundImage3>
              </div>
              <div className="bg-size-[479.40073013305664px_319.9999873638153px] bg-top-left flex-none md:flex-1 h-[320px] min-h-px min-w-px relative rounded-[24px]" style={{ backgroundImage: `url('${imgOverlayWelfare}')` }}>
                <BackgroundImage3>
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[53.897%] to-[rgba(0,0,0,0)]" />
                  <div className="content-stretch flex flex-col gap-[6.895px] items-start relative z-10">
                    <BackgroundImageAndText text="Welfare" />
                    <HeadingBackgroundImageAndText2 text="복리후생" />
                    <ContainerBackgroundImageAndText4 text="자유로운 업무 환경 속에서 구성원의 성장을 위한 모든 여정을 세심하게 살핍니다." />
                    <Link to="/careers#culture" className="w-full">
                      <ContainerBackgroundImageAndText5 text="자세히 보기" />
                    </Link>
                  </div>
                </BackgroundImage3>
              </div>
              <div className="bg-size-[480.3001880645752px_320.0000002980232px] bg-top-left flex-none md:flex-1 h-[320px] min-h-px min-w-px relative rounded-[24px]" style={{ backgroundImage: `url('${imgOverlayRecruit}')` }}>
                <BackgroundImage3>
                  <div className="absolute bg-gradient-to-t from-[25.549%] from-[rgba(0,0,0,0.8)] inset-0 to-[53.897%] to-[rgba(0,0,0,0)]" />
                  <div className="content-stretch flex flex-col gap-[6.895px] items-start relative z-10">
                    <BackgroundImageAndText text="Process" />
                    <HeadingBackgroundImageAndText2 text="채용절차" />
                    <ContainerBackgroundImageAndText4 text="서류부터 최종 합격까지, 투명하고 빠른 채용 경험을 제공합니다." />
                    <Link to="/careers#process" className="w-full">
                      <ContainerBackgroundImageAndText5 text="자세히 보기" />
                    </Link>
                  </div>
                </BackgroundImage3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}