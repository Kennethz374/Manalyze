import React, {useState} from "react"
// import axios from "axios"
import {Card, Avatar, Button, Icon, Row, Col} from 'antd';

export default function Clients(props) {
  const [activeClient, setActiveClient] = useState(null);
    return(
      <>
      {props.clients.map((client)=>{
        const setClientActive = () => { setActiveClient(client.id)}
        return (
          <div key={client.id}>
          <div style={{ background: '#ECECEC', padding: '5px', borderRadius:"25px"}} >
            { client.id === activeClient ?
           ( 
            <Card span={12} offset={6} bordered={false} style={{ borderRadius:"25px"}} onClick={()=>setActiveClient(null)}>
                <Row type="flex" >
                  <Col span={2}>
                    <img alt="123" src= {client.pictures} style={{borderRadius:"25px", height: 200, width: 200}} />
                  </Col>

                  <Col span={10} >
                    <Icon type="star" />
                    <span>Name: {client.name}  </span>
                    <span>Gender: {client.gender}</span>

                    <Button>Send Promotion</Button>
                  
                  </Col>

                  <Col>
                    <Icon type="star" />
                    <span>Name: {client.name}  </span>
                    <span>Gender: {client.gender}</span>
                    <Button>Send Promotion</Button>
                  </Col>
                </Row>

                <Row>
                  Booking Detail

                </Row>
            
            </Card>
           )
            :
           (
            <Card span={12} offset={6} bordered={false} style={{ borderRadius:"25px", backgroundColor:"#2b2727", color:'#bc9355'}} onClick={setClientActive}>
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



      </>
   


    )
}