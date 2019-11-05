import React,{useState} from 'react';
import { Form,Button,Modal  } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import { Checkbox, Row, Col } from 'antd';
import 'antd/dist/antd.css'
import { notification, Icon } from 'antd';

export default function BookingForm(props){
  const history = useHistory()
  // console.log(props.getValue)
//form//
  const[userName, setName] = useState('');
  // const[email,setEmail] = useState('')
  const[phoneNumber, setPhoneNumber]= useState('');
  // const[gender, setGender] = useState('')
  
//date picker//
  const [startDate, setStartDate] = useState(new Date());
  const date = startDate.toString().substr(0,21)

//check box//

const[checkBox,setcheckBox] = useState([])
function onChange(checkedValues) {
  setcheckBox(checkedValues)
  // console.log('checked = ', checkedValues);
}

const openNotification = () => {
  notification.open({
    message: 'Booking Complete',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
  });
};

// const onBook = function(event){ 
//   props.getValue(userName, phoneNumber,date,checkBox);
//   // openNotification();
//   history.push('/')
// }

function BookingComfirmation() {
  
  const [show, setShow] = useState(false);

  const handleSaveBooking = () => {
    props.getValue(userName, phoneNumber,date,checkBox)

    // console.log(props.getValue)
    setShow(false)
    setTimeout(()=>{
      history.push('/')
      openNotification()
    },2000)
    
    
  };
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Booking
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Comfirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Booking Detials:</div>
          <div>Date:{date}</div>
          <div>Selected Services:{checkBox}</div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveBooking}>
            Save Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


  return(
    <Form className='booking_form'>
      <Form.Group controlId="formBasicEmail" style={{ width: 300,marginTop:10}}>
        <Form.Label className='booking_text'>User Name</Form.Label>
        <Form.Control type="text" placeholder="user Name" value={userName}
            onChange={(event) => setName(event.target.value)}/>
      </Form.Group>




      <Form.Group controlId="formBasicPassword" style={{ width: 300}}>
        <Form.Label className='booking_text'>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}/>
      </Form.Group>
      

      <p className='select_date'>Select Date</p>
      <div className='date_picker'>
        <DatePicker 
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>

      <div className='check_box'>
      <Checkbox.Group style={{ width: '100%'}} onChange={onChange}>
          <Row className='row'>
            <Col span={10}>
              <Checkbox value="Men's Hair Cut" style={{ color:'#bc9355'}}>Men's Haircut</Checkbox>
            </Col>
            <Col span={10}>
              <Checkbox value="Women's Hair Cut" style={{ color:'#bc9355'}}>Women's Haircut</Checkbox>
            </Col>
            <Col span={10}>
              <Checkbox value="Shaving" style={{ color:'#bc9355'}}>Shaving and Facial</Checkbox>
            </Col>
            <Col span={10}>
              <Checkbox value="Perm Hair" style={{ color:'#bc9355'}}>Perm Hair</Checkbox>
            </Col>
            <Col span={10}>
              <Checkbox value="Dyeing hair" style={{ color:'#bc9355'}}>Colours</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <BookingComfirmation />
      </div>
    </Form>
  )
}