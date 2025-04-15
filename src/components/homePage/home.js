import "./home.css";
import imgLogo from "../../assets/LogoPICrafter.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../shared/header";
import ParticlesBackground from "../shared/particlesBackground";
import ParticlesBackgroundDark from "../shared/particlesBackgroundDark";
import { FiSun, FiMoon } from "react-icons/fi";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <div className="homePage">
      <Header />
            {darkMode ? <ParticlesBackgroundDark /> : <ParticlesBackground />}
            <button className="modeToggleBtn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
      
      <div className="homeBody fade-in">
        <div className="textContent">
          <div className="mainHeading">
            <>Welcome to</> <span>PICrafter</span>
          </div>
          <div className="tagline">Your one-stop solution for image crafting</div>
          <div className="description">
            Explore our features and start creating stunning images today!
          </div>
          <div className="imageShowcase">
            <img src={imgLogo} className="homeImage bounce" alt="PICrafter" />
          </div>
          <div className="homeSearchBar">
            <input
              type="text"
              placeholder="Search stunning images..."
              className="searchInput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="searchButton" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
