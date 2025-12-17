import Link from "next/link";

const categories = [
  { label: 'Home  ', category: '' },
  { label: 'Business', category: 'business' },
  { label: 'Sports', category: 'sports' },
  { label: 'Politics', category: 'politics' },
  { label: 'Technology', category: 'technology' },
  { label: 'Health', category: 'health' },
  { label: 'Science', category: 'science' },
  { label: 'Entertainment', category: 'entertainment' },
  { label: 'Education', category: 'education' },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#909090] p-2">
      <div className="w-full max-w-7xl px-5 mx-auto flex items-center justify-between">
        <ul className="flex items-center space-x-2">
          {categories.map((item) => (
            <li key={item.category} className="relative group">
              <Link
                href={`/${item.category}`}
                title={item.category}
                className="relative font-[Oswald] text-[16px] uppercase px-[13px] py-[14px]"
                style={{ fontWeight: 600 }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#00ffc8] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
