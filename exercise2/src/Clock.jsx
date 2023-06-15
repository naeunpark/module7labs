import { useState, useEffect } from "react";

function Clock(){
    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        let time = setInterval(()=>tick(), 1000);
        console.log("useEffect hook for Clock component has been called");
        return () => {
            console.log("Cleared Clock update interval");
            clearInterval(time);
        }
    }, [])

    const tick = ()=>{
        setDate(new Date());
    }

    return (
        <>
            <h1>{date.toLocaleTimeString()}</h1>
        </>
    )
}

export default Clock;