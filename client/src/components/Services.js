import React from "react"
import { Card } from 'antd';
import { Layout} from 'antd';
const {Content} = Layout

const gridStyle = {
  width: '40%',
  textAlign: 'left',
};


export default function Services () {
  return (
    <>
    <Content style={{ padding: '0 50px' }}>

      <Card title="Feature Services">

        <Card.Grid style={gridStyle}>Services 1</Card.Grid>
        <Card.Grid style={gridStyle}>Services 2</Card.Grid>
        <Card.Grid style={gridStyle}>Services 3</Card.Grid>
        <Card.Grid style={gridStyle}>Services 4</Card.Grid>
      </Card>

    </Content>
    </>
  )
}