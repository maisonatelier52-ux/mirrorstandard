import React from "react";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { getSortedNews } from "../lib/news";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { ChevronRight } from "lucide-react";

const categories = [
  { slug: "business",      label: "Business" },
  { slug: "politics",      label: "Politics" },
  { slug: "technology",    label: "Technology" },
  { slug: "education",     label: "Education" },
  { slug: "health",        label: "Health" },
  { slug: "sports",        label: "Sports" },
  { slug: "science",       label: "Science" },
  { slug: "entertainment", label: "Entertainment" },
  { slug: "world",         label: "World" },
];

const newsroomLinks = [
  { href: "/about",                    label: "About Us",           title: "About Mirror Standard – Our mission and editorial values" },
  { href: "/our-team",                 label: "Our Team",           title: "Meet the Mirror Standard editorial team" },
  { href: "/contact",                  label: "Contact Us",         title: "Contact Mirror Standard" },
  { href: "/editorial-policy",         label: "Editorial Policy",   title: "Mirror Standard editorial policy and standards" },
  { href: "/corrections-policy",       label: "Corrections Policy", title: "Mirror Standard corrections and clarifications policy" },
  { href: "/source-methodology",       label: "Source Methodology", title: "How Mirror Standard sources and verifies information" },
  { href: "/advertise",                label: "Advertise With Us",  title: "Advertise with Mirror Standard" },
  { href: "/careers",                  label: "Careers",            title: "Careers at Mirror Standard" },
];

const trustLinks = [
  { href: "/ownership-and-funding",                        label: "Ownership & Funding",    title: "Mirror Standard ownership and funding disclosure" },
  { href: "/advertising-and-sponsored-content-policy",     label: "Advertising Policy",     title: "Mirror Standard advertising and sponsored content policy" },
  { href: "/right-of-reply-policy",                        label: "Right of Reply",         title: "Mirror Standard right of reply policy" },
  { href: "/corrections-policy",                           label: "Corrections Policy",     title: "Mirror Standard corrections policy" },
  { href: "/legal",                                        label: "Legal",                  title: "Mirror Standard legal notices" },
  { href: "/privacy-policy",                               label: "Privacy Policy",         title: "Mirror Standard privacy policy" },
  { href: "/terms-and-conditions",                         label: "Terms & Conditions",     title: "Mirror Standard terms and conditions" },
];

const socialLinks = [
  { href: "https://x.com/Mirrorstan68694",                     label: "Follow Mirror Standard on X",        icon: <FaXTwitter size={16} /> },
  { href: "https://www.instagram.com/mirrorstandardnews2026/", label: "Follow Mirror Standard on Instagram", icon: <FaInstagram size={16} /> },
  { href: "https://www.youtube.com/@mirrorstandardUS",         label: "Watch Mirror Standard on YouTube",    icon: <FaYoutube size={16} /> },
  { href: "#",                                                 label: "Follow Mirror Standard on Facebook",  icon: <FaFacebookF size={16} /> },
];

const contactInfo = [
  { icon: <MdOutlineEmail size={16} />, value: "editorial@mirrorstandard.com", href: "mailto:editorial@mirrorstandard.com", title: "Email Mirror Standard editorial team" },
  { icon: <FiPhone size={15} />,        value: "+1 (202) 555-0143",             href: "tel:+12025550143",                   title: "Call Mirror Standard" },
  { icon: <FiMapPin size={15} />,       value: "1490 K Street NW, Suite 900\nWashington, DC 20005, USA", href: null, title: null },
];

const bottomLinks = [
  { href: "/privacy-policy",      label: "Privacy Policy",      title: "Mirror Standard privacy policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions", title: "Mirror Standard terms and conditions" },
  { href: "/our-team",            label: "Our Team",            title: "Meet the Mirror Standard team" },
  { href: "/contact",             label: "Contact Us",          title: "Contact Mirror Standard" },
];

