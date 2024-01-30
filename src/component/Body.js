import Card, { isPromotedPresent } from "./Card";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    // HigherOrderFunction
    // 
    // const HigherRatedRestaurant = isPromotedPresent(Card);
    const updateList = () => {
        setRestaurantList(restaurantList.filter(restaurant => restaurant.info.avgRating > 4));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const filter = () => {
        const updatedList = restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurantList(updatedList);
    }


    return restaurantList.length == 0 ?
        (<ShimmerUi />) :
        (<>
            <input className="border m-2" name="searchbox" type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
            <button className="border bg-gray-600 text-white border-none px-6 rounded-md mr-2 cursor-pointer" onClick={filter}>Search</button>
            <button className="border bg-gray-600 text-white border-none px-6 rounded-md mr-2 cursor-pointer" onClick={updateList}>Sort on Review</button>
            <div className="flex flex-wrap m-5 jus">
                {filteredRestaurantList.map(restaurant => 
                <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                    <Card restaurant={restaurant} />
                   
                    {/* 
                    Higher Order Function
                    
                    {Number(restaurant.info.totalRatingsString.replace(/[^0-9]/g, "")) < 10 ? 
                        <HigherRatedRestaurant restaurant={restaurant}/> 
                        : <Card restaurant={restaurant} />} */}

                </Link>)}
            </div>
        </>)
}

export default Body;