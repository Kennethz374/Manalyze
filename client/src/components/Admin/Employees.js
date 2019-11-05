import React from "react"
// import axios from "axios"
import {Card, Avatar, Col,Pagination} from 'antd';

export default function Employees(props) {
  const employees = props.employees

  return(
    <>
    { employees.map((employee)=>{
      return (
       
        <div style={{ background: '#ECECEC', padding: '10px' }} >
        <Card span={12} offset={6} title="" bordered={false}>
          <Col>
            <Avatar size="large"src={employee.picture} />
          </Col>
        </Card>
      </div>
      )
    })

    }




    </>
  )
}