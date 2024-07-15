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
          <div className="p-5 my-5 bg-pink-100">
            <input
              type="text"
              className="search-input p-2"
              placeholder="Search Restraunts"
              name="inbox"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="bg-purple-500 m-1 p-2 text-white rounded hover:bg-purple-700"
              onClick={() => {
                //Filter the restaurants list
                const data = filterData(searchText, allRestra);
                setFilterRestra(data);
              }}
            >
              Search
            </button>

            <input
              value={user.name}
              onChange={(e) =>
                setUser({ name: e.target.value, email: "newemail@gmail.com" })
              }
            ></input>
          </div>
          <div className="restraunt-list flex flex-wrap">
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
