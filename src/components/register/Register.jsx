import "./register.css";

export default function Register() {
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
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input
                            placeholder="Password again"
                            className="loginInput"
                        />
                        <button className="loginButton">Registra</button>
                        <button className="loginRegisterButton">
                            Entra na sua conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
