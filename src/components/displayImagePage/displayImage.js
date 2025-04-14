import { useEffect, useState } from "react";
import "./displayImage.css";
import Header from "../shared/header";
import { useParams } from "react-router-dom";
import ParticlesBackground from "../shared/particlesBackground";
import ParticlesBackgroundDark from "../shared/particlesBackgroundDark";
import { FiSun, FiMoon, FiHeart } from "react-icons/fi";

function DisplayImage() {
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const imageData = JSON.parse(localStorage.getItem(`image-${id}`));

  if (!imageData) return <div>Loading...</div>;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageData.urls.full;
    link.download = "PICrafter-Image";
    link.click();
  };
  return (
    <div className="displayImagePage">
      <Header />
      {darkMode ? <ParticlesBackgroundDark /> : <ParticlesBackground />}
      <button className="modeToggleBtn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <div className="imageDetailsContainer">
        <div className="imageLeft">
          <img
            src={imageData.urls.full}
            alt={imageData.alt_description}
            className="displayedImage"
          />
        </div>
        <div className="imageRight">
          <h2>{imageData.alt_description || "Untitled Image"}</h2>
          <p>
            <strong>Photographer:</strong> {imageData.user.name}
          </p>
          <p>
            <strong>Username:</strong> @{imageData.user.username}
          </p>
          <p>
            <strong>Dimensions:</strong> {imageData.width} x {imageData.height}
          </p>
          <p>
            <strong>Likes:</strong>{" "}
            <FiHeart style={{ color: "red", marginRight: "5px" }} />{" "}
            {imageData.likes}
          </p>
          {imageData.user.portfolio_url && (
            <a
              href={imageData.user.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio 🔗
            </a>
          )}
        </div>
      </div>
      <div className="imageActions">
        <button className="actionBtn downloadBtn" onClick={handleDownload}>
          Download Image
        </button>
        <button
          className="actionBtn editBtn"
          onClick={() => (window.location.href = `/image/${id}/edit`)}
        >
          Edit Image
        </button>
      </div>
    </div>
  );
}
export default DisplayImage;
