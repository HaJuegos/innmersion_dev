/**
 * @type {{ value: Number, details: String, date: String }[]}
 */
let gastos = {};

function clickBoton() {
    const inputName = document.getElementById('nombreGasto');
    const inputValue = document.getElementById('valorGasto');
    const inputDetails = document.getElementById('detalleGasto');
    const inputDate = document.getElementById('fechaGasto');

    const name = inputName.value;
    const details = inputDetails.value;
    const date = inputDate.value;
    const value = parseInt(inputValue.value);

    if (name == '' || details == '' || date == '' || isNaN(value)) {
        alert('Introduce datos en todas las casillas');
    } else {
        if (value > 150) {
            alert('Tu gasto no debe ser mayor a USD $150');
        } else {
            gastos[name] = {
                value: value,
                details: details,
                date: date
            };

            newList();
            newTotal();

            inputName.value = '';
            inputValue.value = '';
            inputDetails.value = '';
            inputDate.value = '';
        };
    };
};

function newList() {
    const list = document.getElementById('listaDeGastos');
    list.innerHTML = '';

    for (let gasto in gastos) {
        const listItem = `
        <li>
            Gasto: ${gasto} | Detalles: ${gastos[gasto].details} | Fecha: ${gastos[gasto].date} | Total: USD $${gastos[gasto].value}
            <button onclick="editData('${gasto}');">Editar</button>
            <button onclick="deletedData('${gasto}');">Remover</button>
        </li>`;
        list.innerHTML += listItem;
    };
};

function newTotal() {
    let total = 0;

    for (let dato in gastos) {
        total += gastos[dato].value;
    };

    document.getElementById('totalGastos').innerHTML = `${total.toFixed(2)}`;
};

function deletedData(gasto) {
    delete gastos[gasto];
    newList();
    newTotal();
};

function editData(gasto) {
    const inputName = document.getElementById('nombreGasto');
    const inputValue = document.getElementById('valorGasto');
    const inputDetails = document.getElementById('detalleGasto');
    const inputDate = document.getElementById('fechaGasto');

    inputName.value = `${gasto}`;
    inputValue.value = `${gastos[gasto].value}`;
    inputDetails.value = `${gastos[gasto].details}`;
    inputDate.value = `${gastos[gasto].date}`;

    deletedData(gasto);
};