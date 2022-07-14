import { observer } from "mobx-react-lite";
import Head from "next/head";
import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MDisplayTile } from "../components";
import { Store } from "../stores/store";
import Layout from "./layout";

const Genres = observer(() => {
  const { queryStore } = useContext(Store);

  useEffect(() => {
    queryStore.getGenres();
  }, []);

  const expandGenres = async () => {
    await queryStore.expandGenres();
  };

  const appearAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const { genres } = queryStore;
  return (
    <div>
      <Layout>
        <Head>
          <title>Genres</title>
        </Head>
        {genres && queryStore.count && (
          <InfiniteScroll
            dataLength={genres.length}
            next={expandGenres}
            hasMore={genres.length < queryStore.count}
            loader={<h4></h4>}
          >
            <main className="grid grid-cols-12 gap-7">
              {queryStore.genres &&
                queryStore.genres.map((genre) => {
                  return (
                    <MDisplayTile
                      section="genres"
                      data={genre}
                      key={genre.id}
                      variants={appearAnimation}
                      initial="hidden"
                      whileInView="visible"
                    />
                  );
                })}
            </main>
          </InfiniteScroll>
        )}
      </Layout>
    </div>
  );
});

export default Genres;
