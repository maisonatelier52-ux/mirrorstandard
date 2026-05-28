
// "use client";

// import { Search, X, Menu } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
// import { SiSubstack } from "react-icons/si";

// interface NewsData {
//   slug: string;
//   category: string;
//   title: string;
//   date: string;
//   image: string;
// }

// const navCategories = [
//   { label: "Home", href: "/" },
//   { label: "Politics", href: "/politics" },
//   { label: "Business", href: "/business" },
//   { label: "Technology", href: "/technology" },
//   { label: "Health", href: "/health" },
//   { label: "Science", href: "/science" },
//   { label: "Education", href: "/education" },
//   { label: "Entertainment", href: "/entertainment" },
//   { label: "Sports", href: "/sports" },
// ];

// const socialLinks = [
//   { href: "https://x.com/Mirrorstan68694", label: "X / Twitter", icon: <FaXTwitter size={15} /> },
//   { href: "https://www.instagram.com/mirrorstandardnews2026/", label: "Instagram", icon: <FaInstagram size={15} /> },
//   { href: "https://www.youtube.com/@mirrorstandardUS", label: "YouTube", icon: <FaYoutube size={15} /> },
//   { href: "https://substack.com/@mirrorstandardnews", label: "Substack", icon: <SiSubstack size={15} /> },
// ];

// const markets = [
//   { label: "Gold", value: "2,350.10", change: "+0.42%", up: true },
//   { label: "Oil (WTI)", value: "78.32", change: "-0.21%", up: false },
//   { label: "BTC", value: "66,521", change: "+1.35%", up: true },
//   { label: "Nasdaq", value: "16,742", change: "+0.62%", up: true },
// ];

// function getFormattedDate() {
//   return new Date().toLocaleDateString("en-US", {
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// function isActive(href: string, pathname: string) {
//   if (href === "/") return pathname === "/";
//   return pathname === href || pathname.startsWith(href + "/");
// }

// /* ─────────────────────────────────────────────
//    SUBSCRIBE MODAL
// ───────────────────────────────────────────── */
// function SubscribeModal({ onClose }: { onClose: () => void }) {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Focus input on open
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   // Close on Escape
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, [onClose]);

//   function validateEmail(val: string) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setError("");
//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     setLoading(true);
//     // Simulate network request
//     await new Promise((r) => setTimeout(r, 900));
//     setLoading(false);
//     setSubmitted(true);
//   }

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
//         onClick={onClose}
//         aria-hidden="true"
//       />

//       {/* Modal panel */}
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="subscribe-title"
//         className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl"
//       >
//         {/* Top accent bar */}
//         <div className="h-[3px] w-full bg-[color:var(--ms-accent)]" />

//         <div className="px-8 py-8">
//           {/* Close button */}
//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="Close"
//             className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:border-[color:var(--ms-text-soft)] hover:text-[color:var(--ms-text)] transition-colors cursor-pointer"
//           >
//             <X size={15} />
//           </button>

//           {!submitted ? (
//             <>
//               {/* Header */}
//               <div className="mb-6">
//                 <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-accent)]">
//                   Mirror Standard
//                 </p>
//                 <h2
//                   id="subscribe-title"
//                   className="ms-editorial-serif mt-2 text-[28px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ms-text)]"
//                 >
//                   Stay informed.
//                 </h2>
//                 <p className="mt-2 text-[14px] leading-[1.7] text-[color:var(--ms-text-soft)]">
//                   Get independent journalism on politics, business, and markets delivered to your inbox — free.
//                 </p>
//               </div>

//               {/* Divider */}
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
//                 <span className="font-[oswald] text-[9px] uppercase tracking-[0.3em] text-[color:var(--ms-text-faint)]">✦</span>
//                 <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} noValidate>
//                 <label
//                   htmlFor="subscribe-email"
//                   className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ms-text-faint)]"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   ref={inputRef}
//                   id="subscribe-email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => { setEmail(e.target.value); setError(""); }}
//                   placeholder="you@example.com"
//                   className={`w-full border px-4 py-3 text-[15px] text-[color:var(--ms-text)] outline-none placeholder:text-[color:var(--ms-text-faint)] transition-colors focus:border-[color:var(--ms-accent)] ${
//                     error ? "border-red-400 bg-red-50" : "border-[color:var(--ms-border)] bg-white"
//                   }`}
//                   autoComplete="email"
//                 />
//                 {error && (
//                   <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-500">
//                     <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 flex-none">
//                       <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 4a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0V5zm-.75 6a.875.875 0 110-1.75.875.875 0 010 1.75z"/>
//                     </svg>
//                     {error}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-4 w-full bg-[color:var(--ms-accent)] px-6 py-3 font-[oswald] text-[13px] font-bold uppercase tracking-[0.18em] text-white transition-opacity cursor-pointer hover:opacity-90 disabled:opacity-60"
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
//                       </svg>
//                       Subscribing…
//                     </span>
//                   ) : (
//                     "Subscribe — it's free"
//                   )}
//                 </button>
//               </form>

