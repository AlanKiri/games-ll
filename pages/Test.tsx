import React, { useContext } from "react";
import { Store } from "../stores/store";

const Test = () => {
  const { queryStore } = useContext(Store);
  queryStore.getGamesLast30();

  return <div>test</div>;
};

export default Test;
