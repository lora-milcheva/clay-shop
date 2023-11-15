import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

import Cart from "./components/pages/Cart";
import HomePage from "./components/pages/HomePage";
import ShopPage from "./components/pages/ShopPage";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ProductPage from "./components/pages/ProductPage";


import { ShoppingCartProvider } from "./store/shopping-cart-context";


function App() {
    return (
        <ShoppingCartProvider>
            <Header/>
            <Cart />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/shop" element={<ShopPage/>}/>
                    <Route path="/product/:id" element={<ProductPage/>}/>
                    <Route path="/blog" element={<BlogPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </ShoppingCartProvider>
    );
}

export default App;
