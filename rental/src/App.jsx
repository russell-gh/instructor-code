import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BsWatch } from "react-icons/bs";
import "./App.css";
import Products from "./components/Products";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Terms from "./components/Terms";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <BsWatch />

          <h1>Magpie Watch Rental</h1>
          <nav>
            <Link to="/">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </header>
        <aside>
          <p>
            Rent luxury <span className="swiss">Swiss</span> watches for 1 to 6
            weeks, ideal for special occasions such as weddings, birthdays and
            holidays
          </p>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <footer>
          <div className="left">
            &copy; 2023 Magpie Watch Rental | <Link to="/terms">Terms</Link>
          </div>
          <div className="right">
            <img src={"./images/payment.webp"} />
          </div>
        </footer>
      </>
    );
  }
}

export default App;