export default function Footer() {
  const sortedNews = getSortedNews();
  const editorPicks = sortedNews.slice(0, 3);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0b1629] text-white">
      <div className="mx-auto px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.6fr] lg:gap-0">

          {/* Col 1: Brand */}
          <div className="lg:pr-10">
            <Link href="/" title="Mirror Standard – Trusted News, Politics & Business" className="inline-block mb-1">
              <span className="text-[26px] sm:text-[28px] font-bold tracking-[-0.03em] text-white leading-none">
                Mirror Standard
              </span>
            </Link>
            <p className="mt-3 text-[14px] leading-[1.7] text-white/55 max-w-[260px]">
              Independent reporting and analysis on the issues that shape our world. Trusted journalism. Real impact.
            </p>
            <hr className="my-6 border-white/10" />
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] text-white/60">
                  <span className="mt-[2px] flex-shrink-0 text-white/40">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} title={item.title ?? undefined} className="hover:text-white transition-colors leading-[1.5]">
                      {item.value}
                    </a>
                  ) : (
                    <span className="leading-[1.5] whitespace-pre-line">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-all duration-200"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Newsroom */}
          <div className="lg:border-l lg:border-white/10 lg:px-8">
            <FooterColumnHeading>Newsroom</FooterColumnHeading>
            <ul className="space-y-0">
              {newsroomLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} linkTitle={link.title}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 3: Sections */}
          <div className="lg:border-l lg:border-white/10 lg:px-8">
            <FooterColumnHeading>Sections</FooterColumnHeading>
            <ul className="space-y-0">
              {categories.map((cat) => (
                <FooterLink key={cat.slug} href={`/${cat.slug}`} linkTitle={`${cat.label} news – Mirror Standard`} capitalize>
                  {cat.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 4: Standards */}
          <div className="lg:border-l lg:border-white/10 lg:px-8">
            <FooterColumnHeading>Standards</FooterColumnHeading>
            <ul className="space-y-0">
              {trustLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} linkTitle={link.title}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 5: Editor Picks */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <FooterColumnHeading>Editor Picks</FooterColumnHeading>
            <div className="space-y-4">
              {editorPicks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.category}/${item.slug}`}
                  title={item.title}
                  className="group flex gap-3 rounded-xl border border-white/8 bg-white/4 p-3 hover:bg-white/8 transition-colors duration-200"
                >
                  <div className="relative h-[76px] w-[76px] flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src={item.image} alt={item.title} fill sizes="76px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">{item.category}</p>
                    <h3 className="mt-1 text-[13.5px] font-semibold leading-[1.3] text-white/90 line-clamp-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-white/40">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Mirror Standard. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {bottomLinks.map((link, i) => (
                <span key={link.href} className="flex items-center gap-5">
                  <Link href={link.href} title={link.title} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {i < bottomLinks.length - 1 && (
                    <span className="text-white/20 hidden sm:inline">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-[18px] font-bold tracking-[-0.01em] text-white">{children}</p>
      <div className="mt-2 h-[2px] w-8 bg-white/30 rounded-full" />
    </div>
  );
}

function FooterLink({
  href,
  children,
  capitalize,
  linkTitle,
}: {
  href: string;
  children: React.ReactNode;
  capitalize?: boolean;
  linkTitle?: string;
}) {
  return (
    <li>
      <Link
        href={href}
        title={linkTitle}
        className={`flex items-center justify-between border-b border-white/7 py-[10px] text-[13.5px] text-white/55 hover:text-white transition-colors ${capitalize ? "capitalize" : ""}`}
      >
        <span>{children}</span>
        <ChevronRight size={13} className="text-white/25 flex-shrink-0" />
      </Link>
    </li>
  );
}
// import React from "react";
// import { FaInstagram, FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";
// import Link from "next/link";
// import Image from "next/image"; // still used for Editor Picks article thumbnails
// import { getSortedNews } from "../lib/news";
// import { MdOutlineEmail } from "react-icons/md";
// import { FiPhone, FiMapPin } from "react-icons/fi";
// import { ChevronRight } from "lucide-react";

// const categories = [
//   "business",
//   "politics",
//   "technology",
//   "education",
//   "health",
//   "sports",
//   "science",
//   "entertainment",
//   "world",
// ];

// const newsroomLinks = [
//   { href: "/about", label: "About Us" },
//   { href: "/our-team", label: "Our Team" },
//   { href: "/contact", label: "Contact Us" },
//   { href: "/editorial-policy", label: "Editorial Policy" },
//   { href: "/corrections-policy", label: "Corrections Policy" },
//   { href: "/source-methodology", label: "Source Methodology" },
//   { href: "/advertise", label: "Advertise With Us" },
//   { href: "/careers", label: "Careers" },
// ];

// const trustLinks = [
//   { href: "/ownership-and-funding", label: "Ownership & Funding" },
//   { href: "/advertising-and-sponsored-content-policy", label: "Advertising Policy" },
//   { href: "/right-of-reply-policy", label: "Right of Reply" },
//   { href: "/corrections-policy", label: "Corrections Policy" },
//   { href: "/legal", label: "Legal" },
//   { href: "/privacy-policy", label: "Privacy Policy" },
//   { href: "/terms-and-conditions", label: "Terms & Conditions" },
// ];

// const socialLinks = [
//   { href: "https://x.com/Mirrorstan68694", label: "X", icon: <FaXTwitter size={16} /> },
//   { href: "https://www.instagram.com/mirrorstandardnews2026/", label: "Instagram", icon: <FaInstagram size={16} /> },
//   { href: "https://www.youtube.com/@mirrorstandardUS", label: "YouTube", icon: <FaYoutube size={16} /> },
//   { href: "#", label: "Facebook", icon: <FaFacebookF size={16} /> },
// ];

// const contactInfo = [
//   { icon: <MdOutlineEmail size={16} />, value: "editorial@mirrorstandard.com", href: "mailto:editorial@mirrorstandard.com" },
//   { icon: <FiPhone size={15} />, value: "+1 (202) 555-0143", href: "tel:+12025550143" },
//   { icon: <FiMapPin size={15} />, value: "1490 K Street NW, Suite 900\nWashington, DC 20005, USA", href: null },
// ];

// const bottomLinks = [
//   { href: "/privacy-policy", label: "Privacy Policy" },
//   { href: "/terms-and-conditions", label: "Terms & Conditions" },
//   { href: "/our-team", label: "Our Team" },
//   { href: "/contact", label: "Contact Us" },
// ];

// export default function Footer() {
//   const sortedNews = getSortedNews();
//   const editorPicks = sortedNews.slice(0, 3);
//   const year = new Date().getFullYear();

//   return (
//     <footer className="border-t border-white/10 bg-[#0b1629] text-white">
//       {/* ── Main grid ── */}
//       <div className="mx-auto px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
//         <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.6fr] lg:gap-0">

//           {/* ── Col 1: Brand ── */}
//           <div className="lg:pr-10">
//             <Link href="/" title="Mirror Standard home" className="inline-block mb-1">
//               <span className="text-[26px] sm:text-[28px] font-bold tracking-[-0.03em] text-white leading-none">
//                 Mirror Standard
//               </span>
//             </Link>

//             <p className="mt-3 text-[14px] leading-[1.7] text-white/55 max-w-[260px]">
//               Independent reporting and analysis on the issues that shape our world. Trusted journalism. Real impact.
//             </p>

//             <hr className="my-6 border-white/10" />

//             {/* Contact */}
//             <ul className="space-y-3">
//               {contactInfo.map((item, i) => (
//                 <li key={i} className="flex items-start gap-3 text-[13.5px] text-white/60">
//                   <span className="mt-[2px] flex-shrink-0 text-white/40">{item.icon}</span>
//                   {item.href ? (
//                     <a href={item.href} className="hover:text-white transition-colors leading-[1.5]">
//                       {item.value}
//                     </a>
//                   ) : (
//                     <span className="leading-[1.5] whitespace-pre-line">{item.value}</span>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* Social */}
//             <div className="mt-7">
//               <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
//                 Follow Us
//               </p>
//               <div className="flex items-center gap-3">
//                 {socialLinks.map((s) => (
//                   <Link
//                     key={s.label}
//                     href={s.href}
//                     title={s.label}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-all duration-200"
//                   >
//                     {s.icon}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── Col 2: Newsroom ── */}
//           <div className="lg:border-l lg:border-white/10 lg:px-8">
//             <FooterColumnHeading>Newsroom</FooterColumnHeading>
//             <ul className="space-y-0">
//               {newsroomLinks.map((link) => (
//                 <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* ── Col 3: Sections ── */}
//           <div className="lg:border-l lg:border-white/10 lg:px-8">
//             <FooterColumnHeading>Sections</FooterColumnHeading>
//             <ul className="space-y-0">
//               {categories.map((cat) => (
//                 <FooterLink key={cat} href={`/${cat}`} capitalize>{cat}</FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* ── Col 4: Standards ── */}
//           <div className="lg:border-l lg:border-white/10 lg:px-8">
//             <FooterColumnHeading>Standards</FooterColumnHeading>
//             <ul className="space-y-0">
//               {trustLinks.map((link) => (
//                 <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* ── Col 5: Editor Picks ── */}
//           <div className="lg:border-l lg:border-white/10 lg:pl-8">
//             <FooterColumnHeading>Editor Picks</FooterColumnHeading>

//             <div className="space-y-4">
//               {editorPicks.map((item) => (
//                 <Link
//                   key={item.slug}
//                   href={`/${item.category}/${item.slug}`}
//                   title={item.title}
//                   className="group flex gap-3 rounded-xl border border-white/8 bg-white/4 p-3 hover:bg-white/8 transition-colors duration-200"
//                 >
//                   <div className="relative h-[76px] w-[76px] flex-shrink-0 overflow-hidden rounded-lg">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       sizes="76px"
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
//                       {item.category}
//                     </p>
//                     <h3 className="mt-1 text-[13.5px] font-semibold leading-[1.3] text-white/90 line-clamp-3 group-hover:text-white transition-colors">
//                       {item.title}
//                     </h3>
//                     <p className="mt-1.5 text-[11px] text-white/40">{item.date}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom bar ── */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10">
//           <div className="flex flex-col gap-3 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
//             <p>© {year} Mirror Standard. All rights reserved.</p>
//             <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
//               {bottomLinks.map((link, i) => (
//                 <span key={link.href} className="flex items-center gap-5">
//                   <Link href={link.href} className="hover:text-white transition-colors">
//                     {link.label}
//                   </Link>
//                   {i < bottomLinks.length - 1 && (
//                     <span className="text-white/20 hidden sm:inline">|</span>
//                   )}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ── Helpers ── */

// function FooterColumnHeading({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="mb-5">
//       <p className="text-[18px] font-bold tracking-[-0.01em] text-white">{children}</p>
//       <div className="mt-2 h-[2px] w-8 bg-white/30 rounded-full" />
//     </div>
//   );
// }

// function FooterLink({
//   href,
//   children,
//   capitalize,
// }: {
//   href: string;
//   children: React.ReactNode;
//   capitalize?: boolean;
// }) {
//   return (
//     <li>
//       <Link
//         href={href}
//         className={`flex items-center justify-between border-b border-white/7 py-[10px] text-[13.5px] text-white/55 hover:text-white transition-colors ${capitalize ? "capitalize" : ""}`}
//       >
//         <span>{children}</span>
//         <ChevronRight size={13} className="text-white/25 flex-shrink-0" />
//       </Link>
//     </li>
//   );
// }