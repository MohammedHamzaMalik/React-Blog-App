import "./../../styles/header.css";

function Header(props) {
    return(
        <>
        <h1><div className="main-heading">The</div> <strong>Siren</strong></h1>
        <br></br>
        <div className='header-container'>
            {props.headerList.map(headerItem => 
            <>
                <div className='header-item'>
                    <a href={headerItem.url}>{headerItem.title}</a>
                </div>
            </>)}
        </div>
        <br></br>
        <hr className="hr-header"></hr>
        </>
    )
}

export default Header;