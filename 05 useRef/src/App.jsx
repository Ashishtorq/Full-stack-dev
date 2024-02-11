import { useRef } from 'react'
import './App.css'
import { Fragment } from 'react'

function App() {
 

  const nameRef = useRef();
  console.log(nameRef.current.innerHTML = "Hello Ashish Singh");
  console.log(nameRef.current.style.color = "red");
  return (
    <Fragment>
     <h1 ref={nameRef}>Hello Ashish</h1>
    </Fragment>
  )
}

export default App
