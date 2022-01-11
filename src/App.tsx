import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import ProductModule from "./components/ProductModule";
import { nanoid } from "nanoid";
import ItemImg from "./assets/images/img-item.jpg";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="product__container">
        <ProductModule type={1}/>
        <ProductModule type={2}/>
        <ProductModule type={3}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
