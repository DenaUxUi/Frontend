let valuesOfSquares = document.getElementById("squareValue")
let colorOfSquares = document.getElementById("squareColor")
let confirmButton = document.getElementById("confirm")
// let squaresBox = document.getElementById("squares")

confirmButton.onclick = () =>{
    document.getElementById("squares").innerHTML = "";
    let numSquares = valuesOfSquares.value;
    let squareColor = colorOfSquares.value;
    for(let i = 0; i < numSquares; i++){
        if (i > 20){
            alert("Максимальное количество квадратов 20!")
            break
        }
        document.getElementById("squares").innerHTML += `<div style="width: 100px; height: 100px; background: ${squareColor}"></div>`;
    }
}
