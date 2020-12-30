import LatestArticleList from "./latestArticleList";
import './../../styles/latestArticle.css';

function LatestArticle(props) {
    return(
        <>
        <h2 className="sub-heading">Latest Articles</h2>
        <hr className="hr-latest-article"></hr>
        {/* <hr className="hr-article"></hr> */}
        <div className="article-main">
            {props.latestArticleList.map(item=>(
                <LatestArticleList key={item.id} articleDetails={item} />
        ))}
        </div>
        <p className="bottom-text"><i class="fa fa-arrow-down" aria-hidden="true"></i>    LOAD MORE</p>
        </>
    )
}

export default LatestArticle;