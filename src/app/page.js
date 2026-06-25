import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000B36] text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 py-20 md:px-16 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_30%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Est. 2022
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              American Virtual
              <br />
              Hockey League
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Where virtual hockey builds real history. An 80-team custom
              hockey universe powered by rivalries, promotion and relegation,
              and the chase for the Cup.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/teams"
                className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-black uppercase tracking-wide text-[#000B36] transition hover:bg-white"
              >
                Explore Teams
              </a>

              <a
                href="/info"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                About Us
              </a>
            </div>
          </div>

          <div className="flex h-64 w-64 items-center justify-center rounded-full border border-cyan-300/30 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 md:h-80 md:w-80">
            <Image
              src="/avhl-logo.png"
              alt="AVHL logo"
              width={260}
              height={260}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* LEAGUE SNAPSHOT */}
      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-10 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 text-center md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-black text-cyan-300">7000+</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/70">
              Games Simulated
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-black text-cyan-300">80</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/70">
              Teams
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-black text-cyan-300">3</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/70">
              Promotions
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-black text-cyan-300">1</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/70">
              Stanley Cup
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Explore the League
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
              Built on history, chaos, and the chase.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <a
              href="/teams"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              <h3 className="text-2xl font-black uppercase">Teams</h3>

              <p className="mt-4 text-white/70">
                Browse every AVHL franchise, from Original 8 icons to rising
                contenders.
              </p>

              <p className="mt-6 text-sm font-black uppercase text-cyan-300">
                View Teams &rarr;
              </p>
            </a>

            <a
              href="/standings"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              <h3 className="text-2xl font-black uppercase">Standings</h3>

              <p className="mt-4 text-white/70">
                Follow the playoff race, relegation battle, and league table as
                the season unfolds.
              </p>

              <p className="mt-6 text-sm font-black uppercase text-cyan-300">
                View Standings &rarr;
              </p>
            </a>

            <a
              href="/history"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              <h3 className="text-2xl font-black uppercase">History</h3>

              <p className="mt-4 text-white/70">
                Relive the champions, heartbreaks, dynasties, collapses, and
                legendary playoff moments.
              </p>

              <p className="mt-6 text-sm font-black uppercase text-cyan-300">
                View History &rarr;
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}