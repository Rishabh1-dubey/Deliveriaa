import { resolvePath, useParams } from "react-router-dom";
import useRestrauentMenu from "./CustomHook/useRestrauentMenu";
// import { MENU_API } from "../utils/constents";
import Shimmer from "./Shimmer";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  // const [ResInfo,setResInfo]=useState(null);
  //useParams gives you to resId
  // console.log(useParams());
  // console.log(id);
  // console.log("thfioso",ResInfo );

  const { id } = useParams();
  const ResInfo = useRestrauentMenu(id);
  const [ShowIndex, setShowIndex] = useState(null);

  //fetch data custome hooks me lekr chale gye

  if (ResInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    ResInfo?.cards[0]?.card?.card?.info || ResInfo?.cards[2]?.card?.card?.info;

  // const {itemCards}=ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards,"kdfhgh");
  // console.log(ResInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

  const categories =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const items = categories.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);

  // cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold  text-lg">
        {cuisines.join(" , ")}-{costForTwoMessage}
      </p>
      {/* <ul>
                {categories&&categories.map((item) => {
                    return <>
                        <li key={item.card.info.id}>
                            {item.card.info.name}-{"RS"}-{item.card.info.price / 100}
                        </li>
                    </>
                })}
            </ul> */}
      {/* above code is done by himanshu-bhai */}

      {items &&
        items.map((category, index) => (
          <RestaurentCategory
            key={category?.card?.card.id}
            data={category?.card?.card}
            showItem={index === ShowIndex ? true : false}
            setShowIndex={(index) => {
              setShowIndex(index);
            }}
            index={index}
          />
        ))}
    </div>
  );
};
export default RestaurentMenu;
