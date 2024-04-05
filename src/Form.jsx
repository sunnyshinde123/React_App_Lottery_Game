function handleFormSubmit(event){
    console.log(event);
    event.preventDefault();
}

export default function Form(){
    return(
        <>
        <form action="" onSubmit={handleFormSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>
        </>
    )
}