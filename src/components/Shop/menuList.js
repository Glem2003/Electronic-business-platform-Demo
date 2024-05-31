const MeunList = ({ title }) => {

    function chunkArray(array, size) {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    }

    const list = [
        { text: "新品上市" },
        { text: "保護配件與防護" },
        { text: "充電配件" },
        { text: "MagSafe" },
        { text: "耳機與揚聲器" },
        { text: "Apple Watch 錶帶" },
        { text: "居家辦公" },
        { text: "滑鼠與鍵盤" },
        { text: "AirTag 與配件" },
        { text: "健康與健身" },
        { text: "遊戲" },
        { text: "攝影" },
        { text: "創意工具" },
        { text: "智慧家庭配件" },
        { text: "軟體" },
        { text: "儲存裝置" },
    ]

    const chunkedList = chunkArray(list, 6);

    return (
        <ul>
            <h4>text</h4>
            <div className="item">
                {chunkedList.map((chunk, index) => (
                    <div className="list" key={index}>
                        {chunk.map((item, subIndex) => (
                            <li key={subIndex}>{item.text}</li>
                        ))}
                    </div>
                ))}
            </div>
        </ul>
    )
}

export default MeunList;