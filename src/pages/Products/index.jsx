import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeDesktop } from "../HomeDesktop";
import Sneakers from "./ShoesThree/src/pages"; // Votre composant Sneakers
import Teeshirts from "./Teeshirts";
import Sweatshirts from "./Sweatshirts"; 
import Calecons from "./Calecons"; 
import Accessoires from "./Accessoires";  
import Products from "./Products"; 
import Favoris from "../User/Favoris"; 
import Panier from "../User/Panier";
import Profile from "../User/Profile";
import {ItemPurschase} from "../ItemPurschase/ItemPurschase";
// ... autres imports

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDesktop />} />
        <Route path="frontv3\src\screens\Products\ShoesThree\src\pages\index.tsx" element={<Sneakers />} />
        <Route path="/teeshirts" element={<Teeshirts />} />
        <Route path="/sweatshirts" element={<Sweatshirts />} />
        <Route path="/calecons" element={<Calecons />} />
        <Route path="/accessoires" element={<Accessoires />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/itempurchase" element={<ItemPurschase />} />
        {/* ... autres routes */}
      </Routes>
    </Router>
  );
};

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);