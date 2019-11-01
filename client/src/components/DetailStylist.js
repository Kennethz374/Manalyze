
import React from "react"
import { Card } from 'antd';
import { Layout, Row, Col, Button, Rate} from 'antd';
const {Content} = Layout


export default function DetailStylists (props) {
  console.log(props.employees)
  return (
    <>
    <Content style={{ padding: '0 50px' }} >
      {props.employees.map((employee)=>{
        return (
          <Row>
            <Card style={{ margin: '10px', borderRadius:"15px", padding:"5px" }}>
            <Col span={10} >
            
              <img alt="123"src={employee.picture} width="300" height="300"/>

            </Col>

            <Col span={14} type="flex" justify="center" align="left">
              <h4 >Description:</h4>
              <h6>{employee.description}</h6>
                <br/>
                <br/>
              <h6>Name: {employee.name}</h6>
              <h6>Position: {employee.title}</h6>
              <h6>Expertise: Men/Women's Hair Cut</h6>
              <h6>Years of Experience: 10</h6>
              <Rate disabled defaultValue={employee.rating} />
                <br/>
              <Button>Book Me</Button>
            </Col>
            </Card>
          </Row>
        )
      })}

    </Content>
    </>
  )
  }