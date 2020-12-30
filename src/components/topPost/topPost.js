import "./../../styles/topPost.css";

function TopPost(props){
    return(
        <>
        <div className="top-post">
        <div className="big-image"></div>
        <div className="top-post-details">
        <h3 className="post-title">{props.postDetails.post_title}</h3>
        <p className="tag">{props.postDetails.post_tag} {props.postDetails.post_time}</p>
        <div className="number">1</div>
        </div>
        </div>
        </>
    )
}

export default TopPost;