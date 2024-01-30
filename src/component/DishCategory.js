import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const DishCategory = ({ category, show, updateIndex, closeIndex }) => {
    const title = category.card.card.title;
    const items = category.card.card.itemCards;

    const dispatch = useDispatch();
    const addToCart = (item)=>{
        dispatch(addItem(item));
    }

    const open = () => {
        if (show) {
            closeIndex();
        } else {
            updateIndex();
        }
    }

    return (
        <div className="mt-1">
            <div className="flex wrap bg-gray-200 justify-between p-3">
                <h1 className="text-black font-bold">{title}({items.length})</h1>
                <button onClick={open}>🔽</button>
            </div>
            {show && <div className="p-3">
                {items.map(item => {
                    return (
                        <div className="flex wrap justify-between bg-cyan-100 p-2">
                            <h1 key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</h1>
                            <button className="bg-lime-300 cursor-pointer text-black px-3 py-1 rounded-md " onClick={()=>addToCart(item)}>+ Add</button>
                        </div>
                    )
                })}
            </div>
            }
        </div>)

}

export default DishCategory;