import axios from "axios";
import React from "react";

const baseURL = "https://5knfrtp7g6.execute-api.us-east-1.amazonaws.com/";

export function Api() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/loc_get_func?1876`).then((response) => {
            console.log("testestest")
            setData(response.data);
        });
    }, []);
    console.log("result");
    console.log(data);
    if (!data) return "No data!"
    
    return(data);
}
function App() {
    const data = Api()
    var loc= "";
    var time = "";
    var ID = "";
    if (data !== "No data!"){
    loc = data.items.location
    time = data.items.Time
    ID = data.items.ID
}
    return (
        <span>
        <p>ID: {ID}</p>
        <p>Location: {loc}</p>
        <p>Time: {time}</p>
        {/* <p>Name: {data.items.Temperature}</p>
        <p>HR Value: {data.items.HRvalue}</p> */}
        </span>
);
}

export default App;
