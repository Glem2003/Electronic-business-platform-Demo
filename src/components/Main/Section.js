import SectionItem from "./SectionItem";

const Section = ({ title , subtitle, item }) => {
    return (
        <div className="section">
            <div className="sec-title">{title}<span style={{ color: 'grey' }}>{subtitle}</span></div>
            <div className="sec-item">
                {item.map((item,index) =>(
                    <SectionItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Section;