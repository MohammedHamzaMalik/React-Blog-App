import MastheadBlogList from "./mastheadBlogList";

function MastHeadMain(props) {

    return(
        <>
        <div className="blog-list">
        {props.mastheadBlogsList.map(item=>(
            <MastheadBlogList key={item.id} blogDetails={item} />
        ))}
        </div>
        </>
    )
}

export default MastHeadMain;