import { Link } from "react-router";
import ImagePlaceholder from "../components/ImagePlaceholder";

const features = [
  { label: "High-End PCs", desc: "RTX 4090 rigs, 240Hz monitors, mechanical keyboards — the full competitive stack." },
  { label: "Esports Tournament Space", desc: "Dedicated 32-seat tournament floor with broadcast-ready setup and PA system." },
  { label: "Corporate Event Facilities", desc: "Private meeting rooms, branded overlays, catering coordination, AV support." },
];

const packages = [
  { name: "Ultimate Gamer Pass", price: "R1,500", features: ["4 hrs gaming time", "All PC titles", "2x energy drinks", "Priority seating"] },
  { name: "VIP Experience", price: "R1,500", features: ["6 hrs gaming time", "VIP lounge access", "4x beverages", "Dedicated host"] },
  { name: "Esports Training", price: "R1,500", features: ["3 hrs coached play", "VOD review session", "Stats report", "Coach 1-on-1"] },
  { name: "Birthday Party Package", price: "R1,500", features: ["3 hrs private room", "10 player slots", "Catering included", "Branded setup"] },
];

const discountTiers = [
  { bookings: "1 booking", rate: "0%", note: "Standard rate" },
  { bookings: "2 bookings", rate: "5%", note: "Bundle saving" },
  { bookings: "3 bookings", rate: "10%", note: "Multi-booking" },
  { bookings: "4+ bookings", rate: "15%", note: "Best value" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-10 py-16 grid grid-cols-2 gap-12 items-center border-b border-gray-200">
        <ImagePlaceholder className="h-[420px]" label="Hero Arena Photo" />
        <div>
          <div className="inline-block border border-gray-300 text-xs text-gray-500 px-3 py-1 mb-5 tracking-wide uppercase">
            Johannesburg's #1 Esports Venue
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
            Elevate Your<br />Gaming Experience
          </h1>
          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
            Step into Next Level Gaming — 100+ high-performance rigs, dedicated tournament floors, VR zones, and corporate-grade facilities. All in one arena.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
              Book Arena
            </Link>
            <Link to="/calculate-fees" className="px-6 py-3 border border-gray-800 text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors">
              Calculate Fees
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-[1440px] mx-auto px-10 py-14 border-b border-gray-200">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">What We Offer</h2>
        <div className="grid grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.label} className="border border-gray-300 p-0">
              <ImagePlaceholder className="h-48" label={f.label} />
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{f.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="max-w-[1440px] mx-auto px-10 py-14 border-b border-gray-200">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Featured Packages</h2>
            <h3 className="text-2xl font-bold text-gray-900">Choose Your Experience</h3>
          </div>
          <Link to="/overview" className="text-sm text-gray-500 border-b border-gray-400 hover:text-gray-800 pb-0.5">
            View all packages →
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border border-gray-300 flex flex-col">
              <div className="p-5 border-b border-gray-200 flex items-start justify-between">
                <h4 className="text-sm font-semibold text-gray-900 leading-tight">{pkg.name}</h4>
                <span className="text-xs font-bold text-gray-700 border border-gray-400 px-2 py-0.5 shrink-0 ml-2">{pkg.price}</span>
              </div>
              <div className="p-5 flex-1">
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-3 h-3 border border-gray-400 shrink-0 inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border-t border-gray-200">
                <Link to="/overview" className="block text-center text-xs font-medium text-gray-800 border border-gray-800 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                  View Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Banner */}
      <section className="max-w-[1440px] mx-auto px-10 py-14">
        <div className="border border-gray-800 bg-gray-50 p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Volume Discount Program</h2>
              <h3 className="text-2xl font-bold text-gray-900">Book More, Save More</h3>
              <p className="text-sm text-gray-500 mt-2">Discounts apply automatically based on your booking count within a single session.</p>
            </div>
            <Link to="/calculate-fees" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
              Calculate My Quote
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {discountTiers.map((tier, i) => (
              <div key={tier.bookings} className={`border p-5 ${i === 3 ? "border-gray-800 bg-white" : "border-gray-300 bg-white"}`}>
                <div className="text-2xl font-bold text-gray-900 mb-1">{tier.rate}</div>
                <div className="text-xs font-semibold text-gray-700 mb-1">{tier.bookings}</div>
                <div className="text-xs text-gray-400">{tier.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
