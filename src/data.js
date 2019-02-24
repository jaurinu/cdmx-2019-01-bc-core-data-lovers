window.injuries = {

indicatorInjuries: (responseJson)=>{
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


const minimumYear=('2013-01-04')

const justFiveYears=responseJson.filter(element=>element.Year>=(minimumYear))

console.log(justFiveYears);




},


  // indicatorInjuries: (responseJson)=>{
  //   console.log(responseJson);
  //   const arrMot=[];
  //   responseJson.forEach(element => {
  //     let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
  //     let year=element.Year;
  //     arrMot.push({motorcyclists, year});
  //   });
  //   return arrMot;
  // }





};
