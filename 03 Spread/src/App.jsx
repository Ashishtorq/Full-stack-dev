import { useState } from 'react'
import './App.css'
import { Fragment } from 'react'
import Data from "/web dev (2024)/Web Dev 2024/01 React/01 Puma/Puma/src/Components/Data.json"

function App() {
  const [data, setData]= useState(Data)
  const dataHandler = ()=>{
    setData("")
  }
  return (
    <Fragment>
     
    <h1>{
      Data.map((data)=>{
        return (
          <p>My name is {data.name} and my id is {data.id}</p>
        )
      })
    }</h1>
     <button onClick={dataHandler}>Click Me</button>
    </Fragment>
  )
}

export default App
