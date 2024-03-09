import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";

import { Container } from "postcss";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const AppLayOut = () => {
    return (
        <Provider store={appStore}>
            <div className="app">

                <Header />
                {/* <Body/> */}
                <Outlet />
            </div>
        </Provider>

    );
};

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            }, {
                path: "/contact",
                element: <Contact />
            }, {
                path: "/restaurant/:id",
                element: <RestaurentMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayOut/>);
root.render(<RouterProvider router={approuter} />);
