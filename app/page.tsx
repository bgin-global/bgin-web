import Footer from "@/components/Footer";
import ItemBlock from "@/components/ItemBlock";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/Hero";
import { CUSTOM_STYLES } from "@/styles/custom";
import { projects } from "@/contents/projects";
import Image from "next/image";
import ItemCard from "@/components/ItemCard";
import {
  upcomingBlockConference,
  upcomingLayer2Meetup,
  upcomingWGCalls,
} from "@/contents/upcomingEvents";

export default function Home() {
  const layer2Upcoming = upcomingLayer2Meetup;
  const blockUpcoming = upcomingBlockConference;
  const wgCallUpcoming = upcomingWGCalls;
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <Hero type={1} />

      <div className={`${CUSTOM_STYLES.SECTION_CONTAINER.BLUE} items-start`}>
        <SectionTitle title="Next Activities" />
        <div
          className={`${CUSTOM_STYLES.SECTION_FLEX.ALWAYS_LATERAL} items-end`}
        >
          <Image
            src="/images/Home/Layer2 Activity.svg"
            alt="Layer 2 Activity"
            width={100}
            height={100}
            className="w-full h-auto"
            style={{
              objectFit: "cover",
            }}
          />
          <ItemCard
            title={layer2Upcoming.title}
            subtitle={`@${layer2Upcoming.location}`}
            description={`Date: ${layer2Upcoming.date}`}
            link={layer2Upcoming.link}
            height="h-auto"
            colorPattern="blue"
          />
        </div>
        <div
          className={`${CUSTOM_STYLES.SECTION_FLEX.ONE} items-start justify-start px-4 pb-12`}
        >
          <Image
            src="/images/Home/Layer1 Activity.svg"
            alt="Layer 1 Activity"
            width={100}
            height={100}
            className="w-[80%] h-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className={CUSTOM_STYLES.SECTION_FLEX.LATERAL}>
          <ItemCard
            title={blockUpcoming.title}
            subtitle={`@${blockUpcoming.location}`}
            description={
              <>
                <p className="mb-0">Date: {blockUpcoming.date}</p>
                <p className="mb-0">Location: {blockUpcoming.location}</p>
              </>
            }
            link="/activities/block-conference"
            colorPattern="white"
          />
          <ItemCard
            title="Working Group"
            subtitle="　"
            description={
              <>
                {wgCallUpcoming.map((wg, index) => {
                  return (
                    <div key={index} className="mb-2">
                      <p>{wg.wgTitle}</p>
                      <p>Date: {wg.date}</p>
                    </div>
                  );
                })}
              </>
            }
            link="/activities/working-groups"
            colorPattern="navy"
          />
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Projects in progress" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          {projects.inProgress.map((project) => {
            return (
              <ItemBlock
                key={project.title}
                title={project.title}
                thumbnail=""
                description={project.description}
                withImage={false}
                buttonTitle="Reference"
                buttonJumpTo={project.reference}
              />
            );
            // return (
            //   <div
            //     key={project.title}
            //     className="bg-[#002060] h-[260px] w-auto rounded-xl shrink-0"
            //   />
            // );
          })}
        </div>
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}
