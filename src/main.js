
//Constantes de páginas//
const initialPage = document.getElementById('initial-page');
const motoPage = document.getElementById('moto-page');
const bicyclePage = document.getElementById('bicycle-page');
const carPage = document.getElementById('car-page');
const pedestrianPage = document.getElementById('pedestrian-page');
const yearPage = document.getElementById('year-page');
const allYearPage = document.getElementById('all-year-page');

//Constantes botones página inicial//
const motorcycleButton = document.getElementById('motorcycle-button');
const bicycleButton = document.getElementById('bicycle-button');
const carButton = document.getElementById('car-button');
const pedestrianButton = document.getElementById('pedestrian-button');
const oneYearButton = document.getElementById('one-year-button');
const allYearButton = document.getElementById('all-year-button');

//Constantes páginas//

const printData = document.getElementById('print-data');
const injuriesData='./data/injuries/injuries.json';
const printMotorcyclists=document.getElementById('print-motorcyclists');

//Eventos de páginas//
motorcycleButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    motoPage.classList.remove('hidePage');
});

bicycleButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    bicyclePage.classList.remove('hidePage');
});

carButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    carPage.classList.remove('hidePage');
});

pedestrianButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    pedestrianPage.classList.remove('hidePage');
});

oneYearButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    yearPage.classList.remove('hidePage');
});

allYearButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    allYearPage.classList.remove('hidePage');
});

//Fetch//

fetch(injuriesData)
.then((response)=>{
return response.json();
})
.then(responseJson=>{
    return window.injuries.indicatorInjuries(responseJson)
    
})
.then(arrMotResp => printMot(arrMotResp))

.catch((error)=>{
    console.log('hubo un problema'+error.message);
});


const printMot=(arrMotResp) =>{
    arrMotResp.forEach(element => {
        const printP=`<p>Año: ${element.year} - <span>${element.motorcyclists}</span> </p>`
        printMotorcyclists.insertAdjacentHTML('beforeend', printP)
    });
     
    }













