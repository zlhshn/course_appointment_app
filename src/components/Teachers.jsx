import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { teacherData } from "../helper/data";
import CardTeacher from "./CardTeacher";

const Teachers = ({ data, setData }) => {
  return (
    <Container>
      <h2>Our Teachers</h2>
      <Row className="g-4 p-4">
        {teacherData.map((item, index) => (
          <Col key={index}>
            <CardTeacher data={data} setData={setData} {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Teachers;
