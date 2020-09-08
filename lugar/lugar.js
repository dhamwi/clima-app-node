const axios = require('axios'); // Para sercicios REST

const getLugarLatLong = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&APPID=c4f906c2a5ca90c3c104add67cfa6c95`,
        headers: { 'APPID': 'c4f906c2a5ca90c3c104add67cfa6c95' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.sys.country.length === 0) {
        throw new Error(`No hay resultados para: ${direccion}`);
    }

    const data = respuesta.data;
    const pais = data.sys.country;
    const latitud = data.coord.lat;
    const longitud = data.coord.lon;

    return {
        pais,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLong
}