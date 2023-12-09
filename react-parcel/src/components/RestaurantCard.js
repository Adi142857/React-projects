import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ res }) => {
    // Destructure res?.info directly
    const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } = res?.info || {};
  
    return (
      <div className="res-card" style={{ backgroundColor: "#F0F0F0" }}>
        <img
          className="res-logo"
          alt="pavbhaji"
          src={cloudinaryImageId ? `${CDN_URL}/${cloudinaryImageId}`: " "}
        />
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

export default RestaurantCard;