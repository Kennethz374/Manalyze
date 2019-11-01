import React,{useState} from 'react';
import { Form,Button  } from 'react-bootstrap';
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

const onBook = function(event){ 
  props.getValue(userName, phoneNumber,date,checkBox);
  openNotification();
  history.push('/')
}

  return(
    <Form>
      <Form.Group controlId="formBasicEmail" style={{ width: 300,marginTop:10}}>
        <Form.Label className='booking_text'>User Name</Form.Label>
        <Form.Control type="text" placeholder="user Name" value={userName}
            onChange={(event) => setName(event.target.value)}/>
    </Form.Group>

      {/* <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
            onChange={(event) => setEmail(event.target.value)}/>
      </Form.Group> */}


      <Form.Group controlId="formBasicPassword" style={{ width: 300}}>
        <Form.Label className='booking_text'>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}/>
      </Form.Group>
      

      <p className='select_date'>select date</p>
      <div className='date_picker'>
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>

      <div className='check_box'>
      <Checkbox.Group style={{ width: '100%'}} onChange={onChange}>
          <Row className='row'>
            <Col span={8}>
              <Checkbox value="Men's Hair Cut" style={{ color:'#bc9355'}}>Men's Hair Cut</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Women's Hair Cut" style={{ color:'#bc9355'}}>Women's Hair Cut</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Shaving" style={{ color:'#bc9355'}}>Shaving</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Perm Hair" style={{ color:'#bc9355'}}>Perm Hair</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Dyeing hair" style={{ color:'#bc9355'}}>Dyeing hair</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Button className='button' variant="warning" onClick={onBook}>Booking</Button>
      </div>
    </Form>
  )
}