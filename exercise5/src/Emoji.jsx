import { useContext } from "react";
import { MoodContext } from "./App";
import { useState } from "react";

export function Emoji(){
    const moods = useContext(MoodContext);
    const [mood, setMood] = useState(moods[0].emoji);
    
    const randomNum = () => {
        let randomNumber = parseInt(Math.random()*5);
        setMood(moods[randomNumber].emoji);
    }

    return(
        <>
        <div style={{fontSize:"50px"}}>
        {mood}
        </div>
        <button onClick={()=>randomNum()}>Change my mood</button>
        </>
    )
}