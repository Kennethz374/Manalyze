import React from "react"
import {Layout, Col, Row, Card} from "antd" 
import './Stylist.css'
const {Content} = Layout
const {Meta} = Card

export default function Stylist () {
  return (
    <Content style={{ padding: '0 50px' }}>
      {/* <div className="barber_img">
 <img alt="hello" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    style={{ height:'60%',width: '40%', padding: 12, minHeight: 300 }}
    />
      </div> */}

<div class="mydiv"></div>
      
      
   

    <h2 style={{textAlign: "center"}}>Hairstylists</h2>

    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Row gutter={16}>
    
      <Col span={8}>
        <Card
          onClick={()=>alert ("123")}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Johnny J" description="Lead Hairstylist" />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Johnny J" description="Lead Hairstylist" />
        </Card>
      </Col>

   </Row> 
</div>

</Content>


  )
}


