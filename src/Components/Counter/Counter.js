function Counter(){
    let quantity = 10;

    function incremento(){
        quantity += 1;
        document.getElementById("counter-box").innerHTML = quantity;
    }

    return(
        <>   
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={incremento}>Incrementar</button>
        </>
    )
}

export default Counter;