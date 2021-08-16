import React, { useState } from "react";
import "./App.css";

function App() {
  
  //defining curruent time to set the value of useState "setting initial value" 
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  //! creating a function to update the time->
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  //! Setting a interval of 1 sec to re-render the updated time by using useState hook-->
  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <div>
        {/*Declaring TIME*/}
        <h1>{time}</h1>
      </div>
      <div className="footer">Created by Ayan Ansari with ❤️</div>
    </div>
  );
}

export default App;
