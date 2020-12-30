import './../../styles/latestArticle.css';

function LatestArticleList(props) {
    return(
        <>
        <hr className="hr-article"></hr>
        <div className="latest-article-details">
            <div className="article-image"></div>
            <div className="article-text">
                <h3 className="article-title">{props.articleDetails.title}</h3>
                <p>{props.articleDetails.text}</p>
                <p className="tag">{props.articleDetails.tag} {props.articleDetails.time}</p>
            </div>
        </div>
        </>
    )
}

export default LatestArticleList;