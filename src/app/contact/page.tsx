import { Mail, Send, AlertCircle, Users, Twitter, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    {
      title: "General Contact",
      description: "Have a question about our work, or something you’d like us to cover?",
      email: "contact@mirrorstandard.com",
      icon: Mail,
    },
    {
      title: "Send Us a Tip",
      description: "The best stories often start with readers. If you know something that should be reported, share it with us.",
      email: "tips@mirrorstandard.com",
      icon: Send,
    },
    {
      title: "Corrections",
      description: "Nobody’s perfect — including us. If you spot a mistake, please tell us so we can fix it quickly and transparently.",
      email: "corrections@mirrorstandard.com",
      icon: AlertCircle,
    },
    {
      title: "Media & Collaboration",
      description: "Journalists, researchers, or organizations who’d like to work with us can reach us here.",
      email: "press@mirrorstandard.com",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-light  mb-4 tracking-tight">
            Get in Touch
          </h1>
          <div className="w-20 h-[2px] bg-gray-600 mx-auto mb-8"></div>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto font-light">
            We may be a digital-first newsroom, but we’re real people behind the bylines — and we want to hear from you. Whether you’ve got a news tip, a correction, or just want to say hello, reaching us is simple.
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
                title="mail"
                className="inline-block text-sm px-4 py-2 rounded-full border border-gray-300 transition-colors"
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
            <Link
              href="https://x.com/MirrorstandardU"
              title="twitter"
              className="flex items-center space-x-2 hover:opacity-70 transition"
            >
              <FaXTwitter className="w-5 h-5" />
              <span>Twitter/X</span>
            </Link>
            <Link
              href="https://www.instagram.com/mirrorstandardusnews/" title="instagram"
              className="flex items-center space-x-2 hover:opacity-70 transition"
            >
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/@mirrorstandardUS" title="youtube"
              className="flex items-center space-x-2 hover:opacity-70 transition"
            >
              <FaYoutube className="w-5 h-5" />
              <span>Youtube</span>
            </Link>
          </div>
        </section>
        <div className="mt-16 pt-8 border-t border-gray-200  text-center">
          <div className="w-8 h-[2px] mx-auto mb-4"></div>
          <p className="font-light italic max-w-xl mx-auto">
            Your input makes us stronger. Mirror Standard is built on community and trust — 
            so if you’ve got feedback, don’t hold back. Drop us a line.
          </p>
        </div>
      </div>
    </div>
  );
}
