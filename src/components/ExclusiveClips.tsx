import SubHeadline from "./SubHeadline";
import NewsHeadline from "./NewsHeadline";
import TopFeaturedArticle from "./TopFeaturedArticle";
import TopHorizontalCard from "./TopHorizontalCard";
import TopNewsCard from "./TopNewsCard";


interface NewsData {
    slug: string;
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    date: string;
    image: string;
}

interface Props {
    data: NewsData[];
}

const ExclusiveClips: React.FC<Props> = ({ data }) => {
    return (
        <div className="mt-15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 border-b border-[#615e5e54] pb-3">
                <div className="lg:col-span-4 space-y-4">
                    <SubHeadline title="Exclusive clips" />
                    <div className="md:border-b border-[#615e5e54] md:pb-2 md:pr-3">
                        <TopHorizontalCard data={data[0]} />
                    </div>
                    <div className="md:border-b border-[#615e5e54] md:pb-2 md:pr-3 md:mt-0 mt-7">
                        <TopHorizontalCard data={data[1]} />
                    </div>
                    <div className="md:border-b border-[#615e5e54] md:pb-2 md:pr-3 md:mt-0 mt-7">
                        <TopHorizontalCard data={data[2]} />
                    </div>
                    <div className="md:pr-3 md:mt-0 mt-7">
                        <TopHorizontalCard data={data[3]} />
                    </div>
                </div>
                <div className="lg:col-span-8 md:mt-0 mt-8">
                    <TopFeaturedArticle data={data[4]} />
                    <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-8 gap-6">
                        <div className="lg:col-span-4 mt-10 md:mt-5">
                            <TopNewsCard data={data[5]} />
                        </div>
                        <div className="lg:col-span-4 mt-5">
                            {data.slice(6, 9).map((item, i) => (
                                <div
                                    key={i}
                                    className={`pb-2 mb-2 border-b border-gray-300 ${i === data.slice(6, 9).length - 1 ? "border-none" : ""}`}
                                >
                                    <NewsHeadline data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ExclusiveClips;