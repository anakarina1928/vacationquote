const vacationCalc = document.getElementById('vacationCalc');

const gererateTemplate = (destiny,budget,expenses,balence) => {
    return `
    <section class="d-flex justify-content-center ">
    <div class="card" style="width: 18rem;">
    <img src="./asset/img/20%.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title d-flex justify-content-center">${destiny}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Tu presupuesto: ${budget}</li>
      <li class="list-group-item">Total a gastar: ${expenses}</li>
      <li class="list-group-item">Tu balance: ${balence}</li>
    </ul>
    <div class="card-body">
      <a href="https://www.tripadvisor.com" class="card-link">hoteles recomendados</a>
      <a href="https://www.despegar.com.pe/" class="card-link">vuelos al destino</a>
    </div>
  </div> 
  </section>
    `

};

const resultsPrintout = (card) => {
    const result = document.getElementById('result');
    result.innerHTML = card;
};
    

const calculateExpenses = (e) => {
    e.preventDefault()
    // debo refactorizar, colocar los id dentro de una funcion y luego desestructurarla en un return
    const destiny = document.getElementById('destiny').value;
    const budget = document.getElementById('budget').value;
    const acomodation = document.getElementById('acomodation').value;
    const transport = document.getElementById('transport').value;
    const food = document.getElementById('food').value;

    // utilizamos parsenint()para asegurarnos que todo lo que sea ingresado sea de valor numerico
    let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food);
    let balance = budget - expenses;

   return resultsPrintout(gererateTemplate(destiny,budget,expenses,balance));

    
}

//El evento submit permite iniciar el envío del formulario
vacationCalc.addEventListener('submit', calculateExpenses);