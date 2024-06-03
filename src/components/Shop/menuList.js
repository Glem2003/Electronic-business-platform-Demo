const MenuList = ({ menuData, title }) => {

    function chunkArray(array, size) {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    }

    const chunkedList = chunkArray(menuData, 6);

    return (
        <ul>
            <h4>{title}</h4>
            <div className="item">
                {chunkedList.map((item, index) => (
                    <div className="list" key={index}>
                        {item.map((item, index) => (
                            <li key={index}>{item.text}</li>
                        ))}
                    </div>
                ))}
            </div>
        </ul>
    )
}

export default MenuList;