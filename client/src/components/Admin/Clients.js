import React, {useState} from "react"
// import axios from "axios"
import {Card, Avatar, Button, Icon} from 'antd';

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
           ( <Card span={12} offset={6} bordered={false} style={{ borderRadius:"25px"}} onClick={()=>setActiveClient(null)}>
              <Icon type="star" />
              <span>Name: {client.name}  </span>
              <span>Gender: {client.gender}</span>

              <Button>Send Promotion</Button>
           
           </Card>)
            :
           (<Card span={12} offset={6} bordered={false} style={{ borderRadius:"25px", backgroundColor:"#2b2727", color:'#bc9355'}} onClick={setClientActive}>
              <Avatar size="large" src={client.pictures} />
              <Icon type="star" />
              <span>Name: {client.name}  </span>
              <span>Gender: {client.gender}</span>

            </Card>)
            }
          </div>
          </div>

        )
      })}



      </>
   


    )
}