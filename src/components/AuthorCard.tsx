import Image from "next/image";
import Link from "next/link";

interface AuthorProps {
  author: string;
  authorSlug: string;
  authorImage: string;
  role: string;
}

const AuthorCard: React.FC<AuthorProps> = ({
  author,
  authorSlug,
  authorImage,
  role,
}) => {
  return (
    <aside className="border-y border-[color:var(--ms-border)] bg-[#faf8f3] px-5 py-5 sm:px-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--ms-text-faint)]">
        About the author
      </p>
      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-14 w-14 flex-none overflow-hidden rounded-full border border-[color:var(--ms-border)] bg-white">
          <Image src={authorImage} alt={author} fill className="object-cover" sizes="56px" />
        </div>
        <div className="min-w-0 flex-1">
          <Link
            href={`/our-team/${authorSlug}/`}
            className="ms-editorial-serif text-[20px] leading-tight text-[color:var(--ms-text)] hover:text-[color:var(--ms-accent)]"
          >
            {author}
          </Link>
          <p className="mt-1 text-[12px] leading-5 text-[color:var(--ms-text-soft)]">{role}</p>
          <Link
            href={`/our-team/${authorSlug}/`}
            className="mt-2 inline-flex text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--ms-accent)]"
          >
            Profile, contact and recent work →
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AuthorCard;
