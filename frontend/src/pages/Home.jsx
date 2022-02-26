import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Shipping from "../components/shipping/Shipping";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <Slider />
      <Categories />
      <Products
        products={products.slice(0, 6)}
        title="پرفروش ترین فرش های 12 متری"
      />
      <Shipping />
    </>
  );
};

export default Home;
