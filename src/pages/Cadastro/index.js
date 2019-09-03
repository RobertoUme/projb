import React from "react";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
export default function Cadastro() {
  return (
    <Container>
      <section>
        <h1>Cadastro</h1>
        <form>
          <input type="text" required placeholder="Seu nome" />
          <input type="email" required placeholder="Seu e-mail" />
          <input type="password" required placeholder="Sua senha" />
          <div>
            <button>
              <p>Criar Conta</p>
            </button>
          </div>
        </form>
        <nav>
          <Link className="link" to="../">
            <img src={login} alt="Login" />
            <p>Voltar a login</p>
          </Link>
        </nav>
      </section>
    </Container>
  );
}
