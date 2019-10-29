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
  function collectFormDate(name,phone,date,checkBox){
    console.log(name,phone,date,checkBox)
  
  }


    return (
      <div >
        {/* <div className='navbar'>
        </div> */}
        <div>
          <Barber />
       </div>
       <div >
        <BookingForm getValue={collectFormDate}/>
       </div>
      </div>
    );
  }



