import clsx from "clsx";
import svgPaths from "./svg-zjy6vz25xq";
import imgContainer from "@/assets/1a82a87b9db1e7f6e2f991c3c6813157d4e12250.png";
import imgSection from "@/assets/038bbe7521e89ad97b6b7f975057cac059667d9a.png";
import imgImage4861 from "@/assets/08be6ef49a1d2b7908a8d416c89fc71c964d8612.png";
import imgImage4862 from "@/assets/6af37f766211dff92c5fed14421c70aaef6a591a.png";
import imgImage4863 from "@/assets/1b23c302e6b110f295c52a343a25416af9f09c0d.png";
import imgImage4864 from "@/assets/3992642889f598c6976f818e5b6f52e1d669f0a0.png";
import imgImage4865 from "@/assets/0d7c0c2a233de1d71d158342f4dc325f64d188fa.png";
import imgImage4866 from "@/assets/e606bf631fdac0f88a641a93e91fa1c1541e5e2a.png";
import imgImage4867 from "@/assets/5414a3dbff5b7eab585830d4bf332b996596a89e.png";
import imgImage4868 from "@/assets/adca3a8b65abef4914897ba01ba0509fe53ac2c8.png";
import imgImage4869 from "@/assets/7bde3a70b2a431423a8b2c65b8bb3dd26715f12c.png";
import imgImage4870 from "@/assets/c413bf4e0b528921454619bbbb02f65a37424d24.png";
import imgImage4871 from "@/assets/1e5c25479b6c9b24509b155ffac02545d1aae4b3.png";
import imgImage4872 from "@/assets/41de86b025fa0c84ec7f5b64a9fea680d45bd5a8.png";
import imgImage4873 from "@/assets/dc4189ece825f014231db669bf9281f958ea65ba.png";
import imgImage4874 from "@/assets/6c59f2314f9453434c9aa485c1a17dbefa64f249.png";
import imgImage4875 from "@/assets/aee552c0b1ca1f0df3c13859779d63f98b0edd29.png";
import imgImage4876 from "@/assets/bd65b76f1fbb5693819954e80a1a7ea8090a32f8.png";
import imgImage4877 from "@/assets/786baadd5799680830c1a93117bde1938a8b9cb8.png";
import imgImage4878 from "@/assets/98403acd288910d40bffcaa16c932496c4d39630.png";
import imgOverlayBackground from "@/assets/48dae49edd081c9b9d2441e85e5aa25515982aea.png";
import imgOverlayBackground1 from "@/assets/96efd6b6c37f069bd886875f87e8c3ec9bdefb04.png";
import imgOverlayBackground2 from "@/assets/23e6f32edf8ee0b71169e63782e285e0f3f4dc81.png";
import imgImage4880 from "@/assets/6ef37ec0c4799965b6946f5069d6684ebcbf0c11.png";
import imgThebeeLogoWhite2 from "@/assets/71ecccd914bd1dfd31b21739dc443ad39097e574.png";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-end p-[32px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundBorderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[41px] py-[31px] relative w-full">{children}</div>
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

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[18px] w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage>
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
type ItemBackgroundImageAndText1Props = {
  text: string;
};

function ItemBackgroundImageAndText1({ text }: ItemBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type ItemBackgroundImageAndTextProps = {
  text: string;
};

function ItemBackgroundImageAndText({ text }: ItemBackgroundImageAndTextProps) {
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
type HeadingBackgroundImageAndText3Props = {
  text: string;
};

function HeadingBackgroundImageAndText3({ text }: HeadingBackgroundImageAndText3Props) {
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
type ContainerBackgroundImageAndText5Props = {
  text: string;
};

function ContainerBackgroundImageAndText5({ text }: ContainerBackgroundImageAndText5Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center opacity-90 pb-[0.695px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
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
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-[#ff6000] content-stretch flex items-center justify-center px-[8px] py-[3px] relative rounded-[20px] shrink-0">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[16px] text-center whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[32px] text-center whitespace-nowrap">
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff6000] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
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
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] w-full">
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
    <BackgroundImage2 additionalClassNames="w-[286px]">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[18.7px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </BackgroundImage2>
  );
}

export default function Component01HomeDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="01_Home-Desktop">
      <div className="content-stretch flex flex-col gap-[80px] items-center pb-[120px] relative shrink-0 w-full" data-name="Main">
        <div className="h-[800px] relative shrink-0 w-full" data-name="Section" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 800\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(200.04 0 0 285.07 1920 0)\\'><stop stop-color=\\'rgba(255,244,237,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,244,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 800\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(200.04 0 0 285.07 0 800)\\'><stop stop-color=\\'rgba(255,247,240,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,247,240,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[40px] relative size-full">
              <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-name="3163534-uhd_3840_2160_30fps 1">
                <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
                  <source src="/_videos/v1/30855e6d63c0720631594f648ab12579977f4402" />
                </video>
              </div>
              <div className="absolute h-[834px] left-0 top-0 w-[1195px]" style={{ backgroundImage: "linear-gradient(-89.8323deg, rgba(0, 0, 0, 0) 3.2998%, rgb(0, 0, 0) 60.38%)" }} />
              <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] px-[24px] relative w-full">
                  <div className="content-stretch flex flex-col items-start max-w-[600px] relative shrink-0 w-full" data-name="Heading 1">
                    <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center leading-[1.3] not-italic relative shrink-0 text-[56px] text-white w-[900px] whitespace-pre-wrap">
                      <p className="mb-0">{`기업 IT 변화의 시작부터 성공까지.  `}</p>
                      <p>{`'Bee the Best with TheBeeSoft.'`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start max-w-[600px] relative shrink-0 w-[600px]" data-name="Container">
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
                      <p className="leading-[1.4]">비즈니스의 미래를 설계하는 No. 1 IT 시스템 개발 파트너</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-col items-center max-w-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[inherit] px-[32px] relative w-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[32px] text-center w-full">
                  <p className="leading-[1.4]">(주)더비소프트는 고도화된 기술력과 산업 이해도를 바탕으로 최적의 시스템 해결책을 제공하는 <br className="hidden lg:inline" /> 전문가 그룹입니다.</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-start pt-[40px] relative shrink-0 w-full">
                <div className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.8)] flex-[1_0_0] min-h-px min-w-[300px] relative rounded-[24px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[40px] relative w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[1.4] not-italic relative shrink-0 text-[#334155] text-[18px] w-full whitespace-pre-wrap">
                        <p className="mb-0">{`ERP에서 다진 견고한 실무 경험, `}</p>
                        <p className="mb-0">{`폭넓은 산업군에서의 업무 경험과 IT 기술로 완성한 혁신.  `}</p>
                        <p>더비소프트는 LG CNS의 전략적 프라임 파트너(Prime Partner)로서 그 역량을 증명하고 있습니다.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start py-[12px] relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#eee] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0" data-name="Background">
                          <SvgBackgroundImage>
                            <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </SvgBackgroundImage>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
                          <ContainerBackgroundImage>
                            <span className="leading-[28px] text-[#ff6000]">꿀벌처럼 부지런히</span>
                            <span className="leading-[28px]">{` 현장을 누비고, `}</span>
                          </ContainerBackgroundImage>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
                          <BackgroundImage1>
                            <g id="Frame">
                              <path d={svgPaths.p1e42320} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                          </BackgroundImage1>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
                          <ContainerBackgroundImage>
                            <span className="leading-[28px] text-[#ff6000]">벌집처럼 정교하게</span>
                            <span className="leading-[28px]">{` 시스템을 설계하며, `}</span>
                          </ContainerBackgroundImage>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#eee] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
                          <div className="h-[26px] relative shrink-0 w-[15px]" data-name="Frame">
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
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
                          <BackgroundImage>
                            <p className="mb-0">
                              <span className="leading-[28px]">{`고객에게 성과라는 `}</span>
                              <span className="leading-[28px] text-[#ff6000]">달콤한 결실</span>
                              <span className="leading-[28px]">을 안겨드리는</span>
                            </p>
                            <p className="leading-[28px]">{`IT 시스템 파트너입니다. `}</p>
                          </BackgroundImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[324px] max-h-[324px] max-w-[450px] min-h-[180px] min-w-[249.99998474121094px] relative shrink-0 w-[450px]" data-name="Container">
                  <img alt="" className="absolute backdrop-blur-[4px] inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1200px] relative shrink-0 w-full" data-name="Section">
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
            <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#0f172a] text-[32px]">
              <p className="leading-[1.4]">Our Core Expertise</p>
            </div>
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#555] text-[16px]">
              <p className="leading-[1.4]">더비소프트는 고도화된 기술력과 산업 이해도를 바탕으로 최적의 해결책을 제공합니다.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
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
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
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
                  <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[1.4] not-italic relative shrink-0 text-[#334155] text-[16px] w-full">
                    <p className="mb-0">빅데이터 분석과 시각화를 통해 데이터에 숨겨진 비즈니스 인사이트를 발굴합니다.</p>
                    <p>&nbsp;</p>
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
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
          <div className="relative shrink-0 w-full" data-name="Section">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[#0b101c] inset-0" />
              <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgSection} />
            </div>
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center px-[480px] py-[80px] relative w-full">
                <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-start p-[16px] relative rounded-[16px] shrink-0" data-name="Overlay+OverlayBlur">
                    <div className="relative shrink-0 size-[36px]" data-name="tabler-icon-trophy">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                        <g id="tabler-icon-trophy">
                          <path d={svgPaths.p3e480a50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[960px]" data-name="Heading 2">
                      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-center text-white whitespace-nowrap">
                        <p className="leading-[1.4]">숫자로 증명하는 신뢰</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center leading-[1.4] min-w-[400px] not-italic relative shrink-0 text-[#e0e7ff] text-[20px] text-center whitespace-nowrap">
                        <p className="mb-0">결과로 말하고 데이터로 증명합니다.</p>
                        <p>타협하지 않는 품질과 더비소프트의 고객을 향한 진심의 결실입니다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start justify-center relative size-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[120px] relative self-stretch" data-name="Container">
                          <ContainerBackgroundImageAndText1 text="25+" />
                          <ContainerBackgroundImageAndText2 text="기업 고객사" />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[120px] relative self-stretch" data-name="Container">
                          <ContainerBackgroundImageAndText1 text="85+" />
                          <ContainerBackgroundImageAndText2 text="연간 진행 프로젝트" />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[120px] relative self-stretch" data-name="Container">
                          <ContainerBackgroundImageAndText1 text="98%" />
                          <ContainerBackgroundImageAndText2 text="고객 만족도" />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[120px] relative self-stretch" data-name="Container">
                          <ContainerBackgroundImageAndText1 text="15Y+" />
                          <ContainerBackgroundImageAndText2 text="업계 누적 경력" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[0_0_0.33px_0]" data-name="Container" />
              </div>
            </div>
          </div>
          <div className="bg-[#f3f6fa] content-stretch flex flex-col items-center py-[80px] relative shrink-0 w-full" data-name="Section">
            <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1200px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                <HeadingBackgroundImageAndText1 text="Trusted Partners" />
                <ContainerBackgroundImageAndText3 text="더비소프트는 다양한 산업군의 리딩 기업들과 함께 혁신을 만들어가고 있습니다." />
              </div>
              <div className="content-start flex flex-wrap gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4861">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4861} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4862">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4862} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4863">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4863} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4864">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4864} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4865">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4865} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4866">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4866} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4867">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4867} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4868">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4868} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4869">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4869} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4870">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4870} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4871">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4871} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4872">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4872} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4873">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4873} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4874">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4874} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4875">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4875} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4876">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4876} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4877">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4877} />
                </div>
                <div className="h-[116px] relative rounded-[10px] shrink-0 w-[186px]" data-name="image 4878">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4878} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Section">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
            <HeadingBackgroundImageAndText1 text="Careers at TheBeeSoft" />
            <ContainerBackgroundImageAndText3 text="더비소프트는 최고보다 최선을 다하는 사람들의 성장 공동체입니다." />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-size-[479.40073013305664px_319.9999873638153px] bg-top-left flex-[1_0_0] h-[320px] min-h-px min-w-px relative rounded-[24px]" data-name="Overlay+Background" style={{ backgroundImage: `url('${imgOverlayBackground}')` }}>
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
                  <div className="content-stretch flex flex-col gap-[6.895px] items-start min-w-[304px] relative shrink-0" data-name="Container">
                    <BackgroundImageAndText text="Talent" />
                    <HeadingBackgroundImageAndText2 text="인재상" />
                    <ContainerBackgroundImageAndText4 text="전문 역량, 성실함과 책임감, 협력과 소통의 자세를 지닌 인재를 육성하고자 합니다." />
                    <ContainerBackgroundImageAndText5 text="자세히보기" />
                  </div>
                </BackgroundImage3>
              </div>
              <div className="flex-[1_0_0] h-[320px] min-h-px min-w-px relative rounded-[24px]" data-name="Overlay+Background">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                  <img alt="" className="absolute h-[151.59%] left-0 max-w-none top-[-42.58%] w-[189.25%]" src={imgOverlayBackground1} />
                </div>
                <BackgroundImage3>
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[53.897%] to-[rgba(0,0,0,0)]" data-name="Gradient" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.895px] items-start min-h-px min-w-px relative" data-name="Container">
                    <BackgroundImageAndText text="Welfare" />
                    <HeadingBackgroundImageAndText2 text="복리후생" />
                    <ContainerBackgroundImageAndText4 text="자유로운 업무 환경 속에서 구성원의 성장을 위한 모든 여정을 세심하게 살핍니다." />
                    <ContainerBackgroundImageAndText5 text="자세히보기" />
                  </div>
                </BackgroundImage3>
              </div>
              <div className="bg-size-[480.3001880645752px_320.0000002980232px] bg-top-left flex-[1_0_0] h-[320px] min-h-px min-w-px relative rounded-[24px]" data-name="Overlay+Background" style={{ backgroundImage: `url('${imgOverlayBackground2}')` }}>
                <BackgroundImage3>
                  <div className="absolute bg-gradient-to-t from-[25.549%] from-[rgba(0,0,0,0.8)] inset-0 to-[53.897%] to-[rgba(0,0,0,0)]" data-name="Gradient" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.895px] items-start min-h-px min-w-px relative" data-name="Container">
                    <BackgroundImageAndText text="Process" />
                    <HeadingBackgroundImageAndText2 text="채용절차" />
                    <ContainerBackgroundImageAndText4 text="서류부터 최종 합격까지, 투명하고 빠른 채용 경험을 제공합니다." />
                    <ContainerBackgroundImageAndText5 text="자세히보기" />
                  </div>
                </BackgroundImage3>
              </div>
            </div>
          </div>
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
                    <ThebeeLogoWhiteBackgroundImage />
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[1.4] not-italic relative shrink-0 text-[#aaa] text-[16px] w-full whitespace-pre-wrap">
                        <p className="mb-0">주식회사 더비소프트</p>
                        <p className="mb-0">{`서울특별시 영등포구 선유로 13길 25, 213호 `}</p>
                        <p>(문래동6가 에이스하이테크시티2)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start max-w-[180px] min-h-px min-w-px relative" data-name="Container">
                      <HeadingBackgroundImageAndText3 text="Company" />
                      <ItemBackgroundImageAndText text="About" />
                      <ItemBackgroundImageAndText text="Solutions" />
                      <ItemBackgroundImageAndText text="인재채용" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start max-w-[180px] min-h-px min-w-px relative" data-name="Container">
                      <HeadingBackgroundImageAndText3 text="Contact" />
                      <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Item">
                        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] w-[180px] z-[1]">
                          <p className="leading-[20px]">TEL) 02-6052-3889</p>
                        </div>
                      </div>
                      <ItemBackgroundImageAndText1 text="FAX) 02-6008-3838" />
                      <ItemBackgroundImageAndText1 text="master@thebeesoft.com" />
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
      <div className="absolute backdrop-blur-[5px] left-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] top-0 w-[1920px]" data-name="Header">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[384px] relative w-full">
            <div className="h-[80px] min-w-[1200px] relative shrink-0 w-full" data-name="Nav">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between min-w-[inherit] relative size-full">
                <ThebeeLogoWhiteBackgroundImage />
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[40px] h-[26px] items-start relative shrink-0" data-name="List">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative self-stretch shrink-0" data-name="Item">
                      <LinkBackgroundImageAndText text="About" />
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