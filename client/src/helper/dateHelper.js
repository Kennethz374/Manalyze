
 export function getEmployeeNameById (data, id) {
  let employee = data.filter((e)=> e.id === id)
  return employee[0]["name"]
}

 export function getUserNameById(data,id) {
   let user = data.filter(u=> u.id===id)
   return user[0]["name"]
 }
// console.log(getEmployeeNameById(employees, 4))


  export function numberOfBookingsByMonth (bookings,specificMonth) {
    let bookingNum = bookings;
      if (specificMonth < 10) {
        const result=bookingNum.filter(e=> e.date.includes(`-0${specificMonth}-`))
        return result.length
    } 
    if (specificMonth >=10) {
        const result=bookingNum.filter(e=> e.date.includes(`-${specificMonth}-`))
        return result.length
    }
  }

export function numberOfBookingsByDay (bookings,specificDay,specificMonth) {
  let bookingNum = bookings;
    if (specificDay < 10 && specificMonth < 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-0${specificMonth}-0${specificDay}`))
      return result.length
    } 
    if (specificDay >= 10 && specificMonth < 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-0${specificMonth}-${specificDay}`))
      return result.length
    }
    if (specificDay < 10 && specificMonth >= 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-${specificMonth}-0${specificDay}`))
      return result.length
    }
    if (specificDay >= 10 && specificMonth >= 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-${specificMonth}-${specificDay}`))
      return result.length
    }

}

export function BookingsByDay (bookings,specificDay,specificMonth) {
  let bookingNum = bookings;
    if (specificDay < 10 && specificMonth < 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-0${specificMonth}-0${specificDay}`))
      return result
    } 
    if (specificDay >= 10 && specificMonth < 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-0${specificMonth}-${specificDay}`))
      return result
    }
    if (specificDay < 10 && specificMonth >= 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-${specificMonth}-0${specificDay}`))
      return result
    }
    if (specificDay >= 10 && specificMonth >= 10) {
      const result=bookingNum.filter(e=> e.date.includes(`-${specificMonth}-${specificDay}`))
      return result
    }

}

export function getServiceNameByServiceId (serviceTable, serviceID) {
  let data = serviceTable;
  const result = data.filter((s)=> s.id === serviceID)
  return result[0].name
}

export function getServicePriceByServiceId (serviceTable, serviceID) {
  let data = serviceTable;
  const result = data.filter((s)=> s.id === serviceID)
  return result[0].price
}

export function getTodayTotalIncome (bookings, servicetable, date) {
  let listOfBookings = bookings;
  const listOfOneDayBookings=listOfBookings.filter((b)=>b.date.substring(5,10) === date)
  const totalIncomeList = listOfOneDayBookings.map((b)=> b.service_id)
  const totalPrice= totalIncomeList.map((id)=>getServicePriceByServiceId(servicetable,id))
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return totalPrice.reduce(reducer)
}

export function getTotalIncomeOfAllBookings(bookings,serviceTable) {
  const totalListOfService=bookings.map((b)=>b.service_id)
  const totalIncome=totalListOfService.map((id)=>getServicePriceByServiceId(serviceTable,id))
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return totalIncome.reduce(reducer)
}

export function totalDays(bookingData) {
  let uniqueDate = [];
  for (let i = 0; i < bookingData.length -1; i++) {
    if(!uniqueDate.includes(bookingData[i].date.substring(5,10))){
      uniqueDate.push(bookingData[i].date.substring(5,10))
    }
  }
  return uniqueDate.length
}
///for total bookings bar chart
function getNumberOfBookingsByDate(bookings, date) {
  const result = bookings.filter((b)=> b.date.substring(5,10)=== date)
  return result.length
}

export function bookingInfoWithOnlyDateAndBookings(bookingData) {
  let uniqueDate = [];
  let Data = [];
  for (let i = 0; i < bookingData.length -1; i++) {
    if(!uniqueDate.includes(bookingData[i].date.substring(5,10))){
      uniqueDate.push(bookingData[i].date.substring(5,10))
    }
  }
  const sortedUniqueDate= uniqueDate.sort()
  const sortedNumOfBookings=sortedUniqueDate.map((d)=> getNumberOfBookingsByDate(bookingData,d))
  
  for (let j = 0; j < sortedUniqueDate.length; j++) {
    Data.push(
      {
        date: sortedUniqueDate[j],
        bookings: sortedNumOfBookings[j]
      }
    )
  }
  return Data;
}