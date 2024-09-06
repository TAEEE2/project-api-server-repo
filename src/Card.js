import React from "react";
import "./Card.css";

function Card({ title, description, imgSrc, likes, comments, shares, daysLeft }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-image" />
      <div className="card-content">
        <p>D-{daysLeft}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-stats">
          <span>댓글 {comments}</span>
          <span>공유 {shares}</span>
          <span>좋아요 {likes}K</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
