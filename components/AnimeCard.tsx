import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime }: Prop) {
  return (
    <Card isFooterBlurred isPressable className="shadow-2xl shadow-gray-500">
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          shadow="sm"
          radius="lg"
          width="100%"
          alt={anime.name}
          className="w-full object-cover h-96"
          src={`https://shikimori.one${anime.image.original}`}
        />
      </CardBody>
      <CardFooter className="flex flex-col gap-4">
        <b className="text-lg font-bold">{anime.name}</b>
        <div className="flex gap-6">
          <Chip className="capitalize">{anime.kind}</Chip>
          <Chip
            startContent={
              <Image
                src="/episodes.svg"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            }
            variant="bordered"
          >
            {anime.episodes || anime.episodes_aired}
          </Chip>
          <Chip
            startContent={
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
            }
            variant="faded"
            className="font-bold text-yellow-500"
          >
            {anime.score}
          </Chip>
        </div>
      </CardFooter>
    </Card>
  );
  <div className="max-w-sm rounded relative w-full">
    <div className="relative w-full h-[37vh]">
      <Image
        src={`https://shikimori.one${anime.image.original}`}
        alt={anime.name}
        className="rounded-xl w-auto h-auto"
      />
    </div>
    <div className="py-4 flex flex-col gap-3">
      <div className="flex justify-between items-center gap-1">
        <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
          {anime.name}
        </h2>
        <div className="py-1 px-2 bg-[#161921] rounded-sm">
          <p className="text-white text-sm font-bold capitalize">
            {anime.kind}
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="./episodes.svg"
            alt="episodes"
            width={20}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-white font-bold">
            {anime.episodes || anime.episodes_aired}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="./star.svg"
            alt="star"
            width={18}
            height={18}
            className="object-contain"
          />
          <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
        </div>
      </div>
    </div>
  </div>;
}

export default AnimeCard;
