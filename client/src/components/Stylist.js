import React, {useState,useEffect}from "react"
import axios from 'axios';
import {Layout, Col, Row, Card} from "antd" 
import './Stylist.css'
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

      <div class="background_img">
        <div class="centered">I want you to look awesome!</div>
      </div>

    <div className="hairstylists"style={{  padding: 24, minHeight: 280 }}>
      <h2 className='hairstylists_text' style={{textAlign: "center", color:'#bc9355'}}>
         K&S Hairstylists
      </h2>
      <h2 className='service_polular' style={{textAlign: "center", color:'#bc9355'}}>
        SERVICE POPULAR
      </h2>
    <div className='employees'>
      <Row  gutter={16}>
        {employees.map(function(employee) {
          return (
            <Col span={8}>
              <Card className='employee'
                onClick={()=>alert ("123")}
                
                hoverable
                style={{ width: 280,padding:10}}
                cover={<img alt="employee_picture" src={employee.picture} style={{height:350}}/>}
              >
                <Meta title={employee.name} description="Lead Hairstylist" />
              </Card>
            </Col>
        )})
        }

      </Row> 
    </div>
</div>

</Content>


  )
}


