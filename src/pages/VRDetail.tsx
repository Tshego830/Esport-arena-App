import { useState } from "react";
import { Link } from "react-router";
import ImagePlaceholder from "../components/ImagePlaceholder";

const related = [
  { name: "Racing Simulator Challenge", price: "R750" },
  { name: "Escape Room Challenge", price: "R750" },
];

export default function VRDetail() {
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-10 py-3">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-gray-800">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/overview" className="hover:text-gray-800">Overview</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-medium">Virtual Reality Experience</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-[1440px] mx-auto px-10 py-12 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-14">
          {/* Left: Images */}
          <div>
            <ImagePlaceholder className="h-[380px] mb-3" label="VR Experience Main Photo" />
            <div className="grid grid-cols-3 gap-3">
              <ImagePlaceholder className="h-24" label="Thumb 1" />
              <ImagePlaceholder className="h-24" label="Thumb 2" />
              <ImagePlaceholder className="h-24" label="Thumb 3" />
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Individual Experience</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Virtual Reality Experience</h1>
            <div className="inline-block border border-gray-800 px-3 py-1 text-sm font-bold text-gray-900 mb-5">R750</div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Dive into fully immersive virtual worlds with our premium VR setup. Choose from 20+ titles spanning action, exploration, social, and sports categories. Whether it's your first time in VR or you're a seasoned headset veteran, our staff will get you set up and playing within minutes.
            </p>

            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">What's Included</h3>
              <ul className="space-y-2">
                {["VR headset & hand controllers", "Choice from 20+ game titles", "Staff setup & technical assistance", "45-minute uninterrupted session", "Sanitised headset & accessories"].map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-center gap-3">
                    <span className="w-4 h-4 border border-gray-400 shrink-0 flex items-center justify-center">
                      <span className="w-2 h-2 bg-gray-400 block" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 p-5 space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Preferred Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-600 bg-white"
                >
                  <option value="">Select a time slot</option>
                  {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Number of Participants</label>
                <div className="flex items-center gap-0 border border-gray-300 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 border-r border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-light"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-sm font-medium text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 border-l border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-light"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">R750 per participant · Total: R{(750 * quantity).toLocaleString()}</p>
              </div>
            </div>

            <Link
              to="/calculate-fees"
              className="block w-full text-center bg-gray-900 text-white text-sm font-medium py-3 hover:bg-gray-700 transition-colors"
            >
              Add to Quote
            </Link>
            <p className="text-xs text-gray-400 text-center mt-2">Review full quote on the Calculate Fees page</p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-[1440px] mx-auto px-10 py-12">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 gap-6 max-w-2xl">
          {related.map((r) => (
            <div key={r.name} className="border border-gray-300 flex flex-col">
              <ImagePlaceholder className="h-36" label={r.name} />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{r.price}</div>
                </div>
                <Link to="/contact" className="text-xs border border-gray-700 px-3 py-1.5 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors">
                  Select
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
