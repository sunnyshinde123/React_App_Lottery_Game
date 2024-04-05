import "./card.css"

function Card({idx}){
    let oldPrice=["12,999", "5,999", "1,299", "699"];
    let newPrice=["8,999", "2,999", "899", "199"];
    let style={marginLeft:"0.5rem", marginRight:"0.5rem", fontWeight:"600"}
    let description=[["8,000 DPI", "5 Programmable Buttons"], ["initative surface", "designed for iPad Pro"], ["designed for iPad Pro", "initative surface"], ["wireless", "optical orientation"]]
    return (
        <div className="card-box">
            <div className="card-content">
                <h2>Logitech MS Master</h2>
                <h4>{description[idx][0]}</h4>
                <h4>{description[idx][1]}</h4>
            </div>
            <div className="price">
                <span className="price-down" style={style}>{oldPrice[idx]}</span>
                <span style={style}>{newPrice[idx]}</span>
            </div>
        </div>
    )
}

export default Card;