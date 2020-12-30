import ArticleBigCard from "./articleBigCard";

function ArticleBigCardMain(props) {

    return(
        <>
        <div className="blog-list">
        {props.articleBigCard.map(item=>(
            <ArticleBigCard key={item.id} bcArticle={item} />
        ))}
        </div>
        </>
    )
}

export default ArticleBigCardMain;