//               <p className="mt-4 text-center text-[11px] leading-5 text-[color:var(--ms-text-faint)]">
//                 No spam, ever. Unsubscribe at any time.
//               </p>
//             </>
//           ) : (
//             /* ── Success state ── */
//             <div className="py-4 text-center">
//               <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--ms-accent)]">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="h-7 w-7">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-accent)]">
//                 You&apos;re in
//               </p>
//               <h2 className="ms-editorial-serif mt-2 text-[26px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ms-text)]">
//                 Welcome to Mirror Standard.
//               </h2>
//               <p className="mt-3 text-[14px] leading-[1.7] text-[color:var(--ms-text-soft)]">
//                 Thanks for subscribing. Your first briefing will arrive shortly at{" "}
//                 <span className="font-semibold text-[color:var(--ms-text)]">{email}</span>.
//               </p>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="mt-6 border border-[color:var(--ms-border)] px-6 py-2.5 font-[oswald] text-[12px] uppercase tracking-[0.18em] text-[color:var(--ms-text)] transition-colors hover:border-[color:var(--ms-text)] hover:text-[color:var(--ms-accent)] cursor-pointer"
//               >
//                 Continue Reading
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default function Header({ latestNews = [] }: { latestNews?: NewsData[] }) {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [breakingIdx, setBreakingIdx] = useState(0);
//   const [dateStr, setDateStr] = useState("");
//   const router = useRouter();
//   const pathname = usePathname();

//   const isHomePage = pathname === "/";

//   useEffect(() => {
//     setDateStr(getFormattedDate());
//   }, []);

//   const breakingStories =
//     latestNews.length > 0
//       ? latestNews
//       : [{ slug: "#", category: "politics", title: "Senate approves emergency economic package amid shipping crisis", date: "2m ago", image: "" }];
//   const currentBreaking = breakingStories[breakingIdx];

//   const prevBreaking = () => setBreakingIdx((i) => (i - 1 + breakingStories.length) % breakingStories.length);
//   const nextBreaking = () => setBreakingIdx((i) => (i + 1) % breakingStories.length);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = searchQuery.trim();
//     if (!query) return;
//     setIsSearchOpen(false);
//     router.push(`/search?query=${encodeURIComponent(query)}`);
//     setSearchQuery("");
//   };

//   /* Shared NavLink — desktop and mobile */
//   const NavLink = ({ item, mobile = false }: { item: typeof navCategories[0]; mobile?: boolean }) => {
//     const active = isActive(item.href, pathname);
//     if (mobile) {
//       return (
//         <Link
//           href={item.href}
//           onClick={() => setIsMobileMenuOpen(false)}
//           className={`ms-meta relative flex-shrink-0 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-[color:var(--ms-accent)] ${
//             active ? "text-[color:var(--ms-accent)]" : "text-[color:var(--ms-text)]"
//           }`}
//         >
//           {item.label}
//           {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[color:var(--ms-accent)]" />}
//         </Link>
//       );
//     }
//     return (
//       <Link
//         href={item.href}
//         className={`ms-meta relative whitespace-nowrap px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-[color:var(--ms-accent)] ${
//           active ? "text-[color:var(--ms-accent)]" : "text-[color:var(--ms-text)]"
//         }`}
//       >
//         {item.label}
//         {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[color:var(--ms-accent)]" />}
//       </Link>
//     );
//   };

//   return (
//     <>
//       {/* ══════════════════════════════════════════
//           DESKTOP HEADER
//       ══════════════════════════════════════════ */}
//       <header className="hidden bg-[#ffffff] lg:block">

//         {/* ROW 1: Date · Weather · Tagline · About / Contact / Search */}
//         <div className="border-b border-[color:var(--ms-border)]">
//           <div className="mx-auto flex items-center justify-between gap-6 px-8 py-[8px] bg-[color:var(--ms-footer-bg)]">
//             <div className="flex items-center gap-3 text-[12px] text-white">
//               <span className="flex items-center gap-1.5">
//                 <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 {dateStr}
//               </span>
//               <span className="text-[color:var(--ms-border-strong)]">·</span>
//               <span className="flex items-center gap-1">
//                 <svg className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="4" />
//                   <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" />
//                 </svg>
//                 New York&nbsp;22°C
//               </span>
//             </div>

//             <span className="text-[12px] font-medium text-white">
//               Independent Journalism
//             </span>

//             <div className="flex items-center divide-x divide-[color:var(--ms-border)]">
//               <Link href="/about" className="px-4 text-[12px] text-white hover:text-gray-300 transition-colors cursor-pointer">About</Link>
//               <Link href="/contact" className="px-4 text-[12px] text-white hover:text-gray-300 transition-colors cursor-pointer">Contact Us</Link>
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="flex items-center gap-1.5 pl-4 text-[12px] text-white hover:text-gray-300 transition-colors cursor-pointer"
//               >
//                 <Search size={13} strokeWidth={2} />
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ROW 2: Social icons · Masthead · Subscribe button */}
//         <div className="border-b border-[color:var(--ms-border)] py-5">
//           <div className="mx-auto flex max-w-[1280px] items-center px-8">

//             {/* Left: social icons */}
//             <div className="flex w-[180px] items-center gap-2">
//               {socialLinks.map((social) => (
//                 <Link
//                   key={social.label}
//                   href={social.href}
//                   title={social.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-soft)] hover:border-[color:var(--ms-border-strong)] hover:text-[color:var(--ms-accent)] transition-colors"
//                 >
//                   {social.icon}
//                 </Link>
//               ))}
//             </div>

//             {/* Center: masthead + ornament + tagline */}
//             <div className="flex flex-1 flex-col items-center gap-1">
//               <Link href="/" title="Mirror Standard home" className="text-center">
//                 <span
//                   className="block text-[color:var(--ms-text)] leading-none"
//                   style={{
//                     fontFamily: '"Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif',
//                     fontSize: "clamp(28px, 4.5vw, 58px)",
//                     fontWeight: 900,
//                     letterSpacing: "-0.01em",
//                   }}
//                 >
//                   MIRROR STANDARD
//                 </span>
//               </Link>
//               {/* ornament */}
//               <div className="flex items-center gap-2 mt-1">
//                 <span className="h-px w-14 bg-[color:var(--ms-border-strong)]" />
//                 <svg className="h-3 w-3 text-[color:var(--ms-accent)]" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
//                 </svg>
//                 <span className="h-px w-14 bg-[color:var(--ms-border-strong)]" />
//               </div>
//               <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--ms-text-soft)]">
//                 Truth, Policy, Markets &amp; Public Affairs
//               </p>
//             </div>

//             {/* Right: Subscribe button */}
//             <div className="flex w-[180px] items-center justify-end">
//               <button
//                 type="button"
//                 onClick={() => setIsSubscribeOpen(true)}
//                 className="group flex flex-col items-center gap-1 cursor-pointer"
//               >
//                 {/* Icon badge */}
//                 <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center bg-[color:var(--ms-accent)] transition-opacity group-hover:opacity-90">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-5 w-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 {/* Label */}
//                 <div className="text-center leading-none">
//                   <p className="text-[10px] text-[color:var(--ms-text-soft)]">Free newsletter</p>
//                   <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[color:var(--ms-accent)]">Subscribe</p>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ROW 3: Navbar — double black rules */}
//         <nav className="sticky top-0 z-30 border-b-2 border-t-2 border-[color:var(--ms-text)] bg-white shadow-sm">
//           <div className="mx-auto flex max-w-[1280px] items-center justify-center px-8">
//             {navCategories.map((item) => (
//               <NavLink key={item.href} item={item} />
//             ))}
//           </div>
//         </nav>

//         {/* ROW 4: Breaking News — HOMEPAGE ONLY */}
//         {isHomePage && (
//           <div className="border-b border-[color:var(--ms-border)] bg-white">
//             <div className="mx-auto flex items-center gap-3 px-8 py-[9px]">
//               <div className="flex flex-shrink-0 items-center">
//                 <span className="bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
//                   Breaking News
//                 </span>
//                 <div className="border-l-[7px] border-y-[11px] border-y-transparent border-l-red-600" />
//               </div>
//               <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
//               <Link
//                 href={`/${currentBreaking.category}/${currentBreaking.slug}`}
//                 className="min-w-0 flex-1 truncate text-[13px] text-[color:var(--ms-text)] hover:text-[color:var(--ms-accent)] transition-colors"
//               >
//                 {currentBreaking.title}
//               </Link>
//               <div className="flex flex-shrink-0 items-center gap-2">
//                 <span className="text-[12px] text-[color:var(--ms-text-faint)]">{currentBreaking.date}</span>
//                 <button onClick={prevBreaking} aria-label="Previous" className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
//                   <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//                 <button onClick={nextBreaking} aria-label="Next" className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
//                   <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </header>

//       {/* ══════════════════════════════════════════
//           MOBILE HEADER
//       ══════════════════════════════════════════ */}
//       <header className="bg-[#faf8f3] lg:hidden">

//         {/* Mobile Row 1: date + search */}
//         <div className="border-b border-[color:var(--ms-border)] bg-[color:var(--ms-footer-bg)]">
//           <div className="flex items-center justify-between px-4 py-2">
//             <span className="flex items-center gap-1.5 text-[11px] text-white">
//               <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
//                 <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                 <line x1="16" y1="2" x2="16" y2="6" />
//                 <line x1="8" y1="2" x2="8" y2="6" />
//                 <line x1="3" y1="10" x2="21" y2="10" />
//               </svg>
//               {dateStr}
//             </span>
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setIsSubscribeOpen(true)}
//                 className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[color:var(--ms-accent)] border border-[color:var(--ms-accent)] px-2.5 py-1 hover:bg-[color:var(--ms-accent)] hover:text-white transition-colors"
//               >
//                 Subscribe
//               </button>
//               <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-1 text-[12px] text-white hover:text-[color:var(--ms-accent)]">
//                 <Search size={13} /> Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Row 2: Social · Masthead · Hamburger */}
//         <div className="border-b border-[color:var(--ms-border)] py-3">
//           <div className="flex items-center px-4">
//             <div className="flex items-center gap-1.5">
//               {socialLinks.slice(0, 3).map((social) => (
//                 <Link key={social.label} href={social.href} title={social.label} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-soft)]">
//                   {social.icon}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-1 justify-center">
//               <Link href="/" title="Mirror Standard home">
//                 <span
//                   className="block text-center text-[color:var(--ms-text)] leading-none"
//                   style={{
//                     fontFamily: '"Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif',
//                     fontSize: "clamp(16px, 4.5vw, 24px)",
//                     fontWeight: 900,
//                     letterSpacing: "-0.01em",
//                   }}
//                 >
//                   MIRROR STANDARD
//                 </span>
//               </Link>
//             </div>
//             <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu" className="flex h-9 w-9 items-center justify-center rounded-sm border border-[color:var(--ms-border)] text-[color:var(--ms-text)]">
//               <Menu size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navbar: horizontal scroll + active underline */}
//         <nav className="border-b-2 border-t-2 border-[color:var(--ms-text)] bg-white">
//           <div className="flex items-center overflow-x-auto scrollbar-hide">
//             {navCategories.map((item) => (
//               <NavLink key={item.href} item={item} mobile />
//             ))}
//           </div>
//         </nav>

