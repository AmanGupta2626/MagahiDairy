import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const layout = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100">
        {/* <Navigation /> */}
        <Outlet />
      </div>
    </>
  );
};

export default layout;
