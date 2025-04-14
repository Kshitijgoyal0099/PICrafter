// components/searchPage/ImageTile.js
import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const ImageTile = ({ image }) => {
  const { urls, user, likes, liked_by_user } = image;
  const handleClick = () => {
    localStorage.setItem(`image-${image.id}`, JSON.stringify(image));
    window.location.href = `/image/${image.id}`;
  };

  return (
    <div className="image-tile" onClick={handleClick}>
      <img src={urls.raw} alt={image.alt_description} className="tile-img" />
      <div className="tile-footer">
        <div className="tile-user">
          <img
            src={user.profile_image.small}
            alt={user.name}
            className="user-img"
          />
          <span className="user-name">{user.username}</span>
        </div>
        <div className="tile-like">
          <FontAwesomeIcon icon={liked_by_user ? solidHeart : regularHeart} />
          <span className="likes-count">{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageTile;
