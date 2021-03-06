import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  section {
    height: 500px;
    width: 401px;
    margin-top: 50px;
    margin: 100px auto 50px auto;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    align-content: center;
    align-items: center;
  }
  h1 {
    padding-top: 30px;
    font-size: 28pt;
  }
  form {
    color: black;
    display: inline-block;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input[type="email"],
  input[type="password"] {
    border-style: solid;
    border-color: gray;
    border-width: 0 0 2px 0;
    padding-top: 25px;
    width: 300px;
    background: none;
    font-size: 16pt;
  }
  div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div p {
    color: #fff;
    font-size: 14pt;
  }
  a {
    text-decoration: none;
  }
  nav {
    width: 100%;
    color: #fff;
    display: flex;
    max-width: 401px;
  }

  nav .link {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ff5488;
  }

  nav .link img {
    display: block;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      padding-top: 10px;
      font-size: 26pt;
    }
    input[type="email"] {
      padding-top: 20px;
      width: 200px;
      background: none;
      font-size: 12pt;
    }
    p {
      font-size: 10pt;
    }
    section {
      height: 400px;
      width: 301px;
      margin: 20px auto;
      background: white;
      text-align: center;
      align-self: center;
      padding-bottom: 50px;
      background: rgba(255, 255, 255, 0.8);
    }
    nav {
      width: 100%;
      max-width: 301px;
    }
  }
`;
