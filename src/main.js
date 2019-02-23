

const printData = document.getElementById('print-data');
const injuriesData='./data/injuries/injuries.json';
const printMotorcyclists=document.getElementById('print-motorcyclists');

//Cambios de página//


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













