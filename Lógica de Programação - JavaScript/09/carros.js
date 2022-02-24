
const carros = [];


function add() {
    carros.push(document.getElementById("modelo").value);
    console.log(carros);

    document.getElementById("qnt").textContent = carros.length;

    if (carros.length == 10) {
        for (i = 0; i < carros.length; i++) {
            document.getElementById("lista").textContent = carros;
        }
    } else if (carros.length > 10) {
        carros.splice(0, 10);
        document.getElementById("qnt").textContent = '1';
        document.getElementById("lista").textContent = '';
    }
}

// Falta colocar cada elemento da lista em uma linha



