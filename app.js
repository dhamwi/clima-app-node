const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad a obtener el clima.',
        demand: true
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(localizacion => {
//         clima.getClima(localizacion.latitud, localizacion.longitud)
//             .then(console.log)
//             .catch(console.log);
//     })
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `La temperatura de la ciudad de ${direccion} es de ${temperatura} grados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);