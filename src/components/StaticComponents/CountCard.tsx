import React from "react";
import numberFormat from "../../libs/numberFormat";
import Card from "../card";

function CountCard({ title, count }: { title: string; count: number }) {
  return (
    <Card>
      <span className=" text-greyscale600 text-sm ">{title}</span>
      <h2 className="text-greyscale900 font-bold text-lg  break-words">
        {numberFormat(count)}
      </h2>
      <div>
        <svg
          width="184"
          height="71"
          viewBox="0 0 184 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48C0 45.2044 0 43.8065 0.456723 42.7039C1.06569 41.2337 2.23373 40.0657 3.7039 39.4567C4.80653 39 6.20435 39 9 39H21C23.7956 39 25.1935 39 26.2961 39.4567C27.7663 40.0657 28.9343 41.2337 29.5433 42.7039C30 43.8065 30 45.2044 30 48V71H0V48Z"
            fill="#F7FAFC"
          />
          <path
            d="M38 28C38 25.2044 38 23.8065 38.4567 22.7039C39.0657 21.2337 40.2337 20.0657 41.7039 19.4567C42.8065 19 44.2044 19 47 19H60C62.7956 19 64.1935 19 65.2961 19.4567C66.7663 20.0657 67.9343 21.2337 68.5433 22.7039C69 23.8065 69 25.2044 69 28V71H38V28Z"
            fill="#F7FAFC"
          />
          <path
            d="M77 9C77 6.20435 77 4.80653 77.4567 3.7039C78.0657 2.23373 79.2337 1.06569 80.7039 0.456723C81.8065 0 83.2044 0 86 0H98C100.796 0 102.193 0 103.296 0.456723C104.766 1.06569 105.934 2.23373 106.543 3.7039C107 4.80653 107 6.20435 107 9V71H77V9Z"
            fill="#F7FAFC"
          />
          <path
            d="M115 34C115 31.2044 115 29.8065 115.457 28.7039C116.066 27.2337 117.234 26.0657 118.704 25.4567C119.807 25 121.204 25 124 25H137C139.796 25 141.193 25 142.296 25.4567C143.766 26.0657 144.934 27.2337 145.543 28.7039C146 29.8065 146 31.2044 146 34V71H115V34Z"
            fill="#F7FAFC"
          />
          <path
            d="M154 24C154 21.2043 154 19.8065 154.457 18.7039C155.066 17.2337 156.234 16.0657 157.704 15.4567C158.807 15 160.204 15 163 15H175C177.796 15 179.193 15 180.296 15.4567C181.766 16.0657 182.934 17.2337 183.543 18.7039C184 19.8065 184 21.2044 184 24V71H154V24Z"
            fill="#F7FAFC"
          />
        </svg>
      </div>
    </Card>
  );
}

export default CountCard;
