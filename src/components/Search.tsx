import React from "react";

import avatar from "../assets/avatar.svg";

interface ISearchProps {
  name: string;
  gamertag: string;
  city: string;
  country: string;
}
const Search = (Props: ISearchProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-lighterblack p-8 rounded-md w-full">
        <div className="border-b border-b-grey flex flex-row space-x-8 mb-3 pb-3">
          <img className="w-32 h-32" src={avatar} />
          <div className="flex flex-col">
            <h1>
              Nome: <span className="text-lightgrey font-thin">{Props.name}</span>
            </h1>
            <h2>
              Gamertag: <span className="text-lightgrey font-thin">{Props.gamertag}</span>
            </h2>
            <h4 className="font-thin mt-1">
              {Props.city}, {Props.country}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
