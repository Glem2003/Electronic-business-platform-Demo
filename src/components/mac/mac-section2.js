import SectionTitle from "../common/section-title";
import SectionSecondInfoItem from "./section2-info-item";
import ScrollBar from '../main/scroll-bar';

const MacSecondSection = () =>{
    return(
        <div className="section section2">
            <SectionTitle title="來了解 Mac。"/>
            <ScrollBar>
                <SectionSecondInfoItem/>
            </ScrollBar>
            
        </div>
    )
}

export default MacSecondSection;