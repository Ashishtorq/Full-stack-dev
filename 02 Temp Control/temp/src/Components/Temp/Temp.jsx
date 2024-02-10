import React, { Fragment, useState } from 'react'
import "./Temp.css"
const Temp = () => {
    const [temp, setTemp] = useState(5)
  return (
    <Fragment>
      <div id="containter">
        <div id="screen">
       <h6>{temp}</h6>
        </div>      
      </div>
    </Fragment>
  )
}

export default Temp
