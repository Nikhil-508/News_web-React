import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = () => {

    const [articles,setArticles] = useState([]);

    useEffect(() => {
        const api_key = import.meta.env.VITE_API_KEY;
        console.log("api_key:", api_key); 
      
        let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bb2d5e6802db4ae481017d443dc3879e`;
        console.log(url, "urrllll");
        fetch(url)
          .then(response => console.log(response))
          .then(data => setArticles(data.articles))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      


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
