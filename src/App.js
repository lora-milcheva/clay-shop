import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/layout/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <>
            <Header/>
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
        </>
    );
}

export default App;
