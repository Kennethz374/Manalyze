import React from "react"
import {Tabs} from "antd"
import TotalBookings from "./TotalBookings"
const {TabPane} = Tabs

export default function ChartTab (props) {
  return (
  <Tabs defaultActiveKey="1" >
  <TabPane tab="Number Of Bookings" key="1">
    <TotalBookings bookings={props.bookings}/>
  </TabPane>
  <TabPane tab="Tab 2" key="2">
  </TabPane>

  </Tabs>

  )
}
