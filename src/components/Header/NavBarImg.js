function NavBarImg({className , src , alt}){
    return(
        <li>
            <div className={className}>
                <img src={src} alt={alt}></img>
            </div>
        </li>
    )
}

export default NavBarImg;