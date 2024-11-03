import Link from "next/link";
import DiegoIcon from "./DiegoIcon";

const Navigation = () => (
  <aside className="w-1/4 flex flex-col p-4 h-screen mt-12">
    <nav>
      <DiegoIcon />
      <ul>
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
