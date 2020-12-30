import './../../styles/mastheadStyle.css';

function SmallCardList(props) {
    return(
        <>
            <div className="small-card-details">
                <div className="small-card">
                    <div className="small-card-text">
                        <h3 className="h3-sc">{props.smallCardDetails.title}</h3>
                        <h3 className="h3-sc">{props.smallCardDetails.text}</h3>
                        <p>{props.smallCardDetails.tag} {props.smallCardDetails.creationDate}</p>
                        <hr className="hr-small-card"></hr>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallCardList;