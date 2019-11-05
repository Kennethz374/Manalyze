import React, {useState} from "react"
// import axios from "axios"
import {Card, Avatar, BackTop, Row, Col, Pagination} from 'antd';
import {bookingsWithSameClientID} from "../../helper/dateHelper"
import {getServiceNameByServiceId} from "../../helper/dateHelper"
import {getEmployeeNameById} from "../../helper/dateHelper"



export default function Clients(props) {
  const [activeClient, setActiveClient] = useState(null);
  const [page,setPage] =useState({
    minValue: 0,
    maxValue: 9
  })
 const handleChange = value => {
    if (value <= 1) {
      setPage({
        minValue: 0,
        maxValue: 9
      });
    } else {
      setPage({
        minValue: page.maxValue,
        maxValue: value * 10
      });
    }
    console.log(value)
  };

  return(
    <>
    <Pagination defaultCurrent={1} total={300}  defaultPageSize={10} onChange={handleChange}/>

      {(props.clients && props.clients.length > 0) && props.clients.slice(page.minValue, page.maxValue).map((client) => {
        const setClientActive = () => { setActiveClient(client.id)}
        const bookingsWithSameClient = bookingsWithSameClientID(props.bookings, activeClient)
        // const RoyalClientsBackground = bookingsWithSameClientID(props.bookings, client.id)
        return (
          <div key={client.id}>
          <div style={{ background: '#ECECEC', padding: '5px', borderRadius:"25px"}} >
            { client.id === activeClient ?
           ( 
            <Card span={12} offset={6} bordered={false} style={{ borderRadius:"25px", backgroundColor:"#ECECEC", height:window.innerHeight}} onClick={()=>setActiveClient(null)}>
                <Row type="flex" justify="center">
                  <Col span={8}>
                    <img alt="123" src= {client.pictures} style={{borderRadius:"25px", height: 300, width: 300}} />
                  </Col>

                  <Col span={16} >
                    <h3>ID: {client.id}  </h3>
                    <h3>Name: {client.name}  </h3>
                    <h3>Email: {client.email}  </h3>
                    <h3>Phone#: {client.phoneNumber}  </h3>
                    <h3>Gender: {client.gender} </h3>
                  </Col>
                </Row>

                <Row>
                  {bookingsWithSameClient.length===0? <p>No Booking Yet</p>
                  : 
                  bookingsWithSameClient.map((b)=> {
                    return (
                      <Row type ="flex" style={{ borderRadius:"15px", backgroundColor:"#c9c2c1", color:'#bc9355', margin:"10px"}}>
                        <Col span={4}><h6>BookingID: {b.id}</h6> </Col>
                        <Col span={5}><h6>Date:{ b.date.substring(0,16)} </h6></Col>
                        <Col span={5}><h6>ServiceID: {getServiceNameByServiceId(props.services,b.service_id)}</h6></Col>
                        <Col span={5}><h6>Server: {getEmployeeNameById(props.employees,b.employee_id)}</h6> </Col>
                        <Col span={5}><h6>Created at: {b.created_at.substring(0,10)}</h6></Col>
                      </Row>
                    )
                  })
                  }
                </Row>
            
            </Card>
           )
            :
        
           (
            <Card span={12} offset={6} bordered={false} 
            style={{ borderRadius:"25px", backgroundColor:"#2b2727", color:'#bc9355'}} 
            onClick={setClientActive}
            >
                <Row>
                  <Col span={4}>
                    <Avatar size="large" src={client.pictures} />
                  </Col>

                  <Col span={10}>
                    <div>Name: {client.name}  </div>
                    <div>Email: {client.email}  </div>

                  </Col>

                  <Col span={10}>
                    <div>Phone#: {client.phoneNumber}</div>
                    <div>Gender: {client.gender}</div>
                  </Col>
                </Row>
              </Card>
            )
            }
          </div>
          </div>

        )
      })}

    <div>
      <BackTop />
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
    </div>
      </>
   


    )
}