import React from "react"
import {Card} from "antd"
import {getTodayTotalIncome,getTotalIncomeOfAllBookings,totalDays} from "../../../helper/dateHelper"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
export default function TotalSales(props) {
  let date = new Date().toJSON().substring(5,10)
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
          <p>Avg Daily income: {AvgDailyIncome}</p>
          <p>Today's Income: {totalIncomeThisDay} </p>
     
        </Card>
      </div>
  )


}

