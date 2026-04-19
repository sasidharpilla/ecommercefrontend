import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Categories from "../components/categories";
import Products from "../components/products";
import NewArrivals from "../components/newArrivals";
import Offers from "../components/offers";
import Footer from "../components/footer";
import TodaysSale from "../components/todaysSale";
import ProductCard from "@/components/productCard";
import ShopCate from "@/components/shopCate";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      
      <Hero />
      <TodaysSale />
      <Products />
      <Offers />
      <ShopCate />
      <NewArrivals/>
      <Footer />

      
  
      
    </div>
  );
}