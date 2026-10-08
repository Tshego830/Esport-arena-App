import { useState } from "react";
import { Link } from "react-router";

interface Item {
  id: string;
  name: string;
  price: number;
  category: "package" | "experience";
}

const catalog: Item[] = [
  { id: "pkg1", name: "Ultimate Gamer Pass", price: 1500, category: "package" },
  { id: "pkg2", name: "VIP Gaming Experience", price: 1500, category: "package" },
  { id: "pkg3", name: "Esports Training Package", price: 1500, category: "package" },
  { id: "pkg4", name: "Birthday Party Package", price: 1500, category: "package" },
  { id: "exp1", name: "Virtual Reality Experience", price: 750, category: "experience" },
  { id: "exp2", name: "Racing Simulator Challenge", price: 750, category: "experience" },
  { id: "exp3", name: "Escape Room Challenge", price: 750, category: "experience" },
];

const discountTiers = [
  { min: 1, max: 1, rate: 0, label: "0%", desc: "1 booking" },
  { min: 2, max: 2, rate: 5, label: "5%", desc: "2 bookings" },
  { min: 3, max: 3, rate: 10, label: "10%", desc: "3 bookings" },
  { min: 4, max: Infinity, rate: 15, label: "15%", desc: "4+ bookings" },
];

function getDiscountRate(total: number): number {
  const tier = discountTiers.find((t) => total >= t.min && total <= t.max);
  return tier?.rate ?? 0;
}

