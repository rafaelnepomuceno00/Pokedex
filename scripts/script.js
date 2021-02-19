let Row = document.getElementById('row')
let page1 = 'https://pokeapi.co/api/v2/pokemon'
let pokemons = []
let next
let previous
let Prev = document.getElementById('prev')
let Next = document.getElementById('next')
let image = 1
let clicked = false

Next.addEventListener('click', function () {
    clicked = false
    clearPage()
    getAllPokemons(next)
    setLinks()

})
Prev.addEventListener('click', function () {
    clicked = true
    clearPage()
    getAllPokemons(previous)
    setLinks()
})

getAllPokemons(page1)



function getAllPokemons(url) {


    fetch(url).then((response) => {
        if (!response) {
            throw Error("Error at response")
        } else {
            return response.json()
        }
    }).then(data => {
        next = data.next == undefined ? null : data.next
        previous = data.previous == undefined ? null : data.previous
        array = data.results
        array.forEach(element => {
            pokemons.push(element)
        });
        createAllCards(pokemons)

        setLinks()
    })

}


function createAllCards(pokemons) {

    clicked == true ? image -= 40 : image = image
    pokemons.forEach(pokemon => {

        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('mb-5')
        card.style.width = '300px'

        let imgCard = document.createElement('img')
        imgCard.classList.add('card-img-top')
        imgCard.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + image + '.png'
        card.appendChild(imgCard)

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        card.appendChild(cardBody)

        let title = document.createElement('h5')
        title.classList.add('card-title')
        title.classList.add('text-center')
        title.classList.add('text-capitalize')
        title.innerHTML = pokemon.name
        cardBody.appendChild(title)

        Row.appendChild(card)
        image++
    })
    2
}


function setLinks() {

    let PrevToggler = document.getElementById('prev-toggle')
    let NextToggler = document.getElementById('next-toggle')

    previous == null ? PrevToggler.classList.add('disabled') : PrevToggler.classList.remove('disabled')
    next == null ? NextToggler.classList.add('disabled') : NextToggler.classList.remove('disabled')

}

function clearPage() {
    pokemons.length = 0
    Row.innerText = ' '
}
