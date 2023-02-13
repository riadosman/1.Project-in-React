import React from 'react'
import { Row, Col } from 'react-bootstrap';
const Databody = ({person}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm="8" className=''> 
         <div className='recatangle p-2 '>
         {person.length ? (person.map((i) =>{
           return(
              <div key={i.id} className='d-flex border-bottom mx-3 my-2'>
               <img className='img-avatar' src='9.jpg' alt='djskf'/>
               <div className='px-3'>
                 <p className='d-inline fs-5'>{i.name}</p>
                 <p className='fs-6'>{i.date}</p>
               </div>
              </div>
           )
         })) : <h1 className='p-5 text-center'>لا يوجد مواعيد</h1>}
         
           </div>
      </Col>
 </Row>
  )
}

export default Databody