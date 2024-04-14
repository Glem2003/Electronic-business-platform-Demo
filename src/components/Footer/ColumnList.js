function ColumnList(props) {
    return (
        <div className="list-col">
            <h6>{props.title}</h6>
            <ul>
                {props.item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ColumnList;