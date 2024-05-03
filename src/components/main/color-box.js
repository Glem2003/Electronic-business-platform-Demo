const ColorBox = ({colorItems}) => {
    return (
        <div className="color-box">
            {colorItems.map((item,index)=>{
                return(
                    <div 
                        key={index}
                        style={{background: item.style }}
                        className={`box ${item.className}`}
                    >
                    </div>
                )
            })}
        </div>
    )
}

export default ColorBox;