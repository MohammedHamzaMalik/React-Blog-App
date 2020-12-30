import "./../../styles/topPostSmall.css";
import TopPostSmall from "./topPostSmall";

function TopPostSmallMain(props){
    return(
        <>
        <div className="small-post-main">
        {props.topPostSmall.map(item => (
            <TopPostSmall key={item.id} smallDetails={item} />
        ))}
        </div>
        </>
    )
}

export default TopPostSmallMain;