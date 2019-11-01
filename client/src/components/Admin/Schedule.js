import React from "react"
import { Calendar, Badge } from 'antd';
import {numberOfBookingsByDay, numberOfBookingsByMonth} from "../../helper/dateHelper"
const booking = [
  {
  "id": 1,
  "user_id": 1,
  "employee_id": 1,
  "date": "2019-10-31T17:00:00.000Z",
  "notes": "please prepare hot towel for me",
  "created_at": "2019-10-31T20:39:11.607Z",
  "updated_at": "2019-10-31T20:39:11.607Z"
  },
  {
  "id": 2,
  "user_id": 2,
  "employee_id": 1,
  "date": "2019-11-04T16:30:00.000Z",
  "notes": "i might be late a bit",
  "created_at": "2019-10-31T20:39:11.631Z",
  "updated_at": "2019-10-31T20:39:11.631Z"
  },
  {
  "id": 3,
  "user_id": 3,
  "employee_id": 1,
  "date": "2019-11-02T16:30:00.000Z",
  "notes": "I like kenneth so much",
  "created_at": "2019-10-31T20:39:11.643Z",
  "updated_at": "2019-10-31T20:39:11.643Z"
  },
  {
  "id": 4,
  "user_id": 4,
  "employee_id": 1,
  "date": "2019-11-01T16:30:00.000Z",
  "notes": "",
  "created_at": "2019-10-31T20:39:11.656Z",
  "updated_at": "2019-10-31T20:39:11.656Z"
  },
  {
  "id": 5,
  "user_id": 5,
  "employee_id": 2,
  "date": "2019-10-31T16:30:00.000Z",
  "notes": "",
  "created_at": "2019-10-31T20:39:11.670Z",
  "updated_at": "2019-10-31T20:39:11.670Z"
  },
  {
  "id": 6,
  "user_id": 6,
  "employee_id": 2,
  "date": "2019-10-30T16:30:00.000Z",
  "notes": "give me discount",
  "created_at": "2019-10-31T20:39:11.686Z",
  "updated_at": "2019-10-31T20:39:11.686Z"
  }
  ]


function getListData(value) {
  let num = numberOfBookingsByDay(booking,value.date(),value.month()+1) //jan = 0 we have to add 1 to adjust to the correct month
  // console.log(value.date(),value.month())
  return [
    { content: num}
  ] || null;
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
      <Badge count={listData[0].content}/>
  );
}

function getMonthData(value) {
  let num = numberOfBookingsByMonth(booking,value.month()+1)
  return num
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section><Badge count={num}/></section>
    </div>
  ) : null;
}

export default function Schedule () {
  return (
    <>
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
    </>
  )
}
