import { motion } from "motion/react";
import svgPaths from "@/imports/svg-149kuywxs6";
import imgSection from "@/assets/038bbe7521e89ad97b6b7f975057cac059667d9a.png";
import desk from "@/assets/desk.png";
import clsx from "clsx";

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_auto] md:flex-1 w-full min-h-[140px] md:h-[157.333px] relative rounded-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-col gap-[8px] items-center justify-center relative size-full p-4">{children}</div>
    </div>
  );
}

function Container2({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <motion.div
      whileHover="hover"
      className={clsx("backdrop-blur-[12px] bg-[rgba(255,255,255,0.7)] h-full justify-self-stretch relative rounded-[16px] shrink-0 cursor-default", additionalClassNames)}
    >
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative h-full w-full">{children}</div>
    </motion.div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(194,204,224,0.5)] relative rounded-[14px] shrink-0 size-[48px]">
      <motion.div
        variants={{
          hover: {
            y: [0, -4, 0],
            transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
          }
        }}
        className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[78px] left-[24px] top-[144px] sm:top-[172.67px] w-[calc(100%-48px)]">
      <p className="absolute font-normal leading-[26px] left-0 not-italic text-[#4b5563] text-[16px] top-[-0.67px] w-full">{children}</p>
    </div>
  );
}

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return <Wrapper1 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper1>;
}

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[24px] overflow-clip relative shrink-0 w-full">
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
            <div className="absolute inset-[-1px_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
                <path d="M1 1H15" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]">
            <div className="absolute inset-[-7.14%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
                <path d="M1 1L8 8L1 15" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadingText2({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold leading-[1.2] text-[#111827] text-[18px] sm:text-[20px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}

function Icon9Vector({ additionalClassNames = "" }: { additionalClassNames?: string }) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-50%_-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
          <path d="M1 1V3" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Icon8Vector({ additionalClassNames = "" }: { additionalClassNames?: string }) {
  return (
    <div className={clsx("absolute bottom-3/4 top-[8.33%]", additionalClassNames)}>
      <div className="absolute inset-[-25%_-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
          <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function HeadingText1({ text, additionalClassNames = "" }: { text: string; additionalClassNames?: string }) {
  return (
    <Wrapper1 additionalClassNames={clsx("h-[28px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-bold leading-[28px] left-0 not-italic text-[#111827] text-[18px] top-[-0.33px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}

function ParagraphText({ text }: { text: string }) {
  return <Wrapper2>{text}</Wrapper2>;
}

function HeadingText({ text }: { text: string }) {
  return (
    <div className="absolute h-[32px] left-[24px] top-[104px] sm:top-[128.67px] w-[calc(100%-48px)]">
      <p className="absolute font-bold leading-[32px] left-0 not-italic text-[#111827] text-[20px] md:text-[24px] top-[-0.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function Helper({ text, text1 }: { text: string; text1: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start not-italic relative w-full">
        <p className="font-bold leading-[28px] relative shrink-0 text-[#111827] text-[18px] whitespace-nowrap w-[70px]">{text}</p>
        <p className="flex-[1_0_0] font-normal leading-[1.6] min-h-px min-w-0 relative text-[#4b5563] text-[14px] break-all">{text1}</p>
      </div>
    </div>
  );
}

export function CareersContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[56px] min-h-[550px] h-auto items-center justify-center overflow-clip pt-[140px] pb-[60px] px-[24px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden z-0">
          <video autoPlay className="absolute min-w-full min-h-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" loop playsInline muted>
            <source src={`${import.meta.env.BASE_URL}videos/talent_video_short.mp4`} type="video/mp4" />
          </video>
          <div aria-hidden="true" className="absolute bg-[#0f172a] inset-0 mix-blend-color z-1" />
        </div>
        <div className="backdrop-blur-[17px] bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center p-[32px] md:p-[48px] relative rounded-[32px] shrink-0 w-full max-w-[480px] lg:max-w-none lg:w-max z-10">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none rounded-[32px] shadow-[0px_5px_30px_0px_rgba(0,0,0,0.13)]" />
          <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center text-white w-full">
            <div className="flex flex-col gap-0 font-extrabold justify-center leading-[1.3] relative shrink-0 text-[32px] md:text-[56px] break-keep">
              <p className="mb-0">모여서 만드는 지혜,</p>
              <p>나누는 가치</p>
            </div>
            <div className="flex flex-col font-normal justify-center leading-[1.4] opacity-80 relative shrink-0 text-[16px] md:text-[20px] break-keep">
              <p>{`더비소프트의 철학은 언제나 '사람'을 향합니다.`}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 더비소프트는 이런 진심을 가지고 있습니다 Section */}
      <div id="values" className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[24px] py-[80px] relative w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px]">
                <p className="leading-[1.4]">{`더비소프트는 이런 진심을 가지고 있습니다. `}</p>
              </div>
              <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px]">
                <p className="leading-[1.4]">{`채용부터 성장, 일하는 즐거움, 성과의 공유까지 구성원의 모든 여정을 세심하게 살피려고 합니다. `}</p>
              </div>
            </div>
            <div className="content-stretch gap-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center relative shrink-0 w-full max-w-[1200px]">
              {/* 잘 뽑고 */}
              <div className="bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full">
                <div className="absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[24px] p-px rounded-[16px] size-[64px] top-[24px] sm:top-[40.67px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <Icon>
                    <path d={svgPaths.p9c04210} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p79e4000} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M25.333 10.6667V18.6667" id="Vector_3" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M29.333 14.6667H21.333" id="Vector_4" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </Icon>
                </div>
                <HeadingText text="잘 뽑고" />
                <ParagraphText text="기술만큼이나, 함께 일하는 즐거움을 중요하게 생각하는 사람인지를 면접 단계에서부터 세심하게 살펴봅니다." />
              </div>

              {/* 잘 교육하고 */}
              <div className="bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full">
                <div className="absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[24px] p-px rounded-[16px] size-[64px] top-[24px] sm:top-[40.67px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <Icon>
                    <path d="M16 9.33333V28" id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p2e3a3800} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </Icon>
                </div>
                <HeadingText text="잘 교육하고" />
                <Wrapper2>{`멘토 제도를 시작으로 사내 학습 소모임 등을 통해 최신의 IT 기술과 업무 역량을 쌓을 수 있는 다양한 교육제도를 운영합니다. `}</Wrapper2>
              </div>

              {/* 즐겁게 일하고 */}
              <div className="bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full">
                <div className="absolute left-[24px] size-[64px] top-[24px] sm:top-[40.67px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                    <g id="Container">
                      <path d={svgPaths.p278361f0} fill="var(--fill-0, #FFF2F2)" />
                      <path d={svgPaths.p28ecba80} stroke="var(--stroke-0, #FF6000)" strokeOpacity="0.2" />
                      <path d={svgPaths.p27bfab00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                <HeadingText text="즐겁게 일하고" />
                <ParagraphText text="수평적인 조직문화 속에서 몰입과 즐거움이 공존할 수 있도록 다양한 사내 이벤트를 운영합니다." />
              </div>

              {/* 잘 나눈다 */}
              <div className="bg-[#f3f6fa] h-[260px] sm:h-[291px] relative rounded-[16px] shrink-0 w-full">
                <div className="absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[24px] p-px rounded-[16px] size-[64px] top-[24px] sm:top-[40.67px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <Icon>
                    <path d={svgPaths.p2ea4dd00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M16 10.6667V28" id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p1e545d00} id="Vector_3" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p7762d80} id="Vector_4" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </Icon>
                </div>
                <HeadingText text="잘 나눈다" />
                <div className="absolute h-[78px] left-[24px] top-[144px] sm:top-[173px] w-[calc(100%-48px)]">
                  <p className="absolute font-normal leading-[26px] left-0 text-[#4b5563] text-[16px] top-[-1px] w-full">{`'함께 만든 성과를 함께 나눈다'는 믿음으로, 구성원의 노력과 열정이 정당하게 보상받는 문화를 만들어갑니다. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 일의 성취와 즐거움이 조화를 이루는 조직문화 Section */}
      <div id="culture" className="content-stretch flex flex-col gap-[32px] items-center overflow-clip py-[120px] px-[24px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
        <div className="-translate-x-1/2 absolute h-[1047px] left-1/2 top-[-189.33px] w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full" src={desk} />
            </div>
            <div className="absolute backdrop-blur-[5px] bg-[rgba(175,190,209,0.5)] inset-0" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] relative shrink-0 text-center w-full z-10">
          <div className="flex flex-col font-bold justify-center relative shrink-0 text-[28px] md:text-[32px] text-black">
            <p className="leading-[1.4]">{`일의 성취와 즐거움이 조화를 이루는 조직문화를 만들어 가고 있습니다. `}</p>
          </div>
          <div className="flex flex-col font-normal justify-center not-italic relative shrink-0 text-[#555] text-[16px] md:text-[18px]">
            <p className="leading-[1.4]">구성원의 행복이 곧 더비소프트의 경쟁력입니다.</p>
          </div>
        </div>
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] relative shrink-0 w-full z-10">
          {/* 성과 보상 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <Container1>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <Vector additionalClassNames="inset-[8.33%_41.67%_41.67%_8.33%]">
                    <path d={svgPaths.p31e16900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Vector>
                  <div className="absolute inset-[43.21%_8.36%_8.37%_43.08%]">
                    <div className="absolute inset-[-8.61%_-8.58%_-8.6%_-8.58%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6543 13.6223">
                        <path d={svgPaths.p37146800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[58.33%] left-[29.17%] right-[66.67%] top-1/4">
                    <div className="absolute inset-[-25%_-100%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 6">
                        <path d="M1 1H2V5" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[57.83%_27.46%_27.46%_60.79%]">
                    <div className="absolute inset-[-28.33%_-35.46%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.82 5.53">
                        <path d="M3.12 1L3.82 1.71L1 4.53" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Container1>
              <HeadingText1 text="성과 보상" additionalClassNames="w-[66.375px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">프로젝트 성과금, 우수 사원 포상, 장기 근속 포상(5/10/15년)을 지급합니다.</p>
          </Container2>

          {/* 워라밸 보장 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <Container1>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute inset-[8.33%]">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                        <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4">
                    <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00022 10.0002">
                        <path d="M1 1V7L5 9" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Container1>
              <HeadingText1 text="워라밸 보장" additionalClassNames="w-[81.938px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">주 52시간 준수, 자유로운 연차 사용, 정시 퇴근 문화를 지향합니다.</p>
          </Container2>

          {/* 자기 계발 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <Container1>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]">
                    <div className="absolute inset-[-10%_-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0152 12.0007">
                        <path d={svgPaths.p15891e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]">
                    <div className="absolute inset-[-16.67%_-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
                        <path d="M1 1V7" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]">
                    <div className="absolute inset-[-15.38%_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8.5">
                        <path d={svgPaths.p26770600} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Container1>
              <HeadingText1 text="자기 계발" additionalClassNames="w-[66.375px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">도서 구입비, 자격증 취득 비용, 사내외 교육 및 스터디 활동을 지원합니다.</p>
          </Container2>

          {/* 가족 친화 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <Container1>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute inset-[12.5%_8.33%]">
                    <div className="absolute inset-[-5.56%_-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                        <path d={svgPaths.p1b764040} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Container1>
              <HeadingText1 text="가족 친화" additionalClassNames="w-[66.375px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">자녀 학자금, 출산 축하금, 각종 경조사비 및 경조 휴가를 지원합니다.</p>
          </Container2>

          {/* 건강 검진 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <Container1>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <Icon9Vector additionalClassNames="inset-[8.33%_54.17%_83.33%_45.83%]" />
                  <Icon9Vector additionalClassNames="inset-[8.33%_79.17%_83.33%_20.83%]" />
                  <Vector additionalClassNames="inset-[12.5%_41.67%_37.5%_8.33%]">
                    <path d={svgPaths.p25b06500} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Vector>
                  <div className="absolute bottom-[12.5%] left-[33.33%] right-[16.67%] top-1/2">
                    <div className="absolute inset-[-11.11%_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
                        <path d={svgPaths.p13e21ac0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/2 left-3/4 right-[8.33%] top-[33.33%]">
                    <div className="absolute inset-[-25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                        <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Container1>
              <HeadingText1 text="건강 검진" additionalClassNames="w-[66.375px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">임직원의 건강 관리를 위해 가족 1인을 포함한 종합 건강 검진을 지원합니다.</p>
          </Container2>

          {/* 리프레시 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <Container1>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <Icon8Vector additionalClassNames="left-[33.33%] right-[66.67%]" />
                  <Icon8Vector additionalClassNames="left-[66.67%] right-[33.33%]" />
                  <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]">
                    <div className="absolute inset-[-1px_-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
                        <path d="M1 1H19" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Container1>
              <HeadingText1 text="리프레시" additionalClassNames="w-[62.229px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">창립기념일 휴무, 노동절 휴무, 워크샵 및 체육대회로 활력을 충전합니다.</p>
          </Container2>

          {/* 동호회 지원 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <Container1>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]">
                    <div className="absolute inset-[-16.67%_-7.14%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                        <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]">
                    <div className="absolute inset-[-12.5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]">
                    <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00024 7.87024">
                        <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]">
                    <div className="absolute inset-[-12.91%_-33.25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
                        <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Container1>
              <HeadingText1 text="동호회 지원" additionalClassNames="w-[81.938px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">취미 활동을 공유하는 사내 동호회 운영비 및 활동을 적극 지원합니다.</p>
          </Container2>

          {/* 지역사회 기부 */}
          <Container2>
            <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[48px]">
                <motion.div
                  variants={{
                    hover: {
                      y: [0, -4, 0],
                      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                    }
                  }}
                  className="size-full"
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                    <g id="Container">
                      <path d={svgPaths.p1ac06600} fill="var(--fill-0, #C2CCE0)" fillOpacity="0.5" />
                      <path d={svgPaths.p8c3e000} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </motion.div>
              </div>
              <HeadingText1 text="지역사회 기부" additionalClassNames="w-[68.906px]" />
            </div>
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">임직원이 참여하는 기부 활동을 통해 지역사회에 선한 영향력을 전합니다.</p>
          </Container2>
        </div>
      </div>

      {/* 채용 프로세스 Section */}
      <div id="process" className="bg-white content-stretch flex flex-col gap-[30px] items-center px-[24px] py-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[896px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full">
            <div className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f172a] text-[28px] md:text-[32px] whitespace-nowrap">
              <p className="leading-[1.4]">채용 프로세스</p>
            </div>
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#555] text-[16px] md:text-[18px] max-w-[487px]">
              <p className="leading-[1.4]">더비소프트의 가족이 되는 과정을 안내해 드립니다.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-row gap-[16px] items-stretch md:items-center relative shrink-0 w-full max-w-[896px]">
            <Container3>
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <p className="font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center">01</p>
                <HeadingText2 text="서류전형" />
              </div>
            </Container3>
            <div className="hidden md:flex items-center justify-center">
              <Container />
            </div>
            <Container3>
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <p className="font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center">02</p>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold leading-[1.2] text-[#111827] text-[18px] sm:text-[20px] text-center whitespace-nowrap">1차면접</p>
                </div>
              </div>
            </Container3>
            <div className="hidden md:flex items-center justify-center">
              <Container />
            </div>
            <Container3>
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <p className="font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center">03</p>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold leading-[1.2] text-[#111827] text-[18px] sm:text-[20px] text-center whitespace-nowrap">2차면접</p>
                </div>
              </div>
            </Container3>
            <div className="hidden md:flex items-center justify-center">
              <Container />
            </div>
            <Container3>
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <p className="font-bold leading-[1] text-[#d0d6e4] text-[32px] sm:text-[36px] text-center">04</p>
                <HeadingText2 text="최종합격" />
              </div>
            </Container3>
          </div>
        </div>
        <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[13px] items-start px-[24px] md:px-[40px] py-[24px] relative rounded-[24px] shrink-0 w-full max-w-[420px]">
          <Helper text="지원방법" text1="E-mail 접수" />
          <Helper text="제출서류" text1="이력서, 자기소개서" />
          <Helper text="채용문의" text1="recruit@thebeesoft.com" />
        </div>
      </div>
    </>
  );
}