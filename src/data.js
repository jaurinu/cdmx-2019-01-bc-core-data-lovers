window.injuries = {

  justFiveYears: (responseJson)=>{
    console.log(responseJson)
  const minimumYear=('2011-01-04')
  const maximumYear=('2016-01-04')
  const justFiveYears=responseJson.filter(element=>(element.Year)>=(minimumYear)&&element.Year<(maximumYear))
  console.log(justFiveYears);
  return justFiveYears;
  },

  indicatorInjuries: (justFiveYears)=>{
    
    const newArrayInjuries=[];  
        justFiveYears.forEach(element => {
          let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
          let pedalcyclists= element.Total_Injured_Persons_Pedalcyclists;
          let carOccupant= element.Total_Injured_Persons_Passenger_Or_Occupant;
          let pedestrians= element.Total_Injured_Persons_Pedestrians;
          let year=element.Year;
          newArrayInjuries.push({year, motorcyclists, pedalcyclists, carOccupant, pedestrians});
          
        });
       
        return newArrayInjuries;
      },
  
      // sortTotalInjuries: (sortTotalInjuriesResult) => {
      //   const orderInjuries = newArrayInjuries
  
        
      // }
    
     



}




