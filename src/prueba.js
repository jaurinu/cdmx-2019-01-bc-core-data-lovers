// //--------------------main js------------//

// //Constantes de páginas//
// const initialPage = document.getElementById('initial-page');
// const motoPage = document.getElementById('moto-page');
// const bicyclePage = document.getElementById('bicycle-page');
// const carPage = document.getElementById('car-page');
// const pedestrianPage = document.getElementById('pedestrian-page');
// const yearPage = document.getElementById('year-page');
// const allYearPage = document.getElementById('all-year-page');

// //Constantes botones página inicial//
// const motorcyclists = document.getElementById('motorcyclists');
// const pedalcyclists = document.getElementById('pedalcyclists');
// const carOccupant = document.getElementById('carOccupant');
// const pedestrians = document.getElementById('pedestrians');
// const oneYearButton = document.getElementById('one-year');
// const allYearButton = document.getElementById('all-year');
// const hexagonButton = document.getElementsByClassName('hexagon-button');
// const sortButton = document.getElementById('sort-button');

// //Constante fetch data//
// const injuriesData='./data/injuries/injuries.json';

// //Constantes funciones imprimir//
// const printData = document.getElementById('print-data');
// const printMotorcyclists=document.getElementById('print-motorcyclists');
// const printPedalcyclists=document.getElementById('print-pedalcyclists');
// const printCarOccupant=document.getElementById('print-car-occupant');
// const printPedestrians=document.getElementById('print-pedestrians');

// //Eventos de páginas//
// motorcyclists.addEventListener('click', ()=>{
//     initialPage.classList.add('hidePage');
//     motoPage.classList.remove('hidePage');
// });

// pedalcyclists.addEventListener('click', ()=>{
//     initialPage.classList.add('hidePage');
//     bicyclePage.classList.remove('hidePage');
// });

// carOccupant.addEventListener('click', ()=>{
//     initialPage.classList.add('hidePage');
//     carPage.classList.remove('hidePage');
// });

// pedestrians.addEventListener('click', ()=>{
//     initialPage.classList.add('hidePage');
//     pedestrianPage.classList.remove('hidePage');
// });

// oneYearButton.addEventListener('click', ()=>{
//     initialPage.classList.add('hidePage');
//     yearPage.classList.remove('hidePage');
// });

// allYearButton.addEventListener('click', ()=>{
//     initialPage.classList.add('hidePage');
//     allYearPage.classList.remove('hidePage');
// });


// //  for (let i=0; i<hexagonButton.length; i++){
// //     hexagonButton[i].addEventListener('click',()=>{
// //         let chosenButton=hexagonButton[i].id;
// //         console.log(chosenButton);
// //         return chosenButton
// //     }
// // )};

// //Fetch//
// //const data=window.injuries
// fetch(injuriesData)
// .then((response)=>{
// console.log(response);
// return response.json();
// })
// .then(responseJson=>window.injuries.justFiveYears(responseJson))
// .then(justFiveYears => {console.log(justFiveYears);
// return window.injuries.indicatorInjuries(justFiveYears)})
// .then(newArrayInjuriesResp =>{console.log(newArrayInjuriesResp);
//     return printResult(newArrayInjuriesResp)})
// .then(sortTotalInjuries =>window.injuries.sortTotalInjuries(sortTotalInjuries))

// .catch((error)=>{
//     console.info('hubo un problema '+error.message);
// });



// //---------------------imprime-------------------------//
// let printResult=(newArrayInjuriesResp) =>{
    
// //--------------Conocer el botón seleccionado----------//
//     for (let i=0; i<hexagonButton.length; i++){
//         hexagonButton[i].addEventListener('click',()=>{
//             let chosenButton=hexagonButton[i].id;
//             console.log(chosenButton);

// //--------------Imprime los elementos seleccionados----------//
//              newArrayInjuriesResp.forEach(element => {
//                 const newYear=new Date(element.year).getFullYear()

   
//                 if (chosenButton ==='motorcyclists'){
//                     const printP=`<p> ${newYear} - <span>${element.motorcyclists}</span> </p>`
//                     printMotorcyclists.insertAdjacentHTML('beforeend', printP);
                   
