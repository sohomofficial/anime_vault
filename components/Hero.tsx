import Image from "next/image";
import { Button } from "@nextui-org/react";

function Hero() {
  return (
    <header className="bg-hero min-h-screen bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 grid grid-cols-1 lg:grid-cols-2 justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col col-span-2 lg:col-span-1  gap-10">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="text-black">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 col-span-2 lg:col-span-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
      <div className="col-span-2 grid justify-center items-end">
        <Image
          src="/arrow.svg"
          alt="scroll down"
          width={30}
          height={30}
          className="animate-bounce"
        />
      </div>
    </header>
  );
}

export default Hero;
