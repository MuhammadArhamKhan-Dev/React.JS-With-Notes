import ReactDOM from "react-dom/client"
import "./style.css"
import React from "react"


const root = ReactDOM.createRoot(document.getElementById("root"))

function RenderCard(props) {
    const { imgSrc, name, price } = props

    return <div className="card">

        <img src={imgSrc} alt="iphone" />
        <b><hr /></b>
        <div className="content">
            <h2>{name}</h2>
            <h2>{price} $</h2>
        </div>
    </div>
}

// renderCard({ imgSrc: products.thumbnail, title: products.title, price: products.price, key: products.id })
fetch('https://dummyjson.com/products/search?q=phone')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.products)
        const container = data.products.map((products) => {
            return (<RenderCard
                key = {products.id}
                imgSrc = {products.thumbnail}
                name = {products.title}
                price = {products.price}
            />)
        })
        root.render(<div className="container">{container}</div>)

    });

// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: renderCard,
//     ref: null,
//     props:{

//     }

// })

// root.render(
//     React.createElement(renderCard, { imgSrc: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp", name: "AirPods", price: "20 $", key: 1 })
// );

// root.render(<RenderCard imgSrc= "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp" name= "AirPods" price= "20 $" key = {1} />);