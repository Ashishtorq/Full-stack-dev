import { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Main-Card-Content/Content";
import Footer from "./Components/Footer/Footer";
import Data from "./Components/Data.json";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className="container">
      {
        Data.map((ele)=>{
          return <Content name={ele.name} discount={ele.id}/>
        })
      }
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;




{
  /*
  <Content
          name={Data[0].name}
          discount = {Data[0].id}
          img="https://source.unsplash.com/300x400/?shoes"
        ></Content>
        <Content
          name={Data[1].name}
          discount = {Data[1].id}
          img="https://source.unsplash.com/300x400/?mobile"
        ></Content>
        <Content
          name={Data[2].name}
          discount = {Data[2].id}
          img="https://source.unsplash.com/300x400/?spects"
        ></Content>
        <Content
          name={Data[3].name}
          discount = {Data[3].id}
          img="https://source.unsplash.com/300x400/?sunglasses"
        ></Content>
        <Content
          name={Data[4].name}
          discount = {Data[4].id}
          img="https://source.unsplash.com/300x400/?tshirt"
        ></Content>
        <Content
          name={Data[5].name}
          discount = {Data[5].id}
          img="https://source.unsplash.com/300x400/?beach"
        ></Content>
        <Content
          name={Data[6].name}
          discount = {Data[6].id}
          img="https://source.unsplash.com/300x400/?bat"
        ></Content>
        <Content
          name={Data[7].name}
          discount = {Data[7].id}
          img="https://source.unsplash.com/300x400/?laptop"
        ></Content>


}