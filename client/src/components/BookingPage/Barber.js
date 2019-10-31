import React from 'react';
import { Card, Rate } from 'antd';


export default function Barber({employee}){
  console.log(employee)
  const { Meta } = Card
  return(
    <Card
    hoverable
    style={{width: 300 }}
    cover={<img alt="example" src={employee.picture} />}
  >
    <Meta title={employee.title + ": " + employee.name} description={employee.description} />
    <Rate disabled defaultValue={employee.rating} />

  </Card>
  )
}