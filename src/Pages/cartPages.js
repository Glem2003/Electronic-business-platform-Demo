import DefaultLayout from "../components/DefaultLayout/defaultLayout";

const CartPages = () => {
    const now = new Date()
    const hour = now.getHours()

    return (
        <DefaultLayout>
            <h1>Comming Soon <br/>Now is {hour}hour</h1>
        </DefaultLayout>
    )
}

export default CartPages;