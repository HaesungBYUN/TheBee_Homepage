import clsx from "clsx";
import imgImage4880 from "@/assets/6ef37ec0c4799965b6946f5069d6684ebcbf0c11.png";
import imgThebeeLogoWhite2 from "@/assets/71ecccd914bd1dfd31b21739dc443ad39097e574.png";
import svgPaths from "./svg-oy58ye79l5";
import imgImage4913 from "@/assets/583568431d8b583fab13f49102aa3562f4fd58e3.png";
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("bg-[#f3f6fa] justify-self-stretch relative rounded-[16px] self-start shrink-0", additionalClassNames)}>
      <div className="content-stretch flex items-start justify-between p-[32px] relative w-full">{children}</div>
    </div>
  );
}

function TabBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-[10px] relative">{children}</div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start max-w-[180px] min-h-px min-w-px relative" data-name="Container">
        {children}
      </div>
    </div>
  );
}

function IconBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.8">
          {children}
        </g>
      </svg>
    </div>
  );
}
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

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
};

function LinkBackgroundImageAndText({ text }: LinkBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[25.5px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 whitespace-nowrap">{text}</p>
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
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-white col-1 h-[46px] ml-0 mt-0 relative rounded-[12px] row-1 w-[153px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[#182234] text-[18px] text-center whitespace-nowrap">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}
type FooterItemBackgroundImageAndText1Props = {
  text: string;
};

function FooterItemBackgroundImageAndText1({ text }: FooterItemBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type FooterItemBackgroundImageAndTextProps = {
  text: string;
};

function FooterItemBackgroundImageAndText({ text }: FooterItemBackgroundImageAndTextProps) {
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
type FooterHeadingBackgroundImageAndTextProps = {
  text: string;
};

function FooterHeadingBackgroundImageAndText({ text }: FooterHeadingBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.58px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[13.3px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}

function ThebeeLogoWhiteBackgroundImage() {
  return (
    <div className="h-[30px] relative shrink-0 w-[158px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThebeeLogoWhite2} />
    </div>
  );
}

export default function Component02About02HowWeWork() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="02_About_02 How We Work-1">
      <div className="bg-white content-stretch flex flex-col items-start min-h-[1200px] relative shrink-0 w-full" data-name="Background">
        <div className="bg-[#f8f9fa] h-[560px] relative shrink-0 w-[1920px]" data-name="Section">
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
                  <TabBackgroundImage>
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                      <p className="leading-[1.4]">기업소개</p>
                    </div>
                  </TabBackgroundImage>
                </div>
                <div className="relative shrink-0" data-name="TAB">
                  <div aria-hidden="true" className="absolute border-b-2 border-solid border-white inset-0 pointer-events-none" />
                  <TabBackgroundImage>
                    <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                      <p className="leading-[1.4]">How We Work</p>
                    </div>
                  </TabBackgroundImage>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[72px] items-center overflow-clip pb-[120px] pt-[80px] relative shrink-0 w-full" data-name="Section">
          <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
            <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[32px]">
              <p className="leading-[1.4]">핵심 가치</p>
            </div>
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[1.4] relative shrink-0 text-[#555] text-[16px]">
              <p className="mb-0">사람 중심의 기술, 혁신과 신뢰를 바탕으로 고객과 함께 성장합니다.</p>
              <p>{`전문성에 더해 함께 나누는 더비(The Bee)다움을 항상 생각합니다. `}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[72px] items-center max-w-[1200px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px]" data-name="Container">
              <div className="content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Container">
                  <IconBackgroundImage>
                    <path d={svgPaths.p159a2680} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  </IconBackgroundImage>
                </div>
                <p className="flex-[1_0_0] font-['Pretendard:Bold',sans-serif] leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px]">부지런함과 책임감</p>
              </div>
              <p className="font-['Pretendard:Regular','Noto_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`쉼 없이 움직이며 자연에 기여하는 꿀벌처럼, TheBeeSoft의 개발자들 모두는 부지런함과 책임감을 개인의 소중한 가치로 생각합니다.  `}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px]" data-name="Container">
              <div className="content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Container">
                  <IconBackgroundImage>
                    <path d={svgPaths.p38589280} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  </IconBackgroundImage>
                </div>
                <p className="flex-[1_0_0] font-['Pretendard:Bold',sans-serif] leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px]">협력과 소통</p>
              </div>
              <div className="font-['Pretendard:Regular','Noto_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                <p className="mb-0">{`개인의 성실성을 바탕으로 긴밀한 커뮤니케이션을 더해야만 최선의 조직 성과를 낼 수 있다고 믿습니다. `}</p>
                <p>&nbsp;</p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px relative rounded-[16px]" data-name="Container">
              <div className="content-stretch flex gap-[10px] items-center justify-center pb-[20px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                <div className="bg-[#fff2f2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Container">
                  <IconBackgroundImage>
                    <path d={svgPaths.pfb41f00} id="Vector" stroke="var(--stroke-0, #FF6000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  </IconBackgroundImage>
                </div>
                <p className="flex-[1_0_0] font-['Pretendard:Bold',sans-serif] leading-[33.6px] min-h-px min-w-px not-italic relative text-[#101828] text-[24px]">가치를 나누는 기쁨</p>
              </div>
              <p className="font-['Pretendard:Regular','Noto_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#333] text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`꿀벌의 여정이 꿀로 남듯, 우리의 노력도 세상에 달콤한 변화를 남길 수 있도록 노력하고 있습니다. 노력의 결실을 임직원 및 사회와 함께 나누려 노력합니다. `}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#e9e9e9] content-stretch flex flex-col gap-[12px] items-center overflow-clip py-[80px] relative shrink-0 w-[1919.67px]" data-name="Section">
          <div className="absolute bg-[#f3f6fa] h-[1048px] left-0 top-0 w-[1920px]" data-name="image 4909" />
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
            <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]">
              <p className="leading-[1.4]">조직 구성</p>
            </div>
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#334155] text-[16px]">
              <p className="leading-[1.4]">
                전문성을 갖춘 각 그룹이 유기적으로 협력하여 최상의 결과를 만듭니다.
                <br aria-hidden="true" />
                {`고객이 원하는 해결책을 더 빠르게, 더 정확하게 제공하기 위해 간결한 조직 구조를 통한 유연한 대응을 지향합니다 `}
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0">
            <div className="h-[89px] relative shrink-0 w-[256px]" data-name="Container">
              <div className="absolute h-[177.604px] left-0 rounded-[16px] top-0 w-[256px]" data-name="Container">
                <div className="absolute bg-[#0f172a] h-[51px] left-[32.17px] rounded-[14px] top-[38px] w-[192px]" data-name="Heading 3">
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[33.6px] left-[96.5px] not-italic text-[24px] text-center text-white top-[8px] whitespace-nowrap">대표이사</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[75px] items-start relative shrink-0 w-[556px]">
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
            <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[__180px_minmax(0,1fr)] h-[200px] max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
              <div className="bg-white col-1 content-stretch flex flex-col h-[173px] items-center justify-center justify-self-start p-[10px] relative rounded-[16px] row-1 self-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <BackgroundImageAndText text="전략기획실" />
                </div>
              </div>
              <div className="bg-white col-2 content-stretch flex flex-col h-[173px] items-center justify-center justify-self-start p-[10px] relative rounded-[16px] row-1 self-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <BackgroundImageAndText text="경영지원실" />
                </div>
              </div>
              <div className="bg-white col-3 content-stretch flex flex-col h-[173px] items-center justify-center justify-self-start p-[10px] relative rounded-[16px] row-1 self-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <BackgroundImageAndText text="솔루션사업부" />
                </div>
              </div>
              <div className="bg-white col-4 content-stretch flex flex-col h-[173px] items-center justify-center justify-self-start p-[10px] relative rounded-[16px] row-1 self-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <BackgroundImageAndText text="ITO사업부" />
                </div>
              </div>
              <div className="bg-white col-5 content-stretch flex flex-col h-[173px] items-center justify-center justify-self-start p-[10px] relative rounded-[16px] row-1 self-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <BackgroundImageAndText text="정보보안위원회" />
                </div>
              </div>
              <div className="bg-white col-6 content-stretch flex flex-col h-[173px] items-center justify-center justify-self-start p-[10px] relative rounded-[16px] row-1 self-start shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <BackgroundImageAndText text="품질위원회" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[225.333px] max-w-[1200px] relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(169.365deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }}>
            <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pb-[0.667px] pt-[48.667px] px-[48.667px] relative size-full">
                <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[16px] items-center relative size-full">
                      <div className="h-[33.604px] relative shrink-0 w-[88.5px]" data-name="Heading 3">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[33.6px] left-0 not-italic text-[#101828] text-[24px] top-0 whitespace-nowrap">조직 문화</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="font-['Pretendard:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#364153] text-[20px] whitespace-nowrap">
                  <p className="mb-0">수평적인 조직문화를 통해 누구의 의견이든</p>
                  <p>자유롭게 제안되고, 경청되는 환경을 지향합니다.</p>
                </div>
                <div className="absolute h-[433px] left-[587.16px] opacity-80 top-[-121.4px] w-[746px]" data-name="image 4913">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-9.98%] max-w-none top-0 w-[121.79%]" src={imgImage4913} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[32px] items-center py-[80px] relative shrink-0 w-[1919.67px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
            <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]">
              <p className="leading-[1.4]">윤리실천강령</p>
            </div>
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#334155] text-[16px]">
              <p className="leading-[1.4]">TheBeeSoft의 모든 임직원은 아래의 윤리규범을 준수하고 실천해 나가겠습니다.</p>
            </div>
          </div>
          <div className="h-[720px] overflow-clip relative shrink-0 w-[896px]" data-name="Icon">
            <div className="absolute bottom-[49.98%] left-1/2 right-1/2 top-[6.46%]" data-name="Vector">
              <div className="absolute inset-[0_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 313.6">
                  <path d="M0.5 313.6V0" id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
                </svg>
              </div>
            </div>
            <Icon3VectorBackgroundImage additionalClassNames="left-1/2 right-[16.71%]">
              <path d={svgPaths.p3f383700} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
            </Icon3VectorBackgroundImage>
            <div className="absolute bottom-[14.75%] left-1/2 right-[29.43%] top-[50.02%]" data-name="Vector">
              <div className="absolute inset-[-0.12%_-0.22%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.139 254.296">
                  <path d={svgPaths.p370a3a00} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[14.75%] left-[29.43%] right-1/2 top-[50.02%]" data-name="Vector">
              <div className="absolute inset-[-0.12%_-0.22%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.138 254.296">
                  <path d={svgPaths.p28d6c300} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
                </svg>
              </div>
            </div>
            <Icon3VectorBackgroundImage additionalClassNames="left-[16.71%] right-1/2">
              <path d={svgPaths.p9c3a900} id="Vector" stroke="var(--stroke-0, #7C7C7C)" strokeDasharray="6 6" />
            </Icon3VectorBackgroundImage>
            <div className="absolute bottom-[18.9%] left-1/4 right-1/4 top-[18.88%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
                <path d={svgPaths.p10d45240} fill="url(#paint0_linear_1_1890)" id="Vector" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1890" x1="224" x2="224" y1="213.141" y2="632.516">
                    <stop stopColor="#FFE8DA" />
                    <stop offset="1" stopColor="#FFC1D6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-[3.35%_12.5%_3.32%_12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 672 672">
                <path d={svgPaths.p2f65900} fill="url(#paint0_radial_1_1913)" id="Vector" />
                <defs>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(33600 33600) scale(336)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1913" r="1">
                    <stop stopColor="#FF6000" stopOpacity="0.15" />
                    <stop offset="0.5" stopColor="#FF6000" stopOpacity="0.08" />
                    <stop offset="1" stopColor="#FF6000" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-[6.46%_15%_6.43%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 628.32 628.32">
                <path d={svgPaths.p16f3bf00} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="1.12" />
              </svg>
            </div>
            <div className="absolute inset-[24.16%_29.24%_24.18%_29.24%] mix-blend-multiply" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 372">
                <g id="Vector" style={{ mixBlendMode: "multiply" }}>
                  <path d={svgPaths.p15537840} fill="url(#paint0_linear_1_1928)" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1928" x1="186" x2="186" y1="176.983" y2="525.214">
                    <stop stopColor="#FFE8DA" />
                    <stop offset="1" stopColor="#FFC1D6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <BackgroundImageAndText1 text="임직원의 기본윤리" additionalClassNames="left-[356.17px] top-[17.67px]" />
            <BackgroundImageAndText1 text="임직원에 대한 존중" additionalClassNames="left-[719.16px] overflow-clip top-[239.67px]" />
            <BackgroundImageAndText1 text="국가, 사회에 대한 책임" additionalClassNames="left-[568.17px] overflow-clip top-[599.67px]" />
            <BackgroundImageAndText1 text="공정한 경쟁 및 거래" additionalClassNames="left-[178.17px] overflow-clip top-[599.67px]" />
            <BackgroundImageAndText1 text="고객에 대한 책임" additionalClassNames="left-[46.17px] overflow-clip top-[239.67px]" />
            <div className="absolute inset-[29.8%_33.75%_29.76%_33.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 291.2 291.2">
                <path d={svgPaths.pd624900} fill="url(#paint0_linear_1_1907)" id="Vector" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1907" x1="145.6" x2="145.6" y1="132.413" y2="341.913">
                    <stop stopColor="#FF6000" />
                    <stop offset="1" stopColor="#BF068B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold inset-[44.68%_39.86%_44.77%_39.83%] leading-[normal] not-italic text-[31.36px] text-center text-white whitespace-nowrap">
              <p className="mb-0">TheBeeSoft</p>
              <p>윤리실천강령</p>
            </div>
          </div>
          <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-[1152px]" data-name="Container">
            <div className="bg-[#f3f6fa] col-1 content-stretch flex h-[176px] items-start justify-between p-[32px] relative rounded-[16px] row-1 shrink-0 w-[560px]" data-name="Container">
              <div className="content-stretch flex flex-col gap-[16px] h-[112px] items-start max-h-[112px] max-w-[380px] not-italic relative shrink-0 w-[380px]" data-name="Container">
                <p className="font-['Pretendard:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">임직원의 기본윤리</p>
                <p className="font-['Pretendard:Regular',sans-serif] leading-[22.4px] min-w-full relative shrink-0 text-[#4a5565] text-[16px] w-[min-content]">더비소프트의 임직원은 올바른 가치관을 확립하고, 회사에 대한 자긍심을 가지고 품위있고 정직하게 행동하며 공정하게 직무를 수행한다.</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Container">
                <IconBackgroundImage1>
                  <path d={svgPaths.p30533c80} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </IconBackgroundImage1>
              </div>
            </div>
            <ContainerBackgroundImage additionalClassNames="col-2 row-1">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start max-w-[380px] min-h-px min-w-px not-italic relative" data-name="Container">
                <p className="font-['Pretendard:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">고객에 대한 책임</p>
                <p className="font-['Pretendard:Regular',sans-serif] h-[68px] leading-[22.4px] relative shrink-0 text-[#4a5565] text-[16px] w-full">고객의 의견을 항상 존중하고,고객에게 도움이 되는 가치를 창출하여 제공함으로써 고객과의 신뢰관계를 구축한다.</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Container">
                <IconBackgroundImage1>
                  <path d={svgPaths.p2d30d480} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p23a04200} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M14 42H34" id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M24 6V42" id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p26c16460} id="Vector_5" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </IconBackgroundImage1>
              </div>
            </ContainerBackgroundImage>
            <ContainerBackgroundImage additionalClassNames="col-1 row-2">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[117px] items-start max-w-[380px] min-h-px min-w-px relative" data-name="Container">
                <HeadingBackgroundImageAndText text="임직원에 대한 존중" />
                <p className="font-['Pretendard:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full">임직원 개개인의 인간적 존엄과 가치를 존중하고 능력과 업적에 따라 공정하게 대우하며,임직원의 창의성이 충분히 발휘 되도록 노력한다.</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Container">
                <IconBackgroundImage1>
                  <path d="M44 14L27 31L17 21L4 34" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M32 14H44V26" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </IconBackgroundImage1>
              </div>
            </ContainerBackgroundImage>
            <ContainerBackgroundImage additionalClassNames="col-2 row-2">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[116.792px] items-start max-w-[380px] min-h-px min-w-px relative" data-name="Container">
                <HeadingBackgroundImageAndText text="공정한 경쟁 및 거래" />
                <p className="font-['Pretendard:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full">모든 사업활동에서 경쟁사와 선의의 경쟁을 펼치고, 투명하고 공정한 거래를 통해 상호신뢰와 협력관계를 구축한다.</p>
              </div>
              <div className="relative shrink-0 size-[48px]" data-name="Container">
                <div className="absolute inset-[-2.08%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                    <g id="Container">
                      <g id="Vector">
                        <path d={svgPaths.p12267900} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.pae0a480} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p5a18740} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p2c746780} stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </ContainerBackgroundImage>
            <div className="bg-[#f3f6fa] col-1 content-stretch flex h-[178px] items-start justify-between p-[32px] relative rounded-[16px] row-3 shrink-0 w-[560px]" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[116.792px] items-start max-w-[380px] min-h-px min-w-px relative" data-name="Container">
                <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
                  <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[-0.17px] not-italic text-[#101828] text-[20px] top-[-2.87px] whitespace-nowrap">국가, 사회에 대한 책임</p>
                </div>
                <p className="font-['Pretendard:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-full">국가 및 지역의 법규와 사회적 가치관을 존중하며 깨끗한 환경의 보전을 위해 노력하며, 국민의 풍요로운 삶과 사회발전에 기여한다.</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Container">
                <IconBackgroundImage1>
                  <path d={svgPaths.p2b3c4500} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p31eb3600} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p39ff1860} id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p26525340} id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </IconBackgroundImage1>
              </div>
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
                    <ThebeeLogoWhiteBackgroundImage />
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Pretendard:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[1.4] relative shrink-0 text-[#aaa] text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                        <p className="mb-0">주식회사 더비소프트</p>
                        <p className="mb-0">{`서울특별시 영등포구 선유로 13길 25, 213호 `}</p>
                        <p>(문래동6가 에이스하이테크시티2)</p>
                      </div>
                    </div>
                  </div>
                  <BackgroundImage>
                    <FooterHeadingBackgroundImageAndText text="Company" />
                    <FooterItemBackgroundImageAndText text="About" />
                    <FooterItemBackgroundImageAndText text="Solutions" />
                    <FooterItemBackgroundImageAndText text="인재채용" />
                  </BackgroundImage>
                  <BackgroundImage>
                    <FooterHeadingBackgroundImageAndText text="Contact" />
                    <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Item">
                      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] w-[180px] z-[1]">
                        <p className="leading-[20px]">TEL) 02-6052-3889</p>
                      </div>
                    </div>
                    <FooterItemBackgroundImageAndText1 text="FAX) 02-6008-3838" />
                    <FooterItemBackgroundImageAndText1 text="master@thebeesoft.com" />
                  </BackgroundImage>
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
      <div className="absolute backdrop-blur-[5px] left-[-0.2px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] top-[0.37px] w-[1920px]" data-name="Header">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[384px] relative w-full">
            <div className="h-[80px] min-w-[1200px] relative shrink-0 w-full" data-name="Nav">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between min-w-[inherit] relative size-full">
                <ThebeeLogoWhiteBackgroundImage />
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
                      <LinkBackgroundImageAndText text="Solutions" />
                    </div>
                    <div className="content-stretch flex flex-col items-start opacity-70 relative self-stretch shrink-0" data-name="Item">
                      <LinkBackgroundImageAndText text="인재채용" />
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