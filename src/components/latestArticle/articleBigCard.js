import './../../styles/articleBigCard.css';

function ArticleBigCard(props) {
    return(
        <>
            <div className="blog-details">
                <div className="article-big-card">
                    <div className="article-big-card-details">
                        <h3 className="ar-h3-bc">{props.bcArticle.bigCardTitle}</h3>
                        <p className="ar-p tag">{props.bcArticle.bigTag} {props.bcArticle.bigTime}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleBigCard;