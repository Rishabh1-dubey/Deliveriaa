import RestaurentCard from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [filteredRestaurent, setfilterRestaurent] = useState([]);
  const [searchText, setsearchText] = useState([]);
  // const handleScroll = () =>{
  //     scroller.scrollTo('res-list',{
  //       smooth:true,
  //       duration: 560,
  //       offset : -170
  //     })
  //   }

  // for fetching api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilterRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(filteredRestaurent);

  return listOfRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="  mb-[200px] ml-[80px]  ">
      <div className="filter flex mb-5 ">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="text-xs border border-gray-400 shadow-md focus:border-gray-500 transition-all duration-300 px-4 py-2 outline-none  rounded-l-2xl  md:ml-[90]  lg:ml-[40] xl:ml-0"
            placeholder="Enter your restaurent"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="text-xs font-medium shadow-md px-4 py-2 outline-none  md:mr-2 right-10 border border-gray-400 bg-orange-500 hover:border-gray-500 transition-all duration-200 ease-in-out text-white rounded-r-xl md:bg-white md:text-black"
            onClick={() => {
              console.log(searchText);

              //for display on the ui we have to filtered the res...
              const filteredRestaurant = listOfRestaurent.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterRestaurent(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>

        <div className="search  flex items-center">
          <button
            className="  px-4 py-2  mr-2 ml-[100px]  bg-orange-500 text-white xl:bg-white rounded-full xl:hover:bg-orange-500 xl:hover:text-white xl:text-black  md:mb-0 sm:ml-[222] md:ml-[60] lg:ml-[390] xl:ml-[2]"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4
              );
              // setlistOfRestaurent(filteredList);
              setfilterRestaurent(filteredList);
            }}
          >
            Top rated Resturet
          </button>

          <button
            className=" hidden xl:block  px-4 py-2  mx-2 xl:ml-[40] xl:-mt-[5] bg-white rounded-full hover:bg-orange-500 hover:text-white"
            onClick={() => {
              let sortedlist = [...listOfRestaurent];
              listOfRestaurent.sort(
                (a, b) => a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
              );
              setfilterRestaurent(sortedlist);
            }}
          >
            Nearest Restaurent
          </button>
          <button
            className="   hidden xl:block px-4 py-2 mx-2 xl:ml-[80] xl:-mt-[10] bg-white rounded-full hover:bg-orange-500 hover:text-white"
            onClick={() => {
              let sortedlist = [...listOfRestaurent];
              listOfRestaurent.sort(
                (a, b) =>
                  Number(b.info.costForTwo.substr(1, 3)) -
                  Number(a.info.costForTwo.substr(1, 3))
              );
              setfilterRestaurent(sortedlist);
            }}
          >
            Cost:High to Low
          </button>
          <button
            className="  hidden xl:block px-4 py-2 mx-2 xl:ml-[80px] xl:-mt-[09px] bg-white rounded-full hover:bg-orange-500 hover:text-white"
            onClick={() => {
              let sortedlist = [...listOfRestaurent];
              listOfRestaurent.sort(
                (a, b) => a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
              );
              setfilterRestaurent(sortedlist);
            }}
          >
            Delivery Time
          </button>
        </div>
      </div>
      {/* <div className=" absolute top-[195px] border-t border-gray-500 min-h-px w-[1330px]  "></div> */}
      <div className="pt-[40] xl:mr-[98] border-b-2 border-b-slate-300 xl:pt-0  xl:ml-[99px] xl:pb-2"></div>
      <div className=" flex flex-wrap">
        {filteredRestaurent.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurant/" + restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
     {/* <Footer/> */}
    </div>
  );
};
export default Body;
