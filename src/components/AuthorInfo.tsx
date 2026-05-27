// AuthorInfo.jsx

import Link from "next/link";

interface AuthorProps {
  name: string;
  role?: string;
  date: string;
  updatedAt?: string;
  slug?: string;
  reviewedByName?: string;
  reviewedByUrl?: string;
}

const AuthorInfo = ({
  name,
  role,
  date,
  updatedAt,
  reviewedByName,
  reviewedByUrl,
}: AuthorProps) => {
  return (
    <div className="my-8 rounded-[20px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface-muted)] px-5 py-5 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* LEFT SIDE */}
        <div className="space-y-1">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
            Byline
          </p>

          <p className="text-[18px] font-semibold text-[color:var(--ms-text)]">
            {name}
          </p>

          {role ? (
            <p className="text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
              {role}
            </p>
          ) : null}
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-2 text-[14px] leading-6 text-[color:var(--ms-text-soft)] sm:text-right">
          <p>
            Published{" "}
            <span className="font-medium text-[color:var(--ms-text)]">
              {date}
            </span>
          </p>

          {updatedAt ? (
            <p>
              Updated{" "}
              <span className="font-medium text-[color:var(--ms-text)]">
                {new Date(updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </span>
            </p>
          ) : null}

          {reviewedByName ? (
            <p>
              Reviewed by{" "}
              {reviewedByUrl ? (
                <Link
                  href={reviewedByUrl}
                  className="font-medium text-[color:var(--ms-accent)] underline decoration-[color:var(--ms-border-strong)] underline-offset-4 hover:text-[color:var(--ms-accent-strong)]"
                >
                  {reviewedByName}
                </Link>
              ) : (
                <span className="font-medium text-[color:var(--ms-text)]">
                  {reviewedByName}
                </span>
              )}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
// import Image from "next/image";
// import Link from "next/link";

// interface AuthorProps {
//   name: string;
//   role?: string;
//   date: string;
//   updatedAt?: string;
//   image: string;
//   slug: string;
//   reviewedByName?: string;
//   reviewedByUrl?: string;
// }

// const AuthorInfo = ({
//   name,
//   role,
//   image,
//   date,
//   slug,
//   updatedAt,
//   reviewedByName,
//   reviewedByUrl,
// }: AuthorProps) => {
//   return (
//     <div className="my-8 rounded-[20px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface-muted)] px-5 py-5 sm:px-6">
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div className="flex items-center gap-4">
//           <Link key={slug} href={`/our-team/${slug}`} title={name} className="text-primary">
//             <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[color:var(--ms-border-strong)] bg-white">
//               <Image
//                 src={image}
//                 alt={name}
//                 width={56}
//                 height={56}
//                 quality={75}
//                 placeholder="blur"
//                 blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
//               />
//             </div>
//           </Link>
//           <div className="space-y-1">
//             <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
//               Byline
//             </p>
//             <p className="text-[18px] font-semibold text-[color:var(--ms-text)]">
//               {name}
//             </p>
//             {role ? (
//               <p className="text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
//                 {role}
//               </p>
//             ) : null}
//           </div>
//         </div>
//         <div className="grid gap-2 text-[14px] leading-6 text-[color:var(--ms-text-soft)] sm:text-right">
//           <p>
//             Published <span className="font-medium text-[color:var(--ms-text)]">{date}</span>
//           </p>
//           {updatedAt ? (
//             <p>
//               Updated{" "}
//               <span className="font-medium text-[color:var(--ms-text)]">
//                 {new Date(updatedAt).toLocaleDateString("en-US", {
//                   month: "short",
//                   day: "numeric",
//                   year: "numeric",
//                   timeZone: "UTC",
//                 })}
//               </span>
//             </p>
//           ) : null}
//           {reviewedByName ? (
//             <p>
//               Reviewed by{" "}
//               {reviewedByUrl ? (
//                 <Link
//                   href={reviewedByUrl}
//                   className="font-medium text-[color:var(--ms-accent)] underline decoration-[color:var(--ms-border-strong)] underline-offset-4 hover:text-[color:var(--ms-accent-strong)]"
//                 >
//                   {reviewedByName}
//                 </Link>
//               ) : (
//                 <span className="font-medium text-[color:var(--ms-text)]">{reviewedByName}</span>
//               )}
//             </p>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthorInfo;
