import Image from "next/image";
import ArrowRight from "./ArrowRight";

function HowToJoin() {
  return (
    <div className="bg-white w-full flex-col flex items-center pb-32 h-fit max-md:px-4">
      <div className="flex items-start h-fit max-w-4xl m-auto">
        <div className="flex-col flex items-start gap-2.5 py-32">
          <div className="bg-[#688ff5] w-full h-full flex max-md:flex-col-reverse items-center md:gap-12 max-md:gap-4 rounded-xl border border-white border-opacity-[0.5]">
            <div className="flex-1 flex-col flex items-start gap-6 max-md:py-4 md:py-12 pr-6 pl-12">
              <div className="w-full flex-col flex items-start gap-6">
                <div className="w-full flex-col flex items-start gap-2 text-white">
                  <div className="text-[40px] leading-[48px] font-medium font-FamiljenGrotesk">
                    How to Join
                  </div>
                  <div className="text-base leading-[19px] font-Inter">
                    Joining our organization is easy! Simply visit our website
                    and fill out the membership application. Once your
                    application is approved, you will gain access to a variety
                    of resources and opportunities to connect with other
                    Blockchain enthusiasts.
                  </div>
                </div>
              </div>
              <div className="w-full flex-col flex items-start gap-2.5 text-base font-semibold text-black font-Inter">
                <div className="bg-white flex justify-center items-center gap-2 px-6 py-4 rounded-full">
                  <div>Join Our Community</div>
                  <ArrowRight size="sm" color="black" />
                </div>
              </div>
            </div>
            <div className="bg-cover h-full max-md:w-full w-1/2 flex items-start gap-2.5">
              <Image
                src="/images/How to Join/Image.svg"
                alt="How to Join"
                className="w-full max-md:h-[300px] h-full max-h-[385px]"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowToJoin;
