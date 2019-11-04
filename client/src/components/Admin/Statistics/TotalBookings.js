import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip
} from "bizcharts"
import {bookingInfoWithOnlyDateAndBookings} from "../../../helper/dateHelper"



export default function TotalBookings(props) {
  const data = bookingInfoWithOnlyDateAndBookings(props.bookings,props.currentDate);
  console.log("data", data)
  console.log("props.bookings", props.bookings)
  console.log("props.currentDate", props.currentDate)

  const cols = {
    bookings: {
      tickInterval: 1
    }
  };
  return (
    <div>
    <Chart height={400} data={data} scale={cols} forceFit>
      <Axis name="date" />
      <Axis name="bookings" />
      <Tooltip
        crosshairs={{
          type: "y"
        }}
      />
      <Geom type="interval" position="date*bookings" />
    </Chart>
  </div>

  )
}
 

