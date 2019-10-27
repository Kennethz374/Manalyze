import React from "react"
import { Card } from 'antd';
import { Layout, Row} from 'antd';
const {Content} = Layout

const gridStyle = {
  width: '80%',
  textAlign: 'left',
};


export default function About () {
  return (
    <>
    <Content style={{ padding: '0 50px' }}>

      <Card title="Feature Hairstylists">

        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>

    </Content>
    </>
  )
  }