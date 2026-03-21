const Basket = ({count, basketNumber}) => {

    return (
        <div className="apple-basket">
            <h3>{count} Apples</h3>
            <h3>Basket {basketNumber}</h3>
        </div>
    )
}

export default Basket