//                 }else if (chosenButton==='pedalcyclists'){
//                     const printP=`<p> ${newYear} - <span>${element.pedalcyclists}</span> </p>`
//                     printPedalcyclists.insertAdjacentHTML('beforeend', printP);
                  
//                 }else if (chosenButton==='carOccupant'){
//                     const printP=`<p> ${newYear} - <span>${element.carOccupant}</span> </p>`
//                     printCarOccupant.insertAdjacentHTML('beforeend', printP);
                  
//                 }else if (chosenButton==='pedestrians'){
//                     const printP=`<p> ${newYear} - <span>${element.pedestrians}</span> </p>`
//                     printPedestrians.insertAdjacentHTML('beforeend', printP);
//                 }
//             });
//             sortButton.addEventListener('click', ()=>{
//                 console.log('funciono')
//                 sortTotalInjuries(sortTotalInjuries)




//             })
//         })
//     }   
  
//     }

// //-----------------------------data.js--------------------------//
// window.injuries = {

//     justFiveYears: (responseJson)=>{
//       console.log(responseJson)
//     const minimumYear=('2011-01-04')
//     const maximumYear=('2016-01-04')
//     const justFiveYears=responseJson.filter(element=>(element.Year)>=(minimumYear)&&element.Year<(maximumYear))
//     //console.log(justFiveYears);
//     return justFiveYears;
//     },
    
    
//     //-----------------funcion funciona---------------//
//     indicatorInjuries: (justFiveYears)=>{
      
//       //chosenButton=motorcycleButton;
//       //chosenButton=bicycleButton;
//       // chosenButton=carButton;
//       // chosenButton=pedestrianButton;
//       // if (chosenButton=motorcycleButton){
//         // const arrMot=[];
//     //-----------------comienza intento de filtrado con foreach---------------//
//         const newArrayInjuries=[];
//           justFiveYears.forEach(element => {
//             let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
//             console.log(motorcyclists);
//             let pedalcyclists= element.Total_Injured_Persons_Pedalcyclists;
//             let carOccupant= element.Total_Injured_Persons_Passenger_Or_Occupant;
//             let pedestrians= element.Total_Injured_Persons_Pedestrians;
//             let year=element.Year;
//             newArrayInjuries.push({year, motorcyclists, pedalcyclists, carOccupant, pedestrians});
    
//             // if (chosenButton=motorcycleButton){
//             //   newArrayInjuries.push({year, motorcyclists});
//             // }else if (chosenButton=bicycleButton){
//             //   newArrayInjuries.push({year, pedalcyclists});
//             // }else if (chosenButton=carButton){
//             //   newArrayInjuries.push({year, carOccupant});
//             // }else if (chosenButton=pedestrianButton){
//             //   newArrayInjuries.push({year, Pedestrians});
//             // }
//           });
//           console.log(newArrayInjuries)
//           return newArrayInjuries;
//         },
    
    
//     //-------------------termina intento filtrado con for each---------------//
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//         //-----------------funciona pero intentare solo con for each------------//
//         //-------------filtra por total injured persons motorcyclists-------------//
//         // justFiveYears.filter(element=>{
//         //   const totalInjuriesByMoto=element.Total_Injured_Persons_Motorcyclists
//         //   console.log(totalInjuriesByMoto);
//         //   return totalInjuriesByMoto;
//         // });
//         //-------------------por que retorna lista?--------------------------//
//     //-------------------------fin de filtrado por total heridos moto-------------//
//     //-----------------------------------------------------------------------//
//           // const year=element.Year;
//           // arrMot.push({motorcyclists, year});
    
        
//       }
      
      
//     //-------------------------funcion con Jonh-------------//
//       // indicatorInjuries: (justFiveYears, chosenButton)=>{
//       //   console.log(justFiveYears);
//       //   const arrMot=[];
//       //   justFiveYears.forEach(element => {
//       //     let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
//       //     let pedalcyclists= element.Total_Injured_Persons_Pedalcyclists;
//       //     let carOccupant= element.Total_Injured_Persons_Passenger_Or_Occupant;
//       //     let Pedestrians= element.Total_Injured_Persons_Pedestrians;
//       //     let year=element.Year;
//       //     arrMot.push({motorcyclists, year});
//       //   });
//       //   return arrMot;
//       // }
    
    
    
    
    
    
    
    
//       // const arrFiveYears=[];
//     //   responseJson.filter(element=>{
//     // //     let year=element.year;
//     // //     if((new Date(year).getFullYear()>=(2013))){
//     // // arrFiveYears.push
//     // //     }
//     //   });
//     // responseJson.Year.forEach(element => {
//     //--------------------------------esto de abajo funciona parcialmente--------//
//     // arrYears=[];
//     // responseJson.forEach(element => {
//     //   let year=element.Year
//     //   console.log(year);
//     //   arrYears.push(year);
//     // });
//     // console.log(arrYears);
//     // const justFiveYears=arrYears.filter(year=>year>=('2013-01-04'));
//     // console.log(justFiveYears);
//     //------------------------probando filtro que traiga todo el elemento--------//
//     //}



