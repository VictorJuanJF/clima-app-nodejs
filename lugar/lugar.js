const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    // console.log(encodedUrl);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (respuesta.data.status == 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad ', direccion);
    }


    let location = respuesta.data.results[0];
    let coors = location.geometry.location;
    // let prueba = respuesta.data.results[0].location.geometry.location;



    // console.log(JSON.stringify(respuesta.data, undefined, 2));
    // console.log(respuesta.status);
    //console.log(`Esta prueba es ${prueba}`);
    console.log("Latitud: " + coors.lat);
    console.log("Longitud: ", coors.lat);
    console.log("Address: ", location.formatted_address);



    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lat
    }
}

module.exports = {
    getLugarLatLng
}