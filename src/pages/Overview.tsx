import { useState } from "react";
import { Link } from "react-router";
import ImagePlaceholder from "../components/ImagePlaceholder";

const packages = [
  {
    name: "Ultimate Gamer Pass",
    price: "R1,500",
    features: ["4 hours unlimited gaming", "All PC titles included", "2x energy drinks", "Priority seating selection", "Locker storage"],
  },
  {
    name: "VIP Gaming Experience",
    price: "R1,500",
    features: ["6 hours gaming time", "VIP lounge access", "4x beverages of choice", "Dedicated host throughout", "Reserved premium rig"],
  },
  {
    name: "Esports Training Package",
    price: "R1,500",
    features: ["3 hours coached play", "VOD review session", "Individual stats report", "1-on-1 coach consultation", "Practice drill sets"],
  },
  {
    name: "Birthday Party Package",
    price: "R1,500",
    features: ["3 hours private room", "Slots for 10 players", "Catering package included", "Branded birthday setup", "Photo booth access"],
  },
];

const experiences = [
  {
    name: "Virtual Reality Experience",
    price: "R750",
    slug: "vr-experience",
    inclusions: ["VR headset & controllers", "Choice of 20+ games", "Staff technical assistance", "45-minute session"],
  },
  {
    name: "Racing Simulator Challenge",
    price: "R750",
    slug: null,
    inclusions: ["Force-feedback wheel setup", "GT or F1 car selection", "5 lap competitive session", "Lap time certificate"],
  },
  {
    name: "Escape Room Challenge",
    price: "R750",
    slug: null,
    inclusions: ["60-minute room access", "Teams of 2–6 players", "3 themed rooms available", "Completion certificate"],
  },
];

type Tab = "all" | "packages" | "experiences";

export default function Overview() {
  const [tab, setTab] = useState<Tab>("all");

  return (
    <div>
      {/* Header */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-10 py-12">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Full Catalog</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Packages & Experiences</h1>

          <div className="flex gap-1">
            {(["all", "packages", "experiences"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 text-sm font-medium border transition-colors ${
                  tab === t
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
                }`}
              >
                {t === "all" ? "All" : t === "packages" ? "Gaming Packages" : "Individual Experiences"}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-10 py-12">
        {/* Gaming Packages */}
        {(tab === "all" || tab === "packages") && (
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900">Gaming Packages</h2>
              <span className="text-xs text-gray-400 border border-gray-300 px-2 py-0.5">R1,500 each</span>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div key={pkg.name} className="border border-gray-300 flex flex-col">
                  <ImagePlaceholder className="h-40" label={pkg.name} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight">{pkg.name}</h3>
                      <span className="text-xs font-bold border border-gray-400 px-2 py-0.5 shrink-0 ml-2 text-gray-700">{pkg.price}</span>
                    </div>
                    <ul className="space-y-1.5 flex-1">
                      {pkg.features.map((f) => (
                        <li key={f} className="text-xs text-gray-500 flex items-center gap-2">
                          <span className="w-3 h-3 border border-gray-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-4 block text-center text-xs font-medium text-gray-800 border border-gray-800 py-2 hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      Select Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Individual Experiences */}
        {(tab === "all" || tab === "experiences") && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900">Individual Experiences</h2>
              <span className="text-xs text-gray-400 border border-gray-300 px-2 py-0.5">R750 each</span>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <div key={exp.name} className="border border-gray-300 flex flex-col">
                  <ImagePlaceholder className="h-48" label={exp.name} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight">{exp.name}</h3>
                      <span className="text-xs font-bold border border-gray-400 px-2 py-0.5 shrink-0 ml-2 text-gray-700">{exp.price}</span>
                    </div>
                    <ul className="space-y-1.5 flex-1">
                      {exp.inclusions.map((inc) => (
                        <li key={inc} className="text-xs text-gray-500 flex items-center gap-2">
                          <span className="w-3 h-3 border border-gray-400 shrink-0" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                    {exp.slug ? (
                      <Link
                        to={`/overview/${exp.slug}`}
                        className="mt-4 block text-center text-xs font-medium text-gray-800 border border-gray-800 py-2 hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        View Details
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="mt-4 block text-center text-xs font-medium text-gray-800 border border-gray-800 py-2 hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        Select Experience
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
