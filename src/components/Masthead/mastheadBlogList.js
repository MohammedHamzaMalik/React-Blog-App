import './../../styles/mastheadStyle.css';

function MastheadBlogList(props) {
    return(
        <>
            <div className="blog-details">
                <div className="big-card">
                    <div className="big-card-details">
                        <h3 className="h3-bc">{props.blogDetails.bigCardTitle}</h3>
                        <p>{props.blogDetails.bigCardTag} {props.blogDetails.bigCardCreationDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MastheadBlogList;