import React from "react";

// import components
import Navbar from "./component/Navbar";
import Tourlist from "./component/tourlist/Tourlist";

import "./App.scss";
const App = () => {
  return (
    <main>
      <Navbar />
      <Tourlist />
    </main>
  );
};

export default App;
