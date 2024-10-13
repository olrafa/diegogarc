import Link from "next/link";

const Header = () => (
  <div className="w-full flex flex-row items-center gap-4 py-2 px-4 justify-center">
    <Link href="/" className="font-bold">
      Diego Garc
    </Link>
    <Link href="/about">Sobre</Link>
  </div>
);

export default Header;
