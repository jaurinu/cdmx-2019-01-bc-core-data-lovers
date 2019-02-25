window.injuries = {

justFiveYears: (responseJson)=>{
  console.log(responseJson)
const minimumYear=('2010-01-04')
const maximumYear=('2016-01-04')
const justFiveYears=responseJson.filter(element=>element.Year>=(minimumYear)&&element.Year<(maximumYear))
//console.log(justFiveYears);
return justFiveYears;

},

indicatorInjuries: (justFiveYears)=>{
  
  // let chosenButton=motorcycleButton;
  // if (chosenButton=motorcycleButton){
    // const arrMot=[];


    //-----------------funciona pero intentare solo con for each------------//
    //-------------filtra por total injured persons motorcyclists-------------//
    justFiveYears.filter(element=>{
      const totalInjuriesByMoto=element.Total_Injured_Persons_Motorcyclists
      console.log(totalInjuriesByMoto);
      return totalInjuriesByMoto;
    });
    //-------------------por que retorna lista?--------------------------//
//-------------------------fin de filtrado por total heridos moto-------------//
//-----------------------------------------------------------------------//
      // const year=element.Year;
      // arrMot.push({motorcyclists, year});

    
  // }
  
  },

  // indicatorInjuries: (justFiveYears, chosenButton)=>{
  //   console.log(justFiveYears);
  //   const arrMot=[];
  //   justFiveYears.forEach(element => {
  //     let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
  //     let pedalcyclists= element.Total_Injured_Persons_Pedalcyclists;
  //     let carOccupant= element.Total_Injured_Persons_Passenger_Or_Occupant;
  //     let Pedestrians= element.Total_Injured_Persons_Pedestrians;
  //     let year=element.Year;
  //     arrMot.push({motorcyclists, year});
  //   });
  //   return arrMot;
  // }





};


  // const arrFiveYears=[];
//   responseJson.filter(element=>{
// //     let year=element.year;
// //     if((new Date(year).getFullYear()>=(2013))){
// // arrFiveYears.push
// //     }
//   });
// responseJson.Year.forEach(element => {
//--------------------------------esto de abajo funciona parcialmente--------//
// arrYears=[];
// responseJson.forEach(element => {
//   let year=element.Year
//   console.log(year);
//   arrYears.push(year);
// });
// console.log(arrYears);
// const justFiveYears=arrYears.filter(year=>year>=('2013-01-04'));
// console.log(justFiveYears);
//------------------------probando filtro que traiga todo el elemento--------//
