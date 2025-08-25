import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Home";
import About from "./components/About";
import Apply from "./components/Apply";
import Blogs from "./components/Blogs";
import Impact from "./components/Impact";
import Media from "./components/Media";
import Partners from "./components/Partners";
import Awards from "./components/Awards";
import Registration from "./components/Registration";
import RegistrationLink from "./components/RegistrationLink";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registrationlink" element={<RegistrationLink />} />
      </Routes>
    </Layout>
  );
}

export default App;
