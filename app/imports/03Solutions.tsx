import clsx from "clsx";
import imgImage4880 from "@/assets/6ef37ec0c4799965b6946f5069d6684ebcbf0c11.png";
import imgThebeeLogoWhite2 from "@/assets/71ecccd914bd1dfd31b21739dc443ad39097e574.png";
import svgPaths from "./svg-mkahh9klrl";
import imgBigDataAnalytics from "@/assets/bee0d7335ba9c7d1cb6f76e9c25452666693add1.png";
import imgBigDataAnalytics1 from "@/assets/ff2dc884f57040b6d2fe9b9f95fcce46c1b5fe1c.png";
import imgButton from "@/assets/d63d14c8a1e4e0fd74fdf8b851986691c5e6e443.png";
import imgButton1 from "@/assets/2740aca854b6eca0fe483117538582a8e6b65de8.png";
import imgButton2 from "@/assets/7a2c3284b4d9080d577b10d6d6c60106c4666ae9.png";
import imgButton3 from "@/assets/cc50371481d893714a77da9522954d185a61262f.png";
import imgButton4 from "@/assets/7ef63bcce11ff0c32d3bde21eff850d16dea0ffa.png";
import imgButton5 from "@/assets/038bbe7521e89ad97b6b7f975057cac059667d9a.png";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
      <div className="absolute inset-0 overflow-hidden rounded-[10px]">{children}</div>
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0 rounded-[10px]" />
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

function Frame11Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "1182", "--transform-inner-height": "22" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[32px]">
      <div className="-rotate-90 flex-none">{children}</div>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] max-w-[520px] not-italic relative shrink-0 text-[#45556c] text-[16px] w-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start max-w-[180px] min-h-px min-w-px relative" data-name="Container">
        {children}
      </div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative rounded-[10px] self-stretch shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}
type Container40CardProjectProps = {
  additionalClassNames?: string;
};

