import { observer } from "mobx-react-lite";
import Head from "next/head";
import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MDisplayTile } from "../components";
import { Store } from "../stores/store";
import Layout from "./layout";

const Publishers = observer(() => {
  const { queryStore } = useContext(Store);

  useEffect(() => {
    queryStore.getPublishers();
  }, []);

  const expandPublishers = async () => {
    await queryStore.expandPublishers();
  };

  const { publishers } = queryStore;

  const appearAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div>
      <Layout>
        <Head>
          <title>Publishers</title>
        </Head>
        {publishers && queryStore.count && (
          <InfiniteScroll
            dataLength={publishers.length}
            next={expandPublishers}
            hasMore={publishers.length < queryStore.count}
            loader={<h4></h4>}
          >
            <main className="grid grid-cols-12 gap-7">
              {publishers &&
                publishers.map((publisher) => {
                  return (
                    <MDisplayTile
                      section="publishers"
                      data={publisher}
                      key={publisher.id}
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

export default Publishers;
