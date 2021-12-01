import "./login.css";

export default function Login() {
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
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Entrar</button>
                        <span className="loginForgot">Esqueceu a senha ?</span>
                        <button className="loginRegisterButton">
                            Criar conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
