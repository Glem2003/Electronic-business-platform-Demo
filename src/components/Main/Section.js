import SectionItem from "./SectionItem";

function Section ({ title , subtitle, items }) {
    return (
        <div className="section">
            <div className="sec-title">{title}<span style={{ color: 'grey' }}>{subtitle}</span></div>
            <div className="sec-item">
                {items.map((item,index) =>(
                    <SectionItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Section;