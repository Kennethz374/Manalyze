import React from "react"
import {Tabs} from "antd"
import BookingNumber from "./bookingNumber"
const {TabPane} = Tabs

export default function ChartTab () {
  return (
  <Tabs defaultActiveKey="1" >
  <TabPane tab="Tab 1" key="1">
    <BookingNumber/>
  </TabPane>
  <TabPane tab="Tab 2" key="2">
    <BookingNumber/>
  </TabPane>

  </Tabs>

  )
}
