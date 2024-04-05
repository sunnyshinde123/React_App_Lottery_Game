import "./MesgBox.css";
function MesgBox({username, marks}){
    let style={color: marks>60 ? "green" : "", backgroundColor:marks<60 ? "red" : ""}
    return (
        <div className="Student" style={style}>
            <h2>Hello, {username}</h2>
            {marks>60 ? <h3>Mark: {marks}</h3> : null}
            <h5>{marks<60 ? "Better luck next time" : "Good Job"}</h5>
        </div>
    )
}

export default MesgBox;