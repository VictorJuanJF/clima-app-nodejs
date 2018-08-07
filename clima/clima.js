const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let clima = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=b13e5d1f5d8720f5344e3108b5249bfa`);
    let climaMain = clima.data.main;
    let temp = climaMain.temp;
    // let prueba = clima.data.main.temp;
    return temp;
}

module.exports = {
    getClima
}