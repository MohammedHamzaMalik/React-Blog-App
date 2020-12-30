import "./../../styles/latestBlog.css";

function LatestBlogList(props) {
    return(
        <>
        <div className="latest-blog-details">
            <div className="grey-blog-bg">
            <div className="image"></div>
            <div className="blog-caption">
                <h3 className="blog-title">{props.latestBlogDetails.title}</h3>
                <p className="long-text">{props.latestBlogDetails.text}</p>
                <p className="tag">{props.latestBlogDetails.footer_head} / {props.latestBlogDetails.time}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default LatestBlogList;