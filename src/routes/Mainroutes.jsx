import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Skills = lazy(() => import("../pages/Skills"));
const Contact = lazy(() => import("../pages/Contact"));

function Mainroutes() {
  return (
    <Suspense
      fallback={
        <div className=" h-screen flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default Mainroutes;
