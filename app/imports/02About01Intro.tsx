import clsx from "clsx";
import imgImage4880 from "@/assets/6ef37ec0c4799965b6946f5069d6684ebcbf0c11.png";
import imgThebeeLogoWhite2 from "@/assets/71ecccd914bd1dfd31b21739dc443ad39097e574.png";
import svgPaths from "./svg-rrbtbsqu4o";
import imgImage4898 from "@/assets/65ace069c3cfaba46adf9b0e117b4b0db0b2e1e5.png";
import imgImage4891 from "@/assets/0aba0e2bd0a26d3538a36cd3276f4266306cf6a5.png";

function Container5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.8)] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[40px] relative w-full">{children}</div>
    </div>
  );
}

function Container4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start pl-[48px] relative w-full">{children}</div>
    </div>
  );
}

function OverlayBorder({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start justify-between px-[41px] py-[33px] relative size-full">{children}</div>
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

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start max-w-[180px] min-h-px min-w-px relative" data-name="Container">
        {children}
      </div>
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
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[48px] relative w-full">{children}</div>
      </div>
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
type ContainerText7Props = {
  text: string;
};

function ContainerText7({ text }: ContainerText7Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type ContainerText6Props = {
  text: string;
};

function ContainerText6({ text }: ContainerText6Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">{text}</p>
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
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#777] text-[14px] uppercase w-[474px]">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px] w-[474px]">
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

function Container1({ text, text1, additionalClassNames = "" }: Container1Props) {
  return (
    <Wrapper>
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252e3f] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[32px]">{text}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">
        <p className="leading-[28px]">{text1}</p>
      </div>
      <BackgroundBorder additionalClassNames="right-[-10px] top-[8px]" />
    </Wrapper>
  );
}
type BackgroundBorderProps = {
  additionalClassNames?: string;
};

function BackgroundBorder({ additionalClassNames = "" }: BackgroundBorderProps) {
  return (
    <div className={clsx("absolute bg-white rounded-[9999px] size-[17px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-4 border-[#262e3f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}
type ContainerText5Props = {
  text: string;
};

function ContainerText5({ text }: ContainerText5Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-full">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#777] text-[14px] uppercase">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#444] text-[13px] w-[50px]">
        <p className="leading-[1.4]">{text}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] whitespace-nowrap">
        <p className="leading-[1.4]">{text1}</p>
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

export default function Component02About01Intro() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="02_About_01 Intro">
      <div className="bg-[#f8f9fa] h-[560px] relative shrink-0 w-full" data-name="Section">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[56px] items-center pt-[140px] relative size-full">
            <div className="absolute h-[1080px] left-[-0.16px] top-0 w-[1920px]" data-name="13820721_3840_2160_30fps 1">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 object-cover" />
                <div className="absolute bg-[#0f172a] inset-0 mix-blend-color" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="bg-white content-stretch flex items-start justify-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Background+Border+Shadow">
                  <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                  <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[1.4]">{`Best People & Best Partner`}</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.3] mb-0">사람을 위한 기술,</p>
                  <p>
                    <span className="leading-[1.3] text-white">TheBeeSoft</span>
                    <span className="leading-[1.3]">가 만듭니다.</span>
                  </p>
                </div>
                <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[1.4] not-italic opacity-80 relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
                  <p className="mb-0">더비소프트는 2011년부터 기업의 디지털 트랜스포메이션을 선도하며,</p>
                  <p>기술 그 이상의 가치를 고객과 함께 만들어가고 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-[3px] bg-[#111827] h-[72px] relative shrink-0 w-full" data-name="Tabmenu">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center px-[16px] py-[24px] relative size-full">
            <div className="content-stretch flex gap-[32px] h-[38px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="TAB">
              <div className="relative shrink-0" data-name="TAB">
                <div aria-hidden="true" className="absolute border-b-2 border-solid border-white inset-0 pointer-events-none" />
                <TabHelper>
                  <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                    <p className="leading-[1.4]">기업소개</p>
                  </div>
                </TabHelper>
              </div>
              <div className="opacity-70 relative shrink-0" data-name="TAB">
                <TabHelper>
                  <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                    <p className="leading-[1.4]">How We Work</p>
                  </div>
                </TabHelper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip py-[80px] relative shrink-0 w-full">
        <div className="absolute h-[255px] left-0 overflow-clip top-[199px] w-[461px]" data-name="image">
          <div className="absolute flex h-[554px] items-center justify-center left-[186.98px] top-[-57px] w-[291px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[554px] opacity-30 relative w-[291px]" data-name="image 4898">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[157.02%] left-[-231.71%] max-w-none top-[-56.96%] w-[612.92%]" src={imgImage4898} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[461px] items-center justify-center left-[-0.02px] top-[11px] w-[233px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[461px] opacity-30 relative w-[233px]" data-name="image 4899">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[157.02%] left-[-388.86%] max-w-none top-[-56.96%] w-[636.72%]" src={imgImage4898} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[80px] items-start max-w-[1200px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0">
            <div className="content-stretch flex items-start max-w-[1200px] relative shrink-0" data-name="Title">
              <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="Container">
                <div className="flex flex-col font-['Pretendard:Bold','Noto_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
                  <p className="leading-[1.4]">{`주식회사 더비소프트 `}</p>
                </div>
                <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#777] text-[14px]">
                  <p className="leading-[1.4]">TheBeeSoft Inc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="sub">
              <Helper text="대표이사" text1="이광섭" />
              <Helper text="설립일" text1="2011. 02. 01" />
              <div className="content-stretch flex gap-[20px] items-start relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
                <div className="relative shrink-0" data-name="Margin">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[13px] w-[50px]">
                      <p className="leading-[1.4]">사업분야</p>
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px min-w-px relative">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative w-full">
                    <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] whitespace-nowrap">
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
            <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full">
              <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] h-[174px] min-h-px min-w-px relative rounded-[16px]" data-name="Overlay+Border">
                <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
                  <div className="bg-[rgba(255,105,0,0.1)] h-[30px] relative rounded-[33554400px] shrink-0 w-[150px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,105,0,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <Icon>
                        <path d={svgPaths.p18211080} id="Vector" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </Icon>
                      <div className="absolute h-[15px] left-[37px] top-[7.5px] w-[84.078px]" data-name="Text">
                        <p className="absolute font-['Arial:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#ff8904] text-[10px] top-0 tracking-[0.5px] uppercase whitespace-nowrap">ERP Solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center leading-[0] not-italic relative text-[#333] w-full whitespace-nowrap">
                      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[18px]">
                        <p className="leading-[1.4]">{`ERP 구축 및 운영 `}</p>
                      </div>
                      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[14px] uppercase">
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
              <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] h-[174px] min-h-px min-w-px relative rounded-[16px]" data-name="Overlay+Border">
                <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
                  <div className="relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
                      <div className="bg-[rgba(43,127,255,0.1)] h-[30px] relative rounded-[33554400px] shrink-0 w-[180px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                        <Icon>
                          <path d={svgPaths.pb72e280} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </Icon>
                        <div className="absolute content-stretch flex items-end justify-center left-[36.5px] top-[11px]" data-name="Text">
                          <p className="font-['Arial:Bold',sans-serif] leading-[10px] not-italic relative shrink-0 text-[#51a2ff] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">CustomIZED Systems</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#333] text-[18px] w-[min-content]">
                        <p className="leading-[1.4]">산업 맞춤형 시스템 구축 및 운영</p>
                      </div>
                    </div>
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
      <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center overflow-clip py-[120px] relative shrink-0 w-[1919.67px]" data-name="Section">
        <div className="absolute h-[452px] left-[-710.02px] top-[371px] w-[981px]">
          <div className="absolute inset-[-1.88%_-0.87%_-18.03%_-6.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1054 542">
              <g filter="url(#filter0_di_1_984)" id="Vector 8">
                <path d={svgPaths.p38802600} shapeRendering="crispEdges" stroke="url(#paint0_linear_1_984)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.23" strokeWidth="17" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="547" id="filter0_di_1_984" width="1054" x="0" y="-5">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-30" dy="47" />
                  <feGaussianBlur stdDeviation="13" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_984" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_984" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="-5" />
                  <feGaussianBlur stdDeviation="5.5" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect2_innerShadow_1_984" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_984" x1="64.5" x2="1045.5" y1="245.5" y2="245.5">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute h-[457px] left-[477.98px] mix-blend-multiply top-[163px] w-[1404px]" data-name="image 4891">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[147.51%] left-[-12.75%] max-w-none top-[-29.33%] w-[112.75%]" src={imgImage4891} />
          </div>
        </div>
        <div className="content-stretch flex gap-[32px] h-[215px] items-start justify-center max-w-[1200px] relative shrink-0 w-full" data-name="Container">
          <div className="relative self-stretch shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col gap-[24px] h-full items-start pb-[10px] pr-[32px] relative">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                <Container text="Growth Metrics" text1="멈추지 않는 성장의 기록" additionalClassNames="items-start" />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
                <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center relative shrink-0 text-[#6d7074] text-[16px] text-right">
                  <p className="leading-[1.4]">CAGR(설립이후 매출액 연평균 성장율)</p>
                </div>
                <div className="content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] items-start relative shrink-0 text-[#ff6000]">
                  <div className="flex flex-col justify-center relative shrink-0 text-[30px] text-right">
                    <p className="leading-none">CAGR</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[48px]">
                    <p className="leading-none">23.7%↑</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[12px] bg-[rgba(15,23,42,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch" data-name="Background+Border">
            <div aria-hidden="true" className="absolute border border-[#0f172a] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="content-stretch flex flex-col items-start justify-between px-[41px] py-[33px] relative size-full">
              <Wrapper5>
                <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[175.667px]" data-name="Container">
                  <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                    <p className="leading-[1.4]">2024 리포트</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[175.667px]" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                      <p className="leading-[1.4]">매출액</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Pretendard:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white w-full">
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
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
                    <p className="leading-[28px]">신용등급 BB0</p>
                  </div>
                </div>
              </Container3>
            </div>
          </div>
          <OverlayBorder>
            <Wrapper5>
              <ContainerText2 text="2023 리포트" />
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[175.667px]" data-name="Container">
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
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[175.667px]" data-name="Container">
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
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center py-[120px] relative shrink-0 w-[1920px]" data-name="Section">
        <Container text="History" text1="TheBeeSoft Journey" additionalClassNames="items-center w-[900px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[900px]">
          <div className="-translate-x-1/2 absolute bg-[rgba(37,46,63,0.3)] bottom-[38px] left-[calc(50%+1.5px)] top-[16px] w-px" />
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <Wrapper>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252e3f] text-[20px] text-right whitespace-nowrap">
                <p className="leading-[32px]">2025</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">
                <p className="mb-0">LG이노텍 N-ERP 구축사업 참여</p>
                <p>{`LG전자 ERP 재무 모듈 운영/유지보수 `}</p>
              </div>
              <BackgroundBorder additionalClassNames="right-[-10px] top-[8px]" />
            </Wrapper>
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
              <div className="flex flex-col items-end size-full">
                <div className="size-full" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
              <div className="flex flex-col items-end size-full">
                <div className="size-full" />
              </div>
            </div>
            <Container4>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252e3f] text-[20px] text-right whitespace-nowrap">
                <p className="leading-[32px]">2024</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
                <p className="mb-0">LG전자 NEPS 구축 프로젝트</p>
                <p className="mb-0">LG.com D2X 플랫폼 구축</p>
                <p>LG생활건강 BW고도화</p>
              </div>
              <BackgroundBorder additionalClassNames="right-[440px] top-[9px]" />
            </Container4>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <Wrapper>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252e3f] text-[20px] text-right whitespace-nowrap">
                <p className="leading-[32px]">2023</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">
                <p className="mb-0">LG전자 차세대 ERP개발</p>
                <p className="mb-0">LG CNS 고객데이터 통합 ETL개발</p>
                <p className="mb-0">LG CNS 공상평 SINGLEX 구매개발</p>
                <p>LG이노텍 세무조정 고도화 DB개발</p>
              </div>
              <BackgroundBorder additionalClassNames="right-[-10px] top-[9px]" />
            </Wrapper>
            <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
              <div className="size-full" />
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
              <div className="flex flex-col items-end size-full">
                <div className="size-full" />
              </div>
            </div>
            <Container4>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252e3f] text-[20px] text-right whitespace-nowrap">
                <p className="leading-[32px]">2022</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
                <p className="leading-[28px]">
                  LG전자 ERP 재무 모듈 운영/유지보수
                  <br aria-hidden="true" />
                  LG이노텍 금융정보화 고도화 DB개발
                </p>
              </div>
              <BackgroundBorder additionalClassNames="right-[440px] top-[9px]" />
            </Container4>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <Container1 text="2020" text1="LG CNS Oracle ERP 재무영역 도급 운영사 재선정" />
            <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
              <div className="flex flex-col items-end size-full">
                <div className="size-full" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
              <div className="flex flex-col items-end size-full">
                <div className="size-full" />
              </div>
            </div>
            <Container4>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252e3f] text-[20px] text-right whitespace-nowrap">
                <p className="leading-[32px]">2017</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">
                <p className="leading-[28px]">LG CNS Prime Partner사 선정</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">
                <p className="leading-[28px]">LG전자/LG이노텍 Oracle ERP 재무영역 도급 운영사 선정</p>
              </div>
              <BackgroundBorder additionalClassNames="right-[440px] top-[9px]" />
            </Container4>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <Container1 text="2013" text1="LG CNS ORACLE ERP 전문 협력사 등록" />
            <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
              <div className="flex flex-col items-end size-full">
                <div className="size-full" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
              <div className="flex flex-col items-end size-full">
                <div className="size-full" />
              </div>
            </div>
            <Container4>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252e3f] text-[20px] text-right whitespace-nowrap">
                <p className="leading-[32px]">2011</p>
              </div>
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">
                <p className="leading-[28px]">주식회사 더비소프트 설립</p>
              </div>
              <BackgroundBorder additionalClassNames="right-[440px] top-[9px]" />
            </Container4>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center justify-center overflow-clip py-[120px] relative shrink-0 w-full" data-name="Section">
        <div className="content-stretch flex gap-[80px] items-center max-w-[1200px] relative shrink-0 w-full" data-name="Container">
          <Container5>
            <Helper1 text="Location" text1="찾아오시는 길" />
            <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0" data-name="Background">
                  <Svg1>
                    <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Svg1>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[280px]" data-name="Container">
                  <ContainerText6 text="주소" />
                  <Container2 text="서울특별시 영등포구 선유로 13길 25, 213호" text1="(문래동6가 에이스하이테크시티2)" />
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
                  <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Frame">
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
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[195px]" data-name="Container">
                  <ContainerText6 text="지하철" />
                  <ContainerText7 text="지하철 2호선 문래역 도보 10분" />
                </div>
              </div>
            </div>
          </Container5>
          <Container5>
            <Helper1 text="CONTACT" text1="연락처" />
            <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[24px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0" data-name="Background">
                  <Svg1>
                    <path d={svgPaths.p3a2d4980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Svg1>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[305px]" data-name="Container">
                  <ContainerText6 text="전화 및 FAX" />
                  <Container2 text="TEL. 02-6052-3889 | FAX. 02-6008-3838" text1="&nbsp;" />
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0" data-name="Background">
                  <Svg1>
                    <path d={svgPaths.p13268cc7} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Svg1>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[178px]" data-name="Container">
                  <ContainerText6 text="이메일" />
                  <ContainerText7 text="master@thebeesoft.com" />
                </div>
              </div>
            </div>
          </Container5>
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
      <div className="absolute backdrop-blur-[5px] left-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] top-0 w-[1920px]" data-name="Header">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[384px] relative w-full">
            <div className="h-[80px] min-w-[1200px] relative shrink-0 w-full" data-name="Nav">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between min-w-[inherit] relative size-full">
                <ThebeeLogoWhiteImage />
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[40px] h-[26px] items-start relative shrink-0" data-name="List">
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
                        <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
                          <p className="leading-[25.5px]">About</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start opacity-70 relative self-stretch shrink-0" data-name="Item">
                      <LinkText text="Solutions" />
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