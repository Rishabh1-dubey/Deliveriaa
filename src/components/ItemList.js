// import { CDN_URL } from "../utils/constents";
import {CDN_URL} from "../utils/constents";
const ItemList = ({items}) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">

                        <div className="p-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span>- ₹ {item.card.info.price / 100}</span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-3">
                    <img src={CDN_URL + item.card.info.imageId} className="rounded-md" />
                   </div>
                </div>
            ))}
        </div>
    )
            }
    export default ItemList;