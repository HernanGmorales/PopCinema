const fetchGeneros = async(filtro = 'movie') => {

    const tipo = filtro === 'movie' ? 'movie' : 'tv';

    const url = `https://api.themoviedb.org/3/genre/${filtro}/list?api_key=a12d85ada55a8fc777a99745dfacd63a&language=es-MX`;

    try {
        const respuesta = await fetch(url);
        const datos =  await respuesta.json()
        return datos.genres;
    } catch (error){
        console.log(error)
    }
}

export default fetchGeneros;