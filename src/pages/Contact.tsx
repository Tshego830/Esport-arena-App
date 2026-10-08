import { useState } from "react";
import ImagePlaceholder from "../components/ImagePlaceholder";

const bookingTypes = [
  "Gaming Package",
  "VIP Experience",
  "Esports Training",
  "Birthday Party",
  "Corporate Event",
  "Tournament",
  "Individual Experience",
  "General Inquiry",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bookingType: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* Banner */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-10 py-12">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Get in Touch</div>
          <h1 className="text-4xl font-bold text-gray-900">Contact Next Level Gaming Arena</h1>
          <p className="text-sm text-gray-500 mt-2">Send us an inquiry and our team will confirm your booking within 24 hours.</p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-10 py-14">
        <div className="grid grid-cols-[1fr_420px] gap-14">
          {/* Left: Form */}
          <div>
            {submitted ? (
              <div className="border border-gray-300 p-10 text-center">
                <div className="w-12 h-12 border-2 border-gray-800 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Inquiry Sent</h2>
                <p className="text-sm text-gray-500">Thank you, we'll get back to you within 24 hours to confirm your booking details.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-xs border border-gray-600 px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jason Naidoo"
                      required
                      className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jason@email.com"
                      required
                      className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+27 82 000 0000"
                      className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Booking Type *</label>
                    <select
                      name="bookingType"
                      value={form.bookingType}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gray-600 bg-white"
                    >
                      <option value="">Select a type…</option>
                      {bookingTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Preferred Date</label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your event, group size, any special requirements…"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div className="border border-gray-300 p-6">
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">Arena Location</h3>
              <address className="not-italic text-sm text-gray-700 space-y-1">
                <p className="font-medium">Next Level Gaming Arena</p>
                <p>123 Gaming Boulevard, Sandton</p>
                <p>Johannesburg, Gauteng</p>
                <p>2196, South Africa</p>
              </address>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">Contact Details</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 border border-gray-400 shrink-0" />
                  <span>+27 11 000 0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 border border-gray-400 shrink-0" />
                  <span>info@nextlevelgaming.co.za</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">Operating Hours</h3>
              <table className="w-full text-xs text-gray-600">
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Monday – Thursday", "10:00 – 22:00"],
                    ["Friday", "10:00 – 24:00"],
                    ["Saturday", "09:00 – 24:00"],
                    ["Sunday", "09:00 – 22:00"],
                    ["Public Holidays", "10:00 – 20:00"],
                  ].map(([day, hours]) => (
                    <tr key={day}>
                      <td className="py-1.5 text-gray-500">{day}</td>
                      <td className="py-1.5 text-right font-medium text-gray-800">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Map placeholder */}
            <ImagePlaceholder className="h-48" label="Google Maps — Sandton, Johannesburg" />
          </div>
        </div>
      </div>
    </div>
  );
}
