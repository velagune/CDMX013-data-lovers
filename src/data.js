


export function filterByDirector(nameDirector, movies){
  const directoresFiltro = movies.filter(oneMovie => oneMovie.director == nameDirector)
  return directoresFiltro
}

export function filterByYear(movieYear, dataMovies){
  const fechasFiltro = dataMovies.filter(oneMovie => oneMovie.release_date == movieYear)
  return fechasFiltro
}

export function orderBy(captura, moviesToOrder){
  const moviesCopy = [...moviesToOrder] //forma de sacar una copia del arreglo movies
  if (captura === 'a-z'){
  moviesCopy.sort((a, b) => {
      if (a.title < b.title){
          return -1
      } else {
          return 1
      }
  })
  } else if (captura === 'z-a'){
      moviesCopy.sort((a,b) => {
          if (a.title > b.title){
              return -1
          } else {
              return 1
          }
      })
  }
  return moviesCopy
}


