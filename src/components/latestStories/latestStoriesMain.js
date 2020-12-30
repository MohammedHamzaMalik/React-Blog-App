import LatestStoryList from "./latestStoriesList";
import './../../styles/latestStories.css';

function LatestStory(props) {
    return(
        <>
        <div className="story-details">
        <h2 className="sub-heading">Latest Stories</h2>
        <hr className="hr-latest-article"></hr>
        <hr className="hr-story"></hr>
        <div className="stories-main">
        {props.latestStoryList.map(item=>(
            <LatestStoryList key={item} storyDetails={item}/>
        ))}
        </div>
        </div>
        <hr className="hr-story"></hr>
        <p className="bottom-text">VIEW MORE  <i class="fa fa-arrow-right" aria-hidden="true"></i></p> 
        </>
    )
}

export default LatestStory;