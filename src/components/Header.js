// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Items/img/logo.png";
import UseOnlineStaus from "./CustomHook/UseOnlineSatus";
import { useSelector } from "react-redux";


const Header = () => {

    const onlineStatus = UseOnlineStaus();

    //subscribing the cartitem with the help of useselctor
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between  shadow-xl  text-white text-lg bg-rose-400 h-24">
            <div className="logo-container">
                <img className="w-[96px]" src={logo} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="m-2 px-6">online : {onlineStatus ? "✅" : "🔴"}</li>

                    <li className=" hidden xl:block px-6 hover:bg-yellow-200  pt-2 rounded-full hover:text-black hover:cursor-pointer hover:transition duration-300 "><Link to="/">Home</Link></li>

                    <li className=" hidden xl:block px-6     hover:bg-yellow-200  pt-2 rounded-full hover:text-black hover:cursor-pointer  hover:transition duration-300"><Link to="/about">About Us</Link></li>

                    <li className="px-6  hover:text-black  hover:rounded-full h-10 pt-[6] hover:bg-yellow-200  hover:cursor-pointer"><Link to="/contact">Contact Us</Link></li>

                    <li className="  px-6  hover:text-black  hover:rounded-full h-10 pt-[6] hover:bg-yellow-200  hover:cursor-pointer">
                        <Link to="cart">Cart-{cartItems.length}</Link> </li>

                </ul>
            </div>
            <button className=" px-8  hidden sm:block sm:mr-4 md:mr-10 bg-red-900 my-7 py-1  rounded-md hover:bg-yellow-200  hover:text-black">Login</button>
        </div>
    )
}
export default Header;