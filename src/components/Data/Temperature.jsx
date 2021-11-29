import axios from "axios";
import React from "react";

const baseURL = "https://4m4gszn31j.execute-api.us-east-1.amazonaws.com/";

export function Api() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/sensor_get_func?1876`).then((response) => {
            console.log("testestest")
            setData(response.data);
        });
    }, []);
    console.log("result");
    console.log(data);
    if (!data) return "No data!"

    // example result {"items":{"HRvalue":-999,"name":"7PM"}}
    return(data);
}


function App() {
    const data = Api()
    var temp= "";
    if (data !== "No data!"){
    temp = data.items.Temperature
}
    return (
        <span>
        <p>{temp}</p>
        {/* <p>Name: {data.items.Temperature}</p>
        <p>HR Value: {data.items.HRvalue}</p> */}
        </span>
);
}

export default App;
