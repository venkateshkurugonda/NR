import ResCard from "./ResCard";
import restaurantList from "../utils/restaurants";
import { useState, useEffect } from "react";



const Body = () => {

  let [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  useEffect(() => {
    console.log("useEffect");
  }, [])

  return (
    <div className="body-container">
      <div className="search-bar">
        <button className="top-btn" onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter((res) => res.data.avgRating >= 4)
          setListOfRestaurants(filteredRestaurants);
          return listOfRestaurants;
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => <ResCard resData={res} key={res.data.id} />)}
      </div>
    </div>
  )
}

export default Body;