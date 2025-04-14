import React, { useEffect, useState } from "react";
import "./search.css";
import imgLogo from "../../assets/LogoPICrafter.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageTile from "./imageTile";
import axios from "axios";
import ParticlesBackground from "../shared/particlesBackground";
import ParticlesBackgroundDark from "../shared/particlesBackgroundDark";
import NoResults from "./noResult";
import Masonry from "react-masonry-css";

function Search() {
  const breakPointColumnsObject = {
    default: 6,
    1940: 5,
    1620: 4,
    1300: 3,
    980: 2,
    660: 1,
  };

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q");

  const [inputvalue, setInputValue] = useState(query || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios
        .get(`https://api.unsplash.com/search/photos`, {
          params: {
            query: query,
            per_page: 20,
            page: page,
            client_id: "rgIMadbOPmfuXVHtFXM8T8Uj5pBg5cA_SUDeUuDi-0U",
          },
        })
        .then((res) => {
          setResults(res.data.results);
          setTotalPages(res.data.total_pages);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching images.", error);
        });
    }
  }, [query, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue.trim() !== "") {
      navigate(`/search?q=${inputvalue}`);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (page > 2)
      pages.push(
        <span key={1} className="pageNumber" onClick={() => setPage(1)}>
          1
        </span>
      );
    if (page > 3) pages.push(<span key="dots1">...</span>);
    for (
      let i = Math.max(1, page - 1);
      i <= Math.min(totalPages, page + 1);
      i++
    ) {
      pages.push(
        <span
          key={i}
          onClick={() => setPage(i)}
          className={`pageNum ${page === i ? "activePage" : ""}`}
        >
          {i}
        </span>
      );
    }

    if (page < totalPages - 2) pages.push(<span key="dots2">...</span>);
    if (page < totalPages - 1)
      pages.push(
        <span
          key={totalPages}
          className="pageNum"
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </span>
      );
    return pages;
  };

  return (
    <>
      <div className="searchPage">
        <div className="searchHeader">
          <Link to="/home">
            <img src={imgLogo} className="searchLogo" alt="PICrafter Logo" />
          </Link>
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputvalue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search for images..."
              className="searchInput"
            />
            <button type="submit" className="searchButton">
              Search
            </button>
          </form>
          <button
            className="darkToggle"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {darkMode ? <ParticlesBackgroundDark /> : <ParticlesBackground />}

        {loading ? (
          <div className="loading-spinner"></div>
        ) : results.length > 0 ? (
          <>
            <div className="tile-container">
              <Masonry
                breakpointCols={breakPointColumnsObject}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {results.map((img) => (
                  <ImageTile key={img.id} image={img} />
                ))}
              </Masonry>
            </div>
            <div className="imagePageToggle">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                ← Prev
              </button>
              <div className="pageNumbers">{renderPageNumbers()}</div>
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
              >
                Next →
              </button>
            </div>
          </>
        ) : (
          // <h2 className="noResultsText">Loading or No Results Found</h2>
          <NoResults query={query} />
        )}
      </div>
    </>
  );
}

export default Search;
