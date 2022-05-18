import React from "react";

import { About, Header, Footer, Skills, Testimonail, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonail />
      <Footer />
    </div>
  );
};

export default App;
