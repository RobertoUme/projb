import React from "react";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
export default function Senha() {
  return (
    <Container>
      <section>
        <h1>Recupere a sua senha!</h1>
        <form>
          <p>
            Digite o seu e-mail e em alguns instantes enviaremos uma mensagem
            para a recuperação da senha no se e-mail
          </p>
          <input
            type="email"
            required
            placeholder="Digite o e-mail da sua conta"
          />
          <div>
            <button>
              <p>Enviar</p>
            </button>
          </div>
        </form>

        <nav>
          <Link className="link" to="../">
            <img src={login} alt="Login" />
            <p>Voltar a Login</p>
          </Link>
        </nav>
      </section>
    </Container>
  );
}
