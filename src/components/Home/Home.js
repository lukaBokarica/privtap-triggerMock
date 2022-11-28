import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Home() {
    return (
        <div>
            <h3>New date published</h3>
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
        name: "New date",
        userId: "637fca83e390fb1412654658",
        typeId: "637e8c10e390fb141265464b",
        fields: [{"type":"date", "name":"date", "value":"yyyy-mm-ddT00:00:00.000Z"}]
    });

    data[1] = JSON.stringify({
        name: "New post",
        userId: "637fca83e390fb1412654658",
        typeId: "637e8c10e390fb141265464b",
        fields: [{"type":"title", "name":"title", "value":"New baby born!!!"},
                {"type":"description", "name":"description", "value":"Finally this day has arrived. My baby son is born"}]
    });

    return data[index];
}

async function handleTriggerClicked(index) {
    console.log("uspjeh");
    const triggerData = getData(index);
    const result = await axios.post('http://localhost:8080/trigger/occurrence', triggerData, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
}

export default Home;