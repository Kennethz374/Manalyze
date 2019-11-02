import React from "react"
import { Calendar, Badge,Popover } from 'antd';
import {
  numberOfBookingsByDay, 
  numberOfBookingsByMonth, 
  BookingsByDay,getEmployeeNameById, 
  getUserNameById
} from "../../helper/dateHelper"

function getListBooking(value, props) {
  let dayBooking = BookingsByDay(props.bookings,value.date(),value.month()+1)
  return [{content:dayBooking}]||null;
}

function getListData(value, props) {
  let num = numberOfBookingsByDay(props.bookings,value.date(),value.month()+1) 
  //jan = 0 we have to add 1 to adjust to the correct month
  return [
    { content: num}
  ] || null;
}

function dateCellRender(value, props) {

  const listData = getListData(value, props);
  const dayBooking = getListBooking(value, props)

  let details = dayBooking[0].content.map((b)=>{
    let employeeName = getEmployeeNameById(props.employees, b.employee_id)
    let userName = getUserNameById(props.clients, b.user_id)
    let bookingTime = b.date.substring(12,16)
    return (
      <div>Time: {bookingTime} Client: {userName} Server: {employeeName} Services: null yet notes: {b.notes}`</div>
    )
  })

  let num =listData[0].content
  return (
    <Popover content={details} title="Booking Details">
    {num >=2? <Badge count={num}/>:<Badge count={num} style={{ backgroundColor: '#52c41a' }}/>}
    </Popover>

  );
}

function getMonthData(value, props) {
  let num = numberOfBookingsByMonth(props.bookings,value.month()+1)
  return num
}

function monthCellRender(value, props) {
  const num = getMonthData(value, props);
  return num ? (
    <div className="notes-month">
      <section>{num>=2?<Badge count={num}/>:<Badge count={num} style={{ backgroundColor: '#52c41a' }} />}</section>
    </div>  
  ) : null;
}

export default function Schedule (props) {
  return (
    <>
    <Calendar dateCellRender={(value)=>dateCellRender(value,props)} monthCellRender={(value)=>monthCellRender(value,props)} />,
    </>
  )
}
