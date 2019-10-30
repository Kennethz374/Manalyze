import React from 'react';
import { Card } from 'antd';


export default function Barber({employee}){
  console.log(employee)
  const { Meta } = Card
  return(
    <Card
    hoverable
    style={{width: 300 }}
    cover={<img alt="example" src={employee.picture} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}