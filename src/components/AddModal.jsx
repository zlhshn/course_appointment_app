import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const AddModal = ({ show, name, setShow, setData, data }) => {
 
  const [studentName, setStudentName] = useState("");
  const [date, setDate] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Tarih ve saat bilgisini ayrıştırma
  
  
    setData([
      ...data,
      {
        id: new Date().getTime(),
        student: studentName,
        day: date,
        booked: false,
        teacher: name,
      },
    ]);
  
    setShow(false);
  };

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Instructor: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a name"
                onChange={(e) => setStudentName(e.target.value)}
                id="student"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
                id="day"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="success" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;