import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imbdID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