function Container40CardProject({ children, additionalClassNames = "" }: React.PropsWithChildren<Container40CardProjectProps>) {
  return (
    <div className={clsx("bg-white justify-self-stretch min-h-[205px] relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[32px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function OverlayBorderOverlayBlur({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[4px] bg-[#f3f6fa] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[14px]">
      <div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[31.667px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type Svg1Props = {
  additionalClassNames?: string;
};

function Svg1({ children, additionalClassNames = "" }: React.PropsWithChildren<Svg1Props>) {
  return (
    <div className={clsx("relative size-[32px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e0e7ff] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">{children}</p>
      </div>
    </div>
  );
}

function Heading({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="flex flex-col font-['Pretendard:Bold','Noto_Sans:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1b5cfe] text-[12px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        <p className="leading-[16px]">{children}</p>
      </div>
    </Wrapper1>
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
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#101828] text-[20px] w-full">{text}</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[#4a5565] text-[16px] w-full">{text1}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-shadow-[0px_1px_10px_rgba(0,0,0,0.84)] text-white whitespace-nowrap">
          <p className="leading-[20px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="relative shrink-0 w-[438.67px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[24px] relative", additionalClassNames)}>
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center opacity-23 relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.4]">{text1}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-[min-content]">
        <p className="leading-[1.4]">{text2}</p>
      </div>
    </div>
  );
}
type BackgroundText2Props = {
  text: string;
};

function BackgroundText2({ text }: BackgroundText2Props) {
  return (
    <div className="bg-[#e4f6f1] h-full relative rounded-[10px] shrink-0">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c7b63] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundText1Props = {
  text: string;
};

function BackgroundText1({ text }: BackgroundText1Props) {
  return (
    <Wrapper2 additionalClassNames="bg-[#f1f2f3]">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3b648c] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </Wrapper2>
  );
}
type BackgroundTextProps = {
  text: string;
};

function BackgroundText({ text }: BackgroundTextProps) {
  return (
    <Wrapper2 additionalClassNames="bg-[#fff0e6]">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c04800] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </Wrapper2>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d293d] text-[18px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return <Wrapper>{text}</Wrapper>;
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
type ContainerProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Container({ text, text1, additionalClassNames = "" }: ContainerProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[8px] leading-[0] max-w-[1200px] not-italic relative shrink-0 text-center w-full whitespace-nowrap", additionalClassNames)}>
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#555] text-[16px]">
        <p className="leading-[1.4]">{text1}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[12px] py-[5px] relative">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#364153] text-[12px] text-center whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type FooterItemText1Props = {
  text: string;
};

function FooterItemText1({ text }: FooterItemText1Props) {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type FooterItemTextProps = {
  text: string;
};

function FooterItemText({ text }: FooterItemTextProps) {
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
type FooterHeadingTextProps = {
  text: string;
};

function FooterHeadingText({ text }: FooterHeadingTextProps) {
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

export default function Component03Solutions() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="03_Solutions">
      <div className="bg-white content-stretch flex flex-col items-start min-h-[1200px] relative shrink-0 w-full" data-name="Background">
        <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[56px] h-[550px] items-center overflow-clip pt-[140px] relative shrink-0 w-[1920px]" data-name="Section">
          <div className="absolute h-[1080px] left-0 pointer-events-none top-0 w-[1920px]" data-name="13820721_3840_2160_30fps 1">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 object-cover" />
              <div className="absolute bg-[#0f172a] inset-0 mix-blend-color" />
            </div>
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
          </div>
          <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-white content-stretch flex items-start justify-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Background+Border+Shadow">
                <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.4]">Enterprise Solutions</p>
                </div>
              </div>
              <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-center text-white whitespace-nowrap">
                <p className="leading-[1.3]">
                  차세대 솔루션 기반
                  <br aria-hidden="true" />
                  비즈니스 설계
                </p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[1.4] not-italic opacity-80 relative shrink-0 text-[20px] text-center text-white w-[530px] whitespace-pre-wrap">
                <p className="mb-0">{`현장을 잘 이해하기에 가능한 혁신. `}</p>
                <p>더비소프트는 복잡한 비즈니스 과제를 명쾌하게 해결하는 최적화된 엔터프라이즈 솔루션을 설계하고 구축합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] relative shrink-0 w-[1919.67px]" data-name="Section">
          <Container text="ERP Integration Solution" text1="엔터프라이즈 전사적 자원 관리 통합 솔루션" additionalClassNames="items-start" />
          <div className="content-stretch flex gap-[56px] items-start justify-center min-h-[440.6700134277344px] relative shrink-0 w-[1200px]" data-name="Section">
            <div className="bg-[#0f172a] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch" data-name="Background+Shadow">
              <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start justify-center p-[40px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Container">
                    <div className="h-[284px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-start left-0 p-[12px] rounded-[14px] top-0" data-name="Overlay+OverlayBlur">
                        <div className="relative shrink-0 size-[40px]" data-name="SVG">
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
                      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[96px]" data-name="Heading 4">
                        <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
                          <p className="mb-0">성공적인 ERP 구축,</p>
                          <p>왜 더비소프트와 함께해야 할까요?</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-0 top-[180px]" data-name="List">
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
                          <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0" data-name="Overlay+OverlayBlur">
                            <Svg />
                          </div>
                          <ContainerText text="15년 이상의 구축 노하우" />
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
                          <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0" data-name="Overlay+OverlayBlur">
                            <Svg />
                          </div>
                          <ContainerText text="정규직 중심의 ERP 전담 팀 보유" />
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
                          <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0" data-name="Overlay+OverlayBlur">
                            <Svg />
                          </div>
                          <ContainerText text="글로벌 표준부터 로컬 규제까지 대응" />
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
                          <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[22369600px] shrink-0" data-name="Overlay+OverlayBlur">
                            <Svg />
                          </div>
                          <Wrapper>{`ORACLE / SAP 간의 상호 전환 프로젝트 진행 `}</Wrapper>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Margin">
                      <div className="content-stretch flex flex-col items-start pt-[24.667px] relative shrink-0 w-full" data-name="HorizontalBorder">
                        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
                            <div className="bg-[#ff6000] rounded-[22369600px] shrink-0 size-[8px]" data-name="Background" />
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c6d2ff] text-[14px] whitespace-nowrap">
                                <p className="leading-[1.4]">15+ 대기업 프로젝트 완료</p>
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
            <div className="content-stretch flex flex-col gap-[48px] items-start justify-center py-[16px] relative shrink-0 w-[720px]" data-name="Container">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                  <div className="h-[24px] relative shrink-0 w-[189.168px]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189.168 24">
                      <path d={svgPaths.p29912300} fill="var(--fill-0, black)" id="Union" />
                    </svg>
                  </div>
                  <HeadingText text="Oracle ERP Implementation" />
                </div>
                <Container1>
                  <p className="leading-[1.4] whitespace-pre-wrap">
                    {`대규모 데이터 처리에 최적화된 Oracle 기반의 재무, 생산, 영업, 물류, 인사, 서비스 시스템 구축. `}
                    <br aria-hidden="true" />
                    클라우드 전환 및 마이그레이션 전문 솔루션을 제공합니다.
                  </p>
                </Container1>
                <div className="content-stretch flex flex-wrap gap-[0px_7.99px] h-[33px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
                  <BackgroundText text="Cloud Migration" />
                  <BackgroundText text="Enterprise Scale" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                  <div className="h-[32px] relative shrink-0 w-[65px]" data-name="sap-3 1">
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
                  <p className="leading-[1.4]">글로벌 표준 프로세스인 SAP S/4HANA 컨설팅 및 구축. 고도화된 ABAP 개발 및 인터페이스 최적화를 통해 경영 효율성을 극대화합니다.</p>
                </Container1>
                <div className="content-stretch flex flex-wrap gap-[0px_8px] h-[33px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
                  <BackgroundText1 text="S/4HANA" />
                  <BackgroundText1 text="ABAP Development" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center px-[24px] py-[80px] relative shrink-0 w-[1920px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Container">
            <Container text="비즈니스 성과로 이어지는 디지털 솔루션" text1="운영 효율을 높이고, 의사결정을 빠르게 만드는 실무 중심 솔루션을 제공합니다." additionalClassNames="items-center" />
            <div className="content-stretch flex gap-[32px] h-[446px] items-start justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px overflow-clip relative rounded-[24px] self-stretch shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Background+Shadow">
                <div className="bg-white content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Big Data Analytics">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 overflow-hidden">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBigDataAnalytics} />
                      </div>
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgBigDataAnalytics1} />
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(67,66,66,0.5)] inset-[0.33px_0_-0.33px_0]" data-name="Gradient" />
                  <div className="absolute backdrop-blur-[6px] bg-[rgba(255,242,242,0.1)] content-stretch flex flex-col items-start left-[24px] p-[12.667px] rounded-[14px] top-[24px]" data-name="Overlay+Border+OverlayBlur">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                    <div className="relative shrink-0 size-[24px]" data-name="SVG">
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
                <div className="relative shrink-0 w-full z-[1]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[24px] w-full">
                        <p className="leading-[32px]">Big Data Analytics</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45556c] text-[16px] w-full">
                        <p className="leading-[26px]">흩어진 데이터를 수집·정리해 한눈에 파악할 수 있도록 분석합니다. 매출, 고객 행동, 운영 지표를 기반으로 더 나은 의사결정을 지원합니다.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-wrap gap-[0px_8px] h-[36px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
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
        <div className="content-stretch flex flex-col items-center overflow-clip py-[80px] relative shrink-0 w-[1920px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1200px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] max-w-[1200px] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Container">
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]">
                <p className="leading-[1.4]">산업 특성에 최적화된 맞춤형 시스템 구축</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(85,85,85,0.8)]">
                <p className="leading-[1.4]">다년간의 노하우와 최신 기술 스택을 결합하여 귀사의 산업 특성에 최적화된 맞춤형 시스템을 구현합니다.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[4px] h-[151px] items-center relative shrink-0 w-full">
                <div className="backdrop-blur-[8.5px] bg-[#2a3142] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[14px]" data-name="Overlay+Border+OverlayBlur">
                  <Helper text="01" text1="요구사항 분석" text2="산업·업무 특성을 고려한 비즈니스 요구사항 분석" additionalClassNames="size-full" />
                </div>
                <Frame11Helper>
                  <Svg1>
                    <path d="M8 12L16 20L24 12" id="Vector" stroke="var(--stroke-0, #2A3142)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Svg1>
                </Frame11Helper>
                <div className="backdrop-blur-[8.5px] bg-[#273456] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Overlay+Border+OverlayBlur">
                  <Helper text="02" text1="맞춤형 설계" text2="고객 시스템 환경에 적합한 기술 · 솔루션 · 프레임워크 선정" additionalClassNames="w-full" />
                </div>
                <Frame11Helper>
                  <Svg1>
                    <path d="M8 12L16 20L24 12" id="Vector" stroke="var(--stroke-0, #2A3142)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
                  </Svg1>
                </Frame11Helper>
                <div className="backdrop-blur-[8.5px] bg-[#162a62] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Overlay+Border+OverlayBlur">
                  <Helper text="03" text1="구축 및 운영" text2="검증된 기술 기반 맞춤형 시스템 구축·운영" additionalClassNames="w-full" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                <div className="bg-[#f3f6fa] content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[40px] relative rounded-[30px] shrink-0 w-[1200px]">
                  <div className="content-stretch flex flex-col gap-[3px] items-start leading-[0] max-w-[1200px] relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
                    <div className="flex flex-col font-['Pretendard:Bold','Noto_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#333] text-[20px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
                      <p className="leading-[1.4]">{`Proven Tech Stack `}</p>
                    </div>
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#45556c] text-[14px]">
                      <p className="leading-[1.4]">고객 환경에 맞춰 검증된 기술 스택을 유연하게 적용합니다.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[32px] h-[112px] items-start justify-center pt-[24px] relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[rgba(42,49,66,0.1)] border-solid border-t inset-0 pointer-events-none" />
                    <div className="backdrop-blur-[4px] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch" data-name="Overlay+Border+OverlayBlur">
                      <Heading>{`Frontend `}</Heading>
                      <Container2>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="HTML5" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="React" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Vue.js" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Angular" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Bootstrap" />
                        </div>
                      </Container2>
                    </div>
                    <div className="backdrop-blur-[4px] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch" data-name="Overlay+Border+OverlayBlur">
                      <Heading>{`Backend `}</Heading>
                      <Container2>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Java" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Python" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Spring" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Django" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Flask" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Node.js" />
                        </div>
                      </Container2>
                    </div>
                    <div className="backdrop-blur-[4px] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch" data-name="Overlay+Border+OverlayBlur">
                      <Wrapper1>
                        <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b5cfe] text-[12px] text-center uppercase whitespace-nowrap">
                          <p className="leading-[16px]">Database</p>
                        </div>
                      </Wrapper1>
                      <Container2>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Oracle" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="SQL Server" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="MySQL" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="MongoDB" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="PostgreSQL" />
                        </div>
                      </Container2>
                    </div>
                    <div className="backdrop-blur-[4px] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[10px] self-stretch" data-name="Overlay+Border+OverlayBlur">
                      <Heading>{`Infra / DevOps `}</Heading>
                      <Container2>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="AWS" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Azure" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Docker" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Kubernetes" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Jenkins" />
                        </div>
                        <div className="bg-white min-w-[48px] relative rounded-[10px] shrink-0" data-name="Badge_stack">
                          <Text text="Git" />
                        </div>
                      </Container2>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1200px]">
                  <div className="h-[33px] relative shrink-0 w-[148px]">
                    <div className="absolute inset-[-1.27%_-154.57%_-0.24%_-154.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605.506 33.5">
                        <g id="Frame 12">
                          <path d={svgPaths.p3acc1cf1} fill="var(--fill-0, #2A3142)" fillOpacity="0.3" id="Union" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] h-[133.333px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Container">
                  <OverlayBorderOverlayBlur>
                    <Svg1 additionalClassNames="shrink-0">
                      <path d={svgPaths.p2140f00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                      <path d="M10.6641 28H21.3307" id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                      <path d="M16 22.667V28.0003" id="Vector_3" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                    </Svg1>
                    <HeadingText1 text="Desktop UI Architecture" />
                  </OverlayBorderOverlayBlur>
                  <OverlayBorderOverlayBlur>
                    <Svg1 additionalClassNames="shrink-0">
                      <path d={svgPaths.pdee8b00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                      <path d="M16 24H16.0133" id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2.66667" />
                    </Svg1>
                    <HeadingText1 text="Mobile UI Architecture" />
                  </OverlayBorderOverlayBlur>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[24px]">
                    <span className="leading-[1.4] text-[#0f172a]">시스템 구축을 넘어 산업 및 업무 환경에 맞춘</span>
                    <span className="leading-[1.4]">
                      <br aria-hidden="true" />
                    </span>
                    <span className="bg-clip-text bg-gradient-to-r from-[#1b5cfe] leading-[1.4] text-[transparent] to-[#00d3f2]">성공적인 비즈니스 트랜스포메이션</span>
                    <span className="leading-[1.4] text-[#0f172a]">을 실현합니다.</span>
                  </p>
                </div>
              </div>
              <div className="content-start flex flex-wrap gap-[0px_12px] h-[80px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
                  <Wrapper4>
                    <img alt="" className="absolute h-[221.02%] left-[-70.61%] max-w-none top-[-10.92%] w-[170.61%]" src={imgButton} />
                  </Wrapper4>
                  <Text1 text="제조" />
                </div>
                <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
                  <Wrapper4>
                    <img alt="" className="absolute h-[191.59%] left-[-47.89%] max-w-none top-[-35.96%] w-[147.89%]" src={imgButton1} />
                  </Wrapper4>
                  <Text1 text="금융" />
                </div>
                <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
                  <Wrapper4>
                    <img alt="" className="absolute h-[229.03%] left-[-16.58%] max-w-none top-[-89.98%] w-[176.8%]" src={imgButton2} />
                  </Wrapper4>
                  <Text1 text="유통" />
                </div>
                <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
                  <Wrapper4>
                    <img alt="" className="absolute h-[178.64%] left-[-37.89%] max-w-none top-[-0.13%] w-[137.89%]" src={imgButton3} />
                  </Wrapper4>
                  <Text1 text="통신" />
                </div>
                <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
                  <Wrapper4>
                    <img alt="" className="absolute h-[231.14%] left-[-78.42%] max-w-none top-[-75.45%] w-[178.42%]" src={imgButton4} />
                  </Wrapper4>
                  <Text1 text="서비스" />
                </div>
                <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
                  <Wrapper4>
                    <img alt="" className="absolute h-[143.52%] left-[-5.59%] max-w-none top-[-14.77%] w-[110.79%]" src={imgButton5} />
                  </Wrapper4>
                  <Text1 text="공공" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f3f6fa] content-stretch flex flex-col gap-[32px] items-center py-[80px] relative shrink-0 w-[1919.67px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
            <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#0f172a] text-[32px]">
              <p className="leading-[1.4]">주요 프로젝트</p>
            </div>
            <div className="flex flex-col font-['Pretendard:Regular','Noto_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#334155] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
              <p className="leading-[1.4]">{`다양한 산업군에서 성공적인 디지털 트랜스포메이션을 이끌어왔습니다 `}</p>
            </div>
          </div>
          <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] max-w-[1200px] relative shrink-0 w-full" data-name="Container">
            <Container40CardProject additionalClassNames="col-2 h-[227px] row-1">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
                <Helper1 text="LG전자 커머스 플랫폼 운영" text1="LG.com 글로벌 커머스 플랫폼 운영" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="e커머스" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="글로벌" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="플랫폼" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-3 h-[227px] row-1">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
                <Helper1 text="LG CNS CDP 솔루션 및 SINGLEX 운영" text1="고객 데이터 플랫폼(CDP) 솔루션 개발 및 SINGLEX UAS/HR 시스템 운영" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="CDP" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="SINGLEX" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="HR" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-1 row-2 self-stretch">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
                <Helper1 text="LG에너지솔루션 품질시스템 고도화" text1="품질 시스템 고도화 및 소재 개발 Workplace 구축" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="품질관리" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="Workplace" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="고도화" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-2 h-[205px] row-2">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
                <Helper1 text="LG이노텍 차세대 ERP 분석/설계" text1="차세대 ERP 구축 분석/설계 및 ERP 재무 모듈 운영" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="ERP" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="차세대" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="분석/설계" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-2 h-[227px] row-3">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2024</p>
                <Helper1 text="LG전자 ERP 운영/유지보수" text1="LG전자 ERP 재무, 공통 모듈 운영 및 유지보수" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="ERP" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="재무" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="운영/유지보수" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-3 h-[227px] row-3">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2024</p>
                <Helper1 text="LG CNS 데이터 파이프라인 관리" text1="DATA 파이프라인 관리 및 고객 데이터 플랫폼 운영/기술지원" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="DATA" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="CDP" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-3 h-[205px] row-2">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
                <Helper1 text="LIG넥스원 Oracle ERP HR 컨설팅" text1="Oracle ERP HR 경량화 컨설팅 및 시스템 개발" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="ERP" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="HR" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-1 h-[227px] row-3">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
                <Helper1 text="LG생활건강 경영관리시스템 고도화" text1="전사 경영관리 시스템 기능 고도화 수행" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="경영관리시스템" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="고도화" />
                </div>
              </div>
            </Container40CardProject>
            <Container40CardProject additionalClassNames="col-1 h-[227px] row-1">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
                <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[#ff6000] text-[14px] tracking-[0.7px] whitespace-nowrap">2025</p>
                <Helper1 text="LG전자 차세대 ERP 구축" text1="차세대 ERP(생산/재경) 구축 참여" />
              </div>
              <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="badge">
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="ERP" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="생산" />
                </div>
                <div className="bg-[#f3f4f6] min-w-[48px] relative rounded-[22369600px] shrink-0" data-name="Badge">
                  <Text text="재경" />
                </div>
              </div>
            </Container40CardProject>
          </div>
          <div className="bg-black content-stretch flex gap-[12px] items-center overflow-clip px-[48px] py-[20px] relative rounded-[999px] shrink-0" data-name="Button">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none">
                <div className="relative size-[20px]" data-name="keyboard_arrow_up">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="keyboard_arrow_up">
                      <path d={svgPaths.p31396200} fill="var(--fill-0, white)" id="icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">더 보기</p>
            </div>
          </div>
        </div>
        <div className="bg-black relative shrink-0 w-full" data-name="Footer">
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
                  <Wrapper3>
                    <FooterHeadingText text="Company" />
                    <FooterItemText text="About" />
                    <FooterItemText text="Solutions" />
                    <FooterItemText text="인재채용" />
                  </Wrapper3>
                  <Wrapper3>
                    <FooterHeadingText text="Contact" />
                    <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Item">
                      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] w-[180px] z-[1]">
                        <p className="leading-[20px]">TEL) 02-6052-3889</p>
                      </div>
                    </div>
                    <FooterItemText1 text="FAX) 02-6008-3838" />
                    <FooterItemText1 text="master@thebeesoft.com" />
                  </Wrapper3>
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
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
                        <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
                          <p className="leading-[25.5px]">Solutions</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start opacity-70 relative self-stretch shrink-0" data-name="Item">
                      <LinkText text="인재채용" />
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