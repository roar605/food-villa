import React, { useContext, useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { filterData } from "../utilities/helper";
import userContext from "../utilities/userContext";
import { Link } from "react-router-dom";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRestra, setFilterRestra] = useState([]);
  const [allRestra, setAllRestra] = useState([]);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    //fetch API
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.509479166321917&lng=88.4175369143486&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setFilterRestra(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestra(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log(allRestra);

  return (
    <>
      {allRestra?.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="p-5 my-5 bg-blue-100 mx-auto flex justify-center">
            <input
              type="text"
              className="search-input p-2 w-[70%] "
              placeholder="Search Restraunts"
              name="inbox"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                const data = filterData(searchText, allRestra);
                setFilterRestra(data);
              }}
            ></input>
            <button
              className="bg-blue-500 m-1 p-2 text-white rounded hover:bg-blue-700"
              onClick={() => {
                //Filter the restaurants list
                const data = filterData(searchText, allRestra);
                setFilterRestra(data);
              }}
            >
              Search
            </button>
          </div>
          <div className="restraunt-list flex flex-wrap w-[80%] gap-8 mx-auto">
            {filterRestra?.map((c) => {
              return (
                <Link key={c.info.id} to={"/restaurant/" + c.info.id}>
                  <RestrauntCard rest={c.info} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
