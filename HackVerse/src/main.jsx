import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Homepg from "./Homepg.jsx";
import St from "./St.jsx";
import Th from "./Th.jsx";
import Claims from "./Claims.jsx";
import Profile from "./Profile.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepg />} /> {/* Render Library at root */}
      <Route path="/st" element={<St />} /> 
      <Route path="/th" element={<Th />} /> 
      <Route path="/claims" element={<Claims />} /> 
      <Route path="/profile" element={<Profile />} /> 
      <Route path="/home" element={<Homepg />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
