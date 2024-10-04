
import React, {useState, useEffect} from "react";

function DigitalTimer(){
const[time, setTime] = useState(new Date());
const[date, setDate] = useState()

useEffect(()=>{

    document.title =  `Time`;
    const intervalId = setInterval(()=>{
        setTime(new Date());
    }, 1000)

    return()=>{
        clearInterval(intervalId);
    }

},[]);
function  formatTime(){
    let hours = time.getHours();
  
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${meridiem}`
}
function formatDate(){
    const year = time.getFullYear()
    const months = (time.getMonth()+1).toString().padStart(2, '0');
    const days = time.getDay().toString().padStart(2, '0');
    return `${year}/${months}/${days}`


}
function formatDay()
{
    const daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return  daysofWeek[time.getDay()];
}
    
return(<div className="time-container">
    <div  className="clock">
<span>It's  {formatTime()}</span><br />
<span>{formatDate()}</span><br />
<span>{formatDay()}</span>
</div>
</div>
)
}
export default DigitalTimer;