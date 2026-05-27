import Link from "next/link";

const categories = [
  { label: "Home", href: "/" },
  { label: "World", href: "/world" },
  { label: "Politics", href: "/politics" },
  { label: "Business", href: "/business" },
  { label: "Technology", href: "/technology" },
  { label: "Health", href: "/health" },
  { label: "Science", href: "/science" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Education", href: "/education" },
  { label: "Opinion", href: "/opinion" },
  { label: "Investigations", href: "/investigations" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-[color:var(--ms-border)] bg-[color:var(--ms-text)] shadow-sm">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-5 lg:px-8">
        <ul className="flex items-center gap-0 overflow-x-auto">
          {categories.map((item, i) => (
            <li key={item.href} className="flex-shrink-0">
              <Link
                href={item.href}
                title={item.label}
                className={`
                  ms-meta block px-3.5 py-3 text-[12px] uppercase tracking-[0.14em] text-white/80
                  transition-colors hover:bg-white/10 hover:text-white
                  ${i === 0 ? "text-white font-semibold" : ""}
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* Hamburger for more */}
          <li className="ml-auto flex-shrink-0">
            <button className="flex items-center gap-1 px-3 py-3 text-white/60 hover:text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}