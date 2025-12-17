import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-2 text-gray-300 text-lg">
      <Link href="/" className="hover:underline text-white" title="home">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-white">Media</span>
    </nav>
  );
};

export default Breadcrumb;
