import Date1 from './component/Date'
import React, { useState } from 'react'
import {Button, Container} from 'react-bootstrap'
import { Row,Col } from 'react-bootstrap'
import person from './component/Date';
import Datetitle from './component/datetitle';
import Databody from './component/databody'; 
import Databutton from './component/Databutton'
function App() {
   const [date,setdate] = useState(person)
    const Delete=()=>{
        setdate([])
    }
    const view=()=>{
      setdate(person)
    }
  return (  
   
    <div className='font color-body'>
       <Container className='py-5'>
           <Datetitle person={date}/>
             <Databody person={date}/>
             <Databutton Delete={Delete} view={view}/>
          </Container> 
     </div> 
    
  );
}

export default App;
