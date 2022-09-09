import {filterByDirector, filterByYear} from '../src/data.js'
//import data from "../src/data/ghibli/ghibli.js"



describe('filterByDirector', () => {
 
  it('filtrado por director`', () => {
    const moviesArray = [{director: 'aline'}, {director: 'aline'}, {director: 'daniel'}, {director: 'carlos'}]
    const nameDirector = 'aline'
    const resultado = [{director: 'aline'}, {director: 'aline'}]
    expect(filterByDirector(nameDirector, moviesArray)).toEqual(resultado);
  });
});

describe('filterByYear', () => {
 
  it('filtrado por fecha`', () => {
    const yearArray = [{year: '1990'}, {year: '1990'}, {year: '1992'}, {year: '1993'}]
    const movieYear = '1990'
    const year = [{year: 1990}, {year: 1990}]
    expect(filterByYear(movieYear, yearArray)).toEqual(year);
  });
});




// describe('filterByYear', () => {

//   it.only('filtrado por fecha`', () => {
//       const extasis = filterByYear(data.films, '1999', '1997')

//       expect(extasis.length).toBe(2)

//   })
// })








describe('anotherExample', () => {
  const miNombre = "Aline"
  it('is a string', () => {
    expect(typeof miNombre).toBe('string');
  });

  it('que el valor sea Aline', () => {
    expect(miNombre).toBe('Aline');
  });
});
