import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const updateList = () => {
        setRestaurantList(restaurantList.filter(restaurant => restaurant.info.avgRating > 4));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5327517&lng=88.376133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(restaurantList.length < 1) {
        return <ShimmerUi/>;
    }
    
    return (
        <>
            <button onClick={updateList}>Sort on Review</button>
            <div className="restaurant-display">
                {restaurantList.map(restaurant => <Card key={restaurant.info.id} restaurant={restaurant} />)}
            </div>
        </>
    )
}

export default Body;