import Image from "next/image";
import RevealText from "./components/RevealText";
import SocialsContainer from "./components/SocialsContainer";
import PicContainer from "./components/PicContainer";
import IntroductionNarrate from "./components/IntroductionNarrate";

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
          <div className="h-[50%] mx-6 mt-6 border-2 border-foreground">
            <IntroductionNarrate />
            <h1 className="mt-12 text-9xl text-center font-arigato">
              <RevealText text="Sheikh&nbsp;Jamir&nbsp;Alam" />
            </h1>
          </div>
          <div className="h-[50%] mx-6 mb-6 flex gap-6">
            <div className="w-[25%] flex border-2 border-foreground overflow-hidden">
              <div className="w-14 h-20 mt-auto mb-6 relative">
                <Image className="w-24 scale-150 absolute rotate-[20deg] -translate-x-1" src="/images/companion.png" width={500} height={500} alt="Message bubble" />
              </div>
              <div className="w-36 h-[17rem] mt-auto relative">
                <Image className="w-36 scale-150 absolute" src="/images/bubble-socials.png" width={500} height={500} alt="Message bubble" />
                <p className="w-28 mx-auto text-center relative">These are his socials... Who am I? Eh... just here to narrate some stuff... No I don&apos;t get paid.</p>
              </div>
              <SocialsContainer />
            </div>
            <PicContainer />
            <div className="w-[50%] flex flex-row-reverse justify-between border-2 border-foreground bg-cover bg-center" style={{ backgroundImage: "url('images/map.png')" }}>
              <div className="w-36 h-fit m-4 p-2 bg-white border-2 border-foreground">
                <p className="text-center leading-[1.25]">And here is my city of Joy...</p>
              </div>
              <div className="w-36 mt-auto m-4 p-2 bg-white border-2 border-foreground">
                <p className="text-center leading-[1.25]">...best place to get Biriyani. Thank me later!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
