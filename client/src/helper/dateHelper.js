
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

export function bookingInfoWithOnlyDateAndBookings(bookingData, currentDate) {
  let Data = [];
  const sortedUniqueDate= getSortedUniqueDate(bookingData)
  //only show past 10 days data, 
  const index = sortedUniqueDate.indexOf(currentDate)
  const sortedNumOfBookings=sortedUniqueDate.map((d)=> getNumberOfBookingsByDate(bookingData,d))
  const date = sortedUniqueDate.slice(index-10,index+5)
  const bookings = sortedNumOfBookings.slice(index-10,index+5)
  
  for (let j = 0; j < date.length; j++) {
    Data.push(
      {
        date: date[j],
        bookings: bookings[j]
      }
    )
  }
  return Data;
}

//for Employee Bar chart
export function getBookingsNumbersByEmployeesID(bookings,employeesID) {
  const numberOfBookings = bookings.filter((b)=>b.employee_id === employeesID)
  return numberOfBookings.length
}

export function getEmployeesNameAndBookings(bookings,employees) {
  const data = [];
  const nameArr = employees.map((e)=>e.name)
  for(let i = 0; i< employees.length; i++) {
    data.push(
      {
        name: nameArr[i],
        bookings: getBookingsNumbersByEmployeesID(bookings, i+1)
      }
    )
  }
  return data
}

//for totalincome bar chart
function getSortedUniqueDate(bookings) {
  let uniqueDate = [];
  for (let i = 0; i < bookings.length -1; i++) {
    if(!uniqueDate.includes(bookings[i].date.substring(5,10))){
      uniqueDate.push(bookings[i].date.substring(5,10))
    }
  }
  const sortedUniqueDate= uniqueDate.sort()
  return sortedUniqueDate
}

export function dailyIncomeWithDate(bookings, services) {
  let data = [];
  const sortedUniqueDate = getSortedUniqueDate(bookings)
  for (let i = 0; i < sortedUniqueDate.length; i++) {
    data.push (
      {
        date: sortedUniqueDate[i],
        income: getTodayTotalIncome(bookings,services,sortedUniqueDate[i])
      }
    )
  }
  return data
}

//for service pie 
export function getServiceCounts(bookings, serviceID) {
  let count = 0;
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].service_id === serviceID) {
      count =count + 1
    }
  }
  return count
}

export function dataForServicePie(bookings, services) {
  let data = [];
  let ServiceCounts = [];
  let arrOfServices= services.map(s => s.id)
  for (let i = 0; i < arrOfServices.length;i++){
    ServiceCounts.push(getServiceCounts(bookings, arrOfServices[i]))
  }
  for (let j = 0; j < ServiceCounts.length;j++){
    data.push (
      {
        item: getServiceNameByServiceId(services,arrOfServices[j]),
        count: ServiceCounts[j]
      }
    )
  }
  return data
}

export function dataForRevenuePie (bookings, services) {
  let data =[];
  let RevenueCounts=[]
  let arrOfServices= services.map(s => s.id)
  for (let i = 0; i < arrOfServices.length;i++){
    RevenueCounts.push(getServiceCounts(bookings, arrOfServices[i]) * getServicePriceByServiceId(services,arrOfServices[i]))
  }
  for (let j = 0; j < RevenueCounts.length;j++){
    data.push (
      {
        item: getServiceNameByServiceId(services,arrOfServices[j]),
        count: RevenueCounts[j]
      }
    )
  }
  return data
}
// new Date().toJSON().substring(5,10)   today's day in 11-01 format