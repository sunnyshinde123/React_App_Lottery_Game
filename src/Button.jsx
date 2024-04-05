function doSomething(event){
    console.log("btn was clicked");
    console.dir(document);
    console.log(event);
}

function handlerMouse(){
    console.log("Mouse hover");
}

function Button({}){
    let style={backgroundColor:"black", color:"white"}
    return (
        <>
        <button onClick={doSomething} onMouseOver={handlerMouse} style={style}>Click me!</button>
        </>
    )
}

export default Button;