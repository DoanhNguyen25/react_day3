import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import ProductModule from "./components/ProductModule";
import { nanoid } from "nanoid";
import ItemImg from "./assets/images/img-item.jpg";
import Container from "./components/Common/Container";
import ScrollButton from "./components/Common/ScrollButton";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Container>
      <ProductModule type={1}/>
        <ProductModule type={3}/>
        <ProductModule type={2}/>
      </Container>
      <Footer />
      <ScrollButton/>
    </div>
  );
}

export default App;
