import Link from "next/link";

const Header = () => (
  <div className="w-full flex flex-row items-center gap-4 pt-4 px-4 justify-center">
    <Link href="/" className="font-bold">
      Diego Garc
    </Link>
    <Link href="#sobre">Sobre</Link>
  </div>
);

export default Header;
