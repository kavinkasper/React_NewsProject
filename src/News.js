import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import apiConfig from "./Apiconfig";
import "./News.css";

const News = () => {
  const [value, setValue] = useState([]);
  const REQ_ULR =
    `https://newsapi.org/v2/everything?q=apple&from=2023-12-27&to=2023-12-27&sortBy=popularity&apiKey=${apiConfig.apiKey}`;

     // Fetching news data's when the component is Loaded
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(REQ_ULR);
        let result = await response.data;
        let p = result.articles.map((article) => {
            //Filtering out articles with missing or false properties
          if (article.title && article.urlToImage && article.description) {
            return (
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
            );
          }
          return null;
        });
        setValue(p);

      } catch (error) {
        console.log("Error occured is:", error);
      }
    };

    fetchNewsData();
  },[]);      //The empty dependency array ensures that useEffect runs only once when the component is loaded

  return <div className="news-container">{value}</div>;
};

export default News;
