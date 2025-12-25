import { Mail, Send, AlertCircle, Users } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    {
      title: "Editorial & General Contact",
      description: "Questions about our reporting, coverage ideas, or editorial matters.",
      email: "contact@mirrorstandard.com",
      icon: Mail,
    },
    {
      title: "Confidential News Tips",
      description: "Share information that you believe should be investigated or reported.",
      email: "tips@mirrorstandard.com",
      icon: Send,
    },
    {
      title: "Corrections",
      description: "If you believe we made an error, please notify us so we can correct it promptly.",
      email: "corrections@mirrorstandard.com",
      icon: AlertCircle,
    },
    {
      title: "Media & Press Inquiries",
      description: "Journalists, researchers, or organizations seeking collaboration.",
      email: "press@mirrorstandard.com",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ✅ CONTACT PAGE STRUCTURED DATA (CRITICAL) */}
      <Script
        id="structured-data-contactpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Mirror Standard",
            "url": "https://www.mirrorstandard.com/contact",
            "publisher": {
              "@type": "NewsMediaOrganization",
              "@id": "https://www.mirrorstandard.com/#organization"
            }
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-light mb-4 tracking-tight">
            Get in Touch
          </h1>
          <div className="w-20 h-[2px] bg-gray-600 mx-auto mb-8"></div>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Mirror Standard is an independent newsroom. We welcome tips, corrections,
            and communication from readers, journalists, and organizations.
          </p>
        </header>

        <section className="grid gap-12 mb-20">
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <item.icon className="w-6 h-6" />
                <h2 className="text-xl font-medium">
                  {item.title}
                </h2>
              </div>
              <p className="font-light leading-relaxed mb-3">
                {item.description}
              </p>
              <a
                href={`mailto:${item.email}`}
                className="inline-block text-sm px-4 py-2 rounded-full border border-gray-300 hover:opacity-80 transition"
              >
                {item.email}
              </a>
            </div>
          ))}
        </section>

        <section className="text-center mb-20">
          <h2 className="text-2xl font-light mb-8">
            Stay Connected
          </h2>
          <div className="flex justify-center gap-10">
            <Link href="https://x.com/MirrorstandardU" className="flex items-center gap-2 hover:opacity-70">
              <FaXTwitter className="w-5 h-5" />
              <span>X (Twitter)</span>
            </Link>
            <Link href="https://www.instagram.com/mirrorstandardusnews/" className="flex items-center gap-2 hover:opacity-70">
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
            <Link href="https://www.youtube.com/@mirrorstandardUS" className="flex items-center gap-2 hover:opacity-70">
              <FaYoutube className="w-5 h-5" />
              <span>YouTube</span>
            </Link>
          </div>
        </section>

        {/* ✅ LOCATION + LEGAL SIGNAL (IMPORTANT FOR GOOGLE NEWS) */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm font-light text-gray-600 max-w-xl mx-auto">
            Mirror Standard is an independent digital publication operated by a
            distributed editorial team based in the United States.
          </p>
        </div>
      </div>
    </div>
  );
}
