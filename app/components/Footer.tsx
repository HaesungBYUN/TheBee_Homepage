import { Link } from 'react-router';
import thebeelogo from "@/assets/thebeelogo.png";
import bee_footer from "@/assets/bee_footer.png";

type HeadingBackgroundImageAndText3Props = {
  text: string;
};

function HeadingBackgroundImageAndText3({ text }: HeadingBackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.58px] relative shrink-0 w-full">
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[13.3px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
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
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic opacity-99 relative shrink-0 text-[14px] text-white whitespace-nowrap z-[1]">
        <p className="leading-[1.4]">{text}</p>
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
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

function ThebeeLogoWhiteBackgroundImage() {
  return (
    <div className="h-[30px] relative shrink-0 w-[158px]">
      <img alt="TheBeeSoft" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={thebeelogo} />
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-black relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[40px] pt-[79px] px-[24px] relative w-full">
           <div className="absolute h-[450px] md:h-[675px] lg:h-[888px] left-1/2 top-1/2 -translate-y-1/2 ml-[-150px] md:ml-[-250px] lg:ml-[-300px] opacity-50 w-[800px] md:w-[1200px] lg:w-[1578px] hidden sm:block overflow-hidden pointer-events-none">
            <img alt="" className="absolute inset-0 max-w-none mix-blend-luminosity object-cover pointer-events-none size-full grayscale" src={bee_footer} />
          </div>
          <div className="max-w-[1200px] relative shrink-0 w-full mx-auto">
            <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
              <div className="content-stretch flex flex-col lg:flex-row gap-[40px] items-start lg:items-end relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 lg:w-[320px]">
                  <Link to="/">
                    <ThebeeLogoWhiteBackgroundImage />
                  </Link>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[1.4] not-italic relative shrink-0 text-[#aaa] text-[16px] w-full whitespace-pre-wrap">
                      <p className="mb-0">주식회사 더비소프트</p>
                      <p className="mb-0">{`서울특별시 영등포구 선유로 13길 25, 213호 `}</p>
                      <p>(문래동6가 에이스하이테크시티2)</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-end gap-[24px] lg:gap-[40px]">

                  <div className="content-stretch flex flex-col gap-[8px] items-start relative">
                    <HeadingBackgroundImageAndText3 text="Contact" />
                    <div className="content-stretch flex isolate items-center relative shrink-0">
                      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] z-[1]">
                        <p className="leading-[20px]">TEL) 02-6052-3889</p>
                      </div>
                    </div>
                    <ItemBackgroundImageAndText1 text="FAX) 02-6008-3838" />
                    <ItemBackgroundImageAndText1 text="master@thebeesoft.com" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.8px] relative w-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
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
  );
}