import Image from "next/image";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-items-center  h-screen py-32">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-8xl max-w-3xl text-center relative z-[2]">
          Stay Connected with the <span>Quran Daily</span>
        </h1>
        <p className="text-2xl max-w-lg text-[] text-center ">
          Stay Connected with the Quran Daily Stay Connected with the Quran
          Daily
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="large">Get Chrome Extension</Button>
        <Button size="large">Get Chrome Extension</Button>
      </div>
      <Image
        src={"/mobile-hero.png"}
        alt="mobile-hero.png"
        width={600}
        height={600}
      />
      <Image
        src={"/ipad-hero.png"}
        alt="mobile-hero.png"
        width={800}
        height={600}
      />
    </div>
  );
}
