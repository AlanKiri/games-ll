import React from "react";

interface IRating {
  rating:
    | {
        id: number;
        title: string;
        count: number;
        percent: number;
      }[]
    | undefined;
}

const Rating = ({ rating }: IRating) => {
  const getColor = (id: number) => {
    switch (id) {
      case 5:
        return "bg-green-400";
      case 4:
        return "bg-yellow-400";
      case 3:
        return "bg-orange-400";
      case 1:
        return "bg-red-400";
    }
  };

  return (
    <div className="flex text-black text-2xl rounded-md overflow-hidden ">
      {rating?.map((rate) => {
        return (
          <div
            key={rate.id}
            className={`${getColor(
              rate.id
            )} flex items-center px-3 py-9 whitespace-nowrap `}
            style={{ width: `${rate.percent}%` }}
          >
            <span className={`${rate.percent < 20 ? "hidden" : ""}`}>
              {rate.count} Ratings
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
