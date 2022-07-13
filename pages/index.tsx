import { observer } from "mobx-react-lite";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Listitem, MListItem, Navbar, Navbarbot } from "../components";
import { Store } from "../stores/store";
import { Oval } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";

const Home: NextPage = observer(() => {
  const { queryStore } = useContext(Store);

  const router = useRouter();
  const { query } = router.query;
  const getGames = () => {
    if (query == undefined) {
      return queryStore.getGames();
    } else if (query == "30days") {
      return queryStore.getGamesLast30();
    } else if (query == "lastWeek") {
      return queryStore.getGamesLastWeek();
    } else if (query == "nextWeek") {
      return queryStore.getGamesNextWeek();
    }
  };

  const expandGames = async () => {
    await queryStore.expandGames();
  };

  const { games } = queryStore;

  useEffect(() => {
    getGames();
  }, [query]);

  const appearAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Navbarbot />
      {queryStore.isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Oval color="white" />
        </div>
      ) : (
        games &&
        queryStore.count && (
          <InfiniteScroll
            dataLength={games.length}
            next={expandGames}
            hasMore={games.length < queryStore.count}
            loader={<h4>Loading...</h4>}
          >
            <main className="flex flex-col gap-3">
              {games &&
                games.map((game, index) => {
                  return (
                    <MListItem
                      key={game.id}
                      gameid={game.id}
                      background_image={game.background_image}
                      release_date={game.released}
                      stars={game.rating}
                      parent_platforms={game.parent_platforms}
                      title={game.name}
                      variants={appearAnimation}
                      custom={index + 1}
                      initial="hidden"
                      animate="visible"
                    />
                  );
                })}
            </main>
          </InfiniteScroll>
        )
      )}
      <footer></footer>
    </div>
  );
});

export default Home;
