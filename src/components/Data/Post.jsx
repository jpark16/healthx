const axios = require('axios');

export async  function makePostRequest(){

    let params = {
        "ID": "3060",
        "DOB": "11/25/1999",
        "First Name": "Kayla",
        "Last Name": "Kim",
        "Sig Health": "N/A"
    }

    let res = await axios.post('https://y0j9peczeg.execute-api.us-east-1.amazonaws.com/info_post', params);

    console.log(res.data);

    return res.data;
}

makePostRequest();