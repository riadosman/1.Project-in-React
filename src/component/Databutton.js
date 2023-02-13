import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const Databutton = ({Delete,view}) => {
  
  return (
    <Row className='justify-content-center my-2 '>
    <Col sm="8" className='d-flex justify-content-between'> 
        <Button onClick={Delete} className='btn-style p-2'>حذف</Button>
        <Button onClick={view} className='btn-style p-2'>اظهار</Button>
      </Col>
 </Row>
  )
}

export default Databutton