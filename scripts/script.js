const Row = document.querySelector('#row')
const url = 'https://pokeapi.co/api/v2/pokemon'
const pokemons = []
const previous = null
function getPokemons(){

    fetch(url).then((response)=>{
    if(!response){
        throw Error("Error at response")
    }        else{
        return response.json()
    }
    }).then(data=>{
       array = data.results 
       array.forEach(element => {
       });
       return data
    })

}
console.log(getPokemons())

    // < div id = "row" class="row row-cols-4 justify-content-between" >
    //     <div class="card mb-5" style="width: 300px;">
    //         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    //             class="card-img-top">
    //             <div class="card-body">
    //                 <h5 class="card-title text-center">
    //                     bulbasaur
    //                     </h5>
    //             </div>
    //         </div>
    //     </div>