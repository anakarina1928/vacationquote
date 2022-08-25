const vacationCalc = document.getElementById('vacationCalc');


const calculateExpenses = () => {
    // debo refactorizar, colocar los id dentro de una funcion y luego desestructurarla en un return
    const destiny = document.getElementById('destiny').value;
    const budget = document.getElementById('budget').value;
    const acomodation = document.getElementById('acomodation').value;
    const transport = document.getElementById('transport').value;
    const food = document.getElementById('food').value;

    // utilizamos parsenint()para asegurarnos que todo lo que sea ingresado sea de valor numerico
    let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food);

    let balance = budget - expenses;
    console.table('presupueto: ', budget, 'resta de todos los input con  presupuesto: ', balance, 'destino: ', destiny);
}



const resultsPrintout = () => {
    const result = document.getElementById('result');
    //debo crear un template donde ira el relsultado. esta funcion debe ser llamada en calculateExpenses

}

//El evento submit permite iniciar el envío del formulario
vacationCalc.addEventListener('submit', calculateExpenses);