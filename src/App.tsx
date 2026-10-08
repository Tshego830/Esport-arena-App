import { useState, useEffect } from "react";

type Photo = {
  url: string;
  by: string;
  position?: string;
};

const PHOTOS: Record<string, Photo> = {
  "Hero Arena Photo": { url: "https://images.unsplash.com/photo-1633545495735-25df17fb9f31?auto=format&fit=crop&w=1400&q=85", by: "ELLA DON" },
  "High-End PCs": { url: "https://images.unsplash.com/photo-1636489953081-c4ebbd50fa3a?auto=format&fit=crop&w=900&q=82", by: "ELLA DON" },
  "Esports Tournament Space": { url: "https://images.unsplash.com/photo-1633545491399-54a16aa6a871?auto=format&fit=crop&w=900&q=82", by: "ELLA DON" },
  "Corporate Event Facilities": { url: "https://images.unsplash.com/photo-1633545505446-586bf83717f0?auto=format&fit=crop&w=900&q=82", by: "ELLA DON" },
  "Arena Interior Photo": { url: "https://images.unsplash.com/photo-1598550487031-0898b4852123?auto=format&fit=crop&w=1200&q=84", by: "ELLA DON" },
  "PC Gaming Zone": { url: "https://images.unsplash.com/photo-1633545486613-feaf749f7805?auto=format&fit=crop&w=900&q=82", by: "ELLA DON" },
  "VR Booths": { url: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=900&q=82", by: "XR Expo", position: "center 35%" },
  "Racing Simulators": { url: "https://images.unsplash.com/photo-1743649978995-c76212449e15?auto=format&fit=crop&w=900&q=82", by: "Ben A" },
  "Ultimate Gamer Pass": { url: "https://images.unsplash.com/photo-1636487658616-14850c8f496c?auto=format&fit=crop&w=800&q=80", by: "ELLA DON" },
  "VIP Gaming Experience": { url: "https://images.unsplash.com/photo-1633545486613-feaf749f7805?auto=format&fit=crop&w=800&q=80", by: "ELLA DON" },
  "Esports Training Package": { url: "https://images.unsplash.com/photo-1636487658547-c05ee4cdc1ac?auto=format&fit=crop&w=800&q=80", by: "ELLA DON" },
  "Birthday Party Package": { url: "https://images.unsplash.com/photo-1633545491399-54a16aa6a871?auto=format&fit=crop&w=800&q=80", by: "ELLA DON" },
  "Virtual Reality Experience": { url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=900&q=82", by: "Minh Pham", position: "center 38%" },
  "Racing Simulator Challenge": { url: "https://images.unsplash.com/photo-1743649978995-c76212449e15?auto=format&fit=crop&w=900&q=82", by: "Ben A" },
  "Escape Room Challenge": { url: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=82", by: "Fredrick Tendong" },
  "VR Experience Main Photo": { url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=86", by: "Minh Pham", position: "center 38%" },
  "Thumb 1": { url: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=500&q=80", by: "Remy Gieling" },
  "Thumb 2": { url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80", by: "Uriel Soberanes", position: "center 30%" },
  "Thumb 3": { url: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=500&q=80", by: "XR Expo" },
  "Racing Simulator": { url: "https://images.unsplash.com/photo-1743649978995-c76212449e15?auto=format&fit=crop&w=700&q=80", by: "Ben A" },
  "Escape Room": { url: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=700&q=80", by: "Fredrick Tendong" },
};

// ── Editorial photography frame ────────────────────────────────────────────
function Img({ h, label }: { h: number | string; label?: string }) {
  const photo = label ? PHOTOS[label] : undefined;

  return (
    <div
      className={`wire-image${photo ? " wire-image--photo" : ""}`}
      style={{ height: h, position: "relative", background: "#f3f4f6", border: "1px solid #d1d5db", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}
    >
      {photo ? (
        <img
          className="wire-image__photo"
          src={photo.url}
          alt={label ?? "Next Level Gaming arena"}
          style={{ objectPosition: photo.position ?? "center" }}
        />
      ) : (
        <svg className="wire-image__cross" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#c4c4c4" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#c4c4c4" strokeWidth="1" />
        </svg>
      )}
      {label && (
        <div className="wire-image__label">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" />
            <circle cx="9" cy="10" r="2" stroke="currentColor" />
            <path d="m4 18 5-5 3 3 2-2 6 5" stroke="currentColor" />
          </svg>
          <span>{label}</span>
        </div>
      )}
      <span className="wire-image__index">{photo ? `PHOTO / ${photo.by}` : "IMG / 01"}</span>
    </div>
  );
}

// ── Shared types ───────────────────────────────────────────────────────────
type Page = "home" | "about" | "overview" | "vr" | "fees" | "contact";

// ── Header ─────────────────────────────────────────────────────────────────
function Header({ current, go }: { current: Page; go: (p: Page) => void }) {
  const links: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Overview", page: "overview" },
    { label: "Calculate Fees", page: "fees" },
    { label: "Contact Us", page: "contact" },
  ];
  return (
    <header className="site-header" style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
      <div className="utility-bar">
        <div className="utility-bar__inner">
          <span>Johannesburg, South Africa</span>
          <span>Open today 10:00 — 22:00</span>
        </div>
      </div>
      <div className="site-header__inner" style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button className="brand" onClick={() => go("home")} aria-label="Go to homepage">
          <div className="brand__mark" style={{ width: 38, height: 38, border: "2px solid #111827", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>NLG</div>
          <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3, textAlign: "left" }}>
            Next Level Gaming<br />
            <span style={{ fontWeight: 400, color: "#6b7280" }}>& Esports Arena</span>
          </div>
        </button>
        <nav className="main-nav" style={{ display: "flex", alignItems: "center", gap: 8 }} aria-label="Main navigation">
          {links.map((l, index) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={current === l.page ? "nav-link nav-link--active" : "nav-link"}
            >
              <span className="nav-link__index">0{index + 1}</span>
              {l.label}
            </button>
          ))}
        </nav>
        <button className="header-cta" onClick={() => go("contact")} style={{ padding: "10px 18px", background: "#111827", color: "#fff", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer" }}>
          Book now <span aria-hidden="true">↗</span>
        </button>
      </div>
    </header>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer({ go }: { go: (p: Page) => void }) {
  return (
    <footer className="site-footer" style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, border: "2px solid #111827", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>NLG</div>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Next Level Gaming</span>
            </div>
            <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.8 }}>Johannesburg's premier esports and gaming arena, providing access to high-performance gaming technology since 2023.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 16 }}>Quick Links</h4>
            {(["home","about","overview","fees","contact"] as Page[]).map((p) => (
              <div key={p} onClick={() => go(p)} style={{ fontSize: 12, color: "#6b7280", lineHeight: 2, cursor: "pointer" }}>
                {p === "home" ? "Home" : p === "about" ? "About Us" : p === "overview" ? "Overview" : p === "fees" ? "Calculate Fees" : "Contact Us"}
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 16 }}>Visit Us</h4>
            <address style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.9, fontStyle: "normal" }}>
              123 Gaming Boulevard<br />Sandton, Johannesburg<br />2196, South Africa<br /><br />Mon – Thu: 10:00 – 22:00<br />Fri – Sun: 09:00 – 24:00
            </address>
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 16 }}>Connect</h4>
            {["Twitter / X", "Instagram", "Facebook", "Discord", "YouTube"].map((s) => (
              <div key={s} style={{ fontSize: 12, color: "#6b7280", lineHeight: 2, cursor: "pointer" }}>{s}</div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>© 2024 Next Level Gaming & Esports Arena. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>Founded by Ellen Phatedi · Johannesburg, SA</p>
        </div>
      </div>
    </footer>
  );
}

// ── Shared components ──────────────────────────────────────────────────────
const S = {
  label: { fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase" as const, letterSpacing: ".1em" },
  h1: { fontSize: 36, fontWeight: 700, color: "#111827", marginTop: 8 },
  container: { maxWidth: 1440, margin: "0 auto", padding: "0 40px" },
  banner: { background: "#f9fafb", borderBottom: "1px solid #e5e7eb", padding: "56px 0" },
  card: { border: "1px solid #d1d5db", display: "flex", flexDirection: "column" as const },
  badge: { display: "inline-block", border: "1px solid #6b7280", padding: "2px 8px", fontSize: 12, fontWeight: 700, color: "#374151" },
  badgeSm: { display: "inline-block", border: "1px solid #d1d5db", padding: "2px 6px", fontSize: 11, color: "#6b7280" },
  btnPrimary: { padding: "10px 24px", background: "#111827", color: "#fff", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" } as React.CSSProperties,
  btnOutline: { padding: "10px 24px", background: "#fff", color: "#111827", fontSize: 13, fontWeight: 500, border: "1px solid #111827", cursor: "pointer" } as React.CSSProperties,
  btnSm: { display: "block", textAlign: "center" as const, padding: "8px 12px", border: "1px solid #111827", color: "#111827", fontSize: 12, fontWeight: 500, cursor: "pointer", background: "#fff" },
  formLabel: { display: "block", fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "uppercase" as const, letterSpacing: ".08em", marginBottom: 6 },
  formInput: { width: "100%", border: "1px solid #d1d5db", padding: "10px 12px", fontSize: 13, color: "#111827", fontFamily: "inherit", outline: "none", background: "#fff" } as React.CSSProperties,
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((f) => (
        <li key={f} style={{ fontSize: 12, color: "#6b7280", display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span style={{ width: 12, height: 12, border: "1px solid #9ca3af", flexShrink: 0, display: "inline-block" }} />
          {f}
        </li>
      ))}
    </ul>
  );
}

// ── HOME ───────────────────────────────────────────────────────────────────
function Home({ go }: { go: (p: Page) => void }) {
  const packages = [
    { name: "Ultimate Gamer Pass", features: ["4 hrs gaming time", "All PC titles", "2x energy drinks", "Priority seating"] },
    { name: "VIP Experience", features: ["6 hrs gaming time", "VIP lounge access", "4x beverages", "Dedicated host"] },
    { name: "Esports Training", features: ["3 hrs coached play", "VOD review session", "Stats report", "Coach 1-on-1"] },
    { name: "Birthday Party Package", features: ["3 hrs private room", "10 player slots", "Catering included", "Branded setup"] },
  ];
  const tiers = [{ rate: "0%", label: "1 booking", note: "Standard rate" }, { rate: "5%", label: "2 bookings", note: "Bundle saving" }, { rate: "10%", label: "3 bookings", note: "Multi-booking" }, { rate: "15%", label: "4+ bookings", note: "Best value" }];

  return (
    <div>
      {/* Hero */}
      <div style={S.container}>
        <div className="home-hero" style={{ display: "grid", gridTemplateColumns: "1.08fr .92fr", gap: 64, alignItems: "center", padding: "72px 0 56px", borderBottom: "1px solid #e5e7eb" }}>
          <div className="hero-visual">
            <Img h={460} label="Hero Arena Photo" />
            <div className="hero-visual__note">
              <span>100+ stations</span>
              <span>01 / Johannesburg</span>
            </div>
          </div>
          <div className="hero-copy">
            <div style={{ display: "inline-block", border: "1px solid #d1d5db", fontSize: 11, color: "#6b7280", padding: "4px 12px", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 20 }}>
              Johannesburg's #1 Esports Venue
            </div>
            <h1 style={{ fontSize: 58, fontWeight: 650, lineHeight: 1.04, letterSpacing: "-.045em", color: "#111827", marginBottom: 24 }}>Elevate Your<br />Gaming Experience</h1>
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>Step into Next Level Gaming — 100+ high-performance rigs, dedicated tournament floors, VR zones, and corporate-grade facilities. All in one arena.</p>
            <div style={{ display: "flex", gap: 16 }}>
              <button onClick={() => go("contact")} style={S.btnPrimary}>Book Arena <span aria-hidden="true">↗</span></button>
              <button onClick={() => go("fees")} style={S.btnOutline}>Calculate Fees <span aria-hidden="true">→</span></button>
            </div>
            <div className="hero-meta">
              <div><strong>7</strong><span>curated experiences</span></div>
              <div><strong>240Hz</strong><span>competition displays</span></div>
              <div><strong>24/7</strong><span>online booking</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={S.container}>
        <div style={{ padding: "56px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div style={S.label}>What We Offer</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 24 }}>
            {[["High-End PCs", "RTX 4090 rigs, 240Hz monitors, mechanical keyboards — the full competitive stack."],
              ["Esports Tournament Space", "Dedicated 32-seat tournament floor with broadcast-ready setup and PA system."],
              ["Corporate Event Facilities", "Private meeting rooms, branded overlays, catering coordination, AV support."]].map(([name, desc]) => (
              <div key={name} style={S.card}>
                <Img h={192} label={name} />
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 8 }}>{name}</div>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div style={S.container}>
        <div style={{ padding: "56px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <div style={S.label}>Featured Packages</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginTop: 6 }}>Choose Your Experience</div>
            </div>
            <span onClick={() => go("overview")} style={{ fontSize: 13, color: "#6b7280", borderBottom: "1px solid #9ca3af", cursor: "pointer" }}>View all packages →</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={S.card}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{pkg.name}</span>
                  <span style={S.badge}>R1,500</span>
                </div>
                <div style={{ padding: 20, flex: 1 }}><FeatureList items={pkg.features} /></div>
                <div style={{ padding: 16, borderTop: "1px solid #e5e7eb" }}>
                  <div onClick={() => go("overview")} style={S.btnSm}>View Package</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discount Banner */}
      <div style={S.container}>
        <div style={{ border: "1px solid #111827", background: "#f9fafb", padding: 32, margin: "0 0 56px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <div style={S.label}>Volume Discount Program</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginTop: 6 }}>Book More, Save More</div>
              <p style={{ fontSize: 13, color: "#6b7280", marginTop: 8 }}>Discounts apply automatically based on your booking count within a single session.</p>
            </div>
            <button onClick={() => go("fees")} style={S.btnPrimary}>Calculate My Quote</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {tiers.map((t, i) => (
              <div key={t.label} style={{ border: i === 3 ? "1px solid #111827" : "1px solid #d1d5db", background: "#fff", padding: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#111827" }}>{t.rate}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#374151", marginTop: 4 }}>{t.label}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ABOUT ──────────────────────────────────────────────────────────────────
function About() {
  const stats = [{ v: "2023", l: "Established" }, { v: "100+", l: "Gaming Rigs" }, { v: "7", l: "Experiences" }, { v: "JHB", l: "Johannesburg Arena" }];
  const facilities = [
    { name: "PC Gaming Zone", desc: "100+ high-spec rigs across 3 themed zones — casual, competitive, and streaming." },
    { name: "VR Booths", desc: "4 fully enclosed VR suites with Meta Quest Pro and Valve Index headsets." },
    { name: "Racing Simulators", desc: "8-rig sim racing setup with force-feedback wheels, bucket seats, and triple screens." },
  ];
  return (
    <div>
      <div className="page-banner" style={S.banner}><div style={S.container}><div style={S.label}>Our Story / 02</div><h1 style={S.h1}>About Next Level Gaming</h1></div></div>
      <div style={S.container}>
        {/* Story */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", padding: "64px 0", borderBottom: "1px solid #e5e7eb" }}>
          <Img h={380} label="Arena Interior Photo" />
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 20 }}>Built for Gamers, by Gamers</h2>
            {[
              <>Next Level Gaming was founded in 2026 by <strong style={{ color: "#111827" }}>Ellen Phatedi</strong>, a lifelong gamer who grew frustrated by the lack of access to high-performance gaming hardware in South Africa.</>,
              "Starting from a single location in Johannesburg, the arena was built with one mission: to make world-class gaming technology accessible to everyone — from casual players and competitive esports athletes to corporate teams looking for unique team-building experiences.",
              "Today, Next Level Gaming houses over 100 gaming rigs, dedicated VR suites, racing simulators, an escape room, and a full tournament floor used for regional esports competitions. Every piece of equipment is maintained to the highest standard and upgraded annually.",
              "We believe great gaming shouldn't require owning great hardware. Walk in, sit down, and play at the highest level possible.",
            ].map((t, i) => <p key={i} style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, marginBottom: 16 }}>{t}</p>)}
          </div>
        </div>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, padding: "48px 0", borderBottom: "1px solid #e5e7eb" }}>
          {stats.map((s) => (
            <div key={s.l} style={{ border: "1px solid #d1d5db", padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 40, fontWeight: 700, color: "#111827" }}>{s.v}</div>
              <div style={{ fontSize: 11, color: "#6b7280", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 500, marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>
        {/* Facilities */}
        <div style={{ padding: "56px 0" }}>
          <div style={S.label}>Facility Tour</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginTop: 6, marginBottom: 32 }}>Explore the Arena</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {facilities.map((f) => (
              <div key={f.name} style={S.card}>
                <Img h={208} label={f.name} />
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 6 }}>{f.name}</div>
                  <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── OVERVIEW ───────────────────────────────────────────────────────────────
function Overview({ go }: { go: (p: Page) => void }) {
  const [tab, setTab] = useState<"all" | "packages" | "experiences">("all");
  const pkgs = [
    { name: "Ultimate Gamer Pass", features: ["4 hrs unlimited gaming", "All PC titles included", "2x energy drinks", "Priority seating", "Locker storage"] },
    { name: "VIP Gaming Experience", features: ["6 hrs gaming time", "VIP lounge access", "4x beverages", "Dedicated host", "Reserved premium rig"] },
    { name: "Esports Training Package", features: ["3 hrs coached play", "VOD review session", "Stats report", "Coach 1-on-1", "Practice drill sets"] },
    { name: "Birthday Party Package", features: ["3 hrs private room", "10 player slots", "Catering included", "Branded setup", "Photo booth access"] },
  ];
  const exps = [
    { name: "Virtual Reality Experience", features: ["VR headset & controllers", "Choice of 20+ games", "Staff assistance", "45-min session"], isVR: true },
    { name: "Racing Simulator Challenge", features: ["Force-feedback wheel", "GT or F1 car selection", "5 lap competitive session", "Lap time certificate"], isVR: false },
    { name: "Escape Room Challenge", features: ["60-min room access", "Teams of 2–6 players", "3 themed rooms", "Completion certificate"], isVR: false },
  ];
  return (
    <div>
      <div className="page-banner" style={S.banner}>
        <div style={S.container}>
          <div style={S.label}>Full Catalog / 03</div>
          <h1 style={{ ...S.h1, marginBottom: 24 }}>Packages & Experiences</h1>
          <div style={{ display: "flex", gap: 4 }}>
            {(["all", "packages", "experiences"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer", border: "1px solid", borderColor: tab === t ? "#111827" : "#d1d5db", background: tab === t ? "#111827" : "#fff", color: tab === t ? "#fff" : "#6b7280" }}>
                {t === "all" ? "All" : t === "packages" ? "Gaming Packages" : "Individual Experiences"}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ ...S.container, paddingTop: 48, paddingBottom: 48 }}>
        {(tab === "all" || tab === "packages") && (
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e5e7eb" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>Gaming Packages</h2>
              <span style={S.badgeSm}>R1,500 each</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
              {pkgs.map((p) => (
                <div key={p.name} style={S.card}>
                  <Img h={160} label={p.name} />
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{p.name}</span>
                    <span style={S.badge}>R1,500</span>
                  </div>
                  <div style={{ padding: 20, flex: 1 }}><FeatureList items={p.features} /></div>
                  <div style={{ padding: 16, borderTop: "1px solid #e5e7eb" }}><div onClick={() => go("contact")} style={S.btnSm}>Select Package</div></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {(tab === "all" || tab === "experiences") && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e5e7eb" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>Individual Experiences</h2>
              <span style={S.badgeSm}>R750 each</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {exps.map((e) => (
                <div key={e.name} style={S.card}>
                  <Img h={192} label={e.name} />
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{e.name}</span>
                    <span style={S.badge}>R750</span>
                  </div>
                  <div style={{ padding: 20, flex: 1 }}><FeatureList items={e.features} /></div>
                  <div style={{ padding: 16, borderTop: "1px solid #e5e7eb" }}>
                    <div onClick={() => go(e.isVR ? "vr" : "contact")} style={S.btnSm}>{e.isVR ? "View Details" : "Select Experience"}</div>
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

// ── VR DETAIL ──────────────────────────────────────────────────────────────
function VRDetail({ go }: { go: (p: Page) => void }) {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <div style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb", padding: "12px 0" }}>
        <div style={S.container}>
          <nav style={{ fontSize: 12, color: "#6b7280", display: "flex", alignItems: "center", gap: 8 }}>
            <span onClick={() => go("home")} style={{ cursor: "pointer" }}>Home</span>
            <span style={{ color: "#d1d5db" }}>/</span>
            <span onClick={() => go("overview")} style={{ cursor: "pointer" }}>Overview</span>
            <span style={{ color: "#d1d5db" }}>/</span>
            <span style={{ color: "#111827", fontWeight: 500 }}>Virtual Reality Experience</span>
          </nav>
        </div>
      </div>
      <div style={S.container}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, padding: "48px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div>
            <Img h={380} label="VR Experience Main Photo" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 12 }}>
              <Img h={96} label="Thumb 1" /><Img h={96} label="Thumb 2" /><Img h={96} label="Thumb 3" />
            </div>
          </div>
          <div>
            <div style={S.label}>Individual Experience</div>
            <h1 style={{ fontSize: 30, fontWeight: 700, color: "#111827", margin: "12px 0" }}>Virtual Reality Experience</h1>
            <div style={{ ...S.badge, marginBottom: 20 }}>R750</div>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, marginBottom: 24 }}>
              Dive into fully immersive virtual worlds with our premium VR setup. Choose from 20+ titles spanning action, exploration, social, and sports categories. Our staff will get you set up and playing within minutes.
            </p>
            <h3 style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>What's Included</h3>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: 24 }}>
              {["VR headset & hand controllers", "Choice from 20+ game titles", "Staff setup & technical assistance", "45-minute uninterrupted session", "Sanitised headset & accessories"].map((item) => (
                <li key={item} style={{ fontSize: 14, color: "#4b5563", display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ width: 16, height: 16, border: "1px solid #9ca3af", flexShrink: 0, background: "#e5e7eb", display: "inline-block" }} />{item}
                </li>
              ))}
            </ul>
            <div style={{ border: "1px solid #e5e7eb", padding: 20, marginBottom: 24 }}>
              <div style={{ marginBottom: 16 }}>
                <label style={S.formLabel}>Select Date</label>
                <input type="date" style={S.formInput} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={S.formLabel}>Preferred Time</label>
                <select style={{ ...S.formInput, background: "#fff" }}>
                  <option>Select a time slot</option>
                  {["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"].map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={S.formLabel}>Number of Participants</label>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #d1d5db", width: "fit-content" }}>
                  <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 36, height: 36, border: "none", background: "none", cursor: "pointer", fontSize: 18, color: "#374151" }}>−</button>
                  <span style={{ width: 48, textAlign: "center", fontSize: 14, fontWeight: 500 }}>{qty}</span>
                  <button onClick={() => setQty(qty + 1)} style={{ width: 36, height: 36, border: "none", background: "none", cursor: "pointer", fontSize: 18, color: "#374151" }}>+</button>
                </div>
                <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 6 }}>R750 per participant · Total: R{(750 * qty).toLocaleString()}</p>
              </div>
            </div>
            <button onClick={() => go("fees")} style={{ ...S.btnPrimary, width: "100%", display: "block", textAlign: "center", padding: "14px" }}>Add to Quote</button>
            <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 8 }}>Review full quote on the Calculate Fees page</p>
          </div>
        </div>
        <div style={{ padding: "48px 0" }}>
          <h2 style={{ fontSize: 13, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 24 }}>You Might Also Like</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, maxWidth: 640 }}>
            {[{ name: "Racing Simulator Challenge", label: "Racing Simulator" }, { name: "Escape Room Challenge", label: "Escape Room" }].map((r) => (
              <div key={r.name} style={{ border: "1px solid #d1d5db" }}>
                <Img h={144} label={r.label} />
                <div style={{ padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>R750</div>
                  </div>
                  <button onClick={() => go("contact")} style={{ fontSize: 12, border: "1px solid #374151", padding: "6px 12px", color: "#374151", cursor: "pointer", background: "none" }}>Select</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── CALCULATE FEES ─────────────────────────────────────────────────────────
const CATALOG = [
  { id: "pkg1", name: "Ultimate Gamer Pass", price: 1500, cat: "package" },
  { id: "pkg2", name: "VIP Gaming Experience", price: 1500, cat: "package" },
  { id: "pkg3", name: "Esports Training Package", price: 1500, cat: "package" },
  { id: "pkg4", name: "Birthday Party Package", price: 1500, cat: "package" },
  { id: "exp1", name: "Virtual Reality Experience", price: 750, cat: "experience" },
  { id: "exp2", name: "Racing Simulator Challenge", price: 750, cat: "experience" },
  { id: "exp3", name: "Escape Room Challenge", price: 750, cat: "experience" },
];

const TIERS = [{ min: 1, max: 1, rate: 0 }, { min: 2, max: 2, rate: 5 }, { min: 3, max: 3, rate: 10 }, { min: 4, max: 999, rate: 15 }];

function Fees({ go }: { go: (p: Page) => void }) {
  const [sel, setSel] = useState<Record<string, number>>({});

  const toggle = (id: string) => setSel((prev) => { const n = { ...prev }; if (n[id]) delete n[id]; else n[id] = 1; return n; });
  const setQty = (id: string, d: number) => setSel((prev) => prev[id] ? { ...prev, [id]: Math.max(1, prev[id] + d) } : prev);

  const selected = CATALOG.filter((c) => sel[c.id]);
  const totalBookings = Object.values(sel).reduce((a, b) => a + b, 0);
  const subtotal = selected.reduce((s, c) => s + c.price * sel[c.id], 0);
  const tierIdx = totalBookings === 0 ? -1 : TIERS.findIndex((t) => totalBookings >= t.min && totalBookings <= t.max);
  const rate = tierIdx >= 0 ? TIERS[tierIdx].rate : 0;
  const disc = Math.round(subtotal * rate / 100);
  const total = subtotal - disc;

  const tierLabels = ["0% · 1 booking", "5% · 2 bookings", "10% · 3 bookings", "15% · 4+ bookings"];

  return (
    <div>
      <div className="page-banner" style={S.banner}>
        <div style={S.container}>
          <div style={S.label}>Pricing Tool / 05</div>
          <h1 style={S.h1}>Interactive Quotation & Discount Calculator</h1>
          <p style={{ fontSize: 13, color: "#6b7280", marginTop: 8 }}>Select your packages and experiences below — discounts apply automatically.</p>
        </div>
      </div>
      <div style={S.container}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 40, padding: "48px 0", alignItems: "start" }}>
          {/* Left */}
          <div>
            {[{ label: "Gaming Packages", badge: "R1,500 per booking", cat: "package" }, { label: "Individual Experiences", badge: "R750 per booking", cat: "experience" }].map((group) => (
              <div key={group.cat} style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, borderBottom: "1px solid #e5e7eb", marginBottom: 8 }}>
                  <h2 style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{group.label}</h2>
                  <span style={S.badgeSm}>{group.badge}</span>
                </div>
                {CATALOG.filter((c) => c.cat === group.cat).map((item) => (
                  <div key={item.id} onClick={() => !sel[item.id] && toggle(item.id)} style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, border: `1px solid ${sel[item.id] ? "#111827" : "#e5e7eb"}`, background: sel[item.id] ? "#f9fafb" : "#fff", marginTop: 8, cursor: "pointer", transition: "border-color .15s" }}>
                    <div onClick={(e) => { e.stopPropagation(); toggle(item.id); }} style={{ width: 20, height: 20, border: `2px solid ${sel[item.id] ? "#111827" : "#9ca3af"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: sel[item.id] ? "#111827" : "transparent", cursor: "pointer" }}>
                      {sel[item.id] && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, lineHeight: 1 }}>✓</span>}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#111827", flex: 1 }}>{item.name}</span>
                    <span style={{ fontSize: 12, color: "#6b7280" }}>R{item.price.toLocaleString()}</span>
                    {sel[item.id] && (
                      <div style={{ display: "flex", alignItems: "center", border: "1px solid #d1d5db" }} onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setQty(item.id, -1)} style={{ width: 28, height: 28, border: "none", background: "none", cursor: "pointer", fontSize: 14 }}>−</button>
                        <span style={{ width: 32, textAlign: "center", fontSize: 12, fontWeight: 500 }}>{sel[item.id]}</span>
                        <button onClick={() => setQty(item.id, 1)} style={{ width: 28, height: 28, border: "none", background: "none", cursor: "pointer", fontSize: 14 }}>+</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right: Quote Card */}
          <div style={{ border: "1px solid #d1d5db", position: "sticky", top: 80 }}>
            <div style={{ background: "#111827", color: "#fff", padding: "16px 20px" }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Your Quote</div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>{totalBookings} booking{totalBookings !== 1 ? "s" : ""} selected</div>
            </div>
            <div style={{ padding: 20, minHeight: 120, borderBottom: "1px solid #e5e7eb" }}>
              {selected.length === 0 ? (
                <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", padding: "16px 0" }}>No items selected yet</p>
              ) : (
                selected.map((item) => (
                  <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 8 }}>
                    <span style={{ color: "#374151" }}>{item.name} <span style={{ color: "#9ca3af" }}>×{sel[item.id]}</span></span>
                    <span style={{ fontWeight: 500, color: "#111827" }}>R{(item.price * sel[item.id]).toLocaleString()}</span>
                  </div>
                ))
              )}
            </div>
            <div style={{ padding: "12px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, color: "#374151" }}>Subtotal</span>
              <strong style={{ fontSize: 13, color: "#111827" }}>R{subtotal.toLocaleString()}</strong>
            </div>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Discount Tier</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4 }}>
                {TIERS.map((t, i) => (
                  <div key={i} style={{ border: `1px solid ${i === tierIdx ? "#111827" : i < tierIdx ? "#9ca3af" : "#e5e7eb"}`, background: i === tierIdx ? "#111827" : i < tierIdx ? "#f3f4f6" : "#fff", color: i === tierIdx ? "#fff" : i < tierIdx ? "#374151" : "#9ca3af", textAlign: "center", padding: "8px 4px" }}>
                    <div style={{ fontSize: 12, fontWeight: 700 }}>{t.rate}%</div>
                    <div style={{ fontSize: 10, marginTop: 2, opacity: .7 }}>{tierLabels[i].split(" · ")[1]}</div>
                  </div>
                ))}
              </div>
              {totalBookings > 0 && totalBookings < 4 && (
                <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 8 }}>
                  Add {TIERS[Math.min(tierIdx + 1, 3)].min - totalBookings} more to reach {TIERS[Math.min(tierIdx + 1, 3)].rate}% discount
                </p>
              )}
            </div>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280", marginBottom: 8 }}>
                <span>Discount ({rate}%)</span><span>− R{disc.toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid #e5e7eb", fontSize: 16, fontWeight: 700, color: "#111827" }}>
                <span>Total</span><span>R{total.toLocaleString()}</span>
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <button onClick={() => selected.length > 0 && go("contact")} style={{ width: "100%", padding: "12px", background: selected.length > 0 ? "#111827" : "#e5e7eb", color: selected.length > 0 ? "#fff" : "#9ca3af", fontSize: 13, fontWeight: 500, border: "none", cursor: selected.length > 0 ? "pointer" : "not-allowed" }}>
                Proceed to Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── CONTACT ────────────────────────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const bookingTypes = ["Gaming Package", "VIP Experience", "Esports Training", "Birthday Party", "Corporate Event", "Tournament", "Individual Experience", "General Inquiry"];
  return (
    <div>
      <div className="page-banner" style={S.banner}>
        <div style={S.container}>
          <div style={S.label}>Get in Touch / 06</div>
          <h1 style={S.h1}>Contact Next Level Gaming Arena</h1>
          <p style={{ fontSize: 13, color: "#6b7280", marginTop: 8 }}>Send us an inquiry and our team will confirm your booking within 24 hours.</p>
        </div>
      </div>
      <div style={S.container}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 56, padding: "56px 0" }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ border: "1px solid #d1d5db", padding: 48, textAlign: "center" }}>
                <div style={{ width: 48, height: 48, border: "2px solid #111827", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20 }}>✓</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Inquiry Sent</h2>
                <p style={{ fontSize: 14, color: "#6b7280" }}>Thank you, we'll get back to you within 24 hours to confirm your booking details.</p>
                <button onClick={() => setSubmitted(false)} style={{ ...S.btnOutline, marginTop: 24, display: "inline-block" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div><label style={S.formLabel}>Full Name *</label><input type="text" required placeholder="Ellen Phatedi" style={S.formInput} /></div>
                  <div><label style={S.formLabel}>Email Address *</label><input type="email" required placeholder="ellen@email.com" style={S.formInput} /></div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div><label style={S.formLabel}>Phone Number</label><input type="tel" placeholder="+27 82 000 0000" style={S.formInput} /></div>
                  <div>
                    <label style={S.formLabel}>Booking Type *</label>
                    <select required style={{ ...S.formInput, background: "#fff" }}>
                      <option value="">Select a type…</option>
                      {bookingTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div><label style={S.formLabel}>Preferred Date</label><input type="date" style={S.formInput} /></div>
                <div>
                  <label style={S.formLabel}>Message</label>
                  <textarea rows={5} placeholder="Tell us about your event, group size, any special requirements…" style={{ ...S.formInput, resize: "none", minHeight: 120 }} />
                </div>
                <div><button type="submit" style={{ ...S.btnPrimary, padding: "12px 32px" }}>Send Inquiry</button></div>
              </form>
            )}
          </div>
          {/* Info */}
          <div>
            {[
              { title: "Arena Location", content: <address style={{ fontStyle: "normal", fontSize: 13, color: "#374151", lineHeight: 1.8 }}><strong>Next Level Gaming Arena</strong><br />123 Gaming Boulevard, Sandton<br />Johannesburg, Gauteng<br />2196, South Africa</address> },
              { title: "Contact Details", content: <div>{["+27 11 000 0000", "info@nextlevelgaming.co.za"].map((c) => <div key={c} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "#374151", marginBottom: 8 }}><span style={{ width: 16, height: 16, border: "1px solid #9ca3af", display: "inline-block", flexShrink: 0 }} />{c}</div>)}</div> },
              { title: "Operating Hours", content: (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[["Monday – Thursday","10:00 – 22:00"],["Friday","10:00 – 24:00"],["Saturday","09:00 – 24:00"],["Sunday","09:00 – 22:00"],["Public Holidays","10:00 – 20:00"]].map(([d, h]) => (
                      <tr key={d} style={{ borderBottom: "1px solid #f3f4f6" }}>
                        <td style={{ fontSize: 12, color: "#6b7280", padding: "6px 0" }}>{d}</td>
                        <td style={{ fontSize: 12, fontWeight: 500, color: "#111827", textAlign: "right" }}>{h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )},
            ].map((block) => (
              <div key={block.title} style={{ border: "1px solid #d1d5db", padding: 24, marginBottom: 16 }}>
                <h3 style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 16 }}>{block.title}</h3>
                {block.content}
              </div>
            ))}
            <Img h={192} label="Google Maps — Sandton, Johannesburg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ROOT ───────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");

  const go = (p: Page) => { setPage(p); window.scrollTo(0, 0); };

  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
    document.body.style.margin = "0";
    document.body.style.background = "#fff";
    document.body.style.color = "#111827";
  }, []);

  return (
    <div className="app-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header current={page} go={go} />
      <main key={page} className="page-enter" style={{ flex: 1 }}>
        {page === "home" && <Home go={go} />}
        {page === "about" && <About />}
        {page === "overview" && <Overview go={go} />}
        {page === "vr" && <VRDetail go={go} />}
        {page === "fees" && <Fees go={go} />}
        {page === "contact" && <Contact />}
      </main>
      <Footer go={go} />
    </div>
  );
}
