import "./login.css";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    console.log(user);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">IF Social</h3>
                    <span className="loginDesc">
                        Conecte-se com outros estudantes!
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            required
                            placeholder="Email"
                            className="loginInput"
                            type="email"
                            ref={email}
                        />
                        <input
                            required
                            minLength="6"
                            placeholder="Password"
                            className="loginInput"
                            type="password"
                            ref={password}
                        />
                        <button
                            className="loginButton"
                            type="submit"
                            disabled={isFetching}
                        >
                            {isFetching ? (
                                <CircularProgress color="white" size="24px" />
                            ) : (
                                "Entrar"
                            )}
                        </button>
                        <span className="loginForgot">Esqueceu a senha ?</span>
                        <button className="loginRegisterButton">
                            Criar conta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
