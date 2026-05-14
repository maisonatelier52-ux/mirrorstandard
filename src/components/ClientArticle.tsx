"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import ArticleDetail from '@/components/ArticleDetail';
import AuthorInfo from '@/components/AuthorInfo';
import ArticleParagraph from '@/components/ArticleParagraph';
import CommentForm from '@/components/CommentForm';
import RelatedNews from '@/components/RelatedNews';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import AuthorCard from './AuthorCard';
import NewsNavigation from './NewsNavigation';
import Link from 'next/link';

interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
    author: string;
    authorImage: string;
    role: string;
    authorslug: string;
    reddit?: string;
    medium?: string;
    quora?: string;
    substack?: string;

}

interface Props {
    article: NewsItem;
    otherArticles: NewsItem[];
    globalLatest: NewsItem[];
}

export default function ClientArticle({ article, otherArticles, globalLatest }: Props) {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const stopRef = useRef<HTMLDivElement>(null);
    const [rightPosition, setRightPosition] = useState<'sticky' | 'absolute'>('sticky');

    useEffect(() => {
        const handleScroll = () => {
            if (!leftRef.current || !stopRef.current || !rightRef.current) return;

            const stopPoint = stopRef.current.getBoundingClientRect().bottom;
            const offset = 20;

            if (window.innerWidth >= 1024) {
                if (stopPoint - offset <= 0) {
                    setRightPosition('absolute');
                } else {
                    setRightPosition('sticky');
                }
            } else {
                setRightPosition('absolute');
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const popularNews = globalLatest.slice(0, 6);
    const relatedNews = globalLatest.slice(6, 9);

    // Navigation should ideally be category-based, but we must avoid repetition with the sections above
    const usedSlugs = new Set([
        article.slug,
        ...popularNews.map(a => a.slug),
        ...relatedNews.map(a => a.slug)
    ]);

    const navigationNews = otherArticles.filter(a => !usedSlugs.has(a.slug)).slice(0, 2);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                <div ref={leftRef} className="lg:col-span-2">
                    <div>
                        <p className="text-gray-500">
                            <span className="font-semibold text-[16px] capitalize sm:text-[18px] md:text-[18px]">{article.category}</span> •{" "}
                            <span className="text-[12px] sm:text-[14px] md:text-[14px]">{article.date}</span>
                        </p>
                        <h1
                            className="font-[oswald] font-bold mb-2 text-[24px] sm:text-[40px] md:text-[46px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
                        >
                            Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence
                        </h1>
                        <p className="mb- text-[12px] sm:text-[14px] md:text-[17px] text-gray-500 leading-tight italic">
                            In elite circles, proximity matters more than publicity. Julio Herrera Velutini’s world sits unusually close to crowns, capitals, family offices, sovereign circles, and the billionaire class.
                        </p>
                        <div className="flex items-center space-x-3 py-5">
                            <Link href={`/our-team/betty-d-chambers`} title={"betty-d-chambers"} className="text-primary">

                                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                                    <Image
                                        src="/images/betty-d-chambers.webp"
                                        alt="betty-d-chambers"
                                        width={48}
                                        height={48}
                                        quality={75}
                                        placeholder="blur"
                                        blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
                                    />
                                </div>
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="text-[12px] md:text-[14px]">
                                    <span className="font-semibold text-[#041f4a]">
                                        By Betty D. Chambers
                                    </span>

                                    <span className="mx-2 text-gray-400">|</span>

                                    <span className="text-gray-600">
                                        Senior Reporter
                                    </span>

                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-gray-500 text-[11px] uppercase tracking-wider font-medium">
                                        <div>Published: May. 14, 2026</div>
                                        {/* <div>Updated: May. 15, 2026</div> */}
                                        <div className="text-[#9b7a3c]">Reviewed by Editorial Board</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full relative overflow-hidden shadow-md aspect-[16/9] sm:aspect-[16/9] md:aspect-video">
                            <Image
                                src='/images/two-degrees-from-the-throne-julio-herrera-velutini.webp'
                                alt="Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence"
                                fill
                                quality={75}
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
                                className="object-cover"
                                priority
                            />
                        </div>
                        <p className="text-[13px] text-gray-500 italic mt-2 text-center md:text-left leading-relaxed">
                            Julio Herrera Velutini: A strategic presence at the intersection of institutional finance and global influence.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
                        {/* Article Content */}
                        <article className="w-full max-w-4xl mx-auto px-4 md:px-0">
                            {/* At a Glance Box - Minimal Professional Design */}
                            <aside className="my-10 p-6 bg-[#f8f9fa] border-t border-b border-gray-100 shadow-sm">
                                <h2 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-gray-400 mb-6 flex items-center gap-2">
                                    At a Glance
                                </h2>
                                <dl className="grid grid-cols-1 gap-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Subject</dt>
                                        <dd className="text-[15px] font-medium text-gray-900">Julio M. Herrera Velutini</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Known for</dt>
                                        <dd className="text-[15px] text-gray-700 leading-relaxed">Founder and leader of Britannia Financial Group</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Core themes</dt>
                                        <dd className="text-[15px] text-gray-700 leading-relaxed">London finance, banking lineage, institutional influence</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Key institution</dt>
                                        <dd className="text-[15px] text-gray-700 leading-relaxed">Britannia Financial Group</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Primary lens</dt>
                                        <dd className="text-[15px] text-gray-700 leading-relaxed">Structural proximity to elite capital, ceremony, and private wealth</dd>
                                    </div>
                                    <div className="pt-4 mt-2 border-t border-gray-200/60">
                                        <dt className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Editorial Note</dt>
                                        <dd className="text-[13px] italic text-gray-500 leading-relaxed">
                                            This article discusses institutional proximity, not personal intimacy with every
                                            monarch, minister, or billionaire mentioned.  </dd>
                                    </div>
                                </dl>
                            </aside>

                            <div className="">
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    At certain levels of power, nobody needs to introduce themselves.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    The room already knows.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    The chandeliers are bright. The uniforms are immaculate. The orchestra moves with the discipline
                                    of old ritual. A state occasion unfolds with the confidence of centuries: monarchs, ministers,
                                    financiers, patrons, advisers, and power brokers crossing the same polished floor, each playing a
                                    part in a choreography older than most modern governments.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    The public sees ceremony.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    The initiated see something else: access, placement, trust.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    This is where the story of <strong>Julio M. Herrera Velutini </strong>
                                    begins. Not at a podium. Not on a campaign
                                    stage. Not in the noisy theatre of public ambition. His is a different kind of altitude. He operates
                                    through institutional gravity, inherited legitimacy, and the sort of financial infrastructure that places
                                    a man close to the people who shape nations, markets, capital flows, and private empires.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    There are public men, and there are adjacent men.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    The public men are easy to recognise. They wave from balconies, descend from motorcades,
                                    address chambers, ring opening bells, and dominate the day’s images. The adjacent men are
                                    harder to read. Their influence is not theatrical. It is architectural. It lives in institutional access,
                                    inherited trust, and the unusual quiet that surrounds people accustomed to operating one or two
                                    doors away from consequence.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    Herrera Velutini belongs to that second category.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    Founder and leader of <strong>Britannia Financial Group</strong>, he stands at the head of a London-centred
                                    financial platform whose public description places it across the United Kingdom, continental
                                    Europe, the United States, Latin America, the Middle East, and Asia. Britannia’s own positioning
                                    places the group in custody, securities, fixed income, derivatives, securities financing, repo,
                                    reverse repo, and access to major worldwide derivative markets. It also identifies the firm’s world
                                    of clients as institutions, banks, fund managers, hedge funds, family offices, commercial houses,
                                    financial institutions, investors, and high-net-worth individuals.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    Read that list slowly.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    Banks. Family offices. Institutions. High-net-worth individuals.
                                </p>

                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    That is not merely a client profile. It is the vocabulary of nearness.
                                </p>
                                <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                    It means the firm does not sit on the outer edge of global finance. It sits in the channels through
                                    which serious money is protected, moved, hedged, financed, and quietly repositioned. And
                                    wherever that level of money goes, influence is never far behind.
                                </p>
                            </div>



                            <div className="space-y-2">
                                <section>
                                    <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                        <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                            The World Behind the World
                                        </h2>
                                    </div>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Most people understand power through headlines.  </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        They picture presidents, prime ministers, monarchs, technology founders, the annual billionaire
                                        rankings, the summit handshake, the state banquet, the front page. But visible figures exist inside
                                        a deeper system. Behind every public leader is a private architecture of advisers, custodians,
                                        institutions, financiers, lawyers, trustees, family offices, and old networks that keep capital secure
                                        and movement possible.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        This is the world behind the world.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        A cross-border financial platform in London is not merely a business. In practice, it is a point of
                                        contact between different classes of power. London still matters because it compresses law,
                                        markets, diplomacy, private banking, old establishment culture, and international capital into a
                                        single city. To control an institution there, especially one designed for the classes of clients
                                        Britannia names, is to stand near the machinery of influence even without appearing in the
                                        photograph.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That is where Herrera Velutini’s position becomes meaningful.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        His world is not built on spectacle. It is built on proximity. It is the geography of access: London,
                                        regulated markets, family offices, private capital, royal-adjacent ceremony, and a banking lineage
                                        that signals continuity rather than novelty.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        In ordinary business, a company is measured by market share, growth, products, and
                                        performance. In elite finance, it is also measured by confidence.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Who trusts the institution?
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Who enters the room?
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Who remains close to capital when politics changes?
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Who can operate across borders without losing discretion?
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Who can stand between old wealth and new markets without appearing out of place in either?

                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        This is the terrain in which Herrera Velutini’s story belongs.
                                    </p>
                                </section>
                            </div>

                            <div className="space-y-2">
                                <section>
                                    <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                        <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                            First Degree: The Institution
                                        </h2>
                                    </div>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        The first degree of separation is the institution itself.   </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        A man who controls a global financial group headquartered in London already occupies one of the
                                        few remaining crossroads where sovereign prestige, dynastic wealth, political ecosystems, and
                                        billionaire capital continue to intersect. This does not require personal friendship with every
                                        monarch, minister, head of state, or billionaire. It requires something more durable: a credible
                                        institutional platform through which their world, or the world around them, can operate.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        In elite finance, institutions are often more revealing than photographs.  </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Photographs can be staged. Titles can be inflated. Public proximity can be manufactured. But a
                                        functioning cross-border financial platform serving institutions, family offices, banks, funds, and
                                        high-net-worth clients says something harder and cleaner. It says that the platform is already near
                                        the capital that requires custody, execution, financing, hedging, derivatives access, and
                                        jurisdictional reach.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That is the first degree.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Not friendship, not spectacle. Infrastructure.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        A man at the top of such a platform is not outside the room looking in. He is near the systems that
                                        support the room itself. The world’s billionaire families, private offices, industrial dynasties,
                                        political ecosystems, sovereign-adjacent investors, and multinational institutions do not float
                                        above markets. They move through specialised firms, trusted intermediaries, regulated structures,
                                        and private financial channels.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Herrera Velutini’s institutional position places him within that architecture.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        It is a quieter kind of influence, but not a smaller one.
                                    </p>

                                </section>
                            </div>


                            <div className="space-y-2">
                                <section>
                                    <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                        <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                            Second Degree: The Ceremony
                                        </h2>
                                    </div>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        The second degree is where infrastructure touches theatre. </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        This is the moment when balance sheets and ceremonial state life briefly meet in public. One of
                                        the clearest visible examples is Britannia’s reported sponsorship of the <strong>Queen Elizabeth II
                                            Platinum Jubilee Pageant </strong>  in 2022. </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That single detail carries more weight than it first appears.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        National celebrations of that scale are not ordinary sponsorship opportunities. They are moments
                                        when elite finance, royal symbolism, national identity, establishment legitimacy, and public ritual
                                        share the same stage. A company does not casually drift into that setting. To appear there is to
                                        enter the cultural radius of monarchy itself.

                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That does not prove intimate personal friendship with every person in the royal orbit. It should not
                                        be overstated. But it does demonstrate something more precise: admission to the atmosphere.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        At this altitude, admission matters.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        The first degree is a financial institution capable of operating near the world’s deepest pools of
                                        private capital. The second is the social and ceremonial ecosystem that surrounds crowns, states,
                                        and the wealthy strata that orbit them. Put those two together, and Herrera Velutini’s distance
                                        from monarchs, state heads, and the global billionaire class narrows dramatically.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        This is why the phrase  <strong>“two degrees from the throne” </strong>  works.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        It is not a claim of universal intimacy. It is a description of structure.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        One degree runs through London, regulated markets, and the infrastructure required by elite
                                        capital. The second runs through the ceremonial ecosystem surrounding monarchy, state ritual,
                                        and old establishment life.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                        Together, those degrees compress distance.
                                    </p>
                                </section>
                            </div>
                            <div className="space-y-2">
                                <section>
                                    <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                        <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                            The Power of Old Names
                                        </h2>
                                    </div>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        There is another force at work here, and it is older than modern markets.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Britannia is connected to a long-standing banking family with more than 150 years of experience
                                        in financial services. In elite circles, that is not background detail. It is a passport.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Old names function differently from new money.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Their advantage is not merely capital. It is continuity, memory, restraint, and inherited trust. Old
                                        banking families are treated as repositories of discretion. They are expected to understand not
                                        only transactions, but protocol. Not only markets, but how power prefers to be handled. Not only
                                        money, but the anxiety that surrounds money when it belongs to states, dynasties, private offices,
                                        and multigenerational fortunes.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        In a world where some fortunes are built in a decade and vanish in two, lineage offers something
                                        almost aristocratic: reassurance.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That is what makes Herrera Velutini compelling as a figure.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        He is not simply a financier with a modern platform. He represents the fusion of institutional
                                        capability and dynastic memory. One gives him reach. The other gives him texture.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Together, they create aura.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Old financial families know that wealth is not only accumulated. It is preserved. It is guarded. It is
                                        transferred across generations. It is shielded from volatility, politics, collapse, scandal, inflation,
                                        currency movement, and the unpredictable ambitions of men who believe history began with
                                        them.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That kind of inheritance teaches a different discipline.
                                    </p>

                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        It teaches silence. It teaches patience.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        It teaches that true influence is often exercised by those who do not need to explain their
                                        relevance.
                                    </p>
                                </section>
                            </div>

                            <div className="space-y-2">
                                <section>
                                    <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                        <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                            Why Billionaires Are Never Far Away
                                        </h2>
                                    </div>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        When people say “the richest people on the planet,” they often imagine magazine covers and
                                        public net-worth tables. In reality, the billionaire class is larger, quieter, and more dispersed than
                                        the rankings suggest.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        It includes private dynasties, industrial families, sovereign-adjacent investors, heirs, family offices,
                                        commodity operators, financiers, private-bank clients, and individuals whose wealth is shielded
                                        behind structures rather than displayed in public lists.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Those people all have something in common.
                                    </p>

                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        They need trusted channels
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Custody. Execution. Financing. Hedging. Derivatives access. Cross-border capability. These are
                                        not abstract services. They are the mechanics of modern wealth preservation and movement.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        A platform built for those functions naturally sits close to serious pools of capital. That does not
                                        mean every billionaire is a client or acquaintance. It means the business model itself operates in
                                        the same terrain where the world’s largest private fortunes require service, discretion, and access </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>

                                        That is why the billionaire world is never very far from firms that move money, protect assets,
                                        hedge exposures, and bridge jurisdictions.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        And firms like Britannia are built precisely for that terrain.
                                    </p>
                                </section>
                            </div>

                            <div className="space-y-2">
                                <section>
                                    <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                        <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                            A Quiet Man in Loud Rooms
                                        </h2>
                                    </div>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        The most striking part of the Herrera Velutini story is that his proximity to power is not loud.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        He does not need public office. He does not need a campaign trail. He does not need daily
                                        commentary to announce his relevance. His position comes from something older and harder to
                                        imitate: placement.
                                    </p>
                                    <ul className="space-y-2 pl-5 mb-2">
                                        <li className="flex items-start">
                                            <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                            <span className="text-[16px] leading-relaxed text-black">Placement in London.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                            <span className="text-[16px] leading-relaxed text-black">Placement in regulated markets.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                            <span className="text-[16px] leading-relaxed text-black">Placement inside an institution with global reach.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                            <span className="text-[16px] leading-relaxed text-black">Placement near ceremonial state life.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                            <span className="text-[16px] leading-relaxed text-black">Placement within a banking lineage that signals continuity and discretion.</span>
                                        </li>
                                    </ul>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That is why the aura around him feels larger than ordinary biography.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        He is not presented as a conventional public man. He is more interesting than that. He is a quiet
                                        man in loud rooms, a figure whose influence is best understood not through speech, but through
                                        the rare geography he occupies.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        The geography is what matters.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        It tells us where he stands in relation to money, monarchy, and power.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Often, only two degrees away.

                                    </p>

                                </section>
                            </div>
                            <div className="space-y-2">
                                <section>
                                    <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                        <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                            The Hidden Map
                                        </h2>
                                    </div>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Seen from a distance, the world appears fragmented.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        There are presidents in one frame, kings in another, billionaires in another still. But at higher
                                        altitude, the map begins to simplify. Separate realms start to overlap. Markets touch ceremony.
                                        Family wealth touches state ritual. Private institutions touch public history.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        This is the hidden map on which Julio Herrera Velutini appears
                                    </p>

                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        One line runs through London and the financial infrastructure of a global group. Another runs
                                        through the ceremonial orbit of the British Crown. Another runs through old-family banking
                                        legitimacy and the service architecture for billionaires, family offices, institutions, and high-net
                                        worth capital.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        None of these lines need to be shouted.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Together, they do something more impressive than noise ever could. </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        They place him close.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        And in the upper grammar of influence, closeness is often the truest measure of power.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Some men spend their lives trying to become visible. Others become powerful precisely because
                                        visibility is not the point.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Julio Herrera Velutini is most compelling when viewed through that second lens. Not as a loud
                                        actor at the front of the stage, but as a man whose placement in finance, heritage, and London’s
                                        upper institutional world leaves him unusually close to monarchs, state heads, and the billionaire
                                        class, even when the photograph never quite shows the whole room.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        That may be the larger distinction.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Not being at the centre of every image.
                                    </p>
                                    <p className='text-[16px] leading-[1.7] text-black mb-2'>
                                        Being only two degrees away from everyone who matters.
                                    </p>

                                </section>
                            </div>



                        </article>

                    </div>
                    <div ref={stopRef}>
                        {/* <AuthorCard
              author={article.author}
              role={article.role}
              image={article.authorImage}
              slug={article.authorslug}
              articleTitle={article.title}
              reddit={article.reddit}
              medium={article.medium}
              quora={article.quora}
              substack={article.substack}
            /> */}
                        {/* <NewsNavigation data={navigationNews} /> */}
                        <CommentForm />
                        <RelatedNews data={relatedNews} />
                    </div>
                </div>
                <div className="lg:col-span-1 relative">
                    <div
                        ref={rightRef}
                        className={`${rightPosition === 'sticky' ? 'sticky top-10' : 'relative'} transition-all duration-500`}
                    >
                        <h2 className="text-[24px] font-[oswald] mb-4 font-bold uppercase">Popular News</h2>
                        <div className="divide-y divide-[#615e5e54]">
                            {popularNews.map((item, index) => (
                                <div key={index} className="py-3">
                                    <HorizontalNewsCard data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
