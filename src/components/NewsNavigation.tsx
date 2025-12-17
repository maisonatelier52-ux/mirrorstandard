import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import arrowLeft from '../../public/images/arrow-left.webp';
import arrowRight from '../../public/images/arrow-right.webp';

interface NewsData {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    image: string;
    date: string;
}
interface Props {
    data: NewsData[];
}

const NewsNavigation: FC<Props> = ({ data }) => {
    const prevPost = data[0];
    const nextPost = data[1];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-b border-gray-300">
            <Link
                href={`/${prevPost.category}/${prevPost.slug}`}
                title={prevPost.title}
                className="flex items-center gap-2 w-full md:w-[48%]"
            >
                <Image
                    src={arrowLeft}
                    alt="Previous"
                    width={30}
                    quality={75}
                    placeholder="blur"
                    height={25}
                />
                <div className="flex flex-col">
                    <span className="text-sm uppercase text-blue-500">Previous Post</span>
                    <span
                        className="font-[oswald] leading-tight text-[16px] md:text-[20px]"
                        style={{ fontWeight: 700 }}
                    >
                        {prevPost.title}
                    </span>
                </div>
            </Link>
            <Link
                href={`/${nextPost.category}/${nextPost.slug}`}
                title={nextPost.title}
                className="flex items-center gap-2 w-full md:w-[48%]  md:justify-end"
            >
                <div className="flex flex-col text-right">
                    <span className="text-sm uppercase text-blue-500">Next Post</span>
                    <span
                        className="font-[oswald] leading-tight text-[16px] md:text-[20px]"
                        style={{ fontWeight: 700 }}
                    >
                        {nextPost.title}
                    </span>
                </div>
                <Image
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
                    src={arrowRight}
                    alt="Next"
                    width={30}
                    height={25}
                />
            </Link>
        </div>
    );
};

export default NewsNavigation;
