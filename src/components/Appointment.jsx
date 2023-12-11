import { FaTimesCircle } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Booked from  "./Booked";

const Appoinment = ({ data, setData }) => {
const handleDelete=(e)=>{
  setData(data.filter((item)=>item.id !== e ))
}
const handleBooked=(id)=>{
  setData(data.map((item)=> item.id == id ? {...item, booked: !item.booked } : item))
}
  return (
    <div className="m-4">
      <h3 className="text-center">Appointment List</h3>
      <Container>
        <Row className="text-left  p-3">
        
        {data.length < 1 && <img src="./img/appointment.jpg" className="app-img"/>}
        
          {data.map(({ student, day, teacher, id, booked ,time}) => {
            return (
              <div onDoubleClick={()=>handleBooked(id) }
                key={id}
                className="d-flex justify-content-between app-container g-3 rounded-2  align-items-center p-3 "
              >
                <div>
                  <h5><span className="text-danger">Instructor:</span > {teacher}</h5>
                  <h5><span className="text-danger">Student:</span> {student}</h5>
                </div>
                {booked ? <Booked /> : <div><h5>{day} {time}</h5></div>}
                <div>
                  <FaTimesCircle className="display-6 text-danger" onClick={()=>handleDelete(id)}/>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Appoinment;