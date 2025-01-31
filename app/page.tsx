import Image from "next/image";
import RevealText from "./components/RevealText";
import SocialsContainer from "./components/SocialsContainer";
import PicContainer from "./components/PicContainer";
import OpenAnimation from "./components/OpenAnimation";
import CompanionAnimation from "./components/CompanionAnimation";
import SocialsTextBubble from "./components/SocialsTextBubble";
import CipelaContainer from "./components/CipelaContainer";
import OPodsContainer from "./components/OPodsContainer";
import MediSearch from "./components/MediSearch";
import Healthtech from "./components/Healthtech";
import EndingTextBubble from "./components/EndingTextBubble";
import CompanionEndingAnimation from "./components/CompanionEndingAnimation";
import Time from "./components/Time";
import AnimatedCursor from "./components/AnimatedCursor";
import Email from "./components/Email";

export default function Home() {
  return (
    <div className="bg-background font-sans selection:bg-foreground selection:text-background">
      <svg className="pointer-events-none absolute cursor-none">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <main>
        <AnimatedCursor />
        <section className="h-svh flex flex-col gap-6">
          <div className="absolute filter-[url('#noiseFilter')]" />
          <OpenAnimation />
          <div className="h-[50%] mx-6 mt-6 border-2 border-foreground">
            <div className="w-[10.5rem] m-4 p-2 bg-white border-2 border-foreground">
              <p className="text-center leading-[1.25]">
                Hi there! This is <span className="font-semibold">Sheikh</span>... I am a <br /> Full Stack Developer &amp; Web Designer.
              </p>
            </div>
            <h1 className="mt-12 text-9xl text-center font-arigato">
              <RevealText text="Sheikh&nbsp;Jamir&nbsp;Alam" />
            </h1>
          </div>
          <div className="h-[50%] mx-6 mb-6 flex flex-row-reverse gap-6">
            <div className="w-[50%] flex flex-row-reverse justify-between border-2 border-foreground bg-cover bg-center" style={{ backgroundImage: "url('images/map.png')" }}>
              <div className="w-36 h-fit m-4 p-2 bg-white border-2 border-foreground">
                <p className="text-center leading-[1.25]">And here is my city of Joy...</p>
              </div>
              <div className="w-36 mt-auto m-4 p-2 bg-white border-2 border-foreground">
                <p className="text-center leading-[1.25]">...best place to get Biriyani. Thank me later!</p>
              </div>
            </div>
            <PicContainer />
            <div className="w-[25%] flex border-2 border-foreground overflow-hidden">
              <CompanionAnimation />
              <SocialsTextBubble />
              <SocialsContainer />
            </div>
          </div>
        </section>
        <section className="mb-6 mx-6 flex flex-col gap-6">
          <div className="flex gap-6">
            <CipelaContainer />
            <OPodsContainer />
          </div>
          <div className="flex gap-6">
            <MediSearch />
            <Healthtech />
          </div>
        </section>
      </main>
      <footer className="mb-6 mx-6 relative flex flex-row-reverse gap-6">
        <div className="w-[60%] py-8 flex items-center border-2 border-foreground">
          <div className="w-fit m-4 p-2 absolute bg-white border-2 border-foreground">
            <p className="w-[8rem] text-center">Need A Website redesign?</p>
          </div>
          <Email />
          <div className="absolute inset-0 flex items-end justify-end">
            <p className="mx-3 mb-1">
              <span className="font-inter">©</span> 2025 Sheikh Jamir Alam
            </p>
          </div>
        </div>
        <div className="w-[40%] flex gap-6 border-2 border-foreground overflow-hidden">
          <CompanionEndingAnimation />
          <EndingTextBubble />
          <div className="h-fit mx-auto my-auto flex border-2 border-foreground">
            <div className="flex border-r-2 border-foreground">
              <Image className="w-16 h-16 mx-4 my-auto" src="/images/earth.png" width={512} height={512} alt="Earth png" />
            </div>
            <div className="flex flex-col">
              <h1 className="p-2 text-lg">Working Globally</h1>
              <p className="w-[10rem] p-2 border-t-2 border-foreground leading-none">
                <span className="font-bold text-sm">LOCAL TIME</span>
                <br />
                <Time />
                <span className="font-ubuntu">, IST</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
