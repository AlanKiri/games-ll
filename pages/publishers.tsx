import { observer } from "mobx-react-lite";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Oval } from "react-loader-spinner";
import { Navbar, Navbarbot } from "../components";
import { Store } from "../stores/store";

const Publishers = observer(() => {
  const { queryStore } = useContext(Store);

  useEffect(() => {
    queryStore.getPublishers();
  }, []);

  const expandPublishers = async () => {
    await queryStore.expandPublishers();
  };

  const { publishers } = queryStore;

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
        publishers &&
        queryStore.count && (
          <InfiniteScroll
            dataLength={publishers.length}
            next={expandPublishers}
            hasMore={publishers.length < queryStore.count}
            loader={<h4>Loading...</h4>}
          >
            <main className="grid grid-cols-12 gap-7">
              {publishers &&
                publishers.map((publisher) => {
                  return (
                    <Link
                      href={`/publishers/${publisher.id}`}
                      key={publisher.id}
                    >
                      <div className="flex flex-col bg-red-800 col-span-11 md:col-span-6  lg:col-span-4 text-center">
                        <div className="block w-full">
                          <Image
                            src={publisher.image_background}
                            alt="publisher image"
                            layout="responsive"
                            width={200}
                            height={100}
                          />
                        </div>
                        <span className="font-medium text-2xl py-3">
                          {publisher.name}
                        </span>
                      </div>
                    </Link>
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

export default Publishers;
