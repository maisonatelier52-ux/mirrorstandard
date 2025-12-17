import Image from "next/image";
import Link from "next/link";

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
    data: NewsData;
}

const MoreFeaturedArticle: React.FC<Props> = ({ data }) => {
    return (
        <Link
            href={`/${data.category}/${data.slug}`}
            title={data.title}
            className="block w-full"
            style={{ color: "inherit" }}
        >
            <div className="flex flex-col md:flex-row md:border-b border-[#615e5e54] max-w-6xl mx-auto min-h-[340px] pb-3 md:pb-0">
                <div className="md:w-6/12 w-full relative overflow-hidden group">
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={900}
                        height={700}
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
                </div>
                <div className="md:w-6/12 w-full flex flex-col justify-center mt-3 p-0 md:p-6">
                    <p className="text-gray-500">
                        <span
                            className="text-[16px] capitalize sm:text-[17px] md:text-[18px]"
                            style={{ fontWeight: 700 }}
                        >
                            {data.category}
                        </span>{" "}
                        <span
                            className="ml-1 text-[11px] sm:text-[12px]"
                        >
                            {data.date}
                        </span>
                    </p>
                    <h3
                        className="font-[oswald] leading-tight md:leading-tight line-clamp-3 text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] mt-1"
                        style={{ fontWeight: 700 }}
                    >
                        {data.title}
                    </h3>
                    <p
                        className="mt-1 text-[14px] text-gray-500 sm:text-[15px] md:text-[16px] leading-tight md:leading-tight line-clamp-3"
                        style={{ fontWeight: 400 }}
                    >
                        {data.shortdescription}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default MoreFeaturedArticle;
