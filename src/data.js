


export function filterByDirector(nameDirector, movies){
  const directoresFiltro = movies.filter(oneMovie => oneMovie.director == nameDirector)
  return directoresFiltro
}

export function filterByYear(movieYear, dataMovies){
  const fechasFiltro = dataMovies.filter(oneMovie => oneMovie.release_date == movieYear)
  return fechasFiltro
}



