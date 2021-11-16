const axios = require('axios');

export async  function makePostRequest(){

    let params = {
        "ID": "1234",
        "DOB": "01/01/1999",
        "First Name": "Trump",
        "Last Name": "Biden",
        "Sig Health": "Diabetes"
    }

    let res = await axios.post('https://y0j9peczeg.execute-api.us-east-1.amazonaws.com/info_post', params);

    console.log(res.data);

    return res.data;
}

makePostRequest();