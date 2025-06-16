import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottonBanner from "../components/BottonBanner";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mt-10 relative">
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottonBanner />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
