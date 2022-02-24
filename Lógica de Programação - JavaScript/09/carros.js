
const carros = [];


function add() {
    carros.push(document.getElementById("modelo").value);
    console.log(carros);

    document.getElementById("qnt").textContent = carros.length;

    
        for (i = 0; i < carros.length; i++) {
            document.getElementById("lista").textContent = carros;
        }
    

}





