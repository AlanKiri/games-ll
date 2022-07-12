import Link from "next/link";
import React from "react";
import Pickelement from "./Pickelement";

const Navbarbot = () => {
  return (
    <div className="flex whitespace-nowrap overflow-x-scroll my-5 gap-4 scrollbar-hide">
      <Link href="/">
        <button>All Games</button>
      </Link>
      <Pickelement
        title="New Releases"
        buttons={[
          { text: "Last 30 days", href: "/?query=30days" },
          { text: "Last week", href: "/?query=lastWeek" },
          { text: "Next week", href: "/?query=nextWeek" },
        ]}
      />
      <Link href="/genres">
        <button>Genres</button>
      </Link>
      <Link href="/publishers">
        <button>Publishers</button>
      </Link>
      <Link href="/developers">
        <button>Developers</button>
      </Link>
    </div>
  );
};

export default Navbarbot;
