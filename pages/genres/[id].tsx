import { observer } from "mobx-react-lite";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import sanitizeHtml from "sanitize-html";
import { MListItem } from "../../components";
import { Store } from "../../stores/store";
import Layout from "../layout";

const GenreId = observer(() => {
  const router = useRouter();
  const { id } = router.query;

  const { queryStore } = useContext(Store);

  const getGames = async () => {
    if (typeof id === "string") {
      await queryStore.getGenreById(id);
      await queryStore.getGamesByGenre(id);
    }
  };
  const expandGames = async () => {
    await queryStore.expandGames();
  };

  const { genre, games } = queryStore;

  let description = "";
  if (genre?.description != undefined) {
    description = sanitizeHtml(genre?.description, { allowedTags: [] });
  }

  useEffect(() => {
    getGames();
  }, [id]);

  const appearAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2 },
    },
  };

  return (
    <div>
      <Layout>
        <Head>
          <title>{`${genre?.name} games`}</title>
        </Head>
        {games && queryStore.count && (
          <InfiniteScroll
            dataLength={games.length}
            next={expandGames}
            hasMore={games.length < queryStore.count}
            loader={<h4></h4>}
          >
            <main className="flex flex-col lg:gap-3">
              <div className="flex flex-row mb-7 ">
                <div className="flex flex-col 2xl:flex-row gap-4">
                  <h4 className="text-5xl lg:text-9xl">{genre?.name}</h4>
                  <p className="text-xs lg:text-sm overflow-x-scroll scrollbar-hide">
                    {description}
                  </p>
                </div>
              </div>
              {games && (
                <div className="flex flex-col gap-3">
                  {games.map((game) => {
                    return (
                      <MListItem
                        key={game.id}
                        background_image={game.background_image}
                        gameid={game.id}
                        parent_platforms={game.parent_platforms}
                        release_date={game.released}
                        stars={game.rating}
                        title={game.name}
                        variants={appearAnimation}
                        initial="hidden"
                        whileInView="visible"
                      />
                    );
                  })}
                </div>
              )}
            </main>
          </InfiniteScroll>
        )}
      </Layout>
    </div>
  );
});

export default GenreId;
