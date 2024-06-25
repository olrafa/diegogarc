import Image from "next/image";
import homeImages from "@/constants/homeImages";

export default function Home() {
  const getRandomImage = () =>
    homeImages[Math.floor(Math.random() * homeImages.length)];

  const coverImage = getRandomImage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative font-bold z-[-1] flex place-items-center before:absolute text-3xl before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#49a137] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        Diego Garc
      </div>
      <Image
        src={coverImage}
        alt="Site em construção"
        width={400}
        height={400}
      />

      <div className="mb-32 flex flex-col items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h2 className="mb-3 text-2xl font-semibold">Em breve</h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Site em construção
        </p>
      </div>
    </main>
  );
}
