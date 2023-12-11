import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import AddModal from './AddModal';


const CardTeacher = ({name,img,dep,data,setData}) => {
const [show,setShow] = useState(false)
console.log(img);
  return (
    <div>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={img} onClick={()=>setShow(!show)}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {dep}
        </Card.Text>
      </Card.Body>
    </Card>
    <AddModal name={name} show={show} setShow={setShow} setData={setData} data={data} />
    </div>
  )
}

export default CardTeacher