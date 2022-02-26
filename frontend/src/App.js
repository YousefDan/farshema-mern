import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SingleProduct from "./components/products/SingleProduct";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import ContactUsPage from "./pages/ContactUsPage";
import CommonQuestions from "./pages/CommonQuestions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productApiCall";
import AllProducts from "./pages/AllProducts";


const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/common-questions" element={<CommonQuestions />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/register" element={currentUser ? <Home /> : <Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
