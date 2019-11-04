import React from "react"
import {Card} from "antd"
import {getTodayTotalIncome,getTotalIncomeOfAllBookings,totalDays} from "../../../helper/dateHelper"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
export default function TotalSales(props) {

  console.log(props.currentDate)
  let date = props.currentDate
  let totalIncomeToday = getTodayTotalIncome(props.bookings, props.services, date)
  let totalIncome =getTotalIncomeOfAllBookings(props.bookings,props.services)
  let totalIncomeThisYear=formatter.format(totalIncome)
  let totalIncomeThisDay =formatter.format(totalIncomeToday)
  let totalNumberOfBusinessDays = totalDays(props.bookings)
  let AvgDailyIncome = formatter.format(totalIncome/totalNumberOfBusinessDays)
  return (
    <div>
        <Card title=
        {
        <>
          <h6>Total Income </h6>
          <h2>{totalIncomeThisYear}</h2>
        </>
        }  
      style={{ height: 200 }} xs={24} md={12} xl={6}>
          <h6>Avg Daily income: {AvgDailyIncome}</h6>
          <h6>Today's Income: {totalIncomeThisDay} </h6>
     
        </Card>
      </div>
  )


}

