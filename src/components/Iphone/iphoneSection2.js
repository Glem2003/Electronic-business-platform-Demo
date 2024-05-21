import SectionTitle from "../common/section-title";
import SectionSecondInfoItem from "./section2-info-item";
import ScrollBar from '../main/scroll-bar';

const IphoneSecondSection = () =>{
    return(
        <div className="section section2">
            <SectionTitle title="了解iPhone。"/>
            <ScrollBar>
                <SectionSecondInfoItem/>
            </ScrollBar>
            
        </div>
    )
}
