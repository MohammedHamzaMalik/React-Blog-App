import TopPost from "./topPost";
import "./../../styles/topPost.css";

function TopPostMain(props) {
    return(
        <>
        <div className="top-post-main">
        <h2 className='tp'>Top Post</h2>
        <hr className="hr-post"></hr>
        {props.topPost.map(item => (
            <TopPost key={item.id} postDetails={item} />
        ))}
        </div>
        </>
    )
}

export default TopPostMain;