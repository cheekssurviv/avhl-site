import Link from "next/link";
import { notFound } from "next/navigation";
import { teams } from "../../../data/teams";

export default function TeamPage({ params }) {
  const team = teams.find((team) => team.slug === params.slug);

  if (!team) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#000B36] px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <Link href="/teams" className="font-bold text-[#000B36]/70">
          ← Back to Teams
        </Link>

        <div className="mt-8 rounded-3xl overflow-hidden border border-[#000B36]/15 shadow-sm">
          <div
            className="h-32"
            style={{ backgroundColor: team.colors.primary }}
          />

          <div className="p-8 md:p-10">
            <p className="uppercase tracking-[0.25em] text-sm font-black text-[#000B36]/50">
              {team.city}
            </p>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-2">
              {team.nickname}
            </h1>

            <p className="text-xl text-[#000B36]/70 mt-4">
              {team.record}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="rounded-2xl bg-[#000B36]/5 p-5">
                <p className="text-3xl font-black">{team.championships}</p>
                <p className="text-sm font-bold text-[#000B36]/60">
                  Stanley Cups
                </p>
              </div>

              <div className="rounded-2xl bg-[#000B36]/5 p-5">
                <p className="text-3xl font-black">{team.promotions}</p>
                <p className="text-sm font-bold text-[#000B36]/60">
                  Promotions
                </p>
              </div>

              <div className="rounded-2xl bg-[#000B36]/5 p-5">
                <p className="text-3xl font-black">2022</p>
                <p className="text-sm font-bold text-[#000B36]/60">
                  Founded
                </p>
              </div>

              <div className="rounded-2xl bg-[#000B36]/5 p-5">
                <p className="text-3xl font-black">AVHL</p>
                <p className="text-sm font-bold text-[#000B36]/60">
                  League
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}