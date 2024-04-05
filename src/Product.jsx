import "./Product.css";

function Product({title, price=99, features, color}){
    let styles={backgroundColor: price <=40000 ? "yellow":""}
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>{color.a}</p>
            <p>{price}</p>
            <p>{features.map((feature)=>{ return <li>{feature}</li>})}</p>
            {price<=40000 ? <p>Offer for your shopping</p> : null}
            <p>{price<=40000 ? "5% of discount" :""}</p>
            
        </div>
    );
}

export default Product;