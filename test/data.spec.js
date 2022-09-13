import {filterByDirector, filterByYear} from '../src/data.js'
//import data from "../src/data/ghibli/ghibli.js"



describe('filterByDirector', () => {
 
  it('filtrado por director`', () => {
    const moviesArray = [{director: 'aline'}, {director: 'aline'}, {director: 'daniel'}, {director: 'carlos'}]
    const nameDirector = 'aline'
    const resultado = [{director: 'aline'}, {director: 'aline'}]
    expect(filterByDirector(nameDirector, moviesArray)).toEqual(resultado); //matcher
  });
});



describe('filterByrelease_date', () => {
 
  it('filtrado por fecha`', () => {
    const release_dateArray = [{release_date: '1990'}, {release_date: '1990'}, {release_date: '1992'}, {release_date: '1993'}]
    const movierelease_date = '1990'
    const resultado = [{release_date: '1990'}, {release_date: '1990'}]
    expect(filterByYear(movierelease_date, release_dateArray)).toEqual(resultado);
  });
});



describe('sortOrder', () => {
 
  it('Ordenado`', () => {
    const sortArray = [{title: 'castle in the sky'}, {title: 'my neighbor totoro'}, {title: 'whisper of the heart'}]
    const resultado = [{title: 'castle in the sky'}, {title: 'my neighbor totoro'}, {title: 'whisper of the heart'}]
    expect(filterByDirector(nameDirector, moviesArray)).toEqual(resultado); //matcher
  });
});












describe('anotherExample', () => {
  const miNombre = "Aline"
  it('is a string', () => {
    expect(typeof miNombre).toBe('string');
  });

  it('que el valor sea Aline', () => {
    expect(miNombre).toBe('Aline');
  });
});
