import { createGlobalStyle } from "styled-components";
import bg from "../assets/bg.jpg";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
 
 *{
   
    margin: 0;
    padding: 0;
    font:14px  'Righteous', cursive;
 -webkit-font-smoothing: antialiased !important;
  }
  body{
    background: RGB(49,163,429)url(${bg}) no-repeat right;
    
  }

    h1{
    font-size: 40pt;
  }
  button {
    box-shadow: 4px 4px grey;
    font-size: 18px;
    display: inline-block;
    background: #ff5688;
    margin: 10px;
    padding: 10px 10px 10px 10px;
    color: black;
    margin-bottom: 5px;
    width: 170px;
    border-radius: 1px;
    border: 1px;
    text-align: center;
    cursor: pointer;
  }
  button:hover {
    font-size: 18px;
    box-shadow: 2px 2px grey;
    display: inline-block;
    background: #ff5679;
    margin: 10px;
    margin-bottom: 5px;
    padding: 10px 10px 10px 10px;
    color: black;
    width: 170px;
    border-radius: 1px;
    border: 1px;
    text-align: center;
    cursor: pointer;
  }
  section{
    border-radius:5px;
  }
`;
