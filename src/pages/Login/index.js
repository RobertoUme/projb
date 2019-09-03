import React from "react";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
import plus from "../../assets/plus.svg";
export default function Login() {
  return (
    <Container>
      <section>
        <h1>Login</h1>
        <form>
          <input type="email" required placeholder="Seu e-mail" />
          <input type="password" required placeholder="Sua senha" />
          <Link className="link" to="../Senha">
            <p>Esqueçeu a senha?</p>
          </Link>
          <div>
            <button>
              <p>Entrar</p>
            </button>
          </div>
        </form>

        <nav>
          <Link className="link" to="../Cadastro">
            <img src={plus} alt="Plus" />
            <p>Cadastre-se</p>
          </Link>
        </nav>
      </section>
    </Container>
  );
}
