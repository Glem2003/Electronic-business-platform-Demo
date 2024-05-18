const ColumnList = ({ title, items }) => {
    return (
        <div className="column-list">
            <h6>{title}</h6>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ColumnList;