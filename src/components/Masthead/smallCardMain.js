import SmallCardList from "./smallCardList";

function SmallCardMain(props) {

    return(
        <>
        <div className="small-card-list">
        {props.smallCardList.map(item=>(
            <SmallCardList key={item.id} smallCardDetails={item} />
        ))}
        </div>
        </>
    )
}

export default SmallCardMain;