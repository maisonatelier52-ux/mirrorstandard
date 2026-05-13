import Link from "next/link";
import Image from "next/image";
import ShareMenu from "./ShareMenu";
import { FaReddit, FaQuora } from "react-icons/fa";
import { SiSubstack, SiMedium } from "react-icons/si";

interface AuthorProps {
  author: string;
  role: string;
  image: string;
  slug: string;
  articleTitle: string;

  reddit?: string;
  medium?: string;
  quora?: string;
  substack?: string;
}
const AuthorCard: React.FC<AuthorProps> = ({
  author,
  role,
  image,
  slug,
  articleTitle,
  reddit,
  medium,
  quora,
  substack,
}) => {
  const socialLinks = [
    { icon: <FaReddit />, url: reddit },
    { icon: <SiMedium />, url: medium },
    { icon: <FaQuora />, url: quora },
    { icon: <SiSubstack />, url: substack },
  ];

  return (
    <div className="py-6 px-4 rounded-lg flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center gap-4 flex-1">
        <Link href={`/our-team/${slug}`} title={author}>
          <Image
            src={image}
            alt={author}
            width={72}
            height={72}
            className="rounded-full object-cover w-18 h-18"
          />
        </Link>

        <div className="flex-1">
          <p className="uppercase text-[10px] text-gray-500">Written By</p>
          <p className="text-base font-semibold">{author}</p>
          <p className="text-[13px] text-gray-500 font-bold capitalize">
            {role}
          </p>

          {/* Social + Share row */}
          <div className="flex items-center mt-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(
                (social, index) =>
                  social.url && (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                  className="text-gray-500  transition-colors text-lg"   >
                      {social.icon}
                    </a>
                  )
              )}
            </div>

            {/* Share Button pushed to right */}
            <div className="ml-auto scale-95">
              <ShareMenu title={articleTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