//     indicatorInjuries: (justFiveYears)=>{
//         const newArrayInjuries=[];
//         const newArrayArray=[];
//         const newArray=[];
  
//         const newMotoArray=[];
//         const newPedalArray=[];
//         const newCarArray=[];
//         const newPedestrianArray=[];
  
  
  
//           justFiveYears.forEach(element => {
//             let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
//             let pedalcyclists= element.Total_Injured_Persons_Pedalcyclists;
//             let carOccupant= element.Total_Injured_Persons_Passenger_Or_Occupant;
//             let pedestrians= element.Total_Injured_Persons_Pedestrians;
//             let year=element.Year;
//             newArrayInjuries.push({Año: year, Moto: motorcyclists, Bici:pedalcyclists, Auto:carOccupant, Peaton:pedestrians});
//             newArrayArray.push(['Año', year], ['Moto', motorcyclists], ['Bici',pedalcyclists], ['Auto',carOccupant], ['Peaton',pedestrians]);
//             newArray.push(year, motorcyclists, pedalcyclists, carOccupant, pedestrians)    
              
//             //----------filtro por moto intento 10.0------------------//
//             const resultado = newArrayInjuries.map(element=>element.Año, element.Moto)
//             console.log(element.Moto);
//             console.log(resultado);
//             newMotoArray.push(year, motorcyclists)
//             newPedalArray.push(year, pedalcyclists)
//             newCarArray.push(year, carOccupant)
//             newPedestrianArray.push(year, pedestrians)
  
//             console.log(newMotoArray)
//             console.log(newPedalArray)
//             console.log(newCarArray)
//             console.log(newPedestrianArray)

//             indicatorInjuries: (justFiveYears)=>{
//                 const newArrayInjuries=[];
//                 const newArrayArray=[];
//                 const newArray=[];
          
//                   justFiveYears.forEach(element => {
//                     let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
//                     let pedalcyclists= element.Total_Injured_Persons_Pedalcyclists;
//                     let carOccupant= element.Total_Injured_Persons_Passenger_Or_Occupant;
//                     let pedestrians= element.Total_Injured_Persons_Pedestrians;
//                     let year=element.Year;
//                     newArrayInjuries.push({Año: year, Moto: motorcyclists, Bici:pedalcyclists, Auto:carOccupant, Peaton:pedestrians});
//                     newArrayArray.push(['Año', year], ['Moto', motorcyclists], ['Bici',pedalcyclists], ['Auto',carOccupant], ['Peaton',pedestrians]);
//                     newArray.push(year, motorcyclists, pedalcyclists, carOccupant, pedestrians)    
                      
//                     //----------filtro por moto intento 10.0------------------//
//                     const resultado = newArrayInjuries.map(element=>element.Año, element.Moto)
//                     console.log(resultado);
//                     console.log(newArrayArray);
//                   });
//                   const resultado = newArrayInjuries.map(element=>element.Año, element.Moto)
//                   console.log(resultado);
          
                 
//                   return newArrayInjuries;
//                 },
            
          
          
          