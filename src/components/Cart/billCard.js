import React from 'react';
import style from '../../Sass/component/billCard.module.sass';

const BillCard = ({ total, billBtnClick, discount, applyBtn, removeBtn, coupon, couponCode, couponChange ,couponDisabled}) => {

    // 計算折扣後的總計
    const discountedTotal = discount ? total * (1 - discount) : total;

    return (
        <div className={style.bill}>
            <div className={style.bill__head}>
                <div className={style.bill__row}>
                    <div className={style.bill__col}>小計</div>
                    <div className={`${style.bill__col} ${style['bill__col--right']}`}>
                        NT$ {total.toLocaleString('en-US')}
                        {discount && <span> * {discount * 100}%</span>}
                    </div>
                </div>
                <div className={style.bill__row}>
                    <div className={style.bill__col}>運費</div>
                    <div className={`${style.bill__col} ${style['bill__col--right']}`}>免額外付費</div>
                </div>
                <div className={style.bill__row}>

                    <div className={style.bill__col}>折購碼</div>
                    <div className={`${style.bill__col} ${style['bill__col--right']}`}>

                        {!coupon ? (
                            <div className={style.bill__row}>
                                <input type="number" value={couponCode} onChange={couponChange} placeholder="輸入優惠碼" className={style.bill__input}/>
                                <button onClick={applyBtn} disabled={couponDisabled}  className={`${style.bill__btn} ${style['bill__btn--coupon']}`}>使用優惠碼</button>
                            </div>
                        ) : (
                            <div className={style.bill__row}>
                                <p>已用優惠卷：{coupon.code}</p>
                                <button onClick={removeBtn} className={`${style.bill__btn} ${style['bill__btn--coupon']}`}>移除優惠卷</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className={style.bill__total}>
                <div className={style.bill__row}>
                    <div className={`${style.bill__col} ${style['bill__col--sm']}`}>你的總金額</div>
                    <div className={`${style.bill__col} ${style['bill__col--right']}`}>
                        <div className={style.bill__info}>
                            <h3>NT$ {discountedTotal.toLocaleString('en-US')}</h3>
                            <p className={style.bill__des}>欲使用銀行轉帳付款，請致電 0800-020-021。</p>
                        </div>
                        <button className={style.bill__btn} onClick={billBtnClick} disabled={total === 0}>結帳</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillCard;
