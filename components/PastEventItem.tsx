import Image from "next/image";
import ArrowRight from "./ArrowRight";
import Link from "next/link";
import { Event } from "@/lib/fetch-events";

interface Props {
  event: Event;
}

export default function PastEventItem(props: Props) {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row items-start gap-12 p-6 rounded-3xl border border-white border-opacity-[0.5]">
      <div className="w-full h-[300px] flex items-start gap-2.5 rounded-xl">
        <Image
          alt="Hero Image"
          src={props.event.thumbnail}
          className="w-[100%] h-[100%] rounded-2xl"
          quality={100}
          width={1000}
          height={1000}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="h-full lg:w-full flex-col flex items-start gap-6">
        <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
          {props.event.title}
        </div>
        <div className="w-full flex-col flex items-start gap-6 bgin-button">
          <div className="w-full flex-col flex items-start gap-2 text-black">
            <div className="text-sm leading-[17px] font-Inter pb-4">
              {props.event.description}
            </div>
            <div className="flex-col flex items-start gap-1 text-sm leading-[17px] font-Inter font-semibold">
              <div>Location: {props.event.location}</div>
              <div>
                Date: {props.event.date}
                {props.event.date_until ? ` 〜 ${props.event.date_until}` : ""}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-flow-row bgin-button">
            <Link
              href={"/events/" + props.event.id}
              className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter"
            >
              <div>More Details</div>
              <ArrowRight size="sm" color="white" />
            </Link>
            {props.event.jp_url && props.event.lang === "ENG" ? (
              <Link
                href={"/events/" + props.event.jp_url}
                className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter"
              >
                <div>詳細(日本語)</div>
                <ArrowRight size="sm" color="white" />
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