//         {/* Mobile Breaking News — HOMEPAGE ONLY */}
//         {isHomePage && (
//           <div className="border-b border-[color:var(--ms-border)] bg-white">
//             <div className="flex items-center gap-2 px-3 py-2">
//               <div className="flex flex-shrink-0 items-center">
//                 <span className="bg-red-600 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] text-white">Breaking News</span>
//                 <div className="border-l-[5px] border-y-[9px] border-y-transparent border-l-red-600" />
//               </div>
//               <Link href={`/${currentBreaking.category}/${currentBreaking.slug}`} className="min-w-0 flex-1 truncate text-[11px] text-[color:var(--ms-text)]">
//                 {currentBreaking.title}
//               </Link>
//               <div className="flex flex-shrink-0 items-center gap-1">
//                 <span className="text-[10px] text-[color:var(--ms-text-faint)]">{currentBreaking.date}</span>
//                 <button onClick={prevBreaking} aria-label="Previous" className="flex h-4 w-4 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
//                   <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//                 <button onClick={nextBreaking} aria-label="Next" className="flex h-4 w-4 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
//                   <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </header>

//       {/* ══════════════════════════════════════════
//           MOBILE SLIDE-OUT DRAWER
//       ══════════════════════════════════════════ */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
//       )}
//       <div className={`fixed inset-y-0 left-0 z-50 w-[min(90vw,320px)] transform bg-[color:var(--ms-footer-bg)] text-[color:var(--ms-footer-text)] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <div className="flex h-full flex-col">
//           <div className="flex items-center justify-between border-b border-[color:var(--ms-footer-border)] px-5 py-4">
//             <span style={{ fontFamily: '"Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif', fontSize: "18px", fontWeight: 900 }} className="text-white">
//               MIRROR STANDARD
//             </span>
//             <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--ms-footer-border)] text-[color:var(--ms-footer-text)]">
//               <X size={16} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto px-5 py-5">
//             <p className="ms-meta mb-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ms-footer-muted)]">Sections</p>
//             <ul className="space-y-1">
//               {navCategories.map((item) => {
//                 const active = isActive(item.href, pathname);
//                 return (
//                   <li key={item.href}>
//                     <Link
//                       href={item.href}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className={`ms-meta block border px-4 py-3 text-[13px] uppercase tracking-[0.12em] transition-colors ${
//                         active
//                           ? "border-[color:var(--ms-accent)] bg-white/10 text-white"
//                           : "border-[color:var(--ms-footer-border)] bg-white/5 text-[color:var(--ms-footer-text)] hover:bg-white/10"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>

//             {/* Subscribe CTA in drawer */}
//             <button
//               type="button"
//               onClick={() => { setIsMobileMenuOpen(false); setIsSubscribeOpen(true); }}
//               className="mt-5 w-full bg-[color:var(--ms-accent)] py-3 font-[oswald] text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:opacity-90 transition-opacity"
//             >
//               Subscribe — Free Newsletter
//             </button>

//             <div className="mt-5">
//               <p className="ms-meta mb-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ms-footer-muted)]">Follow Us</p>
//               <div className="flex items-center gap-2">
//                 {socialLinks.map((social) => (
//                   <Link key={social.label} href={social.href} title={social.label} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--ms-footer-border)] bg-white/5 text-[color:var(--ms-footer-text)] hover:bg-white/10 transition-colors">
//                     {social.icon}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-6 space-y-2 text-[13px] text-[color:var(--ms-footer-muted)]">
//               <Link href="/newsletter" className="block hover:text-white transition-colors">Newsletter</Link>
//               <Link href="/about" className="block hover:text-white transition-colors">About</Link>
//               <Link href="/our-team" className="block hover:text-white transition-colors">Our Team</Link>
//               <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
//             </div>
//           </div>

