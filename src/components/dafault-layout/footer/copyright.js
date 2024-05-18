const Copyright = ({ copyright,list,area }) => {
    return (
        <div className="Copyright">
            <h6>{copyright}</h6>
            <div className="copy-Link">
                <div className="left-Link">
                    <ul>
                        {list.map((text,index)=>{
                            return(
                                <li key={index}>{text}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="right-Link">{area}</div>
            </div>
        </div>
    )
}

export default Copyright;