import Link from "next/link";
import DiegoIcon from "./DiegoIcon";
import LinkList from "./LinkList";

const Navigation = () => (
  <aside className="w-full lg:max-w-80 flex flex-col lg:h-screen p-4 lg:py-12 lg:px-8">
    <nav className="flex flex-col gap-4 lg:gap-12">
      <DiegoIcon />
      <LinkList />
    </nav>
  </aside>
);

export default Navigation;
