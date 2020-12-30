import "./../../styles/topPostSmall.css";

function TopPostSmall(props){
    return(
        <>
        <hr className="small-hr"></hr>
        <div className="small-main">
        <div className="small-post-image"></div>
        <div className="small-post-details">
            {/* <div className="small-post-image"></div> */}
            <h3 className="small-post-title">{props.smallDetails.small_post_title}</h3>
            <p className="small-tag tag">{props.smallDetails.small_post_tag} {props.smallDetails.small_post_time}</p>
            <div className="small-number">{props.smallDetails.small_number}</div>
        </div>
        </div>
        </>
    )
}

export default TopPostSmall;