import MacProductItem from './mac-product-item.js';
import MacFirstSection from './mac-section1.js';
import MacSecondSection from './mac-section2.js';

const Mac = () =>{
    return(
        <div className="mac">
            <MacProductItem/>
            <MacFirstSection/>
            <MacSecondSection/>
        </div>
    )
}

export default Mac;