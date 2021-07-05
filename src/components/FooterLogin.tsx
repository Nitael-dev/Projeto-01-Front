import "../styles/FooterLogin.scss"



export function FooterLogin() {

    return (
        <div>
        <footer className="spacing-footer-login" id="spacing-footer-login">
            <div className="div-select">
                <select className="language">
                    <option id="pt-br">Português (Brasil) </option>
                </select>
            </div>
            <div className="div-refs" id="div-refs">
                <a className="help" target="_blank" rel="noreferrer"  href="https://support.google.com/accounts?hl=pt">Ajuda</a>
                <a className="privacy" target="_blank" rel="noreferrer" href="https://accounts.google.com/TOS?loc=BR&hl=pt&privacy=true">Privacidade</a> 
                <a className="terms"  target="_blank" rel="noreferrer" href="https://accounts.google.com/TOS?loc=BR&hl=pt">Termos</a>
            </div>
        </footer>
        </div>
    )
}