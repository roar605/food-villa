import React, { lazy,Suspense, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorHandling from "./components/Error";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";
import userContext from "./utilities/userContext";
import { Provider } from "react-redux";
import store from "./utilities/store";
import Cart from "./components/Cart";

const Instamart =lazy(()=>import("./components/Instamart"))

const AppLayout = () => {
    const [user,setUser]=useState({
        name:"Rohit Kumar Singh",
        email:"rksingh6050@gmail.com",
    });
    return (
        <Provider store={store}>
        <userContext.Provider value={{
            user:user,
            setUser:setUser,
        }}>
            <Header />
            <Outlet/>
            <Footer />
        </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorHandling />,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:id",
                element: <RestaurantMenu/>
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense> 
            },
            {
                path:"/cart",
                element:<Cart/> 
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


