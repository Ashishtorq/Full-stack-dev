import { Fragment } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Main-Card-Content/Content'
import Footer from './Components/Footer/Footer'
function App() {
  
  return (
    <Fragment>
      <Header></Header>
      <div className='container'>
        <Content></Content>
        <Content></Content>
        <Content></Content>
        <Content></Content>
        <Content></Content>
        <Content></Content>
        <Content></Content>
        <Content></Content>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App
