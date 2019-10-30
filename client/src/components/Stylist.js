import React, {useState,useEffect}from "react"
import axios from 'axios';
import {Layout, Col, Row, Card} from "antd" 
import './Stylist.css'
import { NavLink } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const {Content} = Layout
const {Meta} = Card




export default function Stylist ({employees}) {


  

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
              <>
              <Link to={`/booking/${employee.id}`} >
              <Col span={8}>
                <Card className='employee'
                  hoverable
                  style={{ width: 280,padding:10}}
                  cover={<img alt="employee_picture" src={employee.picture} style={{height:350}}/>}
                >
                  <Meta title={employee.name} description="Lead Hairstylist" />
                </Card>
              </Col>
              </Link>
              </>
            )})
          } 
        </Row> 
      </div>
    </div>
  </Content>


  )
}


