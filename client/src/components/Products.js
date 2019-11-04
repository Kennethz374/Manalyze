
import React from "react"

import { Layout} from 'antd';
import { Carousel } from 'antd';
import './Products.css'
import { Col, Row, Card, Rate} from "antd" 
import { Divider } from 'antd'



const { Meta } = Card;
const {Content} = Layout

export default function Products (props){
  // console.log(props)
  return(
    <Content className='products'style={{ padding: '0 50px' }} >
      {props.products.map((product)=>{
        return (
          <Row key={product.id}>
            <Card className="products-card" style={{ margin: '10px', borderRadius:"15px", padding:"5px"}}>
              <Col span={10} >            
                <img alt="123"src={product.picture} width="300" height="300"/>
              </Col>
              <Col span={14} type="flex" justify="center" align="left">
                <h4>Name: {product.name}</h4>           
                <Divider />
                <h5 >Description:</h5>
                <h6>{product.description}</h6>             
                <Divider />
                <h6 >Price: ${product.price}</h6>             
                <br/>             
              </Col>
            </Card>
          </Row>
        )
      })}
    </Content>
  )
}