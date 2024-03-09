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
            "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.0759837%26lng%3D72.8776559%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setlistOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setfilterRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log(filteredRestaurent);

    return listOfRestaurent?.length === 0 ? <Shimmer /> : (

        <div className="  mb-[200px] ml-[90px]  ">

            <div className="filter flex mb-5 ">
                <div className=" m-4 p-4">
                    <input  type="text" className="text-xs border border-gray-300 shadow-md focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded-lg" placeholder="Enter your restaurent" value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />

                    <button className="text-xs font-medium shadow-md px-4 py-2 outline-none ml-5 md:mr-2 right-10 border border-gray-300 bg-orange-500 hover:border-gray-500 transition-all duration-200 ease-in-out text-white rounded md:bg-white md:text-black" onClick={() => {
                        console.log(searchText);

                        //for display on the ui we have to filtered the res...
                        const filteredRestaurant = listOfRestaurent.filter((res) =>
                            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilterRestaurent(filteredRestaurant);
                    }}>search</button>
                </div>

                <div className="search  flex items-center">
                    <span className="  px-4 py-2 outline-none m-2 ml-9 rounded-full  hover:bg-orange-500  hover:text-white  transition-all duration-200 ease-in-out text-black cursor-pointer"
                        onClick={() => {
                            const filteredList = listOfRestaurent.filter((res) => res.info.avgRating > 4);
                            // setlistOfRestaurent(filteredList);
                            setfilterRestaurent(filteredList);
                        }}
                    >
                        Top rated Resturet
                    </span>



                    <span className=" px-4 py-2 ml-9 outline-none m-2  rounded-full  hover:bg-orange-500 hover:text-white  transition-all duration-200 ease-in-out text-black cursor-pointer"
                        onClick={() => {

                            let sortedlist = [...listOfRestaurent]
                            listOfRestaurent.sort(
                                (a, b) => a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
                            );
                            setfilterRestaurent(sortedlist);
                        }}
                    >
                        Nearest Restaurent
                    </span>
                    <span className="   px-4 py-2 ml-9 outline-none m-2  rounded-full  hover:bg-orange-500 hover:text-white  transition-all duration-200 ease-in-out text-black cursor-pointer"
                        onClick={() => {

                            let sortedlist = [...listOfRestaurent]
                            listOfRestaurent.sort(
                                (a, b) => Number(b.info.costForTwo.substr(1, 3)) - Number(a.info.costForTwo.substr(1, 3)));
                            setfilterRestaurent(sortedlist);
                        }}
                    >
                        Cost:High to Low
                    </span>
                    <span className="  px-4 py-2 ml-9 rounded-full  hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out text-black cursor-pointer"
                        onClick={() => {

                            let sortedlist = [...listOfRestaurent]
                            listOfRestaurent.sort(
                                (a, b) => a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
                            );
                            setfilterRestaurent(sortedlist);
                        }}
                    >
                        Delivery Time
                    </span>

                </div>
            </div>
            <div className=" absolute top-[195px] border-t border-gray-500 min-h-px w-[1330px] "></div>
             

            <div className=" flex flex-wrap">

                {filteredRestaurent.map((restaurent) => (
                    <Link key={restaurent.info.id} to={"/restaurant/" + restaurent.info.id}>
                    <RestaurentCard resData={restaurent} />
                    </Link>
                ))}
            </div>
        </div>

    )
}
export default Body;