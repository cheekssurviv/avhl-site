import Link from "next/link";
import { teams } from "../../../data/teams";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-white text-[#000B36] px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          AVHL Teams
        </h1>

        <p className="text-lg text-[#000B36]/70 mb-10 max-w-2xl">
          Explore the teams of the American Virtual Hockey League.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="rounded-2xl border border-[#000B36]/15 p-6 shadow-sm hover:shadow-lg transition bg-white"
            >
              <div
                className="h-2 rounded-full mb-5"
                style={{ backgroundColor: team.colors.primary }}
              />

              <h2 className="text-2xl font-black">{team.name}</h2>

              <p className="text-[#000B36]/60 mt-2">{team.record}</p>

              <p className="mt-6 font-bold">
                View Team →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}