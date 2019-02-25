
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
const hexagonButton = document.getElementsByClassName('hexagon-button');

//Constante fetch data//
const injuriesData='./data/injuries/injuries.json';

//Constantes funciones imprimir//
const printData = document.getElementById('print-data');
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
const data=window.injuries
fetch(injuriesData)
.then((response)=>{
console.log(response);
return response.json();
})
.then(responseJson=>window.injuries.justFiveYears(responseJson))
.then(justFiveYears => {console.log(justFiveYears);
return window.injuries.indicatorInjuries(justFiveYears)})



// .then(responseJson=>{
//     console.log(responseJson);
    
//     return window.injuries.indicatorInjuries(responseJson)
// })
.then(arrMotResp => printMot(arrMotResp))

.catch((error)=>{
    console.info('hubo un problema '+error.message);
});

// const chosenButton=hexagonButton.addEventListener('click',()=>{
//     hexagonButton.forEach(element=>{
//         console.log(element)
//     (element.id)
//     console.log(element.id);
//     });
// })
//--------------por que for each no es una funcion?----------//
// const chosenButton='';
// chosenButton=hexagonButton.forEach(elemento=> {
//     console.log(elemento)
//     let idbutton=elemento.id;
//     console.log(idbutton);
// });

//--------------este for si funciona----------//
// for (let i=0; i<hexagonButton.length; i++){
//     hexagonButton[i].addEventListener('click',()=>{
//         const chosenButton=hexagonButton[i].id;
//         console.log(chosenButton);
//     })
// }   
//--------------imprime -----------------//
// const printMot=(arrMotResp) =>{
//     arrMotResp.forEach(element => {
//         const printP=`<p>Año: ${element.year} - <span>${element.motorcyclists}</span> </p>`
//         printMotorcyclists.insertAdjacentHTML('beforeend', printP)
//     });
     
//     }













