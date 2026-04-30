import React from "react";
import "../../App.scss";

const News = ({ category, title, image, author, text }) => {
  return (
    <div className="news">
      <div>
        {image && (
          <div className="image-news" style={{ backgroundImage: `url(${image})` }} />
        )}
        <h3 className={`font-primary-bold`}>
          <span className="category">{category}</span>.&nbsp;
          {title}
        </h3>
        {text}
        {author && <p className={`font-secondary`}>Por {author}</p>}
      </div>
    </div>
  );
};

export default News;
