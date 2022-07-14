import { observer } from "mobx-react-lite";
import Head from "next/head";
import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MDisplayTile } from "../components";
import { Store } from "../stores/store";
import Layout from "./layout";

const Developers = observer(() => {
  const { queryStore } = useContext(Store);

  useEffect(() => {
    queryStore.getDevelopers();
  }, []);

  const expandDevelopers = async () => {
    await queryStore.expandDevelopers();
  };

  const appearAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const { developers } = queryStore;
  return (
    <div>
      <Layout>
        <Head>
          <title>Developers</title>
        </Head>
        {developers && queryStore.count && (
          <InfiniteScroll
            dataLength={developers.length}
            next={expandDevelopers}
            hasMore={developers.length < queryStore.count}
            loader={<h4></h4>}
          >
            <main className="grid grid-cols-12 gap-7">
              {queryStore.developers &&
                queryStore.developers.map((developer) => {
                  return (
                    <MDisplayTile
                      section="developers"
                      data={developer}
                      key={developer.id}
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

export default Developers;
