import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import ListingsPage from "./pages/ListingsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
  <Route path="/" element={<Home />} />   {/* Home loads first */}
  <Route path="/listings" element={<ListingsPage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/blog" element={<BlogPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;