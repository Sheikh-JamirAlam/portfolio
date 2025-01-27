import Image from "next/image";
import RevealText from "./components/RevealText";
import { Email, Github, Linkedin, Twitter } from "./components/Icons";

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
            <div className="w-[10.5rem] m-4 p-2 bg-white border-2 border-foreground">
              <p className="text-center leading-[1.25]">
                Hi there! This is <span className="font-semibold">Sheikh</span>... I am a <br /> Full Stack Developer &amp; Web Designer.
              </p>
            </div>
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
              <div className="mx-auto my-auto grid grid-cols-2 gap-6 text-7xl">
                <Email className="saturate-0" />
                <Github className="saturate-0" />
                <Linkedin className="saturate-0" />
                <Twitter className="saturate-0" />
              </div>
            </div>
            <div id="pic-container" className="w-[25%] border-2 border-foreground relative flex flex-row-reverse justify-between">
              <div className="w-24 h-fit m-6 p-2 relative bg-white border-2 border-foreground">
                <p className="text-center leading-[1.25]">This is me. With my nerd glasses!</p>
              </div>
              <div className="w-28 m-10 h-fit relative">
                <Image className="w-full absolute" src="/images/bubbles.png" width={500} height={500} alt="Message bubble" />
                <p className="w-20 mx-3 my-[2.1rem] relative text-center leading-[1.25]">I am so hungry...</p>
              </div>
            </div>
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
