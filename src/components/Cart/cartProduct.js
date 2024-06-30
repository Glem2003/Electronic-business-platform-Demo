import style from '../../Sass/component/cartProduct.module.sass'

const CartProduct = ({ price, img, name, quantity, handleAdd, handleRemove, isDisabled }) => {

    const priceValue = price.toLocaleString('en-US');
    const btnClass = isDisabled ? style['cartProduct__btn--none'] : style['cartProduct__btn'];

    return (
        <>
            <div className={style.cartProduct}>
                <div className={`${style.cartProduct__col} ${style['cartProduct__col--xs']}`}>
                    <div className={style.cartProduct__images}>
                        <img alt='' src={`${process.env.PUBLIC_URL}${img}`} className={style.cartProduct__img} />
                    </div>
                </div>
                <div className={style.cartProduct__col}>
                    <div className={style.cartProduct__info}>
                        <div className={style.cartProduct__col}>
                            <div className={style.cartProduct__name}>
                                <h3>{name}</h3>
                            </div>
                        </div>

                        <div className={`${style.cartProduct__col} ${style['cartProduct__col--xxs']}`}>
                            <div className={style.cartProduct__value}>
                                <h3>{quantity}</h3>
                            </div>
                        </div>

                        <div className={style.cartProduct__col}>
                            <div className={style.cartProduct__price}>
                                <h3>NT$ {priceValue}</h3>
                                <button className={btnClass} onClick={handleAdd} >ADD</button>
                                <button className={btnClass} onClick={handleRemove} >REMOVE</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct;