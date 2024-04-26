function ColumnList(props) {
    return (
        <div className="list-col">
            <h3>{props.title}</h3>
            <ul>
                {props.item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ColumnList;