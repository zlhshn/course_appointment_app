import Teachers from "./components/Teachers";
import Appointment from "./components/Appointment";
import { useState } from "react";
import { appointmentData } from "./helper/data";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [data, setData] = useState(appointmentData);

  return (
    <main><div className="text-center mt-4">
       <img src="./img/lang.jpg" alt="" className="img-head" />
    </div>
     
      <h1 className="text-center">LANGUAGE SCHOOL</h1>
      <Teachers data={data} setData={setData} />
      <Appointment data={data} setData={setData} />
      <Footer />
    </main>
  );
}

export default App;
