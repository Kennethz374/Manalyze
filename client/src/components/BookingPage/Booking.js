import React from 'react';
// import axios from 'axios';
import './Booking.css';
import 'bootstrap/dist/css/bootstrap.css';
// import DateChoose from './Datepicker'
import "react-datepicker/dist/react-datepicker.css"
// import SelectServices from './SelectServices'
import Barber from './Barber'
import BookingForm from './BookingForm'
import { Row, Col } from 'antd'




export default function Booking(props) {
  function collectFormDate(name,phone,date,checkBox){
    // axios.post("/api/bookings", {name:name,})
  }


    return (
      <div className='booking_page'>
        <Row type="flex" justify="center" align="top" className='row'>
          <Col span={8}>
              <div className='barber'>
                <Barber employee={props.employee} />
              </div>
          </Col>
          <Col span={8}>
            <div className='booking_form'>
              <BookingForm employee={props.employee} getValue={collectFormDate}/>
            </div>
          </Col>
       </Row>
      </div>
    );
  }



