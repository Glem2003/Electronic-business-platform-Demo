import { support } from '../../Content/index.js';

//import component
import Search from '../Common/search.js';
import { CardInfo, ProductCardCenter } from '../Common/productCard.js';

const Support = () => {

    return (
        <div className="support">
            <banner />

            <div className="section section1">

                <div className='product'>
                    {support && support.map((item, itemIndex) => (
                        item.section_1 && item.section_1.map((info, sectionIndex) => (
                            <>
                                {info.title && <h1 className="title">{info.title}</h1>}
                                <div className="product-item">
                                    {info.list_item && info.list_item.map((listInfo, listIndex) => (
                                        <div className="col" key={`list-${itemIndex}-${sectionIndex}-${listIndex}`}>
                                            <div>
                                                <img src={listInfo.src} alt='' />
                                            </div>
                                            <h4>{listInfo.text}</h4>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))
                    ))}
                </div>

                <div className='service'>
                    {support && support.map((item) =>
                        item.section_1 && item.section_1.map((sectionItem) =>
                            sectionItem.support_item && sectionItem.support_item.map((info, index) => (
                                <div className='col' key={index}>
                                    <div>
                                        <img src={info.src} alt='' />
                                    </div>
                                    <h4>{info.text}</h4>
                                </div>
                            ))
                        )
                    )}
                </div>

                <div className='more'>
                    {support && support.map((item) =>
                        item.section_1 && item.section_1.map((sectionItem) =>
                            sectionItem.other_item && sectionItem.other_item.map((info, index) => (
                                <div key={index}>
                                    <h3 className='text'>{info.text}</h3>
                                    <h5 className='link'>{info.subtitle}</h5>
                                </div>
                            ))
                        )
                    )}
                </div>

                {support && support.map((item) => (
                    item.search.map((info, index) => (
                        <Search
                            key={index}
                            title={info.title}
                            placeholderText={info.placeholder}
                        />
                    ))
                ))}

            </div>

            <div className="section section2">
                {support && support.map((item) => {
                    const firstInfo = item.section_2.slice(0, 1)
                    const secondInfo = item.section_2.slice(1, 3)
                    const otherInfo = item.section_2.slice(3, 6)

                    return (
                        <>
                            <div className='info-item' key={item.id}>
                                {
                                    firstInfo.map((info, index) => (
                                        <ProductCardCenter
                                            key={index}
                                            src={info.src}
                                        >
                                            <CardInfo
                                                title={info.title}
                                                text={info.text}
                                                subtitle={info.link}
                                            />
                                        </ProductCardCenter>
                                    ))
                                }
                            </div>
                            <div className='info-item' key={item.id}>
                                {
                                    secondInfo.map((info, index) => (
                                        <ProductCardCenter
                                            key={index}
                                            src={info.src}
                                        >
                                            <CardInfo
                                                title={info.title}
                                                text={info.text}
                                                subtitle={info.link}
                                            />
                                        </ProductCardCenter>
                                    ))
                                }
                            </div>
                            {
                                otherInfo.map((info, index) => (
                                    <div className='info-item' key={item.id}>
                                        <ProductCardCenter
                                            key={index}
                                            src={info.src}
                                        >
                                            <CardInfo
                                                title={info.title}
                                                text={info.text}
                                                subtitle={info.link}
                                            />
                                        </ProductCardCenter>
                                    </div>
                                ))
                            }
                        </>
                    )
                })}
            </div>

            <div className='section repair'>
                <div className='repair'>
                    {support && support.map((item) => (
                        item.repair_solutions.map((info) => (
                            info.title && <h3 key={info.id}>{info.title}</h3>
                        ))
                    ))}
                    {support && support.map((item) => (
                        item.repair_solutions.map((info) => (
                            info.list.map((text) => (
                                <h4 key={text.id}>{text.text}</h4>
                            ))
                        ))
                    ))}
                    {support && support.map((item) => (
                        item.repair_solutions.map((info) => (
                            info.subtitle && <h4 key={info.id} className='link'>{info.subtitle}</h4>
                        ))
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Support;