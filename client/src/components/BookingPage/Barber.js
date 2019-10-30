import React from 'react';
import { Card } from 'antd';



// import { Card } from 'react-bootstrap';

// export default function Barber(){
//   return(
//     <Card style={{ width: '18rem' }}>
//       <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg"/>
//       <Card.Body>
//         <Card.Title>Sining</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the bulk of
//           the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   )
// }

export default function Barber({employee}){
  console.log(employee)
  const { Meta } = Card
  return(
    <Card
    hoverable
    style={{width: 240}}
    cover={<img alt="example" src={employee.picture} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}