import React from 'react';
import axios from 'axios';
import './Booking.css';
import 'bootstrap/dist/css/bootstrap.css';
import DateChoose from './Datepicker'
import "react-datepicker/dist/react-datepicker.css"
import SelectServices from './SelectServices'
import Barber from './Barber'
import BookingForm from './BookingForm'




export default function Booking() {
  function collectFormDate(name,email,phone,gender,date,checkBox){
    console.log(name,email,phone,gender,date,checkBox)
    // console.log( checkBox)
  }


    return (
      <div className='booking_page'>
        <div className='navbar'>
        </div>
        <div className='barber'>
          <Barber />
          {/* <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" height="128" width="128"/> */}
          {/* <div className='info'>
            <div className='name'>
              Name
            </div>
            <div className='description'>
              discription:this is a description
            </div>
          </div> */}
       </div>
       <div className='booking_form'>
        <BookingForm getValue={collectFormDate}/>
       </div>
       
       {/* <div className='date_picker'>
        Date: <DateChoose/>
       </div>
       <div className='check_box'>
        <SelectServices/>
       </div>
       <div>
        <Button variant="primary">Booking</Button>
       </div> */}
      </div>
    );
  }



