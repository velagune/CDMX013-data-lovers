
export function filterByDirector(nameDirector, movies){
  const directoresFiltro = movies.filter(oneMovie => oneMovie.director == nameDirector)
  return directoresFiltro
}

export function filterByYear(movieYear, yearArray){
  const fechasFiltro = yearArray.filter(oneMovie => oneMovie.release_date == movieYear)
  return fechasFiltro
}