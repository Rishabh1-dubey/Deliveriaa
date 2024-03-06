import { Link } from "react-router-dom";
import logo from "../Items/img/logo.png";
import UseOnlineStaus from "./CustomHook/UseOnlineSatus";
import { Link } from "react-router-dom";

const Header = () => {

    const onlineStatus = UseOnlineStaus();
    return (
        <div className="flex justify-between  shadow-xl  text-white text-lg bg-rose-400">
            <div className="logo-container">
                <img className="w-28" src={logo} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="m-2 px-6">online : {onlineStatus ? "✅" : "🔴"}</li>

                    <li className=" hidden xl:block px-6 hover:bg-yellow-200  pt-2 rounded-full hover:text-black hover:cursor-pointer hover:transition duration-300 "><Link to="/">Home</Link></li>

                    <li className=" hidden xl:block px-6     hover:bg-yellow-200  pt-2 rounded-full hover:text-black hover:cursor-pointer  hover:transition duration-300"><Link to="/about">About Us</Link></li>

                    <li className="px-6  hover:text-black  hover:rounded-full h-10 pt-[6] hover:bg-yellow-200  hover:cursor-pointer"><Link to="/contact">Contact Us</Link></li>

                    <li className="px-6  hover:text-black  hover:rounded-full h-10 pt-[6] hover:bg-yellow-200  hover:cursor-pointer">Cart</li>

                </ul>
            </div>
            <button className=" px-8  hidden sm:block sm:mr-4 md:mr-10 bg-red-900 my-8 py-1 px-3 rounded-md hover:bg-yellow-200  hover:text-black">Login</button>
        </div>
    )
}
export default Header;