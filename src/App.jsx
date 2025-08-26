import React from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

export default function MainLayout() {
  return (
    <div className="bg-gray-800 overflow-x-hidden min-h-screen scroll-smooth text-white">
      <Nav />
      <Mainroutes />
    </div>
  );
}