//Constantes de páginas//
const initialPage = document.getElementById('initial-page');
const motoPage = document.getElementById('moto-page');
const bicyclePage = document.getElementById('bicycle-page');
const carPage = document.getElementById('car-page');
const pedestrianPage = document.getElementById('pedestrian-page');
const yearPage = document.getElementById('year-page');
const allYearPage = document.getElementById('all-year-page');

//Constantes botones página inicial//
const motorcyclists = document.getElementById('motorcyclists');
const pedalcyclists = document.getElementById('pedalcyclists');
const carOccupant = document.getElementById('carOccupant');
const pedestrians = document.getElementById('pedestrians');
const oneYearButton = document.getElementById('one-year');
const allYearButton = document.getElementById('all-year');
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
const averageMotoInjuries=document.getElementById('average-moto-injuries');
const averageCyclistInjuries=document.getElementById('average-cyclist-injuries');
const averageCarInjuries=document.getElementById('average-car-injuries');
const averagePedestrianInjuries=document.getElementById('average-pedestrian-injuries');

//Eventos de páginas//
motorcyclists.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    motoPage.classList.remove('hidePage');
});

pedalcyclists.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    bicyclePage.classList.remove('hidePage');
});

carOccupant.addEventListener('click', ()=>{
    initialPage.classList.add('hidePage');
    carPage.classList.remove('hidePage');
});

pedestrians.addEventListener('click', ()=>{
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

//-----------------------Fetch-------------//
fetch(injuriesData)
.then((response) => response.json())
.then(responseJson =>window.injuries.justFiveYears(responseJson))
.then(justFiveYears => window.injuries.indicatorInjuries(justFiveYears))
.then(newArrayInjuriesResp => printResult(newArrayInjuriesResp))
// .then(sortTotalInjuriesResult =>{
//     sortButton.addEventListener('click', ()=>{
//         window.injuries.sortTotalInjuries(sortTotalInjuriesResult)
//     })
// })

.catch((error)=>{
    console.info('hubo un problema '+error.message);
});

//---------------------imprime-------------------------//
let printResult=(newArrayInjuriesResp) =>{
    console.log(newArrayInjuriesResp)

    //--------------Conocer el botón seleccionado----------//
        for (let i=0; i<hexagonButton.length; i++){
            hexagonButton[i].addEventListener('click',()=>{
                let chosenButton=hexagonButton[i].id;
                console.log(chosenButton)
    //--------------Imprime los elementos seleccionados----------//
                 let sumInjuries = 0;
                 const motoArray = [];
                 const cyclistArray = [];
                 const carArray = [];
                 const pedestrianArray = [];
                 newArrayInjuriesResp.forEach(element => {
                    
                    const newYear=new Date(element.year).getFullYear()
       
                    if (chosenButton ==='motorcyclists'){
                        sumInjuries += (element.motorcyclists);
                        const printP=`<p> ${newYear} - <span>${element.motorcyclists}</span> </p>`
                        printMotorcyclists.insertAdjacentHTML('beforeend', printP);
                        motoArray.push([newYear, element.motorcyclists])
                       
                    }else if (chosenButton==='pedalcyclists'){
                        sumInjuries += (element.pedalcyclists);
                        const printP=`<p> ${newYear} - <span>${element.pedalcyclists}</span> </p>`
                        printPedalcyclists.insertAdjacentHTML('beforeend', printP);
                        cyclistArray.push([newYear, element.pedalcyclists])
                      
                    }else if (chosenButton==='carOccupant'){
                        sumInjuries += (element.carOccupant);
                        const printP=`<p> ${newYear} - <span>${element.carOccupant}</span> </p>`
                        printCarOccupant.insertAdjacentHTML('beforeend', printP);
                        carArray.push([newYear, element.carOccupant])
                      
                    }else if (chosenButton==='pedestrians'){
                        sumInjuries += (element.pedestrians);
                        const printP=`<p> ${newYear} - <span>${element.pedestrians}</span> </p>`
                        printPedestrians.insertAdjacentHTML('beforeend', printP);
                        pedestrianArray.push([newYear, element.pedestrians])
                    }
                });
    //--------------Saca promedio de heridos en cinco años-----------------//
                const average = sumInjuries / newArrayInjuriesResp.length; 
                console.log(average)
                averageMotoInjuries.innerHTML = average; 
                averageCyclistInjuries.innerHTML = average; 
                averageCarInjuries.innerHTML = average.toFixed(0); 
                averagePedestrianInjuries.innerHTML = average; 
                console.log(motoArray)
                console.log(cyclistArray)
                console.log(carArray)
                console.log(pedestrianArray)
            })
        }   
      return newArrayInjuriesResp
        }
        motoArray.sort
        sortButton.addEventListener('click', ()=>{

            motoArray.sort()

            console.log('funciono')
            // window.injuries.sortTotalInjuries(sortTotalInjuriesResult)
        })
        // sortByName: (data) => {
        //     const orderPokemonName = data.sort((a, b) => {
        //       if (a.name > b.name) {
        //         return 1;
        //       } else {
        //         return -1;
        //       }
        //     })
        //     return (orderPokemonName)
        //   }
        