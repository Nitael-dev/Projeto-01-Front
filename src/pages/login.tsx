import "../styles/login.scss"
import GoogleLogo from "../assets/images/logo.svg"







export function LoginRoom() {

    console.log(__dirname)

    return (
        <div id="login-page">
            <section>
                <header>
                    <div>
                        <img src={GoogleLogo} alt="GoogleLogo" />
                    </div>
                    <h1>Fazer Login</h1>
                    <h2>Use sua Conta do Google</h2>
                </header>
                <div>
                    <input type="email" name="" id="" />
                    <button>Esqueceu seu e-mail?</button>  
                    <p>Não está no seu computador? Use o modo visitante para fazer login com privacidade. <a href="">Saiba Mais</a> </p>
                    <span>Criar conta</span>
                    <span>Próxima</span>
                    </div>
            </section>
        </div>
    )
}