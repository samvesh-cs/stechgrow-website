import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Solution from "../pages/Solution";
import Platform from "../pages/Platform";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (

        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solution" element={<Solution />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;