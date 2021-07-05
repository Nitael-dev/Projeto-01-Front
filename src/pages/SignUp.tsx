import logoImg from "../assets/images/logo.svg"
import "../styles/Input.scss"
import SignUpImage from "../assets/images/account.svg"
import { Footer } from "../components/Footer"
import { GoLogin } from "../components/GoLogin"
import "../styles/SignUpPage.scss"
import { useHistory } from "react-router-dom"
import { FormEvent, useState } from "react"
import axios from "axios"



export function SignUp() {

    const history = useHistory();
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    //name states
    const [firstnamealert ,setfirstnamealert] = useState(false);

    const [inputfirstnamealert ,setinputfirstnamealert] = useState(false);

    const [lastnamealert ,setlastnamealert] = useState(false);

    const [inputlastnamealert ,setinputlastnamealert] = useState(false);

    const [allnamealert ,setallnamealert] = useState(false);
    // mail states
    const [mailinputalert ,setmailinputalert] = useState(false);

    const [basemailalert ,setbasemailalert] = useState(false);
    
    const [mailalert ,setmailalert] = useState(false);

    const [mailalertgoogle ,setmailalertgoogle] = useState(false);

    const [mailalertsymbols ,setmailalertsymbols] = useState(false);

    const [mailalertlength ,setmailalertlength] = useState(false);
    // password state
    const [emptypasswordalert ,setemptypasswordalert] = useState(false);

    const [lengthpasswordalert ,setlengthpasswordalert] = useState(false);
    // confirmpassword state
    const [emptyconfirmpasswordalert, setemptyconfirmpasswordalert] = useState(false);

    const [passwordinputalert ,setpasswordinputalert] = useState(false);

    const [confirmpasswordalert ,setconfirmpasswordalert] = useState(false);

    const [differentconfirmpasswordalert ,setdifferentconfirmpasswordalert] = useState(false);

    const [texttype , settexttype] = useState(false);
    const toggletexttype = () => {
        settexttype(old => !old)
    }

    async function UserValidation(event: FormEvent) {
        event.preventDefault();
        console.log()

        axios.post('https://gmailauthapi.herokuapp.com/SignUp', {
            firstname: firstname,
            lastname: lastname,
            email: mail,
            password: password,
            confirmpassword: confirmpassword
        }).then(function(res){
            console.log(res)
            history.push('/mail')
        }).catch(function(error){
            if (error.response.data.message === 'Digite o nome') {
                setfirstnamealert(true);
                setinputfirstnamealert(true);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(false);
                setbasemailalert(false);
                setmailalert(false);
                setmailalertgoogle(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Digite o sobrenome') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(true);
                setinputlastnamealert(true);
                setallnamealert(false);
                setmailinputalert(false);
                setbasemailalert(false);
                setmailalert(false);
                setmailalertgoogle(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Digite o nome e o sobrenome') {
                setfirstnamealert(false);
                setinputfirstnamealert(true);
                setlastnamealert(false);
                setinputlastnamealert(true);
                setallnamealert(true);
                setmailinputalert(false);
                setbasemailalert(false);
                setmailalert(false);
                setmailalertgoogle(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Digite um e-mail') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(true);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(false);
                setbasemailalert(true);
                setmailalert(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Somente letras (a - z), números (0 - 9) e pontos (.) são permitidos.') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(true);
                setmailalertsymbols(true);
                setmailalertlength(false);
                setmailalertgoogle(false);
                setbasemailalert(false);
                setmailalert(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Seu nome de usuário deve ter entre 6 e 30 caracteres.') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(true);
                setmailalertsymbols(false);
                setmailalertlength(true);
                setmailalertgoogle(false);
                setbasemailalert(false);
                setmailalert(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Este nome de usuário não é permitido. Tente novamente.' ) {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(true);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(true);
                setbasemailalert(false);
                setmailalert(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Este nome de usuário já está em uso. Tente outro.') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(true);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(false);
                setbasemailalert(false);
                setmailalert(true);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if(error.response.data.message === 'Digite uma senha') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(false);
                setbasemailalert(false);
                setmailalert(false);
                setemptypasswordalert(true);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(true);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Sua senha deve ter entre 6 e 18 caracteres') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(false);
                setbasemailalert(false);
                setmailalert(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(true);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(true);
                setconfirmpasswordalert(false);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'Confirme sua senha') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(false);
                setbasemailalert(false);
                setmailalert(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(true);
                setpasswordinputalert(false);
                setconfirmpasswordalert(true);
                setdifferentconfirmpasswordalert(false);
            }
            if (error.response.data.message === 'As senhas não são iguais. Tente novamente.') {
                setfirstnamealert(false);
                setinputfirstnamealert(false);
                setlastnamealert(false);
                setinputlastnamealert(false);
                setallnamealert(false);
                setmailinputalert(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(false);
                setbasemailalert(false);
                setmailalert(false);
                setemptypasswordalert(false);
                setlengthpasswordalert(false);
                setemptyconfirmpasswordalert(false);
                setpasswordinputalert(false);
                setconfirmpasswordalert(true);
                setdifferentconfirmpasswordalert(true);
            }
        });
    }
    
    async function MailValidation(event: FormEvent) {
        event.preventDefault();
        axios.post('https://gmailauthapi.herokuapp.com/MailValidation', {
            email: mail
        }).then(function(res){
            setmailinputalert(false);
            setbasemailalert(false);
            setmailalert(false);
            setmailalertgoogle(false);
            setmailalertsymbols(false);
            setmailalertlength(false);
        }).catch(function(error){
            if (error.response.data.message === 'Somente letras (a - z), números (0 - 9) e pontos (.) são permitidos.') {
                setmailalertsymbols(true);
                setmailinputalert(true);
                setbasemailalert(false);
                setmailalert(false);
                setmailalertgoogle(false);
                setmailalertlength(false);
            }
            if (error.response.data.message === 'Seu nome de usuário deve ter entre 6 e 30 caracteres.') {
            setmailalertlength(true);
            setmailinputalert(true);
            setbasemailalert(false);
            setmailalert(false);
            setmailalertgoogle(false);
            setmailalertsymbols(false);
            }
            if (error.response.data.message === 'Este nome de usuário não é permitido. Tente novamente.' ) {
                setmailalertgoogle(true);
                setmailinputalert(true);
                setbasemailalert(false);
                setmailalert(false);
                setmailalertsymbols(false);
                setmailalertlength(false);
            }
            if (error.response.data.message === 'Este nome de usuário já está em uso. Tente outro.') {
                setmailinputalert(true);
                setbasemailalert(false);
                setmailalert(true);
                setmailalertsymbols(false);
                setmailalertlength(false);
                setmailalertgoogle(false);
            }
        });
    }

    return (
        <div className="signup-page">
            <div className="div-container" id="div-container">
                <section id="container" className="container">
                    <header className="title-header">
                        <img className="logo" src={logoImg} alt="GoogleLogo" />
                        <h1 className="title">Criar sua Conta do Google</h1>
                    </header>
                    <form noValidate onSubmit={UserValidation} className="form-container" id="form-container">
                        <div className="div-name" id="div-name">
                            <div className="container-input-name" id="container-input-name">
                                <input onChange={event => setfirstname(event.target.value)} value={firstname} title="" required className={firstnamealert? "first-name-input-alert":"first-name-input"} id={inputfirstnamealert? "first-name-input-alert":"first-name-input"} type="text"/>
                                <label className={firstnamealert? "first-name-label-alert":"first-name-label"} id={inputfirstnamealert? "first-name-label-alert":"first-name-label"} htmlFor="firstname">Nome</label>
                                <div className={firstnamealert? "div-first-name-alert":"div-first-name-alert-hidden"} id={firstnamealert? "div-first-name-alert":"div-first-name-alert-hidden"}>
                                    <div className="div-exclamation-icon" id="div-exclamation-icon">
                                        <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                    </div>
                                </div>
                                <div className={lastnamealert? "div-last-name-alert":"div-last-name-alert-hidden"} id={lastnamealert? "div-last-name-alert":"div-last-name-alert-hidden"}>
                                    <div className="div-exclamation-icon" id="div-exclamation-icon">
                                        <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                    </div>
                                </div>
                                <div className={allnamealert? "div-all-name-alert":"div-all-name-alert-hidden"} id={allnamealert? "div-all-name-alert":"div-all-name-alert-hidden"}>
                                    <div className="div-exclamation-icon" id="div-exclamation-icon">
                                        <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="container-input-name" id="container-input-name">
                                <input onChange={event => setlastname(event.target.value)} value={lastname} title="" required className={lastnamealert? "last-name-input-alert":"last-name-input"} id={inputlastnamealert? "last-name-input-alert":"last-name-input"} type="text"/>
                                <label className={lastnamealert? "last-name-label-alert":"last-name-label"} id={inputlastnamealert? "last-name-label-alert":"last-name-label"} htmlFor="lastname">Sobrenome</label>
                            </div>
                        </div>
                        <div className="div-image" id="div-image">
                            <img className="SignUpImage" src={SignUpImage} alt="SignUpImage" />
                            <figcaption className="fig-SignUpImage" id="fig-SignUpImage">Uma única conta. Todo o Google trabalhando para você.</figcaption>
                        </div>
                        <div className="div-mail-input" id="div-mail-input">
                            <div className="container-input-mail" id="container-input-mail">
                                <input onBlur={MailValidation} onChange={event => setmail(event.target.value)} value={mail} title="" required className={mailinputalert? "mail-input-alert":"mail-input"} id={mailinputalert? "mail-input-alert":"mail-input"} type="text"/>
                                <label className={mailinputalert? "label-mail-input-alert":"label-mail-input"} id={mailinputalert? "label-mail-input-alert":"label-mail-input"} htmlFor="mail">Nome de usuário</label>
                                <div className={mailinputalert? "div-gmail-add-alert":"div-gmail-add"} id={mailinputalert? "div-gmail-add-alert":"div-gmail-add"}>
                                    <span className={mailinputalert? "gmail-add-alert":"gmail-add"} id={mailinputalert? "gmail-add-alert":"gmail-add"}>@gmail.com</span>
                                </div>
                            </div>
                            <div className={mailalertsymbols? "div-label-mail-symbols-alert":"div-label-mail"} id={mailalertsymbols? "div-label-mail-symbols-alert":"div-label-mail"}>
                                <div className={mailalertsymbols? "div-exclamation-icon":"div-exclamation-icon-hidden"} id={mailalertsymbols? "div-exclamation-icon":"div-exclamation-icon-hidden"}>
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <div className={mailalertlength? "div-label-mail-length-alert":"div-label-mail"} id={mailalertlength? "div-label-mail-length-alert":"div-label-mail"}>
                                <div className={mailalertlength? "div-exclamation-icon":"div-exclamation-icon-hidden"} id={mailalertlength? "div-exclamation-icon":"div-exclamation-icon-hidden"}>
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <div className={basemailalert? "div-label-mail-base-alert":"div-label-mail-base"} id={mailinputalert? "div-label-mail-base-disabled":"div-label-mail-base"}>
                                <div className={basemailalert? "div-exclamation-icon":"div-exclamation-base-icon-hidden"} id="div-exclamation-icon">
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <div className={mailalert? "div-label-mail-alert":"div-label-mail"} id={mailalert? "div-label-mail-alert":"div-label-mail"}>
                                <div className={mailalert? "div-exclamation-icon":"div-exclamation-icon-hidden"} id={mailalert? "div-exclamation-icon":"div-exclamation-icon-hidden"}>
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <div className={mailalertgoogle? "div-label-mail-google-alert":"div-label-mail"} id={mailalertgoogle? "div-label-mail-google-alert":"div-label-mail"}>
                                <div className={mailalertgoogle? "div-exclamation-icon":"div-exclamation-icon-hidden"} id={mailalertgoogle? "div-exclamation-icon":"div-exclamation-icon-hidden"}>
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <span className="mail-option" id="mail-option">Usar meu endereço de e-mail atual em vez disso</span>
                        </div>
                        <div className="div-password" id="div-password">
                            <div className="container-input-name" id="container-input-name">
                                <input onChange={event => setpassword(event.target.value)} value={password} title="" required className={passwordinputalert? "password-input-alert":"password-input"} id={passwordinputalert? "password-input-alert":"password-input"} type={texttype? "text":"password"}/>
                                <label className={passwordinputalert? "label-password-input-alert":"label-password-input"} id={passwordinputalert? "label-password-input-alert":"label-password-input"} htmlFor="password">Senha</label>
                            </div> 
                            <div className="container-input-name" id="container-input-name">
                                <input onChange={event => setconfirmpassword(event.target.value)} value={confirmpassword} title="" required className={confirmpasswordalert? "confirm-password-input-alert":"confirm-password-input"} id={confirmpasswordalert? "confirm-password-input-alert":"confirm-password-input"} type={texttype? "text":"password"}/>
                                <label className={confirmpasswordalert? "confirm-password-label-alert":"confirm-password-label"} id={confirmpasswordalert? "confirm-password-label-alert":"confirm-password-label"} htmlFor="confirmpassword">Confirmar</label>
                            </div>
                        </div>
                        <div className="div-add-password-label-alerts" id="div-add-label-alerts">
                            <div className={passwordinputalert? "div-label-password-base-alert":"div-label-password-base"} id={confirmpasswordalert? "div-label-password-base-disabled":"div-label-password-base"}>
                            </div>
                            <div className={emptypasswordalert? "div-label-password-empty-alert":"div-label-password-empty"} id={emptypasswordalert? "div-label-password-empty-enabled":"div-label-password-empty-disabled"}>
                                <div className={emptypasswordalert? "div-exclamation-icon":"div-exclamation-empty-icon-hidden"} id="div-exclamation-icon">
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <div className={lengthpasswordalert? "div-label-password-length-alert":"div-label-password-length"} id="div-label-password-length-disabled">
                                <div className={lengthpasswordalert? "div-exclamation-icon":"div-exclamation-empty-icon-hidden"} id="div-exclamation-icon">
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <div className={emptyconfirmpasswordalert? "div-label-confirm-password-empty-alert":"div-label-confirm-password-empty"} id={emptyconfirmpasswordalert? "div-label-confirm-password-empty-enabled":"div-label-confirm-password-empty-disabled"}>
                                <div className={emptyconfirmpasswordalert? "div-exclamation-icon":"div-exclamation-empty-icon-hidden"} id="div-exclamation-icon">
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                            <div className={differentconfirmpasswordalert? "div-label-confirm-password-different-alert":"div-label-confirm-password-different"} id={differentconfirmpasswordalert? "div-label-confirm-password-different-enabled":"div-label-confirm-password-different-disabled"}>
                                <div className={differentconfirmpasswordalert? "div-exclamation-icon":"div-exclamation-empty-icon-hidden"} id="div-exclamation-icon">
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div id="div-show-password" className="div-show-password">
                            <input onClick={toggletexttype} className="show-password" id="show-password" type='checkbox' />
                            <div className="div-checkbox"></div>
                            <label id="show-password-label" className="label-show-password" htmlFor="show-password">Mostrar senha</label>
                        </div>
                        <div className="div-next-login" id="div-next-login">
                            <GoLogin></GoLogin>
                            <div id="spacing-next"></div>
                            <div id="next-signup-page">
                                <button className="next-signup-page" >Próxima</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}