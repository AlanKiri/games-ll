import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import {
  Info,
  Listitem,
  Navbar,
  Navbarbot,
  PlatformCard,
  Rating,
} from "../../components";
import { Store } from "../../stores/store";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import QueryStore from "../../stores/QueryStore/query.store";
import { Oval } from "react-loader-spinner";

const GameId = observer(() => {
  const router = useRouter();
  const { id } = router.query;

  const { queryStore } = useContext(Store);

  const getGame = async () => {
    if (typeof id === "string") {
      await queryStore.getGameById(id);
      await queryStore.getGameScreenshotsByiD(id);
      await queryStore.getGamesSameSeries(id);
    }
  };
  const { game, games, images } = queryStore;

  useEffect(() => {
    getGame();
  }, [id]);

  let genres = "";
  genres += game?.genres.map((genre) => {
    return genre.name;
  });
  let developers = "";
  developers += game?.developers.map((developer) => {
    return developer.name;
  });
  let publishers = "";
  publishers += game?.publishers.map((publisher) => {
    return publisher.name;
  });
  let tags = "";
  tags += game?.tags.map((tag) => {
    return tag.name;
  });

  console.log(game?.genres);

  return (
    <div>
      <Navbar />
      <Navbarbot />
      {queryStore.isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Oval color="white" />
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-11 md:col-span-12 lg:col-span-9 flex flex-col">
            {/* Title & release date */}
            <div className="flex justify-between">
              <h1 className="font-semibold text-2xl lg:text-5xl">
                {game?.name}
              </h1>
              <div className="px-3 py-2 bg-white rounded-2xl flex items-center whitespace-nowrap  ">
                <span className="text-black font-semibold text-xs ">
                  {game?.released}
                </span>
              </div>
            </div>
            {/* Carousel */}
            <div className="my-5 flex w-full overflow-x-scroll scrollbar-hide md:scrollbar-default">
              {images?.results.map((screenshot) => {
                return (
                  <div key={screenshot.id} className="mr-3">
                    <Image
                      src={screenshot.image}
                      width={300}
                      height={168}
                      layout="fixed"
                      alt="Image of game"
                    />
                  </div>
                );
              })}
            </div>
            {/* Rating */}
            <div className="my-5 mb-10">
              <h2 className="my-3 font-medium text-4xl">Ratings</h2>
              <Rating rating={game?.ratings} />
            </div>
            {/* Information */}
            <div className="flex flex-col lg:flex-row  lg:py-10">
              <Info title="Genres" description={genres} />
              <Info title="Release date" description={game?.released} />
            </div>
            <div className="flex flex-col lg:flex-row  lg:py-10">
              <Info title="Developers" description={developers} />
              <Info title="Publisher" description={publishers} />
            </div>
            <div className="flex py-10">
              <Info title="Tags" description={tags} small={true} />
            </div>
            <div className="flex py-10">
              <Info title="Website" description={game?.website} />
            </div>
            <div className="flex py-10">
              <Info title="Last Update" description={game?.updated} />
            </div>
            <h3 className="text-xl font-bold mb-3">Games from same series</h3>
            <div className="flex flex-col gap-3">
              {games &&
                games.map((game) => {
                  return (
                    <Listitem
                      key={game.id}
                      background_image={game.background_image}
                      gameid={game.id}
                      parent_platforms={game.parent_platforms}
                      release_date={game.released}
                      stars={game.rating}
                      title={game.name}
                    />
                  );
                })}
            </div>
          </div>
          <div className="col-span-11 md:col-span-12 lg:col-span-3">
            {/* Image representing game */}
            <div className="mb-5">
              {game?.background_image && (
                <Image
                  src={game?.background_image}
                  height={142}
                  width={253}
                  layout="responsive"
                  alt={"Game representing image"}
                />
              )}
            </div>
            {/* Description */}
            <p className="text-lg my-5">{game?.description}</p>
            {/* Platforms */}
            <div className="flex flex-col gap-3">
              {game?.parent_platforms.map((platform) => {
                return (
                  <PlatformCard
                    platform={platform.platform}
                    key={platform.platform.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default GameId;
