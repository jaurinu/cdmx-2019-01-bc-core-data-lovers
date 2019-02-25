
//Constantes de páginas//
const initialPage = document.getElementById('initial-page');
const motoPage = document.getElementById('moto-page');
const bicyclePage = document.getElementById('bicycle-page');
const carPage = document.getElementById('car-page');
const pedestrianPage = document.getElementById('pedestrian-page');
const yearPage = document.getElementById('year-page');
const allYearPage = document.getElementById('all-year-page');

//Constantes botones página inicial//
const motorcyclistsButton = document.getElementById('motorcyclists-button');
const pedalcyclistButton = document.getElementById('pedalcyclist-button');
const carOccupantButton = document.getElementById('carOccupant-button');
const pedestriansButton = document.getElementById('pedestrians-button');
const oneYearButton = document.getElementById('one-year-button');
const allYearButton = document.getElementById('all-year-button');
const hexagonButton = document.getElementsByClassName('hexagon-button');
const sortButton = document.getElementById('sort-button');

//Constante fetch data//
const injuriesData='./data/injuries/injuries.json';

//Constantes funciones imprimir//
const printData = document.getElementById('print-data');
const printMotorcyclists=document.getElementById('print-motorcyclists');
const printPedalcyclists=document.getElementById('print-pedalcyclists');
const printCarOccupant=document.getElementById('print-car-occupant');
const printPedestrians=document.getElementById('print-pedestrians');

//Eventos de páginas//
motorcyclistsButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    motoPage.classList.remove('hidePage');
});

pedalcyclistButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    bicyclePage.classList.remove('hidePage');
});

carOccupantButton.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    carPage.classList.remove('hidePage');
});

pedestriansButton.addEventListener('click', ()=>{
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
//const data=window.injuries
fetch(injuriesData)
.then((response)=>{
console.log(response);
return response.json();
})
.then(responseJson=>window.injuries.justFiveYears(responseJson))
.then(justFiveYears => {console.log(justFiveYears);
return window.injuries.indicatorInjuries(justFiveYears)})
.then(newArrayInjuriesResp =>{console.log(newArrayInjuriesResp);
    return printResult(newArrayInjuriesResp)})
.then(sortTotalInjuries =>window.injuries.sortTotalInjuries(sortTotalInjuries))

.catch((error)=>{
    console.info('hubo un problema '+error.message);
});



//---------------------imprime-------------------------//
let printResult=(newArrayInjuriesResp) =>{
    
//--------------Conocer el botón seleccionado----------//
    for (let i=0; i<hexagonButton.length; i++){
        hexagonButton[i].addEventListener('click',()=>{
            let chosenButton=hexagonButton[i].id;
            console.log(chosenButton);

//--------------Imprime los elementos seleccionados----------//
             newArrayInjuriesResp.forEach(element => {
                let newYear=new Date(element.year).getFullYear()
               
                if (chosenButton ==='motorcyclists-button'){
                    const printP=`<p> ${newYear} - <span>${element.motorcyclists}</span> </p>`
                    printMotorcyclists.insertAdjacentHTML('beforeend', printP);
                   
        
                }else if (chosenButton==='pedalcyclist-button'){
                    const printP=`<p> ${newYear} - <span>${element.pedalcyclists}</span> </p>`
                    printPedalcyclists.insertAdjacentHTML('beforeend', printP);
                  
                }else if (chosenButton==='carOccupant-button'){
                    const printP=`<p> ${newYear} - <span>${element.carOccupant}</span> </p>`
                    printCarOccupant.insertAdjacentHTML('beforeend', printP);
                  
                }else if (chosenButton==='pedestrians-button'){
                    const printP=`<p> ${newYear} - <span>${element.pedestrians}</span> </p>`
                    printPedestrians.insertAdjacentHTML('beforeend', printP);
                }
            });
            sortButton.addEventListener('click', ()=>{
                console.log('funciono')
                window.injuries.orderHighestLowest(newArrayInjuriesResp)
            })
        })
    }   
  
    }













