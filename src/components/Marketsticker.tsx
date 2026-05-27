"use client";

import Link from "next/link";

const markets = [
  { label: "Gold", value: "2,350.10", change: "+0.42%", up: true },
  { label: "Oil (WTI)", value: "78.32", change: "-0.21%", up: false },
  { label: "BTC", value: "66,521", change: "+1.35%", up: true },
  { label: "Nasdaq", value: "16,742", change: "+0.62%", up: true },
];

export default function MarketsTicker() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="border-b border-[color:var(--ms-border)] bg-white">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-[7px]">
          {/* Left: date + location */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[12px] text-[color:var(--ms-text-soft)]">{dateStr}</span>
            <span className="text-[color:var(--ms-border)]">·</span>
            <span className="text-[12px] text-[color:var(--ms-text-soft)]">
              <svg className="mr-1 inline-block h-3.5 w-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              New York 22°C
            </span>
            <span className="text-[color:var(--ms-border)]">·</span>
            <span className="text-[12px] font-medium text-[color:var(--ms-accent)]">
              Independent Journalism Since 2025
            </span>
          </div>

          {/* Right: markets + links */}
          <div className="flex items-center gap-0 divide-x divide-[color:var(--ms-border)] overflow-x-auto">
            {markets.map((m) => (
              <div key={m.label} className="flex items-center gap-1.5 px-3 py-0.5">
                <span className="text-[11px] font-medium text-[color:var(--ms-text-soft)]">{m.label}</span>
                <span className="text-[11px] font-semibold text-[color:var(--ms-text)]">{m.value}</span>
                <span className={`text-[10px] font-medium ${m.up ? "text-green-600" : "text-red-500"}`}>
                  {m.up ? "▲" : "▼"} {m.change}
                </span>
              </div>
            ))}
            <div className="hidden items-center gap-3 px-3 sm:flex">
              <Link href="/newsletter" className="text-[12px] text-[color:var(--ms-text-soft)] hover:text-[color:var(--ms-accent)]">Newsletter</Link>
              <Link href="/about" className="text-[12px] text-[color:var(--ms-text-soft)] hover:text-[color:var(--ms-accent)]">Sign In</Link>
              <Link href="/search" className="text-[12px] text-[color:var(--ms-text-soft)] hover:text-[color:var(--ms-accent)]">
                <svg className="inline h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {" "}Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}