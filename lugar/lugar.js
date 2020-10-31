const axios = require('axios');


const getLugarLatLng = async( dir ) => {

    const encodedUlr = encodeURI( dir );
    
    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${ encodedUlr }&key=5eaff6ed70f64bd2a2225b1035b8421f`,
        //headers: {'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK'}
      });
    
    const resp = await instance.get();

    // if (  resp.data.results.length === 0 ) {
    //     throw new Error(`No hay resultados para ${ dir }`);
    // }

    const data = resp.data.results[0];
    const direccion = resp.data.results[0].components.city; 
    const lat = data.geometry.lat; 
    const lng = data.geometry.lng; 


    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}

