import Image from "next/image";
import image1 from "../image/avatar1.jpg";
import Link from "next/link";

function Header() {
  return (
    <header className="w-[66%] flex justify-center fixed top-0 z-100 pt-7  shadow-none ">
      <div className="w-full mx-auto flex justify-between bg-white/30  px-5  rounded-4xl backdrop-blur-sm  items-center py-3 text-black">
        <h1 className="text-xl font-bold uppercase w-[50%] flex items-center">
          <Image
            src={image1}
            alt="Profile"
            width={42}
            height={42}
            className="rounded-full mr-3 border"
          />
          AvatarSnap
        </h1>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Pricing</span>
          <div className="bg-gradient-to-b from-[#fce0c8] to-[#7d6c5c] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
            <Link href="/upload"> Get Started </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
