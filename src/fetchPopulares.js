import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchPopulares = async(filtro = 'movie') => {

    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    
    const url = `https://api.themoviedb.org/3/${filtro}/popular?api_key=a12d85ada55a8fc777a99745dfacd63a&language=es-MX&page=1`;

    try {
        const respuesta = await fetch(url);
        const datos =  await respuesta.json();
        const resultados = datos.results


        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos)
        });

        return resultados;
    } catch (error){
        console.log(error)
    }
}

export default fetchPopulares;