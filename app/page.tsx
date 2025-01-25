import RevealText from "./components/RevealText";

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
        <section className="mx-6 mt-6 border-2 border-foreground">
          <div className="w-[10.5rem] m-4 p-2 bg-white border-2 border-foreground">
            <p className="text-center leading-[1.25]">
              Hi there! This is <span className="font-semibold">Sheikh</span>... I am a <br /> Full Stack Developer &amp; Web Designer
            </p>
          </div>
          <h1 className="mt-12 text-9xl text-center font-arigato"><RevealText text="Sheikh&nbsp;Jamir&nbsp;Alam" /></h1>
          <div className="w-[10rem] h-[10rem] filter-[url('#noiseFilter')]" />
        </section>
        <section className="mx-6 mt-6 border-2 border-foreground">
        <div className="w-[10.5rem] m-4 p-2 bg-white border-2 border-foreground">
            <p className="text-center leading-[1.25]">
              Hi there! This is <span className="font-semibold">Sheikh</span>... I am a <br /> Full Stack Developer &amp; Web Designer
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