export default function CalculateFees() {
  const [selections, setSelections] = useState<Record<string, number>>({});

  const toggle = (id: string) => {
    setSelections((prev) => {
      if (prev[id]) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: 1 };
    });
  };

  const setQty = (id: string, qty: number) => {
    if (qty < 1) return;
    setSelections((prev) => ({ ...prev, [id]: qty }));
  };

  const selectedItems = catalog.filter((c) => selections[c.id]);
  const totalBookings = Object.values(selections).reduce((a, b) => a + b, 0);
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * (selections[item.id] ?? 0), 0);
  const discountRate = totalBookings > 0 ? getDiscountRate(totalBookings) : 0;
  const discountAmount = Math.round(subtotal * discountRate / 100);
  const total = subtotal - discountAmount;
  const currentTierIndex = discountTiers.findIndex((t) => totalBookings >= t.min && totalBookings <= t.max);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-10 py-12">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Pricing Tool</div>
          <h1 className="text-4xl font-bold text-gray-900">Interactive Quotation & Discount Calculator</h1>
          <p className="text-sm text-gray-500 mt-2">Select your packages and experiences below — discounts apply automatically.</p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-10 py-12">
        <div className="grid grid-cols-[1fr_380px] gap-10 items-start">
          {/* Left: Selection */}
          <div className="space-y-8">
            {/* Gaming Packages */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <h2 className="text-base font-semibold text-gray-900">Gaming Packages</h2>
                <span className="text-xs text-gray-400 border border-gray-300 px-2 py-0.5">R1,500 per booking</span>
              </div>
              <div className="space-y-2">
                {catalog.filter((c) => c.category === "package").map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 p-4 border ${selections[item.id] ? "border-gray-800 bg-gray-50" : "border-gray-200 bg-white"} transition-colors`}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      className={`w-5 h-5 border-2 shrink-0 flex items-center justify-center transition-colors ${selections[item.id] ? "border-gray-900 bg-gray-900" : "border-gray-400"}`}
                    >
                      {selections[item.id] && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <span className="text-sm text-gray-800 flex-1 font-medium">{item.name}</span>
                    <span className="text-xs text-gray-500">R{item.price.toLocaleString()}</span>
                    {selections[item.id] && (
                      <div className="flex items-center border border-gray-300">
                        <button onClick={() => setQty(item.id, (selections[item.id] ?? 1) - 1)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-r border-gray-300 text-sm">−</button>
                        <span className="w-8 text-center text-xs font-medium text-gray-900">{selections[item.id]}</span>
                        <button onClick={() => setQty(item.id, (selections[item.id] ?? 1) + 1)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-l border-gray-300 text-sm">+</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Experiences */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <h2 className="text-base font-semibold text-gray-900">Individual Experiences</h2>
                <span className="text-xs text-gray-400 border border-gray-300 px-2 py-0.5">R750 per booking</span>
              </div>
              <div className="space-y-2">
                {catalog.filter((c) => c.category === "experience").map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 p-4 border ${selections[item.id] ? "border-gray-800 bg-gray-50" : "border-gray-200 bg-white"} transition-colors`}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      className={`w-5 h-5 border-2 shrink-0 flex items-center justify-center transition-colors ${selections[item.id] ? "border-gray-900 bg-gray-900" : "border-gray-400"}`}
                    >
                      {selections[item.id] && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <span className="text-sm text-gray-800 flex-1 font-medium">{item.name}</span>
                    <span className="text-xs text-gray-500">R{item.price.toLocaleString()}</span>
                    {selections[item.id] && (
                      <div className="flex items-center border border-gray-300">
                        <button onClick={() => setQty(item.id, (selections[item.id] ?? 1) - 1)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-r border-gray-300 text-sm">−</button>
                        <span className="w-8 text-center text-xs font-medium text-gray-900">{selections[item.id]}</span>
                        <button onClick={() => setQty(item.id, (selections[item.id] ?? 1) + 1)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-l border-gray-300 text-sm">+</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Quote Card */}
          <div className="sticky top-20">
            <div className="border border-gray-300">
              <div className="bg-gray-900 text-white px-5 py-4">
                <h2 className="text-sm font-semibold">Your Quote</h2>
                <p className="text-xs text-gray-400 mt-0.5">{totalBookings} booking{totalBookings !== 1 ? "s" : ""} selected</p>
              </div>

              {/* Itemized list */}
              <div className="p-5 border-b border-gray-200 min-h-[120px]">
                {selectedItems.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-4">No items selected yet</p>
                ) : (
                  <div className="space-y-2">
                    {selectedItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs">
                        <span className="text-gray-700">{item.name} <span className="text-gray-400">×{selections[item.id]}</span></span>
                        <span className="font-medium text-gray-900">R{(item.price * (selections[item.id] ?? 0)).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Subtotal */}
              <div className="px-5 py-3 border-b border-gray-200 flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">R{subtotal.toLocaleString()}</span>
              </div>

              {/* Discount tier progress */}
              <div className="px-5 py-4 border-b border-gray-200">
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">Discount Tier</div>
                <div className="grid grid-cols-4 gap-1 mb-3">
                  {discountTiers.map((tier, i) => (
                    <div
                      key={tier.desc}
                      className={`border text-center py-2 ${
                        i === currentTierIndex
                          ? "border-gray-900 bg-gray-900 text-white"
                          : i < currentTierIndex
                          ? "border-gray-400 bg-gray-100 text-gray-600"
                          : "border-gray-200 text-gray-400"
                      }`}
                    >
                      <div className="text-xs font-bold">{tier.label}</div>
                      <div className="text-[10px] mt-0.5">{tier.desc}</div>
                    </div>
                  ))}
                </div>
                {totalBookings > 0 && totalBookings < 4 && (
                  <p className="text-[11px] text-gray-400">
                    Add {discountTiers[Math.min(currentTierIndex + 1, 3)].min - totalBookings} more booking{discountTiers[Math.min(currentTierIndex + 1, 3)].min - totalBookings !== 1 ? "s" : ""} to reach {discountTiers[Math.min(currentTierIndex + 1, 3)].label} discount
                  </p>
                )}
              </div>

              {/* Discount & Total */}
              <div className="px-5 py-4 space-y-2 border-b border-gray-200">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Discount ({discountRate}%)</span>
                  <span className="text-gray-700">− R{discountAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-1 border-t border-gray-200">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">R{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-5">
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 text-sm font-medium transition-colors ${
                    selectedItems.length > 0
                      ? "bg-gray-900 text-white hover:bg-gray-700"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
                  }`}
                >
                  Proceed to Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
