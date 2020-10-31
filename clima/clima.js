const axios = require('axios');

const getClima = async ( lat, lng ) => {

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?lat=${ lat }&lon=${ lng }&units=metric`,
        headers: {'x-rapidapi-key': '830735aa93msh23aba6e23439e9cp1f9e8bjsn82082c14c293'}
      });

    const resp = await instance.get();

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
