import { useSelector } from "react-redux";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return(
        <div>
            <h1>Items in Cart</h1>
            {cartItems.map(item=>{
                return <h1 key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</h1>
            })}
        </div>
    )
}

export default Cart;