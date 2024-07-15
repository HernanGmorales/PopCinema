import fetchPopulares from "./fetchPopulares";
import cargarTitulos from "./cargarTitulos";
import cargarGeneros from "./cargarGeneros";
// import cargarGaleria from "./cargarGaleria";

import './listenerFiltroTipo';
import './listenerFiltroGeeneros';
import './listenerBuscar';
import './paginacion';
import './listenerItems';
import './listenerPopup'

    const cargar = async() =>{
        const resultados = await fetchPopulares();
        cargarTitulos(resultados);
        cargarGeneros('movie');
        
    };

    cargar();

    