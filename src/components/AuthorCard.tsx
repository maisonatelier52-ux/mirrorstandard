// // AuthorCard.jsx

// AuthorCard.tsx

import Link from "next/link";
import ShareMenu from "./ShareMenu";
import { FaReddit, FaQuora } from "react-icons/fa";
import { SiSubstack, SiMedium } from "react-icons/si";

interface AuthorProps {
  author: string;
  role: string;
  articleTitle: string;

  reddit?: string;
  medium?: string;
  quora?: string;
  substack?: string;
}

const AuthorCard: React.FC<AuthorProps> = ({
  author,
  role,
  articleTitle,
  reddit,
  medium,
  quora,
  substack,
}) => {
  const socialLinks = [
    { icon: <FaReddit />, url: reddit, title: `${author} on Reddit` },
    { icon: <SiMedium />, url: medium, title: `${author} on Medium` },
    { icon: <FaQuora />, url: quora, title: `${author} on Quora` },
    { icon: <SiSubstack />, url: substack, title: `${author} on Substack` },
  ];

  return (
    <div className="rounded-[24px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-5 py-6 shadow-[0_18px_50px_rgba(21,22,18,0.05)] sm:px-6">
      <div className="flex flex-col gap-5">
        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
            Written By
          </p>

          <p className="mt-1 text-[22px] font-semibold leading-7 text-[color:var(--ms-text)]">
            {author}
          </p>

          <p className="mt-1 text-[14px] font-medium capitalize leading-6 text-[color:var(--ms-text-soft)]">
            {role}
          </p>

          {(reddit || medium || quora || substack) && (
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                {socialLinks.map(
                  (social, index) =>
                    social.url && (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        // SEO FIX: descriptive title on every social link
                        title={social.title}
                        aria-label={social.title}
                        className="text-[color:var(--ms-text-faint)] transition-colors text-lg hover:text-[color:var(--ms-accent)]"
                      >
                        {social.icon}
                      </Link>
                    ),
                )}
              </div>

              <div className="sm:ml-auto scale-95">
                <ShareMenu title={articleTitle} />
              </div>
            </div>
          )}

          {!reddit && !medium && !quora && !substack && (
            <div className="mt-5">
              <ShareMenu title={articleTitle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
// import Link from "next/link";
// import ShareMenu from "./ShareMenu";
// import { FaReddit, FaQuora } from "react-icons/fa";
// import { SiSubstack, SiMedium } from "react-icons/si";

// interface AuthorProps {
//   author: string;
//   role: string;
//   articleTitle: string;

//   reddit?: string;
//   medium?: string;
//   quora?: string;
//   substack?: string;
// }

// const AuthorCard: React.FC<AuthorProps> = ({
//   author,
//   role,
//   articleTitle,
//   reddit,
//   medium,
//   quora,
//   substack,
// }) => {
//   const socialLinks = [
//     { icon: <FaReddit />, url: reddit, title: "reddit" },
//     { icon: <SiMedium />, url: medium, title: "medium" },
//     { icon: <FaQuora />, url: quora, title: "quora" },
//     { icon: <SiSubstack />, url: substack, title: "substack" },
//   ];

//   return (
//     <div className="rounded-[24px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-5 py-6 shadow-[0_18px_50px_rgba(21,22,18,0.05)] sm:px-6">
//       <div className="flex flex-col gap-5">
//         <div className="flex-1">
//           <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
//             Written By
//           </p>

//           <p className="mt-1 text-[22px] font-semibold leading-7 text-[color:var(--ms-text)]">
//             {author}
//           </p>

//           <p className="mt-1 text-[14px] font-medium capitalize leading-6 text-[color:var(--ms-text-soft)]">
//             {role}
//           </p>

//           {(reddit || medium || quora || substack) && (
//             <div className="mt-5 flex flex-wrap items-center gap-4">
//               <div className="flex items-center gap-3">
//                 {socialLinks.map(
//                   (social, index) =>
//                     social.url && (
//                       <Link
//                         key={index}
//                         href={social.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title={social.title}
//                         className="text-[color:var(--ms-text-faint)] transition-colors text-lg hover:text-[color:var(--ms-accent)]"
//                       >
//                         {social.icon}
//                       </Link>
//                     ),
//                 )}
//               </div>

//               <div className="sm:ml-auto scale-95">
//                 <ShareMenu title={articleTitle} />
//               </div>
//             </div>
//           )}

//           {!reddit && !medium && !quora && !substack && (
//             <div className="mt-5">
//               <ShareMenu title={articleTitle} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthorCard;
// // import Link from "next/link";
// // import Image from "next/image";
// // import ShareMenu from "./ShareMenu";
// // import { FaReddit, FaQuora } from "react-icons/fa";
// // import { SiSubstack, SiMedium } from "react-icons/si";

// // interface AuthorProps {
// //   author: string;
// //   role: string;
// //   image: string;
// //   slug: string;
// //   articleTitle: string;

// //   reddit?: string;
// //   medium?: string;
// //   quora?: string;
// //   substack?: string;
// // }
// // const AuthorCard: React.FC<AuthorProps> = ({
// //   author,
// //   role,
// //   image,
// //   slug,
// //   articleTitle,
// //   reddit,
// //   medium,
// //   quora,
// //   substack,
// // }) => {
// //   const socialLinks = [
// //     { icon: <FaReddit />, url: reddit , title: "reddit"},
// //     { icon: <SiMedium />, url: medium , title: "medium"},
// //     { icon: <FaQuora />, url: quora , title: "quora"},
// //     { icon: <SiSubstack />, url: substack , title: "substack"},
// //   ];

// //   return (
// //     <div className="rounded-[24px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-5 py-6 shadow-[0_18px_50px_rgba(21,22,18,0.05)] sm:px-6">
// //       <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
// //         <Link href={`/our-team/${slug}`} title={author}>
// //           <Image
// //             src={image}
// //             alt={author}
// //             width={72}
// //             height={72}
// //             className="h-[72px] w-[72px] rounded-full border border-[color:var(--ms-border-strong)] object-cover"
// //           />
// //         </Link>

// //         <div className="flex-1">
// //           <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
// //             Written By
// //           </p>
// //           <p className="mt-1 text-[22px] font-semibold leading-7 text-[color:var(--ms-text)]">
// //             {author}
// //           </p>
// //           <p className="mt-1 text-[14px] font-medium capitalize leading-6 text-[color:var(--ms-text-soft)]">
// //             {role}
// //           </p>
// //           <div className="mt-5 flex flex-wrap items-center gap-4">
// //             <div className="flex items-center gap-3">
// //               {socialLinks.map(
// //                 (social, index) =>
// //                   social.url && (
// //                     <Link
// //                       key={index}
// //                       href={social.url}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       title={social.title}
// //                       className="text-[color:var(--ms-text-faint)] transition-colors text-lg hover:text-[color:var(--ms-accent)]"
// //                     >
// //                       {social.icon}
// //                     </Link>
// //                   ),
// //               )}
// //             </div>
// //             <div className="sm:ml-auto scale-95">
// //               <ShareMenu title={articleTitle} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AuthorCard;
