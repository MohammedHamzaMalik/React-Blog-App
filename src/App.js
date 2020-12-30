// import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import Header from "./components/header/header";
import headerJson from "./json/header.json";
import MastHeadMain from './components/Masthead/mastheadMain';
import mastheadBlogsListJson from "./json/mastheadBlogsList.json";
import SmallCardMain from './components/Masthead/smallCardMain';
import smallCardListJson from './json/mastheadSmallCard.json';
import latestBlogListJson from "./json/latestBlogList.json";
import LatestBlog from './components/latestBlog/latestBlog';
import latestArticleListJson from "./json/latestArticleList.json";
import LatestArticle from './components/latestArticle/latestArticleMain';
import articleBigCardJson from './json/articleBigCard.json';
import ArticleBigCardMain from './components/latestArticle/artcileBigCardMain'; 
import latestStoryListJson from "./json/latestStoriesList.json";
import LatestStory from "./components/latestStories/latestStoriesMain";
import topPostJson from "./json/topPost.json";
import TopPostMain from "./components/topPost/topPostMain";
import topPostSmallJson from "./json/topPostSmall.json";
import TopPostSmallMain from "./components/topPost/topPostSmallMain";

class App extends Component {

  state = {
    headerList : headerJson,
    mastheadBlogsList : mastheadBlogsListJson,
    smallCardList : smallCardListJson,
    latestBlogList : latestBlogListJson,
    latestArticleList : latestArticleListJson,
    articleBigCard : articleBigCardJson,
    topPost : topPostJson,
    latestStoryList : latestStoryListJson,
    topPostSmall: topPostSmallJson
  }
  render() {
    return (
      <>
        <Header headerList={this.state.headerList}/>
        <MastHeadMain mastheadBlogsList={this.state.mastheadBlogsList}/>
        <SmallCardMain smallCardList={this.state.smallCardList} />
        <LatestBlog latestBlogList={this.state.latestBlogList}/>
        <LatestArticle latestArticleList={this.state.latestArticleList}/>
        <ArticleBigCardMain articleBigCard={this.state.articleBigCard}/>
        <TopPostMain topPost={this.state.topPost} />
        <TopPostSmallMain topPostSmall={this.state.topPostSmall} />
        <LatestStory latestStoryList={this.state.latestStoryList}/>
      </>
    );
  }
}

export default App;
