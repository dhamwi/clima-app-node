const axios = require('axios'); // Para sercicios REST

// Función que devuelve una promesa
const getClima = async(latitud, longitud) => {
    // const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=5961774e4a9c644695422fafe5351474&units=metrics`);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=5961774e4a9c644695422fafe5351474&units=metric`,
        headers: { 'APPID': '5961774e4a9c644695422fafe5351474' }
        // Metric para sacar los datos en Celsius en lugar de en Farenheit
    });

    const respuesta = await instance.get();

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}