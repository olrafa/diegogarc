import Link from "next/link";
import DiegoIcon from "./DiegoIcon";
import LinkList from "./LinkList";

const Navigation = () => (
  <aside className="w-1/3 lg:w-1/4 flex flex-col h-screen p-12">
    <nav className="flex flex-col gap-12">
      <Link href="/">
        <DiegoIcon />
      </Link>
      <LinkList />
    </nav>
  </aside>
);

export default Navigation;
