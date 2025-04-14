import React from "react";
import "./noResults.css";

const NoResults = ({ query }) => {
  return (
    <div className="no-results-container">
      <h2>😕 No Images Found</h2>
      <p>
        We couldn't find anything for <span className="query">"{query}"</span>.
      </p>
      <p>Try searching something else 🎨🖼️</p>
      <div className="emoji-bounce">🔍🦄🌈📸</div>
    </div>
  );
};

export default NoResults;
