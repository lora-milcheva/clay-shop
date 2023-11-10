import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path="/product/:id" element={<ProductPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
