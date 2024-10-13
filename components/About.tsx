import { BIO } from "@/constants/bio";
import ImageMain from "./ImageMain";

const About = () => (
  <div
    id="sobre"
    className="flex flex-col md:flex-row w-full md:w-4/5 items-center gap-8 justify-center mx-auto"
  >
    <div>
      <h2 className="text-xl font-bold mb-8">Sobre</h2>
      {BIO}
    </div>
    <ImageMain />
  </div>
);

export default About;
