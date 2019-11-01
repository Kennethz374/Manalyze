import React from "react"
// import axios from "axios"
import {Card, Avatar, Button, Icon} from 'antd';

export default function Clients(props) {
  console.log(props.clients)
    return(
      <>
      {props.clients.map((client)=>{
        return (
          <div key={client.id}>
          <div style={{ background: '#ECECEC', padding: '5px', borderRadius:"25px"}} >
            <Card span={12} offset={6} bordered={false} style={{ borderRadius:"25px"}}>
              <Avatar size="large" src={client.pictures} />
              <Icon type="star" />
              <span>Name: {client.name}  </span>
              <span>Gender: {client.gender}</span>

              <Button>Send Promotion</Button>
            </Card>
          </div>
          </div>

        )
      })}



      </>
   


    )
}