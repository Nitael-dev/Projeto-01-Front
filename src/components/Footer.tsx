import "../styles/Footer.scss"



export function Footer() {

    return (
        <div id="div-footer">
            <footer className="spacing-footer" id="spacing-footer">
                <div className="div-select" id="div-select">
                    <select className="language">
                        <option id="pt-br">Português (Brasil) </option>
                    </select>
                </div>
                <div id="spacing-div"></div>
                <div className="div-refs" id="div-refs">
                    <a className="help" target="_blank" rel="noreferrer"  href="https://support.google.com/accounts?hl=pt">Ajuda</a>
                    <a className="privacy" target="_blank" rel="noreferrer" href="https://accounts.google.com/TOS?loc=BR&hl=pt&privacy=true">Privacidade</a> 
                    <a className="terms"  target="_blank" rel="noreferrer" href="https://accounts.google.com/TOS?loc=BR&hl=pt">Termos</a>
                </div>
            </footer>
        </div>
    )
}