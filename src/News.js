import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import apiConfig from "./Apiconfig";
import "./News.css";
import Footer from "./Footer";
import Header from "./Header";

const News = () => {
  const [value, setValue] = useState([]);
  const REQ_ULR = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiConfig.apiKey}`;

  // Fetching news data's when the component is Loaded
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(REQ_ULR);
        let result = await response.data;
        setValue(result.articles);
        console.log("Hii");
      } catch (err) {
        alert("Error: " + err);
      }
    };
    fetchNewsData();
  }, [REQ_ULR]);
  //The dependency array ensures that useEffect runs only when the REQ_URL is called.

  const validArticles = value.filter(
    (article) => article.title && article.urlToImage && article.description
  );

  return (
    <React.Fragment>
      <Header />
      <div className="news-container">
        {validArticles.map((article) => (
          <div key={article.title} className="news-card">
            <img
              className="card-image"
              src={article.urlToImage}
              alt="News images"
            />
            <div className="card-content">
              <div className="card-title">{article.title}</div>
              {article.author && (
                <p className="author-info">-by {article.author}</p>
              )}
              <p className="card-description">{article.description}</p>
              <a href={article.url} className="read-more-link">
                Read more...
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default News;
