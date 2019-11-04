
import React from "react"

import { Layout} from 'antd';
import { Carousel } from 'antd';
import './Products.css'
import { Col, Row, Card, Rate} from "antd" 
import { Divider } from 'antd'



const { Meta } = Card;
const {Content} = Layout

const servicesList=[
  {
    name:'Men\'s Haircut',
    description:'We are experts at haircutting. Our team has received many accolades for cut and design and they continually educate themselves locally and internationally. Whether you are looking for a classic look or the latest trends, our artists will be able to confidently customize a look for you.',
    price:30,
    picture:"https://curriedayspa.com/wp-content/uploads/2018/10/crew-cut.jpg"
  },
  {
    name:'Women\'s Haircut',
    description:'Short and long, classic and cutting-edge, fine or thick, straight or textured…. Based on your lifestyle, how you like to wear your hair and how often you like to style and maintain, we have a stylist for you.',
    price:40,
    picture:"http://www.ashrafscissorshands.in/images/women-haircut-mumbai.jpg"
  },
  {
    name:'Shaving',
    description:'A very rewarding experience which you should take advantage of today.',
    price:15,
    picture:"https://images.unsplash.com/photo-1524230616393-d6229fcd2eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name:'Perm Hair',
    description:'Whether you are looking for a complete makeover, highlights, balayage, or a shiny glaze; we can deliver. Our artists have the experience to give you what you desire and the colour of your dreams. If you don’t know what your dream colour is, we’re here to offer our advice. The sky’s the limit!',
    price:100,
    picture:"https://images.britcdn.com/wp-content/uploads/2016/09/Kelly_Perm_099.jpg"
  },
  {
    name:'Colours',
    description:'Getting a colour can be scary when you don’t know what to expect. You can trust that you are in good hands when you come into our salon, because we specialize in colour, and really do have some of the best colourists in the city!',
    price:60,
    picture:"https://www.sheknows.com/wp-content/uploads/2018/08/ziqtuvnhbbgra705gmws.jpeg?w=695&h=391&crop=1"
  },
  
]
// const gridStyle = {
//   width: '40%',
//   textAlign: 'left',
// };


export default function Services (servicesLists) {
  return (
    <Content className='products'style={{ padding: '0 50px' }} >
      {servicesList.map((service)=>{
        return (
          <Row key={service.id}>
            <Card className="products-card" style={{ margin: '10px', borderRadius:"15px", padding:"5px"}}>
              <Col span={10} >            
                <img alt="123"src={service.picture} width="300" height="300" />
              </Col>
              <Col span={14} type="flex" justify="center" align="left">
                <h4> {service.name}</h4>           
                <Divider />
                <h5 >Description:</h5>
                <h6>{service.description}</h6>             
                <Divider />
                <h6 >Price: ${service.price}</h6>             
                <br/>             
              </Col>
            </Card>
          </Row>
        )
      })}
    </Content>
  )












    // <>
    // <Content style={{ padding: '0 50px' }}>

    //   <Card title="Feature Services">

    //     <Card.Grid style={gridStyle}>Services 1</Card.Grid>
    //     <Card.Grid style={gridStyle}>Services 2</Card.Grid>
    //     <Card.Grid style={gridStyle}>Services 3</Card.Grid>
    //     <Card.Grid style={gridStyle}>Services 4</Card.Grid>
    //   </Card>

    // </Content>
    // </>
  
}