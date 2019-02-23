window.injuries = {

  indicatorInjuries: (responseJson)=>{
    console.log(responseJson);
    const arrMot=[];
    responseJson.forEach(element => {
      let motorcyclists= element.Total_Injured_Persons_Motorcyclists;
      let year=element.Year;
      arrMot.push({motorcyclists, year});
    });
    return arrMot;
  }





};