//           <div className="border-t border-[color:var(--ms-footer-border)] px-5 py-4">
//             <p className="text-[11px] text-[color:var(--ms-footer-muted)]">© {new Date().getFullYear()} Mirror Standard</p>
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════
//           SEARCH OVERLAY
//       ══════════════════════════════════════════ */}
//       {isSearchOpen && (
//         <div className="fixed inset-0 z-50 flex items-start justify-center bg-[rgba(14,24,37,0.96)] px-4 pt-24 backdrop-blur-md sm:px-6">
//           <div className="w-full max-w-2xl">
//             <div className="mb-5 flex items-center justify-between">
//               <div>
//                 <p className="ms-meta text-[10px] uppercase tracking-[0.24em] text-[color:var(--ms-footer-muted)]">Search Mirror Standard</p>
//                 <h2 className="ms-editorial-serif mt-1.5 text-[32px] leading-tight tracking-[-0.03em] text-white sm:text-[40px]">
//                   Find reporting &amp; analysis
//                 </h2>
//               </div>
//               <button type="button" onClick={() => setIsSearchOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ms-footer-border)] text-[color:var(--ms-footer-text)]">
//                 <X size={20} />
//               </button>
//             </div>
//             <form onSubmit={handleSearch} className="flex items-center gap-3 border border-[color:var(--ms-footer-border)] bg-white/5 p-3">
//               <input
//                 type="text"
//                 placeholder="Topics, people, companies, stories…"
//                 className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-[17px] text-white outline-none placeholder:text-[color:var(--ms-footer-muted)]"
//                 autoFocus
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button type="submit" aria-label="Search" className="flex h-11 w-11 items-center justify-center bg-white text-[color:var(--ms-accent)]">
//                 <Search size={20} strokeWidth={2} />
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ══════════════════════════════════════════
//           SUBSCRIBE MODAL
//       ══════════════════════════════════════════ */}
//       {isSubscribeOpen && (
//         <SubscribeModal onClose={() => setIsSubscribeOpen(false)} />
//       )}
//     </>
//   );
// }


"use client";

import { Search, X, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

/* ─────────────────────────────────────────────
   WEATHER HOOK
───────────────────────────────────────────── */
interface WeatherData {
  temp: number;
  city: string;
}

function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function getWeatherFromCoords(lat: number, lon: number, city: string) {
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const weatherData = await weatherRes.json();
      return {
        temp: Math.round(weatherData.current_weather.temperature),
        city,
      };
    }

    async function fetchWeather() {
      // Always IP-based — intentionally avoids browser geolocation so VPN is respected.
      // Priority: ipwho.is → ipapi.co → freeipapi.com

      // --- Provider 1: ipwho.is (free, HTTPS, works on localhost) ---
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        if (data.success && data.city && data.latitude && data.longitude) {
          setWeather(await getWeatherFromCoords(data.latitude, data.longitude, data.city));
          return;
        }
      } catch { /* fall through */ }

      // --- Provider 2: ipapi.co (free tier, 1k/day) ---
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.city && data.latitude && data.longitude) {
          setWeather(await getWeatherFromCoords(data.latitude, data.longitude, data.city));
          return;
        }
      } catch { /* fall through */ }

      // --- Provider 3: freeipapi.com ---
      try {
        const res = await fetch("https://freeipapi.com/api/json");
        const data = await res.json();
        if (data.cityName && data.latitude && data.longitude) {
          setWeather(await getWeatherFromCoords(data.latitude, data.longitude, data.cityName));
          return;
        }
      } catch { /* fall through */ }

      // All providers failed — widget stays hidden
      setWeather(null);
    }

    fetchWeather();
  }, []);

  return weather;
}

/* ─────────────────────────────────────────────
   TYPES & CONSTANTS
───────────────────────────────────────────── */
interface NewsData {
  slug: string;
  category: string;
  title: string;
  date: string;
  image: string;
}

