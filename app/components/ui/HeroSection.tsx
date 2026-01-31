import Image from "next/image";
import { PawPrint, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-top brightness-[0.6]"
      />

      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold max-w-3xl animate-fade-in text-white">
        Turn your pet into{" "}
        <span className="text-gradient">printed art</span>
      </h1>
      <p className="relative z-10 mt-6 text-lg md:text-xl text-gray-200 max-w-xl animate-slide-up">
        Upload your pet&apos;s photo and create unique t-shirts and mugs with
        AI-generated styles
      </p>
      <a
        href="#produtos"
        className="relative z-10 btn-primary mt-10 text-lg px-8 py-4 animate-slide-up"
      >
        Create now
      </a>
    </section>
  );
}
