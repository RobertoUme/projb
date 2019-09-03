import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Senha from "./pages/Senha";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/senha" component={Senha} />
    </BrowserRouter>
  );
}
