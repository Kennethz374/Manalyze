import React from 'react';
import { Checkbox, Row, Col } from 'antd';


export default function SelectServices(){
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  return(
    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row className='row'>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
  )
}


