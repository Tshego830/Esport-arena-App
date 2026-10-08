import ImagePlaceholder from "../components/ImagePlaceholder"

const stats = [
  { value: "2023", label: "Established" },
  { value: "100+", label: "Gaming Rigs" },
  { value: "7", label: "Experiences" },
  { value: "JHB", label: "Johannesburg Arena" },
]

const facilities = [
  {
    name: "PC Gaming Zone",
    desc: "100+ high-spec rigs across 3 themed zones — casual, competitive, and streaming.",
  },
  {
    name: "VR Booths",
    desc: "4 fully enclosed VR suites with Meta Quest Pro and Valve Index headsets.",
  },
  {
    name: "Racing Simulators",
    desc: "8-rig sim racing setup with force-feedback wheels, bucket seats, and triple screens.",
  },
]

export default function About() {
  return (
    <div>
      {/* Banner */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-10 py-12">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Our Story
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            About Next Level Gaming
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[1440px] mx-auto px-10 py-16 grid grid-cols-2 gap-14 items-center border-b border-gray-200">
        <ImagePlaceholder className="h-[380px]" label="Arena Interior Photo" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Built for Gamers, by Gamers
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Next Level Gaming was founded in 2026 by{" "}
              <strong className="text-gray-900">Ellen Phatedi</strong>, a
              lifelong gamer who grew frustrated by the lack of access to
              high-performance gaming hardware in South Africa.
            </p>
            <p>
              Starting from a single location in Johannesburg, the arena was
              built with one mission: to make world-class gaming technology
              accessible to everyone — from casual players and competitive
              esports athletes to corporate teams looking for unique
              team-building experiences.
            </p>
            <p>
              Today, Next Level Gaming houses over 100 gaming rigs, dedicated VR
              suites, racing simulators, an escape room, and a full tournament
              floor used for regional esports competitions. Every piece of
              equipment is maintained to the highest standard and upgraded
              annually.
            </p>
            <p>
              We believe great gaming shouldn't require owning great hardware.
              Walk in, sit down, and play at the highest level possible.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1440px] mx-auto px-10 py-12 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-gray-300 p-8 text-center"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {s.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="max-w-[1440px] mx-auto px-10 py-14">
        <div className="mb-8">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            Facility Tour
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Explore the Arena
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {facilities.map((f) => (
            <div key={f.name} className="border border-gray-300">
              <ImagePlaceholder className="h-52" label={f.name} />
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {f.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