const navCategories = [
  { label: "Home", href: "/" },
  { label: "Politics", href: "/politics" },
  { label: "Business", href: "/business" },
  { label: "Technology", href: "/technology" },
  { label: "Health", href: "/health" },
  { label: "Science", href: "/science" },
  { label: "Education", href: "/education" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Sports", href: "/sports" },
];

const socialLinks = [
  { href: "https://x.com/Mirrorstan68694", label: "X / Twitter", icon: <FaXTwitter size={15} /> },
  { href: "https://www.instagram.com/mirrorstandardnews2026/", label: "Instagram", icon: <FaInstagram size={15} /> },
  { href: "https://www.youtube.com/@mirrorstandardUS", label: "YouTube", icon: <FaYoutube size={15} /> },
  { href: "https://substack.com/@mirrorstandardnews", label: "Substack", icon: <SiSubstack size={15} /> },
];

function getFormattedDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

/* ─────────────────────────────────────────────
   SUBSCRIBE MODAL
───────────────────────────────────────────── */
function SubscribeModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  function validateEmail(val: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-title"
        className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl"
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full bg-[color:var(--ms-accent)]" />

        <div className="px-8 py-8">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:border-[color:var(--ms-text-soft)] hover:text-[color:var(--ms-text)] transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>

          {!submitted ? (
            <>
              <div className="mb-6">
                <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-accent)]">
                  Mirror Standard
                </p>
                <h2
                  id="subscribe-title"
                  className="ms-editorial-serif mt-2 text-[28px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ms-text)]"
                >
                  Stay informed.
                </h2>
                <p className="mt-2 text-[14px] leading-[1.7] text-[color:var(--ms-text-soft)]">
                  Get independent journalism on politics, business, and markets delivered to your inbox — free.
                </p>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
                <span className="font-[oswald] text-[9px] uppercase tracking-[0.3em] text-[color:var(--ms-text-faint)]">✦</span>
                <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <label
                  htmlFor="subscribe-email"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ms-text-faint)]"
                >
                  Email address
                </label>
                <input
                  ref={inputRef}
                  id="subscribe-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="you@example.com"
                  className={`w-full border px-4 py-3 text-[15px] text-[color:var(--ms-text)] outline-none placeholder:text-[color:var(--ms-text-faint)] transition-colors focus:border-[color:var(--ms-accent)] ${
                    error ? "border-red-400 bg-red-50" : "border-[color:var(--ms-border)] bg-white"
                  }`}
                  autoComplete="email"
                />
                {error && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-500">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 flex-none">
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 4a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0V5zm-.75 6a.875.875 0 110-1.75.875.875 0 010 1.75z"/>
                    </svg>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full bg-[color:var(--ms-accent)] px-6 py-3 font-[oswald] text-[13px] font-bold uppercase tracking-[0.18em] text-white transition-opacity cursor-pointer hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Subscribing…
                    </span>
                  ) : (
                    "Subscribe — it's free"
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-[11px] leading-5 text-[color:var(--ms-text-faint)]">
                No spam, ever. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <div className="py-4 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--ms-accent)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-accent)]">
                You&apos;re in
              </p>
              <h2 className="ms-editorial-serif mt-2 text-[26px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ms-text)]">
                Welcome to Mirror Standard.
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-[color:var(--ms-text-soft)]">
                Thanks for subscribing. Your first briefing will arrive shortly at{" "}
                <span className="font-semibold text-[color:var(--ms-text)]">{email}</span>.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 border border-[color:var(--ms-border)] px-6 py-2.5 font-[oswald] text-[12px] uppercase tracking-[0.18em] text-[color:var(--ms-text)] transition-colors hover:border-[color:var(--ms-text)] hover:text-[color:var(--ms-accent)] cursor-pointer"
              >
                Continue Reading
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN HEADER
───────────────────────────────────────────── */
export default function Header({ latestNews = [] }: { latestNews?: NewsData[] }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [breakingIdx, setBreakingIdx] = useState(0);
  const [dateStr, setDateStr] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  // Live weather for visitor's location
  const weather = useWeather();

  const isHomePage = pathname === "/";

  useEffect(() => {
    setDateStr(getFormattedDate());
  }, []);

  const breakingStories =
    latestNews.length > 0
      ? latestNews
      : [{ slug: "#", category: "politics", title: "Senate approves emergency economic package amid shipping crisis", date: "2m ago", image: "" }];
  const currentBreaking = breakingStories[breakingIdx];

  const prevBreaking = () => setBreakingIdx((i) => (i - 1 + breakingStories.length) % breakingStories.length);
  const nextBreaking = () => setBreakingIdx((i) => (i + 1) % breakingStories.length);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    setIsSearchOpen(false);
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setSearchQuery("");
  };

  const NavLink = ({ item, mobile = false }: { item: typeof navCategories[0]; mobile?: boolean }) => {
    const active = isActive(item.href, pathname);
    if (mobile) {
      return (
        <Link
          href={item.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`ms-meta relative flex-shrink-0 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-[color:var(--ms-accent)] ${
            active ? "text-[color:var(--ms-accent)]" : "text-[color:var(--ms-text)]"
          }`}
        >
          {item.label}
          {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[color:var(--ms-accent)]" />}
        </Link>
      );
    }
    return (
      <Link
        href={item.href}
        className={`ms-meta relative whitespace-nowrap px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-[color:var(--ms-accent)] ${
          active ? "text-[color:var(--ms-accent)]" : "text-[color:var(--ms-text)]"
        }`}
      >
        {item.label}
        {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[color:var(--ms-accent)]" />}
      </Link>
    );
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP HEADER
      ══════════════════════════════════════════ */}
      <header className="hidden bg-[#ffffff] lg:block">

        {/* ROW 1: Date · Weather · Tagline · About / Contact / Search */}
        <div className="border-b border-[color:var(--ms-border)]">
          <div className="mx-auto flex items-center justify-between gap-6 px-8 py-[8px] bg-[color:var(--ms-footer-bg)]">
            <div className="flex items-center gap-3 text-[12px] text-white">
              {/* Date */}
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {dateStr}
              </span>

              {/* Weather — only shown once data loads */}
              {weather && (
                <>
                  <span className="text-[color:var(--ms-border-strong)]">·</span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" />
                      <path
                        d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    {weather.city}&nbsp;{weather.temp}°C
                  </span>
                </>
              )}
            </div>

            <span className="text-[12px] font-medium text-white">
              Independent Journalism
            </span>

            <div className="flex items-center divide-x divide-[color:var(--ms-border)]">
              <Link href="/about" className="px-4 text-[12px] text-white hover:text-gray-300 transition-colors cursor-pointer">About</Link>
              <Link href="/contact" className="px-4 text-[12px] text-white hover:text-gray-300 transition-colors cursor-pointer">Contact Us</Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-1.5 pl-4 text-[12px] text-white hover:text-gray-300 transition-colors cursor-pointer"
              >
                <Search size={13} strokeWidth={2} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: Social icons · Masthead · Subscribe button */}
        <div className="border-b border-[color:var(--ms-border)] py-5">
          <div className="mx-auto flex max-w-[1280px] items-center px-8">

            {/* Left: social icons */}
            <div className="flex w-[180px] items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-soft)] hover:border-[color:var(--ms-border-strong)] hover:text-[color:var(--ms-accent)] transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Center: masthead + ornament + tagline */}
            <div className="flex flex-1 flex-col items-center gap-1">
              <Link href="/" title="Mirror Standard home" className="text-center">
                <span
                  className="block text-[color:var(--ms-text)] leading-none"
                  style={{
                    fontFamily: '"Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif',
                    fontSize: "clamp(28px, 4.5vw, 58px)",
                    fontWeight: 900,
                    letterSpacing: "-0.01em",
                  }}
                >
                  MIRROR STANDARD
                </span>
              </Link>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-px w-14 bg-[color:var(--ms-border-strong)]" />
                <svg className="h-3 w-3 text-[color:var(--ms-accent)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
                </svg>
                <span className="h-px w-14 bg-[color:var(--ms-border-strong)]" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--ms-text-soft)]">
                Truth, Policy, Markets &amp; Public Affairs
              </p>
            </div>

            {/* Right: Subscribe button */}
            <div className="flex w-[180px] items-center justify-end">
              <button
                type="button"
                onClick={() => setIsSubscribeOpen(true)}
                className="group flex flex-col items-center gap-1 cursor-pointer"
              >
                <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center bg-[color:var(--ms-accent)] transition-opacity group-hover:opacity-90">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center leading-none">
                  <p className="text-[10px] text-[color:var(--ms-text-soft)]">Free newsletter</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[color:var(--ms-accent)]">Subscribe</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ROW 3: Navbar */}
        <nav className="sticky top-0 z-30 border-b-2 border-t-2 border-[color:var(--ms-text)] bg-white shadow-sm">
          <div className="mx-auto flex max-w-[1280px] items-center justify-center px-8">
            {navCategories.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>
        </nav>

        {/* ROW 4: Breaking News — HOMEPAGE ONLY */}
        {isHomePage && (
          <div className="border-b border-[color:var(--ms-border)] bg-white">
            <div className="mx-auto flex items-center gap-3 px-8 py-[9px]">
              <div className="flex flex-shrink-0 items-center">
                <span className="bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                  Breaking News
                </span>
                <div className="border-l-[7px] border-y-[11px] border-y-transparent border-l-red-600" />
              </div>
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <Link
                href={`/${currentBreaking.category}/${currentBreaking.slug}`}
                className="min-w-0 flex-1 truncate text-[13px] text-[color:var(--ms-text)] hover:text-[color:var(--ms-accent)] transition-colors"
              >
                {currentBreaking.title}
              </Link>
              <div className="flex flex-shrink-0 items-center gap-2">
                <span className="text-[12px] text-[color:var(--ms-text-faint)]">{currentBreaking.date}</span>
                <button onClick={prevBreaking} aria-label="Previous" className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button onClick={nextBreaking} aria-label="Next" className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

      </header>

      {/* ══════════════════════════════════════════
          MOBILE HEADER
      ══════════════════════════════════════════ */}
      <header className="bg-[#faf8f3] lg:hidden">

        {/* Mobile Row 1: date + search */}
        <div className="border-b border-[color:var(--ms-border)] bg-[color:var(--ms-footer-bg)]">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="flex items-center gap-1.5 text-[11px] text-white">
              <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {dateStr}
              {/* Mobile weather inline with date */}
              {weather && (
                <>
                  <span className="mx-1 opacity-50">·</span>
                  <svg className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <path
                      d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  {weather.city}&nbsp;{weather.temp}°C
                </>
              )}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSubscribeOpen(true)}
                className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[color:var(--ms-accent)] border border-[color:var(--ms-accent)] px-2.5 py-1 hover:bg-[color:var(--ms-accent)] hover:text-white transition-colors"
              >
                Subscribe
              </button>
              <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-1 text-[12px] text-white hover:text-[color:var(--ms-accent)]">
                <Search size={13} /> Search
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Row 2: Social · Masthead · Hamburger */}
        <div className="border-b border-[color:var(--ms-border)] py-3">
          <div className="flex items-center px-4">
            <div className="flex items-center gap-1.5">
              {socialLinks.slice(0, 3).map((social) => (
                <Link key={social.label} href={social.href} title={social.label} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-soft)]">
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="flex flex-1 justify-center">
              <Link href="/" title="Mirror Standard home">
                <span
                  className="block text-center text-[color:var(--ms-text)] leading-none"
                  style={{
                    fontFamily: '"Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif',
                    fontSize: "clamp(16px, 4.5vw, 24px)",
                    fontWeight: 900,
                    letterSpacing: "-0.01em",
                  }}
                >
                  MIRROR STANDARD
                </span>
              </Link>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu" className="flex h-9 w-9 items-center justify-center rounded-sm border border-[color:var(--ms-border)] text-[color:var(--ms-text)]">
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <nav className="border-b-2 border-t-2 border-[color:var(--ms-text)] bg-white">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {navCategories.map((item) => (
              <NavLink key={item.href} item={item} mobile />
            ))}
          </div>
        </nav>

        {/* Mobile Breaking News — HOMEPAGE ONLY */}
        {isHomePage && (
          <div className="border-b border-[color:var(--ms-border)] bg-white">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="flex flex-shrink-0 items-center">
                <span className="bg-red-600 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] text-white">Breaking News</span>
                <div className="border-l-[5px] border-y-[9px] border-y-transparent border-l-red-600" />
              </div>
              <Link href={`/${currentBreaking.category}/${currentBreaking.slug}`} className="min-w-0 flex-1 truncate text-[11px] text-[color:var(--ms-text)]">
                {currentBreaking.title}
              </Link>
              <div className="flex flex-shrink-0 items-center gap-1">
                <span className="text-[10px] text-[color:var(--ms-text-faint)]">{currentBreaking.date}</span>
                <button onClick={prevBreaking} aria-label="Previous" className="flex h-4 w-4 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button onClick={nextBreaking} aria-label="Next" className="flex h-4 w-4 items-center justify-center rounded-full border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)] hover:border-[color:var(--ms-accent)] transition-all duration-200 cursor-pointer">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

      </header>

      {/* ══════════════════════════════════════════
          MOBILE SLIDE-OUT DRAWER
      ══════════════════════════════════════════ */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <div className={`fixed inset-y-0 left-0 z-50 w-[min(90vw,320px)] transform bg-[color:var(--ms-footer-bg)] text-[color:var(--ms-footer-text)] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[color:var(--ms-footer-border)] px-5 py-4">
            <span style={{ fontFamily: '"Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif', fontSize: "18px", fontWeight: 900 }} className="text-white">
              MIRROR STANDARD
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--ms-footer-border)] text-[color:var(--ms-footer-text)]">
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <p className="ms-meta mb-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ms-footer-muted)]">Sections</p>
            <ul className="space-y-1">
              {navCategories.map((item) => {
                const active = isActive(item.href, pathname);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`ms-meta block border px-4 py-3 text-[13px] uppercase tracking-[0.12em] transition-colors ${
                        active
                          ? "border-[color:var(--ms-accent)] bg-white/10 text-white"
                          : "border-[color:var(--ms-footer-border)] bg-white/5 text-[color:var(--ms-footer-text)] hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => { setIsMobileMenuOpen(false); setIsSubscribeOpen(true); }}
              className="mt-5 w-full bg-[color:var(--ms-accent)] py-3 font-[oswald] text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:opacity-90 transition-opacity"
            >
              Subscribe — Free Newsletter
            </button>

            <div className="mt-5">
              <p className="ms-meta mb-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ms-footer-muted)]">Follow Us</p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} title={social.label} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--ms-footer-border)] bg-white/5 text-[color:var(--ms-footer-text)] hover:bg-white/10 transition-colors">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-2 text-[13px] text-[color:var(--ms-footer-muted)]">
              <Link href="/newsletter" className="block hover:text-white transition-colors">Newsletter</Link>
              <Link href="/about" className="block hover:text-white transition-colors">About</Link>
              <Link href="/our-team" className="block hover:text-white transition-colors">Our Team</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="border-t border-[color:var(--ms-footer-border)] px-5 py-4">
            <p className="text-[11px] text-[color:var(--ms-footer-muted)]">© {new Date().getFullYear()} Mirror Standard</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SEARCH OVERLAY
      ══════════════════════════════════════════ */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-[rgba(14,24,37,0.96)] px-4 pt-24 backdrop-blur-md sm:px-6">
          <div className="w-full max-w-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="ms-meta text-[10px] uppercase tracking-[0.24em] text-[color:var(--ms-footer-muted)]">Search Mirror Standard</p>
                <h2 className="ms-editorial-serif mt-1.5 text-[32px] leading-tight tracking-[-0.03em] text-white sm:text-[40px]">
                  Find reporting &amp; analysis
                </h2>
              </div>
              <button type="button" onClick={() => setIsSearchOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ms-footer-border)] text-[color:var(--ms-footer-text)]">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSearch} className="flex items-center gap-3 border border-[color:var(--ms-footer-border)] bg-white/5 p-3">
              <input
                type="text"
                placeholder="Topics, people, companies, stories…"
                className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-[17px] text-white outline-none placeholder:text-[color:var(--ms-footer-muted)]"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" aria-label="Search" className="flex h-11 w-11 items-center justify-center bg-white text-[color:var(--ms-accent)]">
                <Search size={20} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          SUBSCRIBE MODAL
      ══════════════════════════════════════════ */}
      {isSubscribeOpen && (
        <SubscribeModal onClose={() => setIsSubscribeOpen(false)} />
      )}
    </>
  );
}