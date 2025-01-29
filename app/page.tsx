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
        <section className="h-dvh flex flex-col gap-6">
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
      <footer></footer>
    </div>
  );
}
