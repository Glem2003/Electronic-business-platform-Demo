import { FaApple } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import ColumnList from './column-list.js';
import { footerInfoList } from '../../../content/content.js';

const FooterInfo = ({ logoTitle }) => {

    const svgStyle = { width: "1.2rem", height: "1.2rem" }


    // 定義分割陣列的方式
    const splitFooterInfoList = (list, splitSizes) => {
        const result = [];
        let start = 0;
        splitSizes.forEach(size => {
            result.push(list.slice(start, start + size));
            start += size;
        });
        return result;
    };

    // 指定每組元素的大小
    const splitSizes = [2, 2, 1, 2, 2];

    // 分割footerInfoList
    const footerInfoChunks = splitFooterInfoList(footerInfoList, splitSizes);

    return (
        <div className="footer-info">
            <div className="footer-logo">
                <FaApple style={svgStyle} />
                <IoIosArrowForward />
                <h6 className="logo-title">{logoTitle}</h6>
            </div>

            <div className="footer-item">
                {footerInfoChunks.map((footerInfo, index) => (
                    <div key={index} className="item-column">
                        {footerInfo.map((section) => (
                            <ColumnList key={section.title} title={section.title} items={section.list} />
                        ))}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FooterInfo;