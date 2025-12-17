import Link from "next/link";

export default function StaffByline() {
  return (
    <article className="max-w-4xl mx-auto overflow-hidden mb-12 py-4">
      <div className=" px-8 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Mirror Standard Staff
        </h1>
        <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-6"></div>
      </div>
      <div className="px-8">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-600 text-xl leading-relaxed mb-6">
            When a story carries the byline{" "}
            <strong className="text-gray-500">Mirror Standard Staff</strong>, it means the article was a team effort. Sometimes multiple reporters and editors collaborated on a piece, other times an external journalist we trust contributed. Either way, it reflects the work of our newsroom as a whole.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            These stories often involve research, interviews, fact-checking, and careful editing from several people. Instead of listing every contributor on every story, we credit the collective:
            <strong className="text-bold "> Mirror Standard Staff</strong> It’s our way of showing that good journalism is rarely the work of just one person.
          </p>
        </div>
        <div className="border border-[#615e5e54] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Our Editorial Standards
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fact Verification</h3>
              <p className="text-gray-500">Every fact is double-checked before publication</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Clear Separation</h3>
              <p className="text-gray-500">Opinion and news reporting are distinctly separated</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Corrections</h3>
              <p className="text-gray-500">Errors are corrected promptly and transparently</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Meet the People Behind the Stories
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Curious about who makes up the Mirror Standard Staff?
          </p>

          <Link
            href="/our-team"
            title="our team"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            View Our Team
          </Link>
        </div>
        <div className="border-t border-gray-200 my-12"></div>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Questions or Story Tips?
          </h2>
          <p className="text-gray-500 mb-6">
            Our editorial team is always ready to hear from you.
          </p>
          <a
            href="mailto:staff@mirrorstandard.com"
            aria-label="mail"
            title="mail"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Editorial Team
          </a>
        </div>
      </div>
    </article>
  );
}