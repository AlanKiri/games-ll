import React from "react";
import Pickelement from "./Pickelement";

const Navbarbot = () => {
  return (
    <div className="flex whitespace-nowrap overflow-x-scroll my-5 gap-4 scrollbar-hide">
      <button>All Games</button>
      <Pickelement
        title="New Releases"
        buttons={[
          { text: "Last 30 days", href: "?query=30days" },
          { text: "Last week", href: "?query=lastWeek" },
          { text: "Next week", href: "?query=nextWeek" },
        ]}
      />
      <button>Genres</button>
      <button>Companies</button>
    </div>
  );
};

export default Navbarbot;
