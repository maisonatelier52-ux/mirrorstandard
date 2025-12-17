import Link from 'next/link';

interface Props {
  category: string;
}

export default function CategoryHeader({ category }: Props) {
  return (
    <div className='md:mt-7 mt-4'>
      <nav className=" text-[20px] text-gray-500" aria-label="Breadcrumb" style={{ fontWeight: 500 }}>
        <ol className="list-reset flex ">
          <li>
            <Link href="/" title='home'>Home</Link>
          </li>
          <li><span className="mx-2">→</span></li>
          <li className="capitalize">{category}</li>
        </ol>
      </nav>
      <h1
        className="text-[28px] sm:text-[36px] xs:text-[36px] font-bold"
      >
        Category : <span className='capitalize'>{category}</span>
      </h1>
    </div>
  );
}
