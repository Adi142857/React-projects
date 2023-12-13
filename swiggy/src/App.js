import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurMenu from "./components/RestrauMenu";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        //:resId here : means dynamic routing
        element: <RestaurMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// Header
//     -Logo
//     -Nav Items
// Body
//     -Search Bar
//     -RestaurantContainer
//         -RestaurantCard
// Img
// -Name of restaurant, star, cuisine,delivery time

// Footer
//     -Copyright
//     -Links
//     -Address
//     -Contact

// Things learned:
// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc)

//Default Export is used when we want to export only one thing from the file.
//export default Component;
//import Component from "path"

//Named Export is used when we want to export multiple things from the file.
//export {Component1, Component2};
// eg import {Component} from "path"

// React Hooks

// (Normal JS utility functions)
// useState()- Powerful State Variables
// useEffect()

//whenever a state variable updates React rerenders the component

// Reconciliation Algorithm(React Fiber)

// Virtual dom is representation of Actual DOM it is object representation

// Diff algotithm finds difference between old VD and new VD and then updates the dom (compares the objects)

// Whole algo is React Fiber

// After react 16 it is called react fiber React is fast due to virtual dom

// Types of Routing in web apps

// Client side Routing
// Server side Routing - Traditionally in MPA the client requests
// through network and server sends other pages whereas in client side
// already components page gets loaded in initail rendering and then
// no requests are additonally made making it SPA
