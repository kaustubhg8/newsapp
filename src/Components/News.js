import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super()

    console.log("Hello I'm a construtor from news component");
    this.state = {
      articles: [],
      loading: false
    }}

    async componentDidMount(){
      console.log("CDM");
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9728c6b176774bffb7180afbb4458712";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({articles:parsedData.articles})

    }


  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1>NewsMonket - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:" "} description={element.description?element.description: " "} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>
        })}
          
        </div>
      </div>
    );
  }
}

export default News;
