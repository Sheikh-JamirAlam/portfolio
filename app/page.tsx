import RevealText from "./components/RevealText";
import SocialsContainer from "./components/SocialsContainer";
import PicContainer from "./components/PicContainer";
import OpenAnimation from "./components/OpenAnimation";
import CompanionAnimation from "./components/CompanionAnimation";
import SocialsTextBubble from "./components/SocialsTextBubble";
import Image from "next/image";

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
            <div className="w-[50%] relative border-2 border-foreground">
              <Image className="saturate-0 select-none" src="/images/cipela.png" width={1000} height={1000} alt="Cipela - Shoe website" />
              <div className="absolute inset-0">
                <div className="w-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
                  <p className="w-[8rem] text-center">Another portfolio project is Cipela, which is a shoe selling website inspired by Nike.</p>
                </div>
              </div>
            </div>
            <div className="w-[50%] relative border-2 border-foreground">
              <Image className="saturate-0 select-none" src="/images/opods.png" width={1000} height={1000} alt="OPods - Airpods website" />
              <div className="flex flex-row-reverse justify-between absolute inset-0">
                <div className="w-fit h-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
                  <p className="w-[9rem] text-center">Let&apos;s me show you some of my works...</p>
                </div>
                <div className="w-fit h-fit mt-auto mb-[20%] m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
                  <p className="w-[13rem] text-center">OPods is a portfolio project which is a product showcase website inspired by Apple.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-[50%] relative border-2 border-foreground">
              <Image className="saturate-0 select-none" src="/images/medisearch.png" width={1000} height={1000} alt="Medisearch - Redesign of Medisearch website" />
              <div className="absolute inset-0">
                <div className="w-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
                  <p className="w-[12.5rem] text-center">Lastly this is a Fullstack project, redesign of Medisearch website with authentication functionality.</p>
                </div>
              </div>
            </div>
            <div className="w-[50%] relative border-2 border-foreground">
              <Image className="saturate-0 select-none" src="/images/healthtech.png" width={1000} height={1000} alt="Healthtech - Redesign of Healthtech website" />
              <div className="flex justify-end items-end absolute inset-0">
                <div className="w-fit h-fit mb-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
                  <p className="w-[9rem] text-center">This was a personal redesign of the website Healthtech.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
