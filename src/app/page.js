import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#000B36]">
      <nav className="flex items-center justify-between px-5 md:px-12 py-5 border-b border-[#000B36]/20">
        <div className="flex items-center gap-3">
          <Image
            src="/avhl-logo.png"
            alt="AVHL Logo"
            width={55}
            height={55}
          />
          <h1 className="text-3xl md:text-4xl font-black">AVHL</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-semibold">
          <a href="/">Home</a>
          <a href="/standings">Standings</a>
          <a href="/teams">Teams</a>
          <a href="/statistics">Statistics</a>
          <a href="/history">History</a>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-5 font-semibold text-lg">
          <a href="/standings">Standings</a>
          <a href="/teams">Teams</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center pt-16 px-6">
        <Image
          src="/avhl-logo.png"
          alt="AVHL Logo"
          width={320}
          height={320}
          className="mb-8"
        />

        <h2 className="text-5xl md:text-7xl font-black max-w-5xl">
          AMERICAN
          <br />
          VIRTUAL HOCKEY
          <br />
          LEAGUE
        </h2>

        <p className="mt-6 text-2xl md:text-3xl font-bold text-[#A90117]">
          America's largest online hockey league
        </p>
      </section>
    </main>
  );
}