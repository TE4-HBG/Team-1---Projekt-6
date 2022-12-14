import React, { useState, useEffect } from "react";
import server from "../server";
import Laureate from "./Laureate";

export const Timer = () => {
    const [data, setData] = useState(null);


    function SetData() {
        server.random("laureate", 1, (arr) => { setData(arr[0]) });
    }

    useEffect(() => {
        SetData()
        const intervalID = setInterval(SetData, 86_400_000);
        return function () { clearInterval(intervalID); }
    }, []);

    return (
        <div style={{float: "right"}} className="Timer">
            <h2 style={{ textAlign:"center" }}>Laureate of the day</h2>
            <Laureate data={data} />
        </div>
    )

}
export default Timer;
