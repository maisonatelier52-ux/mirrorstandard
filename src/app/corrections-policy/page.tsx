import { Mail, AlertCircle, Edit3, RefreshCcw, CheckCircle2, Clock } from "lucide-react";

export default function CorrectionsPolicy() {
    const mistakeTypes = [
        {
            icon: <Edit3 className="w-5 h-5 text-gray-700 mt-1" />,
            title: "Small errors",
            description:
                "Spelling mistakes, grammar issues, or typos that don’t change the meaning of the story — are corrected quickly without a note.",
        },
        {
            icon: <AlertCircle className="w-5 h-5 text-gray-700 mt-1" />,
            title: "Factual errors",
            description:
                "Names, numbers, dates, or anything that could mislead readers are corrected in the article itself. We also add a clear editor’s note at the bottom explaining what was wrong and how it was fixed.",
        },
        {
            icon: <Clock className="w-5 h-5 text-gray-700 mt-1" />,
            title: "Developing stories",
            description:
                "Sometimes facts change as news unfolds. In those cases, we update the article and mark the update time so readers know they’re seeing the most recent version.",
        },
    ];

    const commitments = [
        "We never delete errors quietly.",
        "We don’t “stealth edit” — if something important is changed, we’ll tell you.",
        "We treat every correction request with respect, no matter who it comes from.",
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <header className="text-center mb-10">
                    <h1 className="text-6xl font-light mb-4 tracking-tight">
                        Corrections Policy
                    </h1>
                    <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-16"></div>
                    <p className="text-lg leading-relaxed font-light max-w-2xl text-start">
                        Getting the facts right is the most important thing we do at Mirror
                        Standard. We check our reporting carefully before it goes live, but journalism is fast-moving and no one is perfect. Sometimes mistakes slip through. When that happens, we believe in being open with our readers: admit it, explain it, and fix it.
                    </p>
                </header>
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-5 pb-3 border-b">
                        How We Handle Mistakes
                    </h2>
                    <p className="font-light leading-relaxed mb-5 text-gray-500">
                        Not all errors are the same, so we respond differently depending on the situation:
                    </p>
                    <div className="space-y-10">
                        {mistakeTypes.map((item, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                {item.icon}
                                <div>
                                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                                    <p className="font-light leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        Where You’ll See Corrections
                    </h2>
                    <p className="text-lg leading-relaxed font-light">
                        Corrections appear directly on the story page, not hidden in a
                        separate section. Our view is simple: if the mistake was made in the article, the correction belongs in the article too.
                    </p>
                </section>
                <section className="mb-10">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        How Readers Can Help
                    </h2>
                    <p className="text-lg leading-relaxed font-light mb-6">
                        We rely on our readers to keep us sharp. If you spot something that
                        looks off, email us with the headline, link, and a note about the
                        issue. We’ll review it quickly and respond once we’ve checked the
                        facts.
                    </p>
                    <a
                        href="mailto:corrections@mirrorstandard.com"
                        title="mail"
                        className="inline-flex items-center space-x-3 text-lg hover:opacity-70 transition-opacity group"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="border-b border-transparent transition-colors">
                            corrections@mirrorstandard.com
                        </span>
                        <RefreshCcw className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </section>
                <section className="mb-20">
                    <h2 className="text-2xl font-light mb-8 pb-3 border-b">
                        Our Commitment to Transparency
                    </h2>
                    <div className="space-y-4">
                        {commitments.map((point, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5" />
                                <span className="text-lg font-light leading-relaxed">
                                    {point}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
                <div className="mt-16 pt-8 border-t border-gray-300">
                </div>
                <section className="text-center">
                    <h2 className="text-2xl font-light mb-8">Why It Matters</h2>
                    <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto">
                        Trust is earned article by article. By being honest about mistakes, we hope to show that we value accuracy over ego. We don’t aim to look flawless; we aim to be reliable.
                    </p>
                </section>
            </div>
        </div>
    );
}
