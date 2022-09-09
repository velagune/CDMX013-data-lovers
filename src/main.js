
import { filterByDirector, filterByYear } from './data.js'
import allData from './data/ghibli/ghibli.js'
const results = document.getElementById("results")



//------------------------------------------------------PELICULAS
const movies = allData.films

const generadorHTML=(movie)=>{
    const div = document.createElement('div')
    div.classList = 'oneMovie'

    const title = document.createElement('h2')
    title.textContent= movie.title
    title.classList = 'title'

    const img = document.createElement('img')
    img.setAttribute('src', movie.poster)
    img.classList = 'poster'

    div.append(img, title)
    return div
}

function showMovies(movies){
    results.innerHTML = ''
    movies.forEach(oneMovie => results.appendChild(generadorHTML(oneMovie)))
}

showMovies(movies)


//------------------------------------------------------ ORDENA
document.getElementById('ordenado').addEventListener('change', function(evento){
    const moviesCopy = [...movies] //forma de sacar una copia del arreglo movies
    if (evento.target.value === 'a-z'){
    moviesCopy.sort((a, b) => {
        if (a.title < b.title){
            return -1
        } else {
            return 1
        }
    })
    } else if (evento.target.value === 'z-a'){
        moviesCopy.sort((a,b) => {
            if (a.title > b.title){
                return -1
            } else {
                return 1
            }
        })
    }
    showMovies(moviesCopy)
})




//------------------------------------------------------FECHAS
const fechas = []
movies.forEach(oneMovie => {
    if (!fechas.includes(oneMovie.release_date))
    fechas.push(oneMovie.release_date)
})

const fechasSelector = document.getElementById("fechas")
fechas.forEach(fecha => {
    const option = document.createElement('option')
    option.textContent = fecha
    fechasSelector.appendChild(option)
})

const selectElement2 = document.getElementById('fechas')

selectElement2.addEventListener('change', function(evento){
    showMovies(filterByYear(evento.target.value))
    filterByYear(evento.target.value, movies)
})


//------------------------------------------------------DIRECTORES
const directores = []
movies.forEach(oneMovie => {
    if (!directores.includes(oneMovie.director))
    directores.push(oneMovie.director)   //filtrado
})

const directoresSelector = document.getElementById("directores")
directores.forEach(director => { 
    const option = document.createElement('option')
    option.value = director
    option.textContent = director
    directoresSelector.appendChild(option)
})

const selectElement = document.getElementById('directores')

selectElement.addEventListener('change', function(event){
    showMovies(filterByDirector(event.target.value, movies))
})
