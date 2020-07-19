import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import "./index.css";
import myConfig from "../../configs/config";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function formData() {
    const form_data = new FormData();

    form_data.append("username", email);
    form_data.append("password", password);
    form_data.append("grant_type", "password");
    form_data.append("client_id", "YOUR_CLIENT_ID");
    form_data.append("client_secret","YOUR_CLIENT_SECRET");
    
    return form_data;
  }

  function handleSave(e) {
    e.preventDefault();

    const LOGIN_URL = `${myConfig.API_URL}/o/token/`;

    axios({
      baseURL: LOGIN_URL,
      method: "POST",
      data: formData(),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          localStorage.setItem("user-token", res.data.access_token);
          toast("Login realizado com sucesso.");
        }
      })
      .catch((error) => {
        // console.log("ERROR", error);
        toast("Email ou senha inválidos.");
      });
    // setTimeout(() => {}, 3500);
  }

  return (
    <div className="login_content">
      <section className="form">
        <form onSubmit={handleSave}>
          <h1>Faça o seu Login</h1>

          <input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/signup" className="back-link">
            <FiLogIn size={16} color="007bff" />
            Não tenho cadastro
          </Link>
        </form>
        <ToastContainer />
      </section>

    </div>
  );
};

export default Login;
