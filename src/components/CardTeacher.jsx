import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import AddModal from './AddModal';


const CardTeacher = ({name,img,dep,data,setData}) => {
const [show,setShow] = useState(false)
console.log(img);
  return (
    <div>
    <Card style={{ width: '18rem' }} className='m-auto teacher' >
      <Card.Img variant="top" src={img} onClick={()=>setShow(!show)} className='teacher-img' />
      <Card.Body>
        <Card.Title className='card-title'>{name}</Card.Title>
        <Card.Text className='card-text'>
        {dep}
        </Card.Text>
      </Card.Body>
    </Card>
    <AddModal name={name} show={show} setShow={setShow} setData={setData} data={data} />
    </div>
  )
}

export default CardTeacher