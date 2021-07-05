import { useState } from "react"
import "../styles/CardMail.scss"

interface SideMenu {
    id?: number;
    content: String;
    icon?: string;
    iconfocus?: string;
    class?: string;
    idclass?: string;
    title?: string;
    total?: number;
    state?: any;
    funct?: () => void;
    focusfunct?: () => void;
}
interface account {
    content: String;
    icon?: string;
    class?: string;
    id?: number;
    title?: string;
    total?: string;
    cardstate?: boolean;
    tofilestate?: boolean | any;
    deletestate?: boolean;
    markasreadstate?: boolean | any;
    tofilefunct?: () => void;
    deletefunct?: () => void;
    markasreadfunct?: () => void;
    focusedcard?: () => void;

}
interface Expands {
    content?: String;
    icon?: string;
    class?: string;
    idclass?: any;
    function?: any;
}


export function CardMail({ ...props }: SideMenu) {

    return (
        <div onFocus={props.focusfunct} onClick={props.funct} className={props.state? props.class + '-focus':props.class} id={props.state? props.class + '-' + props.content.toLowerCase().replace(/[&!/#,+ ()$~%'":*?<>{}]/g, '') + '-focus':props.class + '-' + props.content.toLowerCase().replace(/[&!/\\#,+ ()$~%'":*?<>{}]/g, '')}>
             <div className="div-aside-button-icon" id="div-aside-button-icon">
                <img src={props.state? props.icon:props.iconfocus} alt="mailboxIcon" className="aside-button-icon" id={"aside-button-icon-" + props.content.toLocaleLowerCase().replace(/[&!/#,+ ()$~%'":*?<>{}]/g, '')} />
            </div>
            <div className="div-aside-button-link" id="div-aside-button-link">
                <span className="aside-button-link" id="aside-button-link">
                    {props.content}
                </span>
            </div>
            <div className="div-aside-button-number" id="div-aside-button-number">
                <span className="aside-button-number" id="aside-button-number">{props.total}</span>
            </div>
        </div>
    )
}

export function CardsExpands({ ...props }: Expands) {
    const [selected, setselected] = useState(false);
    const toggleselected = () => {
        setselected(old => !old)
    }

    return (
        <div onClick={toggleselected} className={`${selected ? "div-aside-button-more" : "div-aside-button"}`} id={`${selected ? "div-aside-button-more" : "div-aside-button"}`}>
            <div className="div-aside-button-icon" id="div-aside-button-icon">
                <img src={props.icon} alt="mailboxIcon" className="aside-button-icon" id="aside-button-icon" />
            </div>
            <div className="div-aside-button-link" id="div-aside-button-link">
                <button className="aside-button-link" id="aside-button-link">
                    {props.content}
                </button>
            </div>
        </div>
    )
}

export function MainCardMail({ ...props }: account) {
    const [favorited, setfavorited] = useState(false);
    const togglefavorited = () => {
        setfavorited(old => !old)
    }
    const [checked, setchecked] = useState(false);
    const togglechecked = () => {
        setchecked(old => !old)
    }

    return (
        <div onClick={props.focusedcard} id={props.markasreadstate?'cardmail-readed':'new-cardmail'}>
            <div className={props.cardstate? 'cardmail-disabled':''}>
            <div className={props.tofilestate?"mailbox-card-div-parts-disabled":"mailbox-card-div-parts"} id="mailbox-card-div-parts">
                <div className="div-left-start-mailbox-card" id="div-left-start-mailbox-card">
                    <div onClick={togglechecked} className={`${checked ? "div-input-checkbox-checked" : "div-input-checkbox"}`} id={`${checked ? "div-input-checkbox-checked" : "div-input-checkbox"}`}>
                        <div title="Selecionar" className={`${checked ? "input-checkbox-img-checked" : "input-checkbox-img"}`} id={`${checked ? "input-checkbox-img-checked" : "input-checkbox-img"}`}>
                            <img src={`${checked ? "https://www.gstatic.com/images/icons/material/system/1x/check_box_black_20dp.png" : "https://ssl.gstatic.com/ui/v1/menu/checkmark.png"}`} alt="" className={`${checked ? "input-checkbox" : "input-checkbox-unchecked"}`} id={`${checked ? "input-checkbox" : "input-checkbox-unchecked"}`} />
                        </div>
                    </div>
                    <div title={favorited ? 'Com estrela' : 'Sem estrela'} onClick={togglefavorited} className={`${favorited ? "div-mailbox-card-star-button-icon-checked" : "div-mailbox-card-star-button-icon"}`} id={favorited ? "div-mailbox-card-star-button-icon-checked" : "div-mailbox-card-star-button-icon"}>
                        <img src={`${favorited ? "https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png" : "https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png"}`} alt="starIcon" className={`${favorited ? "mailbox-card-star-button-icon-checked" : "mailbox-card-star-button-icon"}`} id={`${favorited ? "mailbox-card-star-button-icon-checked" : "mailbox-card-star-button-icon"}`} />
                    </div>
                    <div className="div-mailbox-card-username" id="div-mailbox-card-username">
                        <span className="mailbox-card-username" id="mailbox-card-username">{props.title}</span>
                    </div>
                </div>
                <div className="div-center-mailbox-card" id="div-center-mailbox-card">
                    <div className="div-mail-content-preview" id="div-mail-content-preview">
                        <span className="mail-content-preview" id="mail-content-preview">{props.content}</span>
                    </div>
                </div>
                <div className="spacing-mail-date-hover" id="spacing-mail-date-hover">
                    <div title="Arquivar" onClick={props.tofilefunct} className="div-archive-mailbox-hover-button" id="div-archive-mailbox-hover-button">
                        <div className="archive-mailbox-hover-button" id="archive-mailbox-hover-button"></div>
                    </div>
                    <div title="Excluir" onClick={props.tofilefunct} className="div-delete-mailbox-hover-button" id="div-delete-mailbox-hover-button">
                        <div className="delete-mailbox-hover-button" id="delete-mailbox-hover-button"></div>
                    </div>
                    <div title="Marcar como não lida" onClick={props.markasreadfunct} className="div-readed-mailbox-hover-button" id="div-readed-mailbox-hover-button">
                        <div className="readed-mailbox-hover-button" id="readed-mailbox-hover-button"></div>
                    </div>
                    <div title="Adiar" className="div-postpone-mailbox-hover-button" id="div-postpone-mailbox-hover-button">
                        <div className="postpone-mailbox-hover-button" id="postpone-mailbox-hover-button"></div>
                    </div>
                </div>
                <div className="spacing-div-mail-date" id="spacing-div-mail-date"></div>
                <div className="div-right-mail-date" id="div-mail-date">
                    <span className="mail-date" id="mail-date">{props.total}</span>
                </div>
            </div>
        </div>
        </div>
    )
}