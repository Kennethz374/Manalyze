import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip
} from "bizcharts"
import {dailyIncomeWithDate} from "../../../helper/dateHelper"



export default function TotalIncome(props) {
  const data = dailyIncomeWithDate(props.bookings, props.services);
  console.log(data)

  const cols = {
    income: {
      tickInterval: 50
    }
  };
  return (
    <div>
    <Chart height={400} data={data} scale={cols} forceFit>
      <Axis name="date" visible={false}/>
      <Axis name="income"/>
      <Tooltip
        crosshairs={{
          type: "y"
        }}
      />
      <Geom type="interval" position="date*income" color={"green"}/>
    </Chart>
  </div>

  )
}
 

