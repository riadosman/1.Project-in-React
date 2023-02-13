import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Datetitle = ({person}) => {
  return (
     <Row className='justify-content-center my-2'>
         <Col sm="8" className=''> 
              <h2>لديك {person.length} مواعيد</h2>
           </Col>
      </Row>
  )
}

export default Datetitle