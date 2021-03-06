import React from "react"
import { Calendar, Badge,Popover, Tag } from 'antd';
import {
  numberOfBookingsByDay, 
  numberOfBookingsByMonth, 
  BookingsByDay,getEmployeeNameById, 
  getUserNameById,
  getServiceNameByServiceId,
  getServicePriceByServiceId
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
  const sortBookingByTime= dayBooking[0].content.sort(function(a, b) {
    let dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
  });
  
  let details = sortBookingByTime.map((b)=>{
    let employeeName = getEmployeeNameById(props.employees, b.employee_id)
    let userName = getUserNameById(props.clients, b.user_id)
    let bookingTime = b.date.substring(11,16)
    let serviceName = getServiceNameByServiceId(props.services,b.service_id)
    let servicePrice = getServicePriceByServiceId(props.services, b.service_id)

    return (
      <div>
        <Tag color="blue">Time: {bookingTime}</Tag>
        <Tag color="green">Client: {userName}</Tag>
        <Tag color="black">Server: {employeeName}</Tag>
        <Tag color="purple">{serviceName}</Tag>
        <Tag color="pink">Notes: {b.notes}</Tag>
        <Tag color="geekblue">${servicePrice}</Tag> 
      </div>
    )
  })

  let num =listData[0].content
  return (
    <Popover content={details} title="Booking Details">
    {num >=10? <Badge count={num}/>:<Badge count={num} style={{ backgroundColor: '#52c41a' }}/>}
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
      <section>{num>=80?<Badge overflowCount={999} count={num}/>:<Badge overflowCount={999} count={num} style={{ backgroundColor: '#52c41a' }} />}</section>
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
