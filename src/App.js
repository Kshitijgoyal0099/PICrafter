import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/homePage/home";
import Search from "./components/searchPage/search";
import About from "./components/aboutPage/about";
import Contact from "./components/contactPage/contact";
import DisplayImage from "./components/displayImagePage/displayImage";
import EditImage from "./components/editImagePage/editImage";
import Footer from "./components/shared/footer"; // make sure this exists

export default function App() {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image/:id" element={<DisplayImage />} />
          <Route path="/image/:id/edit" element={<EditImage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
