import React,{useState} from 'react';
import { Form,Button  } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Checkbox, Row, Col } from 'antd';
import 'antd/dist/antd.css'

export default function BookingForm(props){
//form
  const[userName, setName] = useState('');
  const[email,setEmail] = useState('')
  const[phoneNumber, setPhoneNumber]= useState('');
  const[gender, setGender] = useState('')
  
//date picker
  const [startDate, setStartDate] = useState(new Date());
  const date = startDate.toString().substr(0,21)
// console.log(date)
//check box

const[checkBox,setcheckBox] = useState([])
// function onChange(checkedValues) {
//   setcheckBox(checkedValues);
// }
function onChange(checkedValues) {
  setcheckBox(checkedValues)
  console.log('checked = ', checkedValues);
}

  return(
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="user Name" value={userName}
            onChange={(event) => setName(event.target.value)}/>
    </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
            onChange={(event) => setEmail(event.target.value)}/>
      </Form.Group>

      {/* <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}/>
      </Form.Group>
      
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Gender" value={gender}
            onChange={(event) => setGender(event.target.value)}/>
      </Form.Group>

      <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />

      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
          <Row className='row'>
            <Col span={8}>
              <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B">B</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E">E</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>

        <Button variant="primary" onClick={(event) => props.getValue(userName, email,phoneNumber,gender,date,checkBox)}>Booking</Button>
    
  </Form>
  )
}