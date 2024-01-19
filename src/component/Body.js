import Card from "./Card";

const Body = ({restaurantList}) => {
    return (
    <div className="restaurant-display">
        {restaurantList.map(restaurant => <Card key={restaurant.info.id} restaurant={restaurant} />)}
    </div>
    )
}

export default Body;