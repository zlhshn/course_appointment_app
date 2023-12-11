import Teachers from "./components/Teachers";
import Appointment from "./components/Appointment";
import { useState } from "react";
import {appointmentData} from  "./helper/data";

import './App.css';



function App() {

  const [data , setData] = useState(appointmentData)


  return (
    <main className="p-3 text-center">
  <h1 >LANGUAGE SCHOOL</h1>
  <Teachers data= {data} setData = {setData}/>
  <Appointment data= {data} setData = {setData}/>
    </main>
  );
}

export default App;
