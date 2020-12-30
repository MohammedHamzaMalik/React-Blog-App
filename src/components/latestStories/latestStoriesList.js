import './../../styles/latestStories.css';

function LatestStoryList(props) {
    return(
        <>
        <div className="story-details">
            <div className="story-text">
                <h3 className="story-title">{props.storyDetails.title}</h3>
                <p>{props.storyDetails.text}</p>
                <p className="tag">{props.storyDetails.tag} {props.storyDetails.time}</p>
            </div>
        </div>
        <div className="vl"></div>
        </>
    )
}

export default LatestStoryList;