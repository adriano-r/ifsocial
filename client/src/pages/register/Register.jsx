import axios from "axios";
import React, { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Senhas diferentes");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">IF Social</h3>
                    <span className="loginDesc">
                        Conecte-os com outros estudantes!
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Username"
                            required
                            ref={username}
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            ref={email}
                            className="loginInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            ref={password}
                            className="loginInput"
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Password again"
                            required
                            ref={passwordAgain}
                            className="loginInput"
                            type="password"
                            minLength="6"
                        />
                        <button className="loginButton" type="submit">
                            Registrar
                        </button>
                        <button className="loginRegisterButton" type="submit">
                            Entra na sua conta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
