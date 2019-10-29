import React, {useState,useEffect}from "react"
import axios from 'axios';
import {Layout, Col, Row, Card} from "antd" 
const {Content} = Layout
const {Meta} = Card



export default function Stylist () {
  const[employees,setEmployees]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/api/employees') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      setEmployees(response.data)

    }) 
  }, []) 

  

  return (
    <Content style={{ padding: '0 50px' }}>

    <h2 style={{textAlign: "center"}}>Hairstylists</h2>

    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Row gutter={16}>
        {employees.map(function(employee) {
          return (
            <Col span={8}>
              <Card
                onClick={()=>alert ("123")}
                hoverable
                style={{ width: 280}}
                cover={<img alt="employee_picture" src={employee.picture} style={{height:500}}/>}
              >
                <Meta title={employee.name} description="Lead Hairstylist" />
              </Card>
            </Col>
    
        )})
        }

   </Row> 
</div>

</Content>


  )
}


