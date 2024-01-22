import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    const updateList = () => {
        setRestaurantList(restaurantList.filter(restaurant => restaurant.info.avgRating > 4));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const filter = ()=>{
       const updatedList =  restaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurantList(updatedList);
    }

    
    return restaurantList.length == 0 ?
     ( <ShimmerUi/>) :
        (<>
            <input name="searchbox" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button onClick={filter}>Search</button>
            <button onClick={updateList}>Sort on Review</button>
            <div className="restaurant-display">
                {filteredRestaurantList.map(restaurant => <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><Card restaurant={restaurant} /></Link>)}
            </div>
        </>)
}

export default Body;