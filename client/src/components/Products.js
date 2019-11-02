
import React from "react"
import { Card } from 'antd';
import { Layout} from 'antd';
import { Carousel } from 'antd';
import './Products.css'


const { Meta } = Card;
const {Content} = Layout



// const gridStyle = {
//   width: '40%',
//   textAlign: 'left',
// };


// export default function Products () {
//   return (
//     <>
//     <Content style={{ padding: '0 50px' }}>

//       <Card title="Feature Products">

//         <Card.Grid style={gridStyle}>Product 1</Card.Grid>
//         <Card.Grid style={gridStyle}>Product 2</Card.Grid>
//         <Card.Grid style={gridStyle}>Product 3</Card.Grid>
//         <Card.Grid style={gridStyle}>Product 4</Card.Grid>
//       </Card>

//     </Content>
//     </>
//   )
//   }
export default function Products (){
  return(
    <Content style={{ padding: '0 10px' }}>
    <Carousel autoplay>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
  </Content>
  )
}