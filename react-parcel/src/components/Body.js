import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State
  const [listdata, setlistdata] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState("");

  //So basically we are rendering the filteredRes state variable so inorder to render it we're also setting in the initial fetch.Also note we're using listdata and
  //setting the state variable in intial fetch so that we can perform filter through listdata

  // Fetch initial data from the API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch restaurant data from the Swiggy API
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // Extract restaurant data and update both listdata and filteredRestaurant
      let restaurants =
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setlistdata(restaurants || []);
      setFilteredRestaurant(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to filter restaurants with an average rating greater than or equal to 4.4
  const filterTopRatedRestaurants = () => {
    setFilteredRestaurant(listdata.filter((res) => res.info.avgRating >= 4.4));
  };

  // Function to display all restaurants
  const seeAllRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const allRestaurants =
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setFilteredRestaurant(allRestaurants);
    } catch (error) {
      console.log(error);
    }
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
      <div className="filter">
        {/* Search input */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={searchBox}>
            Search
          </button>
        </div>

        {/* Button to filter top-rated restaurants */}
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>

        {/* Button to show all restaurants */}
        <button className="filter-btn" onClick={seeAllRestaurants}>
          All Restaurants
        </button>
      </div>

      {/* Render the restaurant cards based on the filtered data */}
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurants/"+res.info.id} style={{textDecoration:'none'}}>
            <RestaurantCard res={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
