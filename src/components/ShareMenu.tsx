    "use client";

    import { useEffect, useState } from "react";
    import {
        FaFacebookF,
        FaLinkedinIn,
        FaRedditAlien,
        FaWhatsapp,
    } from "react-icons/fa";
    import { FiMail, FiShare, FiX } from "react-icons/fi";
    import { SiX } from "react-icons/si";

    export default function ShareMenu({ title }: { title: string }) {
        const [open, setOpen] = useState(false);
        const [url, setUrl] = useState("");

        useEffect(() => {
            setUrl(window.location.href);
        }, []);

        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        return (
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center cursor-pointer gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium transition"
                >
                    <span>Share</span>
                    <FiShare />
                </button>

                {open && (
                    <div className="absolute right-0 mt-3 md:w-72 w-50 bg-white border rounded-xl shadow-xl p-4 z-50">
                        <div className="relative mb-3">
                            <span className="font-semibold text-black text-sm">SHARE</span>
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close share menu"
                                className="absolute right-0 cursor-pointer top-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
                            >
                                <FiX className="text-sm text-gray-700" />
                            </button>
                        </div>
                        <div className="space-y-1">
                            <ShareItem
                                icon={<FaWhatsapp className="text-green-500" />}
                                label="WhatsApp"
                                link={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                            />


                            <ShareItem
                                icon={<SiX className="text-black" />}
                                label="Twitter (X)"
                                link={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                            />

                            <ShareItem
                                icon={<FaFacebookF className="text-blue-600" />}
                                label="Facebook"
                                link={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                            />

                            <ShareItem
                                icon={<FaLinkedinIn className="text-blue-700" />}
                                label="LinkedIn"
                                link={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                            />

                            <ShareItem
                                icon={<FaRedditAlien className="text-orange-500" />}
                                label="Reddit"
                                link={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    function ShareItem({
        icon,
        label,
        link,
    }: {
        icon: React.ReactNode;
        label: string;
        link: string;
    }) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-black hover:bg-gray-100 text-sm transition"
            >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
            </a>
        );
    }
