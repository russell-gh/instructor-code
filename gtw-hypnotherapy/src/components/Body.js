import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Sessions from "../pages/Sessions";
import WhatIs from "../pages/WhatIs";
import Classes from "../pages/Classes";
import Faq from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FormSuccess from "../pages/FormSuccess";
import FormFail from "../pages/FormFail";
const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/session" element={<Sessions />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/whatIs" element={<WhatIs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/formSuccess" element={<FormSuccess />} />
        <Route path="/formFail" element={<FormFail />} />
      </Routes>
    </>
  );
};

export default Body;
