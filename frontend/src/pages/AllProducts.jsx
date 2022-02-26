import Products from "../components/products/Products";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <section>
      <Products products={products} title="همه محصولات" />
    </section>
  );
};

export default AllProducts;
