import axios from "axios";
import React from "react";

const baseURL = "https://6dkki21gjh.execute-api.us-east-1.amazonaws.com";

export function Api() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/sensor_get`).then((response) => {
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
    return (
        <div>
        <p>{JSON.stringify(data)}</p>
        {/* <p>Name: {data.items.Temperature}</p>
        <p>HR Value: {data.items.HRvalue}</p> */}
        </div>
    );
}


export default App;
