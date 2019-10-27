import React from "react"
import {Layout, Col, Row, Card} from "antd" 
const {Content} = Layout
const {Meta} = Card

export default function Stylist () {
  return (
    <Content style={{ padding: '0 50px' }}>

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


