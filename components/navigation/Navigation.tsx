import Link from "next/link";
import DiegoIcon from "./DiegoIcon";

const Navigation = () => (
  <aside className="w-1/4 flex flex-col h-screen p-12">
    <nav className="flex flex-col gap-12">
      <Link href="/">
        <DiegoIcon />
      </Link>
      <ul className="flex flex-col gap-4 uppercase">
        <li>
          <Link href="/">Reel</Link>
        </li>
        <li>
          <Link href="/direcao-de-fotografia">Direção de fotografia</Link>
        </li>
        <li>
          <Link href="/operacao-de-camera">Operação de câmera</Link>
        </li>
        <li>
          <Link href="/bio">Bio</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Navigation;
