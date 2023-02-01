import React from "react";
import { ValueProvider } from "./components/context";
import Search from "./components/Search";
import "./App.css";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import News from "./components/News";
import Headlines from "./components/Headlines";

function App() {
  return (
    <ValueProvider>
      <div className="mainbody">
        <Search />
        <div className="appbody">
          <Filter />
          <News />
          <Headlines />
        </div>
        <Footer />
      </div>
    </ValueProvider>
  );
}

export default App;
