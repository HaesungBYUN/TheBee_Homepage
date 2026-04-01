import clsx from "clsx";
import svgPaths from "./svg-149kuywxs6";
import imgSection from "@/assets/038bbe7521e89ad97b6b7f975057cac059667d9a.png";
import imgRectangle9 from "@/assets/138f6fb851e633b86fc218a5eb1be1d88a9aa6d2.png";
import imgImage4880 from "@/assets/6ef37ec0c4799965b6946f5069d6684ebcbf0c11.png";
import imgThebeeLogoWhite2 from "@/assets/71ecccd914bd1dfd31b21739dc443ad39097e574.png";

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] h-[157.333px] min-h-px min-w-px relative rounded-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type Container2Props = {
  additionalClassNames?: string;
};

function Container2({ children, additionalClassNames = "" }: React.PropsWithChildren<Container2Props>) {
  return (
    <div className={clsx("backdrop-blur-[12px] bg-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[16px] self-start shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(194,204,224,0.5)] relative rounded-[14px] shrink-0 size-[48px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[78px] left-[40.67px] top-[172.67px] w-[308px]">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[26px] left-[0.33px] not-italic text-[#4b5563] text-[16px] top-[-0.67px] w-[280px]">{children}</p>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper1>;
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorProps>) {
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
type LinkTextProps = {
  text: string;
};

function LinkText({ text }: LinkTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[25.5px]">{text}</p>
      </div>
    </div>
  );
}
type ItemText1Props = {
  text: string;
};

function ItemText1({ text }: ItemText1Props) {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type ItemTextProps = {
  text: string;
};

function ItemText({ text }: ItemTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px] z-[2]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #666666)" id="Ellipse 1" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic opacity-99 relative shrink-0 text-[14px] text-white whitespace-nowrap z-[1]">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}
type HeadingText3Props = {
  text: string;
};

function HeadingText3({ text }: HeadingText3Props) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.58px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[13.3px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

function ThebeeLogoWhiteImage() {
  return (
    <div className="h-[30px] relative shrink-0 w-[158px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThebeeLogoWhite2} />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-center not-italic relative w-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#111827] text-[18px] whitespace-nowrap">{text}</p>
        <p className="flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#4b5563] text-[14px]">{text1}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[24px] overflow-clip relative shrink-0 w-full">
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-1px_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
                <path d="M1 1H15" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
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
type HeadingText2Props = {
  text: string;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <Wrapper additionalClassNames="h-[28px] w-[69.146px]">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[35px] not-italic text-[#111827] text-[20px] text-center top-0 whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type Icon9VectorProps = {
  additionalClassNames?: string;
};

function Icon9Vector({ additionalClassNames = "" }: Icon9VectorProps) {
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
type Icon8VectorProps = {
  additionalClassNames?: string;
};

function Icon8Vector({ additionalClassNames = "" }: Icon8VectorProps) {
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
type HeadingText1Props = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText1({ text, additionalClassNames = "" }: HeadingText1Props) {
  return (
    <Wrapper1 additionalClassNames={clsx("h-[28px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#111827] text-[18px] top-[-0.33px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return <Wrapper2>{text}</Wrapper2>;
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="absolute h-[32px] left-[40.67px] top-[128.67px] w-[308px]">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#111827] text-[24px] top-[-0.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Component04Human() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="04_HUMAN">
      <div className="bg-white content-stretch flex flex-col items-start min-h-[1200px] relative shrink-0 w-full" data-name="Background">
        <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[56px] h-[550px] items-center justify-center overflow-clip pt-[60px] relative shrink-0 w-[1920px]" data-name="Section">
          <div className="absolute h-[1080px] left-0 top-[-63px] w-[1920px]" data-name="13820721_3840_2160_30fps 1">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 object-cover" />
              <div className="absolute bg-[#0f172a] inset-0 mix-blend-color" />
            </div>
          </div>
          <div className="backdrop-blur-[17px] bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] p-[48px] relative rounded-[32px] shrink-0 w-[458px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none rounded-[32px] shadow-[0px_5px_30px_0px_rgba(0,0,0,0.13)]" />
            <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center text-white w-full whitespace-nowrap" data-name="Container">
              <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center leading-[1.3] relative shrink-0 text-[40px]">
                <p className="mb-0">모여서 만드는 지혜,</p>
                <p>나누는 가치</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] opacity-80 relative shrink-0 text-[20px]">
                <p className="leading-[1.4]">{`더비소프트의 철학은 언제나 '사람'을 향합니다.`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Section">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center px-[190px] py-[80px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
                <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]">
                  <p className="leading-[1.4]">{`더비소프트는 이런 진심을 가지고 있습니다. `}</p>
                </div>
                <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#555] text-[16px]">
                  <p className="leading-[1.4]">{`채용부터 성장, 일하는 즐거움, 성과의 공유까지 구성원의 모든 여정을 세심하게 살피려고 합니다. `}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-[1560px]" data-name="Container">
                <div className="bg-[#f3f6fa] h-[291px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Container">
                  <div className="absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[40.67px] p-px rounded-[16px] size-[64px] top-[40.67px]" data-name="Container">
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
                <div className="bg-[#f3f6fa] h-[291px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Container">
                  <div className="absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[40.67px] p-px rounded-[16px] size-[64px] top-[40.67px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <Icon>
                      <path d="M16 9.33333V28" id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d={svgPaths.p2e3a3800} id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    </Icon>
                  </div>
                  <HeadingText text="잘 교육하고" />
                  <Wrapper2>{`멘토 제도를 시작으로 사내 학습 소모임 등을 통해 최신의 IT 기술과 업무 역량을 쌓을 수 있는 다양한 교육제도를 운영합니다. `}</Wrapper2>
                </div>
                <div className="bg-[#f3f6fa] h-[291px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Container">
                  <div className="absolute left-[40.67px] size-[64px] top-[40.67px]" data-name="Container">
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
                <div className="bg-[#f3f6fa] h-[291px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Container">
                  <div className="absolute bg-[#fff2f2] content-stretch flex items-center justify-center left-[40.67px] p-px rounded-[16px] size-[64px] top-[40.67px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,96,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <Icon>
                      <path d={svgPaths.p2ea4dd00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d="M16 10.6667V28" id="Vector_2" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d={svgPaths.p1e545d00} id="Vector_3" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d={svgPaths.p7762d80} id="Vector_4" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    </Icon>
                  </div>
                  <HeadingText text="잘 나눈다" />
                  <div className="absolute h-[78px] left-[41px] top-[173px] w-[280px]" data-name="Paragraph">
                    <p className="absolute font-['Pretendard:Regular','Noto_Sans:Regular',sans-serif] leading-[26px] left-0 text-[#4b5563] text-[16px] top-[-1px] w-[280px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`‘함께 만든 성과를 함께 나눈다’는 믿음으로, 구성원의 노력과 열정이 정당하게 보상받는 문화를 만들어갑니다. `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip py-[120px] relative shrink-0 w-full" data-name="Section">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
            <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
          </div>
          <div className="-translate-x-1/2 absolute h-[1047px] left-1/2 top-[-189.33px] w-[1920px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full" src={imgRectangle9} />
              </div>
              <div className="absolute backdrop-blur-[5px] bg-[rgba(175,190,209,0.5)] inset-0" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
            <div className="flex flex-col font-['Pretendard:Bold','Noto_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[32px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
              <p className="leading-[1.4]">{`일의 성취와 즐거움이 조화를 이루는 조직문화를 만들어 가고 있습니다. `}</p>
            </div>
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#555] text-[16px]">
              <p className="leading-[1.4]">구성원의 행복이 곧 더비소프트의 경쟁력입니다.</p>
            </div>
          </div>
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] max-w-[1200px] relative shrink-0 w-full" data-name="Container">
            <Container2 additionalClassNames="col-2 row-1">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1>
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[8.33%]" data-name="Vector">
                      <div className="absolute inset-[-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                          <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
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
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">주 52시간 준수, 자유로운 연차 사용, 정시 퇴근 문화를 지향합니다.</p>
            </Container2>
            <Container2 additionalClassNames="col-1 row-1">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1>
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Vector additionalClassNames="inset-[8.33%_41.67%_41.67%_8.33%]">
                      <path d={svgPaths.p31e16900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </Vector>
                    <div className="absolute inset-[43.21%_8.36%_8.37%_43.08%]" data-name="Vector">
                      <div className="absolute inset-[-8.61%_-8.58%_-8.6%_-8.58%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6543 13.6223">
                          <path d={svgPaths.p37146800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-[58.33%] left-[29.17%] right-[66.67%] top-1/4" data-name="Vector">
                      <div className="absolute inset-[-25%_-100%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 6">
                          <path d="M1 1H2V5" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[57.83%_27.46%_27.46%_60.79%]" data-name="Vector">
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
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">프로젝트 성과금, 우수 사원 포상, 장기 근속 포상(5/10/15년)을 지급합니다.</p>
            </Container2>
            <Container2 additionalClassNames="col-3 row-1">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1>
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
                      <div className="absolute inset-[-10%_-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0152 12.0007">
                          <path d={svgPaths.p15891e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
                      <div className="absolute inset-[-16.67%_-1px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
                          <path d="M1 1V7" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
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
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">도서 구입비, 자격증 취득 비용, 사내외 교육 및 스터디 활동을 지원합니다.</p>
            </Container2>
            <Container2 additionalClassNames="col-3 row-2">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1>
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
                      <div className="absolute inset-[-16.67%_-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                          <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                          <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
                      <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00024 7.87024">
                          <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
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
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">취미 활동을 공유하는 사내 동호회 운영비 및 활동을 적극 지원합니다.</p>
            </Container2>
            <Container2 additionalClassNames="col-4 row-1">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1>
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
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
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">자녀 학자금, 출산 축하금, 각종 경조사비 및 경조 휴가를 지원합니다.</p>
            </Container2>
            <Container2 additionalClassNames="col-2 row-2">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1>
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Icon8Vector additionalClassNames="left-[33.33%] right-[66.67%]" />
                    <Icon8Vector additionalClassNames="left-[66.67%] right-[33.33%]" />
                    <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                      <div className="absolute inset-[-5.56%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
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
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">창립기념일 휴무, 노동절 휴무, 워크샵 및 체육대회로 활력을 충전합니다.</p>
            </Container2>
            <Container2 additionalClassNames="col-4 row-2">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0 size-[48px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                    <g id="Container">
                      <path d={svgPaths.p1ac06600} fill="var(--fill-0, #C2CCE0)" fillOpacity="0.5" />
                      <path d={svgPaths.p8c3e000} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                <HeadingText1 text="지역사회 기부" additionalClassNames="w-[68.906px]" />
              </div>
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">임직원이 참여하는 기부 활동을 통해 지역사회에 선한 영향력을 전합니다.</p>
            </Container2>
            <Container2 additionalClassNames="col-1 row-2">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1>
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Icon9Vector additionalClassNames="inset-[8.33%_54.17%_83.33%_45.83%]" />
                    <Icon9Vector additionalClassNames="inset-[8.33%_79.17%_83.33%_20.83%]" />
                    <Vector additionalClassNames="inset-[12.5%_41.67%_37.5%_8.33%]">
                      <path d={svgPaths.p25b06500} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </Vector>
                    <div className="absolute bottom-[12.5%] left-[33.33%] right-[16.67%] top-1/2" data-name="Vector">
                      <div className="absolute inset-[-11.11%_-8.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
                          <path d={svgPaths.p13e21ac0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 left-3/4 right-[8.33%] top-[33.33%]" data-name="Vector">
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
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">임직원의 건강 관리를 위해 가족 1인을 포함한 종합 건강 검진을 지원합니다.</p>
            </Container2>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[30px] items-center px-[24px] py-[80px] relative shrink-0 w-[1920px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[896px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full" data-name="Container">
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px] whitespace-nowrap">
                <p className="leading-[1.4]">채용 프로세스</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#555] text-[16px] w-[487px]">
                <p className="leading-[1.4]">더비소프트의 가족이 되는 과정을 안내해 드립니다.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] h-[157px] items-center relative shrink-0 w-[896px]" data-name="Container">
              <Container3>
                <Wrapper additionalClassNames="h-[40px] w-[40.646px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[40px] left-[20.5px] not-italic text-[#d0d6e4] text-[36px] text-center top-[-0.33px] whitespace-nowrap">01</p>
                </Wrapper>
                <HeadingText2 text="서류전형" />
              </Container3>
              <Container />
              <Container3>
                <Wrapper additionalClassNames="h-[40px] w-[45.74px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[40px] left-[23px] not-italic text-[#d0d6e4] text-[36px] text-center top-[-0.33px] whitespace-nowrap">02</p>
                </Wrapper>
                <Wrapper additionalClassNames="h-[28px] w-[61.24px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[31px] not-italic text-[#111827] text-[20px] text-center top-0 whitespace-nowrap">1차면접</p>
                </Wrapper>
              </Container3>
              <Container />
              <Container3>
                <Wrapper additionalClassNames="h-[40px] w-[46.76px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[40px] left-[23.5px] not-italic text-[#d0d6e4] text-[36px] text-center top-[-0.33px] whitespace-nowrap">03</p>
                </Wrapper>
                <Wrapper additionalClassNames="h-[28px] w-[64.063px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[32.5px] not-italic text-[#111827] text-[20px] text-center top-0 whitespace-nowrap">2차면접</p>
                </Wrapper>
              </Container3>
              <Container />
              <Container3>
                <Wrapper additionalClassNames="h-[40px] w-[47.427px]">
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[40px] left-[24px] not-italic text-[#d0d6e4] text-[36px] text-center top-[-0.33px] whitespace-nowrap">04</p>
                </Wrapper>
                <HeadingText2 text="최종합격" />
              </Container3>
            </div>
          </div>
          <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[13px] items-start px-[40px] py-[24px] relative rounded-[24px] shrink-0 w-[420px]" data-name="Container">
            <Helper text="지원방법" text1="E-mail 접수" />
            <Helper text="제출서류" text1="이력서, 자기소개서" />
            <Helper text="채용문의" text1="recruit@thebeesoft.com" />
          </div>
        </div>
        <div className="bg-black relative shrink-0 w-full" data-name="Footer">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start pb-[40px] pt-[79px] px-[360px] relative w-full">
              <div className="absolute h-[888px] left-[919px] opacity-50 top-[-241.8px] w-[1578px]" data-name="image 4880">
                <img alt="" className="absolute inset-0 max-w-none mix-blend-luminosity object-cover pointer-events-none size-full" src={imgImage4880} />
              </div>
              <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
                  <div className="content-stretch flex gap-[40px] items-end relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[12px] h-[86.19px] items-start relative shrink-0 w-[320px]" data-name="Container">
                      <ThebeeLogoWhiteImage />
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Pretendard:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[1.4] relative shrink-0 text-[#aaa] text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                          <p className="mb-0">주식회사 더비소프트</p>
                          <p className="mb-0">{`서울특별시 영등포구 선유로 13길 25, 213호 `}</p>
                          <p>(문래동6가 에이스하이테크시티2)</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start max-w-[180px] min-h-px min-w-px relative" data-name="Container">
                        <HeadingText3 text="Company" />
                        <ItemText text="About" />
                        <ItemText text="Solutions" />
                        <ItemText text="인재채용" />
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start max-w-[180px] min-h-px min-w-px relative" data-name="Container">
                        <HeadingText3 text="Contact" />
                        <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Item">
                          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] w-[180px] z-[1]">
                            <p className="leading-[20px]">TEL) 02-6052-3889</p>
                          </div>
                        </div>
                        <ItemText1 text="FAX) 02-6008-3838" />
                        <ItemText1 text="master@thebeesoft.com" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.8px] relative w-full">
                        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[23.8px]">Copyright@ 2026 TheBeeSoft Inc. All Rights Reserved.</p>
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
      <div className="absolute backdrop-blur-[5px] left-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] top-0 w-[1920px]" data-name="Header">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[384px] relative w-full">
            <div className="h-[80px] min-w-[1200px] relative shrink-0 w-full" data-name="Nav">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between min-w-[inherit] relative size-full">
                <ThebeeLogoWhiteImage />
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[40px] h-[26px] items-start relative shrink-0" data-name="List">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative self-stretch shrink-0" data-name="Item">
                      <LinkText text="About" />
                    </div>
                    <div className="content-stretch flex flex-col items-start opacity-70 relative self-stretch shrink-0" data-name="Item">
                      <LinkText text="Solutions" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
                        <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
                          <p className="leading-[25.5px]">인재채용</p>
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
    </div>
  );
}