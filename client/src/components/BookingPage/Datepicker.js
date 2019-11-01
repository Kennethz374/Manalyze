import React, {useState}from 'react';
import DatePicker from "react-datepicker";


export default function DateChoose(){
  const [startDate, setStartDate] = useState(new Date());
  const date = startDate.toString().substr(0,21)
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}
