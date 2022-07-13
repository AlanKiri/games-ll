import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import {
  Listitem,
  Navbar,
  Navbarbot,
  PlatformCard,
  Rating,
} from "../../components";
import { Store } from "../../stores/store";
import Image from "next/image";
import { Oval } from "react-loader-spinner";
import Link from "next/link";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiAtari, SiMacos, SiNintendo, SiSega } from "react-icons/si";

const GameId = observer(() => {
  const router = useRouter();
  const { id } = router.query;

  const { queryStore } = useContext(Store);

  const getGame = async () => {
    if (typeof id === "string") {
      await queryStore.getGameById(id);
      await queryStore.getGameScreenshotsByiD(id);
      await queryStore.getGamesSameSeries(id);
      await queryStore.getGameStore(id);
    }
  };
  const { game, games, images, stores } = queryStore;

  const useLogo = (slug: string) => {
    switch (slug) {
      case "pc":
        return <FaWindows className="w-6 h-6 mr-3" />;
      case "xbox":
        return <FaXbox className="w-6 h-6 mr-3" />;
      case "playstation":
        return <FaPlaystation className="w-6 h-6 mr-3" />;
      case "ios":
        return <FaApple className="w-6 h-6 mr-3" />;
      case "android":
        return <FaAndroid className="w-6 h-6 mr-3" />;
      case "mac":
        return <SiMacos className="w-6 h-6 mr-3" />;
      case "linux":
        return <FaLinux className="w-6 h-6 mr-3" />;
      case "nintendo":
        return <SiNintendo className="w-6 h-6 mr-3" />;
      case "atari":
        return <SiAtari className="w-6 h-6 mr-3" />;
      case "sega":
        return <SiSega className="w-6 h-6 mr-3" />;
    }
  };

  useEffect(() => {
    getGame();
  }, [id]);

  interface IHref {
    name: string;
    id: number;
    path: string;
  }

  let genres: IHref[] = new Array();
  game?.genres.map((genre) => {
    genres.push({
      name: genre.name,
      id: genre.id,
      path: `/genres/${genre.id}`,
    });
  });
  let developers: IHref[] = new Array();
  game?.developers.map((developer) => {
    developers.push({
      name: developer.name,
      id: developer.id,
      path: `/developers/${developer.id}`,
    });
  });
  let publishers: IHref[] = new Array();
  game?.publishers.map((publisher) => {
    publishers.push({
      name: publisher.name,
      id: publisher.id,
      path: `/publishers/${publisher.id}`,
    });
  });
  let tags: IHref[] = new Array();
  game?.tags.map((tag) => {
    tags.push({
      name: tag.name,
      id: tag.id,
      path: `/tags/${tag.id}`,
    });
  });
  return (
    <div>
      <Navbar />
      <Navbarbot />
      {queryStore.isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Oval color="white" />
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-y-7 lg:gap-y-0 lg:gap-x-7">
          <div className="col-span-12 lg:col-span-9 flex flex-col  ">
            {/* Title & platforms & release date */}
            <div className="flex justify-between whitespace-nowrap items-end overflow-x-scroll scrollbar-hide ">
              <div className="flex items-end">
                <h1 className="font-semibold text-2xl mt-auto mr-5 lg:text-5xl">
                  {game?.name}
                </h1>
                <div className="flex m-1 ">
                  {game?.parent_platforms.map((platform) => {
                    return useLogo(platform.platform.slug);
                  })}
                </div>
              </div>
              <div className="px-3 py-2 bg-white rounded-2xl flex items-center whitespace-nowrap  ">
                <span className="text-black font-semibold text-xs ">
                  {game?.released}
                </span>
              </div>
            </div>
            {/* Carousel */}
            <div className="my-3 flex w-full overflow-x-scroll scrollbar-hide ">
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
            <div className="mb-3">
              {/* <h2 className="my-3 font-medium text-4xl">Ratings</h2> */}
              <Rating rating={game?.ratings} />
            </div>
            {/* Information */}
            <div className="grid grid-cols-12 my-5 gap-y-14">
              {genres.length > 0 && (
                <div className="col-span-11 lg:col-span-6">
                  <h3 className="font-semibold text-2xl ">Genres</h3>
                  {genres.map((genre, index) => {
                    if (index + 1 != genres.length) {
                      return (
                        <>
                          <Link href={genre.path} key={genre.id}>
                            <span className="text-1xl underline">
                              {genre.name}
                            </span>
                          </Link>

                          <span className="mr-2">,</span>
                        </>
                      );
                    } else {
                      return (
                        <Link href={genre.path} key={genre.id}>
                          <span className="text-1xl underline">
                            {genre.name}
                          </span>
                        </Link>
                      );
                    }
                  })}
                </div>
              )}
              {developers.length > 0 && (
                <div className="col-span-11 lg:col-span-6">
                  <h3 className="font-semibold text-2xl ">Developers</h3>
                  {developers.map((developer, index) => {
                    if (index + 1 != developers.length) {
                      return (
                        <>
                          <Link href={developer.path} key={developer.id}>
                            <span className="text-1xl underline">
                              {developer.name}
                            </span>
                          </Link>
                          <span className="mr-2">,</span>
                        </>
                      );
                    } else {
                      return (
                        <Link href={developer.path} key={developer.id}>
                          <span className="text-1xl underline">
                            {developer.name}
                          </span>
                        </Link>
                      );
                    }
                  })}
                </div>
              )}
              {publishers.length > 0 && (
                <div className="col-span-11 lg:col-span-6">
                  <h3 className="font-semibold text-2xl ">Publishers</h3>
                  {publishers.map((publisher, index) => {
                    if (index + 1 != publishers.length) {
                      return (
                        <>
                          <Link href={publisher.path} key={publisher.id}>
                            <span className="text-1xl underline">
                              {publisher.name}
                            </span>
                          </Link>
                          <span className="mr-2">,</span>
                        </>
                      );
                    } else {
                      return (
                        <Link href={publisher.path} key={publisher.id}>
                          <span className="text-1xl underline">
                            {publisher.name}
                          </span>
                        </Link>
                      );
                    }
                  })}
                </div>
              )}
              {game?.released != undefined && (
                <div className="col-span-11 lg:col-span-6">
                  <h3 className="font-semibold text-2xl ">Release Date</h3>
                  <p className="text-1xl">{game?.released}</p>
                </div>
              )}
            </div>

            {/* Games from same series */}
            {games && (
              <>
                <h3 className="text-xl font-bold mb-3">
                  Games from same series
                </h3>
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
              </>
            )}
          </div>
          <div className="col-span-12 lg:col-span-3">
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
            <p className="text-lg my-5">{game?.description_raw}</p>
            {/* Stores */}
            <h3 className="text-xl font-bold mb-3">Where to buy?</h3>
            <div className="flex flex-col gap-3">
              <>
                {game?.stores.map((store) => {
                  return stores?.map((store2) => {
                    console.log(store, store2);
                    if (store2.store_id == store.store.id) {
                      return (
                        <PlatformCard
                          id={store2.store_id}
                          name={store.store.name}
                          slug={store.store.slug}
                          url={store2.url}
                          key={store.id}
                        />
                      );
                    }
                  });
                })}
              </>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default GameId;
