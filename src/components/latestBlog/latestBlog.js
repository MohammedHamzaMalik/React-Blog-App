import LatestBlogList from "./latestBlogList";
import "./../../styles/latestBlog.css";

function LatestBlog(props) {
    return(
        <>
        <h2 className="sub-heading">The Latest</h2>
        <hr className="hr-latest-blog"></hr>
        <div className="latest-blog">
        {props.latestBlogList.map(item=>(
            <LatestBlogList key={item.id} latestBlogDetails={item} />
        ))}
        </div>
        </>
    )
}

export default LatestBlog;