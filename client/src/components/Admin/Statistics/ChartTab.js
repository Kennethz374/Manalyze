import React from "react"
import {Tabs} from "antd"
import TotalBookings from "./TotalBookings"
import TotalIncome from "./TotalIncome"
const {TabPane} = Tabs

export default function ChartTab (props) {
  return (
  <Tabs defaultActiveKey="1" >
  <TabPane tab="Bookings/Day" key="1">
    <TotalBookings bookings={props.bookings} currentDate={props.currentDate}/>
  </TabPane>
  <TabPane tab="Income/Day" key="2">
    <TotalIncome bookings={props.bookings} services={props.services}/>
  </TabPane>

  </Tabs>

  )
}
