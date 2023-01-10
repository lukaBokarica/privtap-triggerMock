import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Home() {
    return (
        <div>
            <h3>New post</h3>
            <button onClick={() => handleTriggerClicked(0)}>Activate trigger</button>
            <br/>
            <h3>New post added</h3>
            <button onClick={() => handleTriggerClicked(1)}>Activate trigger</button>
        </div>
    );
}

function getData(index) {
    let data = [];
    data[0] = JSON.stringify({
        name: "New post",
        userId: "63bc3d4acce0221b1d4df7d4",
        typeId: "637e8c10e390fb141265464b",
        fields: [{"type":"date", "name":"date", "value":"yyyy-mm-ddT00:00:00.000Z"},
                {"type":"title", "name":"title", "value":"My first post"},
                {"type":"content", "name":"content", "value":"description"},
                {"type":"userinfo", "name":"userinfo", "value":null}]
    });

    data[1] = JSON.stringify({
        name: "New post",
        userId: "637fca83e390fb1412654658",
        typeId: "637e8c10e390fb141265464b",
        fields: [{"type":"title", "name":"title", "value":"New baby born!!!"},
                {"type":"content", "name":"content", "value":"Finally this day has arrived. My baby son is born"},
                {"type":"date", "name":"date", "value":"22.10.2022."},
                {"type":"userinfo", "name":"userinfo", "value":null}]
    });

    return data[index];
}

async function handleTriggerClicked(index) {
    console.log("uspjeh");
    const triggerData = getData(index);
    const result = await axios.post('http://privtap-bucket.s3-website.eu-central-1.amazonaws.com/trigger/occurrence', triggerData, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
}

export default Home;
