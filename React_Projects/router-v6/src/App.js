import React, { Component } from "react";
import Expenses from "./Expenses";
import Invoices from "./Invoices";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
