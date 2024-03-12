import { useState } from "react";
import { useEffect } from "react";

import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([])

    useEffect(() => {
      
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=bb2d5e6802db4ae481017d443dc3879e`;
        console.log(url, "urrllll");
        fetch(url)
          .then(response => response.json())
          .then(data => setArticles(data.articles))
          .catch(error => console.error('Error fetching data:', error));
      }, [category]);
      


  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>;
        })}
    </div>
  )
}

export default NewsBoard
