import React from 'react';
import RandomGeneration from "./components/organisms/RandomGeneration";
import Styled from "styled-components";


const ContainerT = Styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: max-content;
    
    margin: 100px auto;
    padding: 10px 20px;

    color: #fff;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 130px;
    
      background-image: url('./img/img_work_2.jpg');
      width: auto;
      height: 123px;
    
    .run {
        position: absolute;
        width: 35%;
        right: 0;
        top: 0;
        height: 100%;
        border-top-right-radius: 130px;
    }
    
    .m-top {
        margin-top: 10px;
    }
`

function App() {
  return (
    <div className="App">
     <RandomGeneration />
        <ContainerT className='logo'></ContainerT>
    </div>
  );
}

export default App;
