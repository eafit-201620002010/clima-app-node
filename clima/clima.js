const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=dc8f03b4d4b44e70540fd7f7fc71d78b`);

    if (resp.cod === 400) {
        throw new Error(`No hay resultados para las cordenadas ${lat}, ${lng}`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}