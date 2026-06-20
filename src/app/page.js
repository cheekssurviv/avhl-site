import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#000B36]">
      <nav className="flex justify-between items-center px-12 py-6 border-b border-[#000B36]/20">
        <div className="flex items-center gap-3">
          <Image
            src="/avhl-logo.png"
            alt="AVHL Logo"
            width={55}
            height={55}
          />

          <h1 className="text-3xl font-black">AVHL</h1>
        </div>

        <div className="flex gap-8 font-semibold">
          <a href="#">Home</a>
          <a href="#">Standings</a>
          <a href="#">Teams</a>
          <a href="#">Statistics</a>
          <a href="#">History</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center pt-16 px-6">
        <Image
          src="/avhl-logo.png"
          alt="AVHL Logo"
          width={320}
          height={320}
          className="mt-2"
        />

        <h2 className="text-4xl font-bold mt-6">
          AMERICAN VIRTUAL HOCKEY LEAGUE
        </h2>

        <p className="text-xl font-semibold text-[#A90117] mt-6">
          The next evolution of virtual hockey.
        </p>
      </section>
    </main>
  );
}