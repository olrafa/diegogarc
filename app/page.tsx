import About from "@/components/About";
import VideoMain from "@/components/VideoMain";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-2 gap-12 mb-24">
      <VideoMain />
      <div className="w-full md:w-3/5">
        <About />
      </div>
    </main>
  );
}
