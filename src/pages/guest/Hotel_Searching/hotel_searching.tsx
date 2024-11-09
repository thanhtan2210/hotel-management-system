import React from "react";
import { Outlet } from "react-router-dom";

const HotelSearching: React.FC = () => {
  return (
    <div>
      <h1>Hotel Searching</h1>
      <Outlet />
    </div>
  );
};
export default HotelSearching;
