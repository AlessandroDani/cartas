const button = document.getElementById('button_save');
const number = document.getElementById('number_input');
const card = document.getElementById('card_input');
const table = document.getElementById('table');

let array = [{
    "numero": "1",
    "carta": "As",
    "valor": "0"
    },
    {
    "numero": "2",
    "carta": "1",
    "valor": "0"
    },
    {
    "numero": "3",
    "carta": "2",
    "valor": "0"
    },
    {
    "numero": "4",
    "carta": "3",
    "valor": "0"
    },
    {
    "numero": "5",
    "carta": "4",
    "valor": "0"
    }];

let cards = JSON.stringify(array);
localStorage.setItem('cards', cards);

button.addEventListener('click', ()=>{
    array.push( {
        "numero": number.value,
        "carta": card.value,
        "valor": "0",
    });
    let cards = JSON.stringify(array);
    localStorage.setItem('cards', cards);
    updateTable();
})


function updateTable(){
    let tbody = table.getElementsByTagName('tbody')[0];
    let row = tbody.insertRow();

    let cellNumero = row.insertCell(0);
    cellNumero.innerHTML = number.value;

    let cellCarta = row.insertCell(1);
    cellCarta.innerHTML = card.value;

    let cellCantidad = row.insertCell(2);
    cellCantidad.innerHTML = 1;

    cellNumero.style.textAlign = "center";
    cellNumero.style.fontWeight = "bold";
}

function sumCard(num){
    let tbody = table.getElementsByTagName('tbody')[0];
    let tr = tbody.getElementsByTagName('tr');

    for(let i=0; i < tr.length; i++){
        if(tr[i].getElementsByTagName('th')[0].innerText == num){
            let suma = tr[i].getElementsByTagName('td')[1].innerText;
            tr[i].getElementsByTagName('td')[1].innerText = ++suma;
            console.log(suma);
        }
    }
}


