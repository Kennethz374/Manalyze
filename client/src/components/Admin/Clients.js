import React, {useEffect,useState} from "react"
import axios from "axios"
import {Card, Avatar, Col} from 'antd';

export default function Clients(props) {
  console.log(props.clients)
    return(
      <>
      {props.clients.map((client)=>{
        return (
          <div style={{ background: '#ECECEC', padding: '10px'}} >
          <Card span={12} offset={6} bordered={false}>
            <Avatar size="large" src={client.pictures} />
          </Card>
        </div>

        )
      })}



      </>
   


    )
}