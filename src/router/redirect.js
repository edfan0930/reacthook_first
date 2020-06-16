import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'

function To(props) {
   const [to ,setTo] = useState("/");
   setTo(props.path)
   
   return <Redirect to ={to} />
}

export default To