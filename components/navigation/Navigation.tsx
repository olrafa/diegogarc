import Link from "next/link";
import DiegoIcon from "./DiegoIcon";
import LinkList from "./LinkList";

const Navigation = () => (
  <aside className="w-full max-w-80 flex flex-col h-screen py-12 px-8">
    <nav className="flex flex-col gap-12">
      <Link href="/">
        <DiegoIcon />
      </Link>
      <LinkList />
    </nav>
  </aside>
);

export default Navigation;
