fetch('http://127.0.0.1:5500/src/data/injuries/injuries.json')
.then(function(response){
return response.json();
})
.then(function(myJson){
    console.log(myJson);
});