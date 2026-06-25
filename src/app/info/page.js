import Link from "next/link";

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-white text-[#000B36]">
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm font-black text-[#000B36]/50 mb-4">
            About the AVHL
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl">
            Built to grow the game in a new way.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#000B36]/70 max-w-3xl leading-relaxed">
            The American Virtual Hockey League is a custom hockey universe
            featuring 80 teams, full-season simulations, promotion and
            relegation, playoff drama, team identities, and years of league
            history.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/teams"
              className="inline-flex justify-center rounded-full bg-[#000B36] px-7 py-3 text-white font-black hover:bg-[#00145C] transition"
            >
              Explore Teams
            </Link>

            <Link
              href="/history"
              className="inline-flex justify-center rounded-full border border-[#000B36]/20 px-7 py-3 font-black hover:bg-[#000B36]/5 transition"
            >
              League History
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-[#000B36] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white/10 p-7 border border-white/10">
            <p className="text-4xl font-black">80</p>
            <h2 className="text-xl font-black mt-3">Teams</h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              A full league system built around unique markets, brands,
              rivalries, and team identities.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-7 border border-white/10">
            <p className="text-4xl font-black">3 Up</p>
            <h2 className="text-xl font-black mt-3">3 Down</h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              Promotion and relegation keep every season meaningful from the
              top of the standings to the bottom.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-7 border border-white/10">
            <p className="text-4xl font-black">2022</p>
            <h2 className="text-xl font-black mt-3">Established</h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              What started as a custom league project has grown into a complete
              hockey world with its own history.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-black text-[#000B36]/50 mb-4">
              Our Mission
            </p>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Making hockey feel bigger, deeper, and more connected.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-[#000B36]/70 leading-relaxed">
            <p>
              The AVHL exists to bring the structure, emotion, and storytelling
              of real sports into a virtual hockey league. Every team has a
              place. Every season adds history. Every promotion, relegation,
              rivalry, upset, and championship becomes part of the league&apos;s
              identity.
            </p>

            <p>
              The goal is not just to simulate games. The goal is to build a
              league that feels alive — one where fans can follow teams,
              remember moments, debate outcomes, and watch a hockey universe
              grow year after year.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#D7F3FF] border border-[#000B36]/10 p-8 md:p-12">
          <p className="uppercase tracking-[0.3em] text-sm font-black text-[#000B36]/50 mb-4">
            What Makes It Different
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-black">A true league system</h3>
              <p className="mt-3 text-[#000B36]/70 leading-relaxed">
                The AVHL is not just one static league. Teams can rise, fall,
                rebuild, and fight their way back through promotion and
                relegation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black">Team-first storytelling</h3>
              <p className="mt-3 text-[#000B36]/70 leading-relaxed">
                Logos, colors, rivalries, playoff heartbreak, championships,
                and fan culture all shape how each franchise is remembered.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black">Simulated results</h3>
              <p className="mt-3 text-[#000B36]/70 leading-relaxed">
                Games and seasons are simulated to create unpredictable results,
                dramatic playoff races, and real consequences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black">Built for the long run</h3>
              <p className="mt-3 text-[#000B36]/70 leading-relaxed">
                Each year adds new champions, new stories, new rivalries, and
                new reasons to care about what happens next.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}