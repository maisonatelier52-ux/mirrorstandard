import { User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OurTeam() {
  const teamMembers = [
    { name: "Michael Y. Gentry", slug: "michael-y-gentry" },
    { name: "Victor V. Haley", slug: "victor-v-haley" },
    { name: "Betty D. Chambers", slug: "betty-d-chambers" },
    { name: "Jacqueline L. Wood", slug: "jacqueline-l-wood" },
    { name: "Margaret J. Kern", slug: "margaret-j-kern" },
    { name: "Mirror Standard Staff", slug: "mirror-standard-staff" },
  ];

  return (
     <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
    <header className="text-center relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-tighter mb-4 md:mb-4 leading-none">
        Our Team
      </h1>
       <div className="w-20 h-[2px] bg-gray-600 mx-auto mb-4"></div>
    </header>
    <section className="mb-7 sm:mb-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-12 transition-all duration-500 group">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4 sm:mb-4">
            <div className="w-12 sm:w-16 h-px bg-gray-600"></div>
            <h2 className="text-2xl sm:text-3xl font-light">Our Mission</h2>
          </div>
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed font-light text-gray-500">
            <p>
              We’re a small, independent group of journalists working together online. Every story you see here is a mix of careful reporting, collaboration, and editing — and you, our readers, are part of that process. We’re digital-first, independent, and driven by one goal: clear, unbiased reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-10 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
        <div className="w-16 sm:w-32 h-px"></div>
        <h2 className="text-3xl sm:text-4xl font-thin tracking-wider">Leadership</h2>
        <div className="flex-1 h-px bg-[#615e5e54]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
        <EditorCard 
          name="Michael Y. Gentry" 
          title="Editor-in-Chief"
          desc="Michael keeps an eye on everything we publish, making sure our stories are fair, accurate, and trustworthy. Years of investigative reporting have taught him that the truth matters more than speed."
          linkText="See Michael’s full bio"
          index="01"
          slug="michael-y-gentry"
        />
        <EditorCard 
          name="Victor V. Haley" 
          title="Managing Editor"
          desc="Victor makes sure our reporting runs smoothly and deadlines are met. He loves digging into complicated topics and helping readers understand them without losing nuance."
          linkText="Learn more about Victor"
          index="02"
          slug="victor-v-haley"
        />
      </div>
    </section>
    <section className="mb-10 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
        <div className="w-16 sm:w-32 h-px"></div>
        <h2 className="text-3xl sm:text-4xl font-thin tracking-wider">Reporting Team</h2>
        <div className="flex-1 h-px bg-[#615e5e54]"></div>
      </div>
      
      <div className="flex flex-col gap-6 sm:gap-8">
        <ReporterCard 
          name="Betty D. Chambers" 
          specialty="Politics & Policy"
          desc="Betty writes about politics and policy. She’s always focused on giving context that helps readers make sense of the news. Curious?"
          linkText="Read Betty’s full bio"
          index="03"
          slug="betty-d-chambers"
        />
        <ReporterCard 
          name="Jacqueline L. Wood" 
          specialty="Technology & Culture"
          desc="Jacqueline covers technology, culture, and business, with a knack for highlighting the human stories behind the headlines."
          linkText="Discover Jacqueline’s work"
          index="04"
          slug="jacqueline-l-wood"
        />
        <ReporterCard 
          name="Margaret J. Kern" 
          specialty="Finance & Markets"
          desc="Margaret covers finance and global markets, breaking down complex trends so they’re understandable and relevant."
          linkText="Check out Margaret’s bio"
          index="05"
          slug="margaret-j-kern"
        />
      </div>
    </section>
    <section className="mb-10 sm:mb-12">
      <div className="rounded-3xl p-6 sm:p-10 md:p-16 hover:scale-[1.02] transition-transform duration-500">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="text-6xl sm:text-8xl font-thin text-gray-500 transition-colors duration-300 mb-4 md:mb-0">06</div>
            <div className="flex-1 pt-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4 sm:mb-6">Mirror Standard Staff</h2>
              <p className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-500 mb-6 font-light">
                When a story is by <strong className="font-semibold">Mirror Standard Staff</strong>, it means multiple team members worked together — or an external reporter contributed. Instead of listing everyone individually, we credit the piece to the collective effort. Think of it as our newsroom speaking as one voice.
              </p>
              <Link href='/our-team/mirror-standard-staff' title="mirrorstandard staff">
                <div className="inline-flex cursor-pointer items-center gap-2 sm:gap-3 hover:gap-6 transition-all duration-300 group border-b border-black/20 pb-1">
                  <span className="font-medium text-sm sm:text-base">Learn more about this byline</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-10 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
        <div className="w-16 sm:w-32 h-px"></div>
        <h2 className="text-3xl sm:text-4xl font-thin tracking-wider">All Authors</h2>
        <div className="flex-1 h-px bg-[#615e5e54]"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {teamMembers.map((member, i) => (
          <AuthorLink key={i} name={member.name} slug={member.slug} index={String(i + 1).padStart(2, '0')} />
        ))}
      </div>
    </section>
  </div>
</div>
  );
}

function EditorCard({ name, title, desc, linkText, index,slug }: { 
  name: string; 
  title: string; 
  desc: string; 
  linkText: string;
  index: string;
  slug:string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#615e5e54]  transition-all duration-500 h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="text-6xl font-thin text-gray-500 transition-colors duration-300">
            {index}
          </div>
          <div className="bg-[#615e5e54] rounded-full p-3  transition-colors duration-300">
            <User className="w-5 h-5" />
          </div>
        </div>
      <Link key={slug} href={`/our-team/${slug}`} title={name} className="text-primary">
        <h3 className="text-2xl font-light mb-2  transition-colors duration-300">{name}</h3>
        </Link>
        <div className="text-sm font-medium text-gray-500 mb-6 tracking-wider uppercase">{title}</div>
        <p className="text-gray-500 leading-relaxed mb-8 font-light">{desc}</p>
        <button className="inline-flex items-center gap-3 hover:gap-6 transition-all duration-300 border-b border-[#615e5e54] pb-1">   
          <span className="text-sm font-medium tracking-wide">{linkText}</span>
      <Link key={slug} href={`/our-team/${slug}`} title={name} className="text-primary ">
          <ArrowRight className="w-4 h-4" />
          </Link>
        </button>
      </div>
    </div>
  );
}

function ReporterCard({ name, specialty, desc, linkText, index, slug }: { 
  name: string; 
  specialty: string; 
  desc: string; 
  linkText: string; 
  index: string;
  slug:string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className=" backdrop-blur-sm rounded-2xl p-8 border border-[#615e5e54] transition-all duration-500 flex items-start gap-8">
        <div className="text-6xl font-thin text-gray-500 transition-colors duration-300 mt-2">
          {index}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full"></div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">{specialty}</div>
          </div>
         <Link key={slug} href={`/our-team/${slug}`} title={name} className="text-primary">
          <h3 className="text-2xl font-light mb-4 transition-colors duration-300">{name}</h3>
          </Link>
          <p className="text-gray-500 leading-relaxed mb-6 font-light">{desc}</p>
          <button className="inline-flex items-center gap-3 hover:gap-6 transition-all duration-300 border-b border-[#615e5e54] pb-1">
            <span className="text-sm font-medium tracking-wide">{linkText}</span>
            <Link key={slug} href={`/our-team/${slug}`} title={name} className="text-primary">
            <ArrowRight className="w-4 h-4" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function AuthorLink({ name, slug, index }: { name: string; slug: string; index: string }) {
  return (
    <div className="group cursor-pointer">
        <Link href={`/our-team/${slug}`} title={name}>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#615e5e54] transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-thin text-gray-500 transition-colors duration-300">
              {index}
            </div>
            <span className="font-light transition-colors duration-300">{name}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-2 transition-all duration-300" />
        </div>
      </div>
        </Link>
    </div>
  );
}