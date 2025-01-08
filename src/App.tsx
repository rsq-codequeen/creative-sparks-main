import React from "react";
import { Route, Routes } from "react-router-dom";


import { Artists } from "./components/Artists";
import { ArtSupplies } from "./components/ArtSupplies";
import { ArtSupply } from "./components/ArtSupply";
import { Buy } from "./components/Buy";

import { Cart } from "./components/Cart";
import { Dashboard } from "./components/Dashboard";
import { ExhibitionSchedule } from "./components/ExhibitionSchedule";
import { Hero } from "./components/Hero";
import { Hire } from "./components/Hire";
import { HomeDecor } from "./components/HomeDecor";
import { HomeDecors } from "./components/HomeDecors";
import { JoinExhibition } from "./components/JoinExhibition";
import { Painting } from "./components/Painting";
import { Paintings } from "./components/Paintings";
import { Print } from "./components/Print";
import { Prints } from "./components/Prints";
import { Settings } from "./components/Settings";
import { Shop } from "./components/Shop";
import { Layout } from "./layouts/Layout";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Wishlist } from "./components/Wishlist";
import { LanguageProvider } from './LanguageContext'; 

export function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="shop" element={<Shop />} />
          <Route path="paintings">
            <Route index element={<Paintings />} />
            <Route path=":paintingId" element={<Painting />} />
          </Route>
          <Route path="prints">
            <Route index element={<Prints />} />
            <Route path=":printId" element={<Print />} />
          </Route>
          <Route path="home-decor">
            <Route index element={<HomeDecors />} />
            <Route path=":homeDecorId" element={<HomeDecor />} />
          </Route>
          <Route path="art-supplies">
            <Route index element={<ArtSupplies />} />
            <Route path=":artSupplyId" element={<ArtSupply />} />
          </Route>
          <Route path="artists" element={<Artists />} />
          <Route path="exhibition-schedule" element={<ExhibitionSchedule />} />
          <Route path="buy" element={<Buy />} />
          <Route path="hire" element={<Hire />} />
          <Route path="join-exhibition" element={<JoinExhibition />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cart" element={<Cart />} />
          <Route path="settings" element={<Settings />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="hero" element={<Hero />} />
        </Route>
      </Routes>
      </LanguageProvider>
  );
}
