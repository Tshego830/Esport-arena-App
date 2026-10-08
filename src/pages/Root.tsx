import { Link, Outlet, useLocation } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Overview", to: "/overview" },
  { label: "Calculate Fees", to: "/calculate-fees" },
  { label: "Contact Us", to: "/contact" },
];

function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-gray-800 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-800">NLG</span>
          </div>
          <span className="font-semibold text-sm text-gray-800 leading-tight">
            Next Level Gaming<br />
            <span className="font-normal text-gray-500">& Esports Arena</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-gray-900 border-b-2 border-gray-900 pb-0.5"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-300 mt-auto">
      <div className="max-w-[1440px] mx-auto px-10 py-12">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 border-2 border-gray-800 flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-800">NLG</span>
              </div>
              <span className="font-semibold text-sm text-gray-800">Next Level Gaming</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Johannesburg's premier esports and gaming arena, providing access to high-performance gaming technology since 2023.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-xs text-gray-500 hover:text-gray-800">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">Visit Us</h4>
            <address className="not-italic text-xs text-gray-500 space-y-1">
              <p>123 Gaming Boulevard</p>
              <p>Sandton, Johannesburg</p>
              <p>2196, South Africa</p>
              <p className="pt-2">Mon – Thu: 10:00 – 22:00</p>
              <p>Fri – Sun: 09:00 – 24:00</p>
            </address>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2">
              {["Twitter / X", "Instagram", "Facebook", "Discord", "YouTube"].map((s) => (
                <li key={s} className="text-xs text-gray-500 hover:text-gray-800 cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
          <p className="text-xs text-gray-400">© 2024 Next Level Gaming & Esports Arena. All rights reserved.</p>
          <p className="text-xs text-gray-400">Founded by Jason Naidoo · Johannesburg, SA</p>
        </div>
      </div>
    </footer>
  );
}

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
