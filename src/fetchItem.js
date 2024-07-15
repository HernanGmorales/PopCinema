const fetchItem = async(id) => {
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    try{
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=a12d85ada55a8fc777a99745dfacd63a&language=es-MX`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
    }catch(e){
        console.log(e)
    }
}

export default fetchItem;