import React, { useState } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestraList from "../utils/useRestraList";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";


const Body = () => {
  // Local State
  const [searchText, setSearchText] = useState("");
  const { listdata, filteredRestaurant, setFilteredRestaurant } =useRestraList();
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  if (onlineStatus === false) {
    return <h1>You are offline</h1>;
  }

  //So basically we are rendering the filteredRes state variable so inorder to render it we're also setting in the initial fetch.Also note we're using listdata and

  //setting the state variable in intial fetch so that we can perform filter through listdata

  // Fetch initial data from the API when the component mounts

  // Function to filter restaurants with an average rating greater than or equal to 4.4
  const filterTopRatedRestaurants = () => {
    setFilteredRestaurant(listdata.filter((res) => res.info.avgRating >= 4.4));
  };

  // Function to display all restaurants
  const seeAllRestaurants = async () => {
    setFilteredRestaurant(listdata); // Set the filteredRestaurant state variable to the initial listdata
  };

  const searchBox = () => {
    // Filter restaurants based on search text
    const filteredRes = listdata.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRes);
  };

  // JSX to render the component
  return listdata.length === 0 ? (
    // Show shimmer UI if data is still loading
    <Shimmer />
  ) : (
    // Render the body of the component with filters and restaurant cards
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search m-1 p-2 flex  sm:flex-row items-center">
          <input
            type="text"
            className="border border-solid border-black px-3 py-1 mb-2 sm:mb-0 sm:mr-2 sm:w-auto mt-2"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-1 py-2 ml-2 bg-blue-600 rounded-sm text-white text-[10px] md:mt-1"
            onClick={searchBox}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-center m-3">
      <div className="search flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg text-xs"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div> 

        {/* Button to show all restaurants */}
        <div className="search flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 ml-4 rounded-lg text-xs"
            onClick={seeAllRestaurants}
          >
            All Restaurants
          </button>
        </div>

        
      </div>

      {/* Render the restaurant cards based on the filtered data */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((res) => (
          <Link
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
            style={{ textDecoration: "none" }}
          >
            {res.info.promoted===true ? (<RestaurantCardPromoted  res={res}/>): 
            (<RestaurantCard res={res} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
