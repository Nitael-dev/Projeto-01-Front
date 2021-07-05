import "../styles/Home.scss"
import { CardMail, CardsExpands, MainCardMail } from '../components/CardMail'
import sidebarcontrollerIcon from '../assets/images/sidebarcontroller.svg'
import searchIcon from '../assets/images/search.svg'
import mailcontrollerIcon from '../assets/images/mailcontroller.svg'
import helpIcon from '../assets/images/help.svg'
import configIcon from '../assets/images/config.svg'
import googlemenuIcon from '../assets/images/googlemenu.svg'
import more from "../assets/images/more.svg"
import { useState } from "react"
// import moreIcon from '../assets/images/more.svg'


export function Home() {

    const [selected, setselected] = useState(false);
    const [checked, setchecked] = useState(false);
    const [mainmailboxfocus, setmainmailboxfocus] = useState(true);
    const [socialmailboxfocus, setsocialmailboxfocus] = useState(false);
    const [promotionsmailboxfocus, setpromotionsmailboxfocus] = useState(false);
    const [viewmailboxenabled, setviewmailboxenabled] = useState(true);
    const [shownavmailbox, setshownavmailbox] = useState(true);
    // hover buttons states

    const [markasreadaction, setmarkasreadaction] = useState(false);
    // aside cards states
    const [inbox, setinbox] = useState(true);
    const [withstar, setwithstar] = useState(false);
    const [postponed, setpostponed] = useState(false);
    const [sent, setsent] = useState(false);
    const [draft, setdraft] = useState(false);
    const [important, setimportant] = useState(false);
    const [chats, setchats] = useState(false);
    const [scheduled, setscheduled] = useState(false);
    const [allemails, setallemails] = useState(false);
    const [spam, setspam] = useState(false);
    const [trash, settrash] = useState(false);
    const [categories, setcategories] = useState(false);
    const Handlecategories = () => {
        setcategories(old => !old);
    }
    const [social, setsocial] = useState(false);
    const [updates, setupdates] = useState(false);
    const [forums, setforums] = useState(false);
    const [promotions, setpromotions] = useState(false);
    const [manage, setmanage] = useState(false);
    const [createnew, setcreatenew] = useState(false);
    const [withstarlateralpagination, setwithstarlateralpagination] = useState(false);
    const [postponedlateralpagination, setpostponedlateralpagination] = useState(false);
    const [sentlateralpagination, setsentlateralpagination] = useState(false);
    const [draftlateralpagination, setdraftlateralpagination] = useState(false);
    const [importantlateralpagination, setimportantlateralpagination] = useState(false);
    const [chatslateralpagination, setchatslateralpagination] = useState(false);
    const [scheduledlateralpagination, setscheduledlateralpagination] = useState(false);
    const [allemailslateralpagination, setallemailslateralpagination] = useState(false);
    const [spamlateralpagination, setspamlateralpagination] = useState(false);
    const [trashlateralpagination, settrashlateralpagination] = useState(false);
    const [categorieslateralpagination, setcategorieslateralpagination] = useState(false);
    const Handlecategorieslateralpagination = () => {
        setcategorieslateralpagination(old => !old);
    }
    const [focused, setFocused] = useState(false);
    const [mainmailaccounts, setMainMailAccounts] = useState(      
        [
            {
                id: 0,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction

            },
            {
                id: 1,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 2,
                title: "Uber Eats",
                content: "Vai7 perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 3,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 4,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 5,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 6,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 7,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 8,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 9,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 10,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 11,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 12,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 13,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
            {
                id: 14,
                title: "Uber Eats",
                content: "Vai perdasdasdas5555dasdasdasdasder a promoção mesmo? 😱 R$20 OFF em 1 pedido no Uber Eats",
                total: "13:42",
                markedasread: markasreadaction
            },
    
        ]
    );
    const [socialmailaccounts, setSocialMailAccounts] = useState(
        [
            { 
                id: 0,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 1,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 2,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 3,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 4,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 5,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 6,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 7,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 8,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            { 
                id: 9,
                title: "Instagram",
                content: "joaozinhofofo157, veja o que está acontecendo no Instagram",
                total: "27 de jul.",
                markedasread: markasreadaction
            },
            
        ]
    );
    const [promotionsmailaccounts, setPromotionsMailAccounts] = useState(
        [
            {
                
                id: 0,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 1,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 2,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 3,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 4,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 5,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 6,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 7,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 8,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 9,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 10,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 11,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 12,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 13,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 14,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 15,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 16,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 17,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
            {
                id: 18,
                title: "League of Legends",
                content: "TiaumdoChurrasco - Akshan is now playable",
                total: "23 de jul.",
                markedasread: markasreadaction
            },
        ]
    );
    const importantmails = [
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },
        {
            title: "League of Legends",
            content: "Riot Account update required",
            total: "07/12/2019"
        },

    ]
    // Modal States
    const [writemodal, setWriteModal] = useState(false);
    const [writeexpandedmodal, setWriteExpandedModal] = useState(false);
    const [writemodalminimized, setWriteModalMinimized] = useState(false);
    const [writeexpandedmodalminimized, setWriteExpandedModalMinimized] = useState(false);
    // Modal Functions
    const MinimizeWriteModal = () => {
        setWriteModal(true);
        if(writeexpandedmodalminimized === true) {
            setWriteModal(false);
            setWriteExpandedModal(true);
        }
        if(writeexpandedmodal === true) {
            setWriteExpandedModal(false);
            setWriteExpandedModalMinimized(true);
        } else {
            setWriteExpandedModalMinimized(false);
        } 
        setWriteModalMinimized(old => !old);
    }
    const ShowWriteExpandedModal = () => {
        if(writeexpandedmodal === true){
            setWriteModalMinimized(false);
            setWriteModal(true);
            setWriteExpandedModal(false);
            return;
        }
        if(writeexpandedmodalminimized === true){
            setWriteExpandedModalMinimized(false);
            setWriteExpandedModal(false);
            setWriteModal(true);
            setWriteModalMinimized(false);
            return;
        }
        setWriteModal(false);
        setWriteExpandedModal(old => !old);
        setWriteModalMinimized(false);
    }
    const CloseWriteModal = () => {
        setWriteModal(false);
        setWriteModalMinimized(false);
        setWriteExpandedModal(false);
        setWriteExpandedModalMinimized(false);
    }
    const toggleselected = () => {
        setselected(old => !old)
    }
    const togglechecked = () => {
        setchecked(old => !old)
    }
    // View mailbox
    const showmainmailboxfocus = () => {
        togglemailbox();
        setmainmailboxfocus(true);
    }
    const showsocialmailboxfocus = () => {
        togglemailbox();
        setsocialmailboxfocus(true);
    }
    const showpromotionsmailboxfocus = () => {
        togglemailbox();
        setpromotionsmailboxfocus(true);
    }
    const removemainmail = (id: number) => {

        let arrmain = mainmailaccounts.filter((value, index, arr) => {
            return value.id !== id;
        })
        console.log(arrmain);
        setMainMailAccounts(arrmain);
    }
    const removesocialmail = (id: number) => {
        console.log(id)
        let arrsocial = socialmailaccounts.filter((value, index, arr) => {
            return value.id !== id;
        })
        console.log(arrsocial);
        setSocialMailAccounts(arrsocial);
    }
    const removepromotionmail = (id: number) => {

        let arrpromotions = promotionsmailaccounts.filter((value, index, arr) => {
            return value.id !== id;
        })
        console.log(arrpromotions);
        setPromotionsMailAccounts(arrpromotions);
    }
    const setmarked = (id: number) => {
        setmarkasreadaction(old => !old)
    }
    const togglemailbox = () => {
        setmainmailboxfocus(false);
        setsocialmailboxfocus(false);
        setpromotionsmailboxfocus(false);
    }
    const toggleviewmailbox = () => {
        setviewmailboxenabled(false);
    }
    const showviewmailbox = () => {
        setviewmailboxenabled(true); 
    }
    const setfocus =() => {
        setFocused(old => !old)
    }
    // Lateral pagination
    const Togglecardsstates = () => {
        setinbox(false);
        setwithstar(false);
        setpostponed(false);
        setsent(false);
        setdraft(false);
        setimportant(false);
        setchats(false);
        setscheduled(false);
        setallemails(false);
        setspam(false);
        settrash(false);
        setsocial(false);
        setupdates(false);
        setforums(false);
        setpromotions(false);
        setmanage(false);
        setcreatenew(false);
    }
    const togglelateralpagination = () => {
        setwithstarlateralpagination(false);
        setpostponedlateralpagination(false);
        setsentlateralpagination(false);
        setdraftlateralpagination(false);
        setimportantlateralpagination(false);
        setchatslateralpagination(false);
        setscheduledlateralpagination(false);
        setallemailslateralpagination(false);
        setspamlateralpagination(false);
        settrashlateralpagination(false);
    }
    const cards = [
        {
            content: "Caixa de entrada",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            total: 5.354,
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showmainmailboxfocus();
                setshownavmailbox(true);
                setinbox(true);
            },
            state: inbox,
        },
        {
            content: "Com estrela",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setwithstarlateralpagination(true);
                setwithstar(true);
            },
            state: withstar
        },
        {
            content: "Adiados",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setpostponed(true);
                setpostponedlateralpagination(true);
            },
            state: postponed
        },
        {
            content: "Enviados",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setsent(true);
                setsentlateralpagination(true);
            },
            state: sent
        },
        {
            content: "Rascunhos",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setdraft(true);
                setdraftlateralpagination(true);
            },
            state: draft
        },
        {
            content: "Menos",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/expand_less_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/expand_less_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
            }
        },
        {
            content: "Importante",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setimportant(true);
                setimportantlateralpagination(true);
            },
            state: important
        },
        {
            content: "Chats",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/hangout_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/hangout_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setchats(true);
                setchatslateralpagination(true);
            },
            state: chats
        },
        {
            content: "Programados",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/schedule_send_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/schedule_send_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setscheduledlateralpagination(true);
                setscheduled(true);
            },
            state: scheduled
        },
        {
            content: "Todos os e-mails",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/mail_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/mail_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setallemails(true);
                setallemailslateralpagination(true);
            },
            state: allemails
        },
        {
            content: "Spam",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/report_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/report_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                setspam(true);
                setspamlateralpagination(true);
            },
            state: spam
        },
        {
            content: "Lixeira",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                showmainmailboxfocus();
                settrash(true);
                settrashlateralpagination(true);
            },
            state: trash
        },
        {
            content: "Categorias",
            icon: "https://www.gstatic.com/images/icons/material/system_gm_filled/1x/label_gm_grey_24dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system_gm_filled/1x/label_gm_grey_24dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                Handlecategorieslateralpagination();
                Handlecategories();
            },
            state: categories
        },
        {
            content: "Social",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/people_black_20dp.png",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/people_gm_blue600_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showsocialmailboxfocus();
                setshownavmailbox(false);
                setsocial(true);
            },
            state: social
        },
        {
            content: "Atualizações",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/info_black_20dp.png",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/info_gm_yellow900_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showmainmailboxfocus();
                setshownavmailbox(false);
                setupdates(true);
            },
            state: updates
        },
        {
            content: "Fóruns",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/forum_black_20dp.png",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/forum_gm_purple500_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                toggleviewmailbox();
                toggleviewmailbox();
                setpostponedlateralpagination(true);
                setforums(true);
            },
            state: forums
        },
        {
            content: "Promoções",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/local_offer_black_20dp.png",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/local_offer_gm_green700_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showpromotionsmailboxfocus();
                setshownavmailbox(false);
                setpromotions(true);
            },
            state: promotions
        },
        {
            content: "Gerenciar marcadores",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/settings_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/settings_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showmainmailboxfocus();
            },
            state: manage
        },
        {
            content: "Criar novo marcador",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/add_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/add_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showmainmailboxfocus();
            },
            state: createnew
        },
        {
            content: "Nova reunião",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/videocam_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/videocam_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showmainmailboxfocus();
            },
            state: 'newmeeting?'
        },
        {
            content: "Participar de reunião",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/keyboard_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/keyboard_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                togglelateralpagination();
                Togglecardsstates();
                showviewmailbox();
                showmainmailboxfocus();
            },
            state: 'joinmeeting?'
        },
        {
            content: "Mais",
            icon: "https://www.gstatic.com/images/icons/material/system/1x/expand_more_black_20dp.png",
            iconfocus: "https://www.gstatic.com/images/icons/material/system/1x/expand_more_black_20dp.png",
            class: "div-aside-button",
            idclass: "div-aside-button",
            funct: function teste() {
                console.log('aisjhdsadh')
            }
        }
    ]

    return (
        <div className="div-home-root" id="div-home-root">
            <div>
                <header className="header-search" id="header-search">
                    <div className="div-logo" id="div-logo">
                        <div className="div-side-bar-controller-icon" id="div-side-bar-controller-icon">
                            <img src={sidebarcontrollerIcon} alt="sidebar" className="side-bar-controller-icon" id="side-bar-controller-icon"/>
                        </div>
                        <img onClick={() => {togglelateralpagination()
                        showviewmailbox()
                        setFocused(false)
                        showmainmailboxfocus()}} src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="GmailLogo" className="gmail-logo" id="gmail-logo"/>
                    </div>
                    <div className="div-input-search" id="div-input-search">
                        <div title="Pesquisa" className="div-search-icon" id="div-search-icon">
                            <img src={searchIcon} alt="searchIcon" className="search-icon" id="search-icon"/>
                        </div>
                        <input placeholder="Pesquisar e-mail" type="text" title='' className="input-search" id="input-search"/>
                        <div title="Mostrar opções de pesquisa" className="div-mail-controller-button" id="div-mail-controller-button">
                            <img  src={mailcontrollerIcon} alt="mailcontroller" className="mail-controller-icon" id="mail-controller-icon"/>
                        </div>
                    </div>
                    <div className="div-spacing-header-search" id="div-spacing-header-search"></div>
                    <div className="div-option" id="div-option">
                        <img title="Suporte" src={helpIcon} alt="helpIcon" className="help-icon" id="help-icon"/>
                        <img title="Configurações" src={configIcon} alt="configIcon" className="config-icon" id="config-icon"/>
                        <img title="Google Apps" src={googlemenuIcon} alt="menuIcon" className="menu-icon" id="menu-icon"/>
                        <img title="Conta do Google" src="https://lh3.googleusercontent.com/ogw/ADea4I4tGr5R0gczfqcVINh3LuLf3ZVbl6B7GZ5K91Rn=s32-c-mo" alt="accountIcon" className="account-icon" id="account-icon"/>
                    </div>
                </header>          
                <div className="div-aside-option" id="div-aside-option">
                    <aside className="aside-option" id="aside-option">
                        <div onClick={() => {setWriteModal(true)
                        setWriteExpandedModal(false)}} className={"div-write-button"} id={"div-write-button"}>
                            <div className="div-write-icon" id="div-write-icon">
                                <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="writeIcon" className="writeIcon" id="writeIcon"/>
                            </div>
                            <div className="div-write-button-text" id="div-write-button-text">
                                <span className="write-button-text" id="write-button-text">
                                    Escrever
                                </span>
                            </div>
                        </div>
                        <div className={selected? "div-aside-cards-more": "div-aside-cards"} id={selected? "div-aside-cards-more": "div-aside-cards"}>
                            {cards.slice(0, 5).map((item, key) => (
                                <CardMail state={item.state} funct={item.funct} content={item.content} icon={item.icon} iconfocus={item.iconfocus} total={item.total} class={item.class} idclass={item.idclass}></CardMail>
                            ))}
                            <div onClick={toggleselected} className={selected? "div-aside-less":"div-aside-more"} id={selected? "div-aside-less":"div-aside-more"}> 
                                {selected? cards.slice(5, 6).map((item, key) => (
                                    <CardsExpands content={item.content} icon={item.icon} class={item.class} idclass={item.idclass}></CardsExpands>
                                )):cards.slice(21, 22).map((item, key) => (
                                    <CardsExpands content={item.content} icon={item.icon} class={item.class} idclass={item.idclass}></CardsExpands>
                                ))}
                            </div>
                            <div className="div-aside-cards-extends" id="div-aside-cards-extends">
                                {selected? cards.slice(6, 13).map((item, key) => (
                                    <CardMail state={item.state} funct={item.funct} content={item.content} icon={item.icon} class={item.class} iconfocus={item.iconfocus} idclass={item.idclass}></CardMail>
                                )):''}
                            </div>
                            <div className={categorieslateralpagination?"div-aside-cards-extends":"div-aside-cards-extend-disabled"} id="div-aside-cards-extends">
                                {selected? cards.slice(13, 17).map((item, key) => (
                                    <CardMail state={item.state}  funct={item.funct} content={item.content} icon={item.icon} class={item.class} iconfocus={item.iconfocus} idclass={item.idclass}></CardMail>
                                )):''}
                            </div>
                            <div className="div-aside-cards-extends" id="div-aside-cards-extends">
                                {selected? cards.slice(17, 19).map((item, key) => (
                                    <CardMail state={item.state}  funct={item.funct} content={item.content} icon={item.icon} class={item.class} iconfocus={item.iconfocus} idclass={item.idclass}></CardMail>
                                )):''}
                            </div>
                        </div>
                        <div className={selected? "div-spacing-aside-option-more":"div-spacing-aside-option"} id={selected? "div-spacing-aside-option-more":"spacing-aside-option"}>
                        </div>
                        <div className="div-aside-meet-cards" id="div-aside-meet-cards">
                                <div className="div-aside-meet" id="div-aside-meet">
                                    <div className="div-meet-text" id="div-meet-text">
                                        <span className="meet-text" id="meet-text">Meet</span>
                                    </div>
                                    <div className="div-cards-aside-meet" id="div-cards-aside-meet">
                                    {cards.slice(15, 17).map((item, key) => {
                                        return <CardMail content={item.content} icon={item.icon} iconfocus={item.iconfocus} class={item.class} idclass={item.idclass}></CardMail>
                                    })}
                                    </div>
                                </div>
                        </div>
                        <div className="div-aside-hangouts" id="div-aside-hangouts">
                            <div className="div-hangouts-text" id="div-hangouts-text">
                                <span className="hangouts-text" id="hangouts-text">Hangouts</span>
                            </div>
                            <div className="div-hangouts-user" id="div-hangouts-user">
                                <div className="div-hangouts-user-icon" id="div-hangouts-user-icon">
                                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I4tGr5R0gczfqcVINh3LuLf3ZVbl6B7GZ5K91Rn=s32-c-mo" alt="userIcon" className="hangouts-user-icon" id="hangouts-user-icon"/>
                                    <div className="div-hangouts-user-option" id="div-hangouts-user-option">
                                        <div className="user-state-icon" id="user-state-icon"></div>
                                        <div className="div-hangouts-user-text" id="div-hangouts-user-text">
                                            <span className="hangouts-user-text" id="hangouts-user-text">joao</span>
                                        </div>
                                        <div className="div-option-icon" id="div-option-icon"></div>
                                    </div>
                                </div>
                                <div className="div-hangouts-new-group-button" id="div-hangouts-new-group-button">
                                    <img className="hangouts-new-group-icon" id="hangouts-new-group-icon" src={more} alt="moreIcon" />
                                </div>
                            </div>
                        </div>
                        <div className="div-aside-chat" id="div-aside-chat">
                            <div className="div-hangouts-background-img" id="div-hangouts-background-img">
                                <div className="hangouts-background-img" id="hangouts-background-img"></div>
                            </div>
                            <div className="div-chat-status-text" id="div-chat-status-text">
                                <span className="chat-status-text" id="chat-status-text">Nenhum bate-papo recente</span>
                            </div>
                            <div className="div-create-newchat-button" id="div-create-newchat-button">
                                <span className="create-newchat-button" id="create-newchat-button">Iniciar um novo</span>
                            </div>
                        </div>
                        <footer className="footer-aside-option" id="footer-aside-option">
                        <div className="div-hangouts-icons" id="div-hangouts-icons">
                            <div className="div-hangouts-contact-icon" id="div-hangouts-contact-icon">
                                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/wbt/contacts_icon21.png" alt="hangoutsContacts" className="hangouts-contacts-icon" id="hangouts-contacts-icon"/>
                            </div>
                            <div className="div-hangouts-chats-icon" id="div-hangouts-chats-icon">
                                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/wbt/hangouts_icon21.png" alt="hangoutsChats" className="hangouts-chats-icon" id="hangouts-chats-icon"/>
                            </div>
                            <div className="div-hangouts-calls-icon" id="div-hangouts-calls-icon">
                                <div className="hangouts-calls-icon" id="hangouts-calls-icon"></div>
                            </div>
                        </div>
                    </footer>
                </aside>
                </div>       
                <div className="center-elements" id="center-elements">
                <div className="div-main-mailbox" id="div-main-mailbox">
                    <main className="main-mailbox" id="main-mailbox">
                        <header className="header-main-mailbox" id="header-main-mailbox">
                            <div className={focused?'div-header-main-mailbox-disabled':"div-header-main-mailbox"} id="div-header-main-mailbox">
                                <div onClick={togglechecked} className={checked? "div-input-checkbox-checked":"div-input-checkbox"} id={checked? "div-input-checkbox-checked":"div-input-checkbox"}>
                                    <div title="Selecionar" className={checked? "input-checkbox-img-checked":"input-checkbox-img"} id={checked? "input-checkbox-img-checked":"input-checkbox-img"}>
                                        <img src={checked? "https://www.gstatic.com/images/icons/material/system/1x/check_box_black_20dp.png": "https://ssl.gstatic.com/ui/v1/menu/checkmark.png"} alt="" className={checked? "input-checkbox": "input-checkbox-unchecked"} id={checked? "input-checkbox": "input-checkbox-unchecked"}/>
                                    </div>
                                </div>
                                <div title="Selecionar" className="div-checkbox-option-icon" id="div-checkbox-option-icon">
                                    <div className="checkbox-option-icon" id="checkbox-option-icon"></div>
                                </div>
                                <div title="Atualizar" className="div-refresh-button" id="div-refresh-button">
                                    <img src="https://www.gstatic.com/images/icons/material/system/1x/refresh_black_20dp.png" alt="refreshIcon" className="refresh-button" id="refresh-button"/>
                                </div>
                                <div title="Mais" className="div-extension-button" id="div-extension-button">
                                    <img src="https://www.gstatic.com/images/icons/material/system/1x/more_vert_black_20dp.png" alt="extensionIcon" className="extension-button" id="extension-button"/>
                                </div>
                            </div>
                            <div className={focused?'mailcard-focused':'mailcard-focused-disabled'} id={'mailcard-focused'}>
                                <div className={'mailcard-focused-nav-buttons'}>
                                    <div className={'focused-cardmail-modal-back'}>
                                        <div onClick={() => {showviewmailbox()
                                        setfocus()}} className={'focused-cardmail-modal-back-icon'}>
                                            <img src="https://www.gstatic.com/images/icons/material/system/1x/arrow_back_black_20dp.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={'mailcard-focused-nav-buttons-left-block'}>
                                        <div className={'focused-cardmail-modal-left-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://www.gstatic.com/images/icons/material/system/1x/archive_black_20dp.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={'focused-cardmail-modal-left-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://www.gstatic.com/images/icons/material/system/1x/report_black_20dp.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={'focused-cardmail-modal-left-block-buttons'}>
                                        <div className={'focused-cardmail-modal-icon'}>
                                            <img src="https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png" alt="" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className={'horizontal-bar'}></div>
                                    <div className={'mailcard-focused-nav-buttons-center-block'}>
                                        <div className={'focused-cardmail-modal-center-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_black_20dp.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={'focused-cardmail-modal-center-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={'focused-cardmail-modal-center-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/task_add_filled_20_black_1x.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'horizontal-bar'}></div>
                                    <div className={'mailcard-focused-nav-buttons-right-block'}>
                                        <div className={'focused-cardmail-modal-right-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://www.gstatic.com/images/icons/material/system/1x/drive_file_move_black_20dp.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={'focused-cardmail-modal-right-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://www.gstatic.com/images/icons/material/system/1x/label_black_20dp.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={'focused-cardmail-modal-right-block-buttons'}>
                                            <div className={'focused-cardmail-modal-icon'}>
                                                <img src="https://www.gstatic.com/images/icons/material/system/1x/more_vert_black_20dp.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-right-end-option" id="div-right-end-option">
                                    <div className="div-right-end-mail-number" id="div-right-end-mail-number">
                                        <span className="right-end-mail-number" id="right-end-mail-number"> 1–50 de 5.225</span>
                                    </div>
                                    <div className="div-header-main-nav" id="div-header-main-nav">
                                        <div title="Próximas" className="div-header-main-nav-next-icon" id="div-header-main-nav-next-icon">
                                            <img src="https://www.gstatic.com/images/icons/material/system/1x/chevron_left_black_20dp.png" alt="" className="header-main-nav-next-icon" id="header-main-nav-next-icon"/>
                                        </div>
                                        <div className="div-header-main-nav-previous-icon" id="div-header-main-nav-previous-icon">
                                            <img title="Anteriores" src="https://www.gstatic.com/images/icons/material/system/1x/chevron_right_black_20dp.png" alt="" className="header-main-nav-previous-icon" id="header-main-nav-previous-icon"/>
                                        </div>
                                    </div>
                                </div>
                        </header>
                    </main>
                </div>   
                <div className={viewmailboxenabled?"view-mailbox":"view-mailbox-disabled"} id="view-mailbox">
                    <div className="div-nav-mailbox" id="div-nav-mailbox">
                        <nav className="nav-mailbox"id={shownavmailbox?"nav-mailbox":"nav-mailbox-disabled"}>
                            <div onClick={showmainmailboxfocus} className={mainmailboxfocus?"div-nav-mailbox-main":"div-nav-blur"} id="div-nav-mailbox-main">
                                <div className="nav-mailbox-main" id="nav-mailbox-main">
                                    <div className="div-nav-mailbox-main-icon" id="div-nav-mailbox-main-icon">
                                        <img src={mainmailboxfocus? "https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png":"https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png"} alt="mailboxIcon" className="nav-mailbox-main-icon" id="nav-mailbox-main-icon" />
                                    </div>
                                    <div className="div-nav-mailbox-main-title" id="div-nav-mailbox-main-title">
                                        <span className="nav-mailbox-main-title" id="nav-mailbox-main-title">Principal</span>
                                    </div>
                                </div>
                                <div className="nav-mailbox-main-spacing-div" id="nav-mailbox-main-spacing-div"></div>
                            </div>
                            <div onClick={showsocialmailboxfocus} className={socialmailboxfocus? "div-nav-mailbox-social":"div-nav-blur"} id="div-nav-mailbox-social">
                                <div className="nav-mailbox-social" id="nav-mailbox-social">
                                    <div className="div-nav-mailbox-social-icon" id="div-nav-mailbox-social-icon">
                                        <img src={socialmailboxfocus? "https://www.gstatic.com/images/icons/material/system/1x/people_gm_blue600_20dp.png":"https://www.gstatic.com/images/icons/material/system/1x/people_black_20dp.png"} alt="socialIcon" className="nav-mailbox-social-icon" id="nav-mailbox-social-icon" />
                                    </div>
                                    <div className="div-nav-mailbox-social-title" id="div-nav-mailbox-social-title">
                                        <span className="nav-mailbox-social-title" id="nav-mailbox-social-title">Social</span>
                                    </div>
                                </div>
                                <div className="nav-mailbox-social-spacing-div" id="nav-mailbox-social-spacing-div"></div>
                            </div>
                            <div onClick={showpromotionsmailboxfocus} className={promotionsmailboxfocus? "div-nav-mailbox-promotions":"div-nav-blur"} id="div-nav-mailbox-promotions">
                            <div className="nav-mailbox-promotions" id="nav-mailbox-promotions">
                                <div className="div-nav-mailbox-promotions-icon" id="div-nav-mailbox-promotions-icon">
                                    <img src={promotionsmailboxfocus? "https://www.gstatic.com/images/icons/material/system/1x/local_offer_gm_green700_20dp.png":"https://www.gstatic.com/images/icons/material/system/1x/local_offer_black_20dp.png"} alt="promotionsIcon" className="nav-mailbox-promotions-icon" id="nav-mailbox-promotions-icon" />
                                </div>
                                <div className="div-nav-mailbox-promotions-title" id="div-nav-mailbox-promotions-title">
                                    <span className="nav-mailbox-promotions-title" id="nav-mailbox-promotions-title">Promoções</span>
                                </div>
                            </div>
                            <div className="nav-mailbox-promotions-spacing-div" id="nav-mailbox-promotions-spacing-div"></div>
                        </div>
                        </nav>
                        <div className={mainmailboxfocus?"div-main-mailbox-cards-body":"div-mailbox-cards-body-disabled"} id={mainmailboxfocus?"div-main-mailbox-cards-body":"div-mailbox-cards-body-disabled"}>
                            <div>
                                {mainmailaccounts.map((item, key) => {
                                    return ( 
                                        <MainCardMail 
                                            title={item.title} 
                                            tofilefunct={() => removemainmail(item.id)} 
                                            content={item.content} 
                                            total={item.total}
                                            markasreadstate={markasreadaction}
                                            markasreadfunct={() => setmarked(item.id)}
                                            focusedcard={() => {toggleviewmailbox()
                                            setfocus()
                                            }}/> 
                                            )
                                })}
                        </div>
                        </div>
                        <div className={socialmailboxfocus?"div-social-mailbox-cards-body":"div-mailbox-cards-body-disabled"} id="div-cards-body">
                            {socialmailaccounts.map((item, key) => {
                                return (<MainCardMail 
                                title={item.title} 
                                tofilefunct={() => removesocialmail(item.id)} 
                                content={item.content} 
                                focusedcard={() => {toggleviewmailbox()
                                setfocus()}}
                                total={item.total}/>)
                        })}
                        </div>
                        <div className={promotionsmailboxfocus?"div-promotions-mailbox-cards-body":"div-mailbox-cards-body-disabled"} id="div-cards-body">
                            {promotionsmailaccounts.map((item, key) => {
                                return (<MainCardMail 
                                title={item.title} 
                                tofilefunct={() => removepromotionmail(item.id)} 
                                content={item.content} 
                                focusedcard={() => {toggleviewmailbox()
                                setfocus()}}
                                total={item.total}/>)
                            })}
                        </div>
                        <footer className="div-footer-view-mailbox" id="div-footer-view-mailbox">
                            <div className="footer-view-mailbox-left-content" id="footer-view-mailbox-left-content">
                                <div className="memory-usage-bar" id="memory-usage-bar">
                                    <div className="memory-usage-sub-bar" id="memory-usage-sub-bar"></div>
                                </div>
                                <div className="div-memory-usage-count" id="div-memory-usage-count">
                                    <div className="memory-usage-count" id="memory-usage-count">
                                        <span className="memory-usage-count-text" id="memory-usage-count-text">0,85 GB de 15 GB usado(s)</span>
                                    </div>
                                    <div className="div-memory-usage-count-icon" id="div-memory-usage-count-icon">
                                        <div className="memory-usage-count-icon" id="memory-usage-count-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="view-mailbox-footer-spacing-div-left" id="view-mailbox-footer-spacing-div-left"></div>
                            <div className="footer-view-mailbox-center-content" id="footer-view-mailbox-center-content">
                                <span className="footer-view-mailbox-help-terms-text" id="footer-view-mailbox-help-terms-text">Termos</span>
                                <span className="spacing-point" id="spacing-point">·</span>
                                <span  className="footer-view-mailbox-help-privacy-text" id="footer-view-mailbox-help-privacy-text">Privacidade</span>
                                <span className="spacing-point" id="spacing-point">·</span>
                                <span className="footer-view-mailbox-help-program-regulations-text" id="footer-view-mailbox-help-program-regulations-text">Regulamentos do programa</span>
                            </div>
                            <div className="view-mailbox-footer-spacing-div-right" id="view-mailbox-footer-spacing-div-right"></div>
                            <div className="footer-view-mailbox-right-content">
                                <div className="footer-view-mailbox-activity-count" id="footer-view-mailbox-activity-count">
                                    <span className="footer-view-mailbox-activity-count-text" id="footer-view-mailbox-activity-count-text">Última atividade da conta: há 19 minutos</span>
                                </div>
                                <div className="footer-view-mailbox-activity-details" id="footer-view-mailbox-activity-details">
                                    <span className="footer-view-mailbox-activity-details-text" id="footer-view-mailbox-activity-details-text">Detalhes</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div> 
                <div className={focused?'div-focused-mail-content':'div-focused-mail-content-disabled'}>
                    <div className={'div-focused-mail-content-title'}>
                        <div className={'focused-mail-content-title'}>
                            <div className={'div-focused-mail-content-title-text'}>
                                <h2 className={'focused-mail-content-title-text'}>5 minutos para ajudar a definir o futuro da Rocketseat</h2>
                                <span className={'span-focused-mail-location'}>
                                    <div className={'div-focused-mail-location'}>
                                        <span className={'focused-mail-location'}>Caixa de Entrada<span className={'focused-mail-delete-location'}>x</span></span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className={'div-focused-mail-right-end-buttons'}>
                            <div className={'focused-mail-right-end-button'}>
                                <img alt='printIcon' src='https://www.gstatic.com/images/icons/material/system/1x/print_black_20dp.png' className={'focused-mail-right-end-icon'}></img>
                            </div>
                            <div className={'focused-mail-right-end-button'}>
                                <img alt='newIcon' src='https://www.gstatic.com/images/icons/material/system/1x/open_in_new_black_20dp.png' className={'focused-mail-right-end-icon'}></img>
                            </div>
                        </div>
                    </div>
                    <div className={'div-focused-mail-content-info'}>
                        <div className={'focused-mail-content-info'}>
                            <div className={'div-focused-mail-content-info-user-icon'}>
                                <img alt='userIcon' src='https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png' className={'focused-mail-content-info-user-icon'}></img>
                            </div>
                            <div className={'div-focused-mail-content-info-author'}>
                                <span className={'focused-mail-content-info-author'}>Rocketseat<span className={'focused-mail-content-info-author-email'}> oi@rocketseat.com.br <a href=".">por </a> m.convertkit.com </span></span>
                            </div>
                            <div className={'div-focused-mail-content-info-destiny-option-icon'}>
                                <span className={'focused-mail-content-info-destiny-option-text'}>para mim</span>
                                <div className={'focused-mail-content-info-destiny-option-icon'}> <img src="https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_black_20dp.png" alt="" /> </div>
                            </div>
                        </div>
                        <div className={'div-focused-mail-content-info-right-end'}>
                            <div className={'focused-mail-content-info-right-end-date'}>
                                <span className={'focused-mail-content-info-right-end-date-text'}>31 de jul. de 2021 10:19 (há 5 dias)</span>
                            </div>
                            <div className={'focused-mail-right-end-button'}>
                                <img alt='staricon' src='https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png' className={'focused-mail-right-end-icon'}></img>
                            </div>
                            <div className={'focused-mail-right-end-button'}>
                                <img alt='replyicon' src='https://www.gstatic.com/images/icons/material/system/1x/reply_black_20dp.png' className={'focused-mail-right-end-icon'}></img>
                            </div>
                            <div className={'focused-mail-right-end-button'}>
                                <img alt='moreIcon' src='https://www.gstatic.com/images/icons/material/system/1x/more_vert_black_20dp.png' className={'focused-mail-right-end-icon'}></img>
                            </div>
                        </div>
                        
                    </div>
                    <div className={'div-focused-mail-content'}>
                            <div>
                                <div className={'div-focused-mail-content-text'}>
                                    <span className={'focused-mail-content-text'}>Tudo o que nós fazemos aqui na Rocketseat, sempre foi ouvindo toda a comunidade.</span>
                                </div>
                                <div className={'div-focused-mail-content-text'}>
                                    <span className={'focused-mail-content-text'}>Através das mensagens que nós recebemos por email, por whats, no discord, nos directs, ou mesmo pelas conversas que a gente acompanha em todas as redes sociais, estamos sempre ouvindo você.</span>
                                </div>
                                <div className={'div-focused-mail-content-text'}>
                                    <span className={'focused-mail-content-text'}>Mas nem sempre nós deixamos isso claro, e por isso eu quero te pedir desculpas.</span>
                                </div>
                                <div className={'div-focused-mail-content-text'}>
                                    <span className={'focused-mail-content-text'}>Nosso propósito é impulsionar as pessoas e dar a elas o poder de acessarem as melhores oportunidades de suas carreiras através de um aprendizado contínuo, colaborativo, prático e personalizado.</span>
                                </div>
                                <div className={'div-focused-mail-content-text'}>
                                    <span className={'focused-mail-content-text'}>E como comunidade, nós sabemos que a única forma de superar os desafios, corrigir os nossos erros e levarmos todo o ecossistema de programação para o próximo nível, é fazendo isso juntos.</span>
                                </div>
                                <div className={'div-focused-mail-content-text'}>
                                    <span className={'focused-mail-content-text'}>Então agora eu gostaria de pedir a sua ajuda para construirmos juntos o futuro da educação em tecnologia no Brasil:</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>  
               
                <div className="lateral-pagination" id="lateral-pagination">
                    <div className={withstarlateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div className={"div-pagination-empty-text"}>
                            <span className={"pagination-empty-text"}>Nenhuma mensagem com estrela. As estrelas permitem dar às mensagens um status especial para torná-las mais fáceis de encontrar. Para marcar uma mensagem com estrela, clique no contorno de estrela ao lado de qualquer mensagem ou conversa.</span>
                        </div>
                    </div>
                    <div className={postponedlateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div className={"div-pagination-empty-text"}>
                            <span className={"pagination-empty-text"}></span>
                        </div>
                    </div>
                    <div className={sentlateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div className={"div-pagination-empty-text"}>
                            <span className={"pagination-empty-text"}>Nenhuma mensagem foi enviada! <a className="pagination-sent-link" href="...">Envie</a> uma agora!</span>
                        </div>
                    </div>
                    <div className={draftlateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div className={"div-pagination-empty-text"}>
                            <span className={"pagination-empty-text"}>Não há rascunhos salvos.<br/> A opção de salvar um rascunho permite manter uma mensagem que não está pronta para ser enviada.</span>
                        </div>
                    </div>
                    <div className={importantlateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div id="lateral-pagination-view-mailbox">
                            <div className="lateral-pagination-mailbox">
                                <div className={mainmailboxfocus?"div-main-mailbox-cards-body":"div-mailbox-cards-body-disabled"} id="div-cards-body-lateral-pagination">
                                    {importantmails.map((item, key) => {
                                        return <MainCardMail title={item.title} content={item.content} total={item.total}></MainCardMail>
                                    })}
                                </div>
                                <footer className="div-footer-mailbox-important" id="div-footer-view-mailbox">
                        <div className="footer-view-mailbox-left-content" id="footer-view-mailbox-left-content">
                            <div className="memory-usage-bar" id="memory-usage-bar">
                                <div className="memory-usage-sub-bar" id="memory-usage-sub-bar"></div>
                            </div>
                            <div className="div-memory-usage-count" id="div-memory-usage-count">
                                <div className="memory-usage-count" id="memory-usage-count">
                                    <span className="memory-usage-count-text" id="memory-usage-count-text">0,85 GB de 15 GB usado(s)</span>
                                </div>
                                <div className="div-memory-usage-count-icon" id="div-memory-usage-count-icon">
                                    <div className="memory-usage-count-icon" id="memory-usage-count-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div className="view-mailbox-footer-spacing-div-left" id="view-mailbox-footer-spacing-div-left"></div>
                        <div className="footer-view-mailbox-center-content" id="footer-view-mailbox-center-content">
                            <span className="footer-view-mailbox-help-terms-text" id="footer-view-mailbox-help-terms-text">Termos</span>
                            <span className="spacing-point" id="spacing-point">·</span>
                            <span  className="footer-view-mailbox-help-privacy-text" id="footer-view-mailbox-help-privacy-text">Privacidade</span>
                            <span className="spacing-point" id="spacing-point">·</span>
                            <span className="footer-view-mailbox-help-program-regulations-text" id="footer-view-mailbox-help-program-regulations-text">Regulamentos do programa</span>
                        </div>
                        <div className="view-mailbox-footer-spacing-div-right" id="view-mailbox-footer-spacing-div-right"></div>
                        <div className="footer-view-mailbox-right-content">
                            <div className="footer-view-mailbox-activity-count" id="footer-view-mailbox-activity-count">
                                <span className="footer-view-mailbox-activity-count-text" id="footer-view-mailbox-activity-count-text">Última atividade da conta: há 19 minutos</span>
                            </div>
                            <div className="footer-view-mailbox-activity-details" id="footer-view-mailbox-activity-details">
                                <span className="footer-view-mailbox-activity-details-text" id="footer-view-mailbox-activity-details-text">Detalhes</span>
                            </div>
                        </div>
                    </footer>
                            </div>
                        </div>
                    </div>
                    <div className={chatslateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div className={"div-pagination-empty-text"}>
                            <span className={"pagination-empty-text"}>Nenhuma mensagem de bate-papo.</span>
                        </div>
                    </div>
                    <div className={scheduledlateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div className={"div-pagination-empty-text"} id='lateral-pagination-scheduled'>
                            <img className="scheduled-text-icon" src="https://www.gstatic.com/images/icons/material/system/1x/schedule_send_black_20dp.png" alt="scheduledIcon" />
                            <span className={"pagination-empty-text"}>As mensagens na Conversa programada serão enviadas no horário programado.</span>
                        </div>
                    </div>
                    <div className={allemailslateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div id="lateral-pagination-view-mailbox">
                            <div className="lateral-pagination-mailbox">
                                <div className={mainmailboxfocus?"div-main-mailbox-cards-body":"div-mailbox-cards-body-disabled"} id="div-cards-body">
                                    {importantmails.map((item, key) => {
                                        return <MainCardMail title={item.title} content={item.content} total={item.total}></MainCardMail>
                                    })}
                                </div>
                                <div className={mainmailboxfocus?"div-main-mailbox-cards-body":"div-mailbox-cards-body-disabled"} id="div-cards-body">
                                    {mainmailaccounts.map((item, key) => {
                                    return <MainCardMail 
                                    title={item.title} 
                                    tofilefunct={() => removemainmail(item.id)} 
                                    content={item.content} 
                                    total={item.total}></MainCardMail>
                                    })}
                                </div>
                                <footer className="div-footer-mailbox-important" id="div-footer-view-mailbox">
                                    <div className="footer-view-mailbox-left-content" id="footer-view-mailbox-left-content">
                                        <div className="memory-usage-bar" id="memory-usage-bar">
                                            <div className="memory-usage-sub-bar" id="memory-usage-sub-bar"></div>
                                        </div>
                                        <div className="div-memory-usage-count" id="div-memory-usage-count">
                                            <div className="memory-usage-count" id="memory-usage-count">
                                                <span className="memory-usage-count-text" id="memory-usage-count-text">0,85 GB de 15 GB usado(s)</span>
                                            </div>
                                            <div className="div-memory-usage-count-icon" id="div-memory-usage-count-icon">
                                                <div className="memory-usage-count-icon" id="memory-usage-count-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-mailbox-footer-spacing-div-left" id="view-mailbox-footer-spacing-div-left"></div>
                                    <div className="footer-view-mailbox-center-content" id="footer-view-mailbox-center-content">
                                        <span className="footer-view-mailbox-help-terms-text" id="footer-view-mailbox-help-terms-text">Termos</span>
                                        <span className="spacing-point" id="spacing-point">·</span>
                                        <span  className="footer-view-mailbox-help-privacy-text" id="footer-view-mailbox-help-privacy-text">Privacidade</span>
                                        <span className="spacing-point" id="spacing-point">·</span>
                                        <span className="footer-view-mailbox-help-program-regulations-text" id="footer-view-mailbox-help-program-regulations-text">Regulamentos do programa</span>
                                    </div>
                                    <div className="view-mailbox-footer-spacing-div-right" id="view-mailbox-footer-spacing-div-right"></div>
                                    <div className="footer-view-mailbox-right-content">
                                        <div className="footer-view-mailbox-activity-count" id="footer-view-mailbox-activity-count">
                                            <span className="footer-view-mailbox-activity-count-text" id="footer-view-mailbox-activity-count-text">Última atividade da conta: há 19 minutos</span>
                                        </div>
                                        <div className="footer-view-mailbox-activity-details" id="footer-view-mailbox-activity-details">
                                            <span className="footer-view-mailbox-activity-details-text" id="footer-view-mailbox-activity-details-text">Detalhes</span>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div className={spamlateralpagination?"div-lateral-pagination-mailbox-spam":"div-lateral-pagination-mailbox-disabled"}>
                        <div className={"div-pagination-empty-text"} id='lateral-pagination-spam'>
                            <span className={"pagination-empty-text"}>As mensagens que ficarem mais de 30 dias na pasta "Spam" serão excluídas automaticamente.</span>
                        </div>
                        <div id='div-lateral-pagination-spam-empty'>
                            <span className='lateral-pagination-spam-empty-text'>Oba! Nenhum spam!</span>
                        </div>
                    </div>
                    <div className={trashlateralpagination?"div-lateral-pagination-mailbox":"div-lateral-pagination-mailbox-disabled"}>
                        <div id="lateral-pagination-view-mailbox">
                            <div className="lateral-pagination-mailbox">
                                <div id="div-lateral-pagination-message">
                                    <span id="lateral-pagination-message">As mensagens que ficarem na pasta "Lixeira" mais de 30 dias serão excluídas automaticamente.<br/><a id="lateral-pagination-message-link" href="x">Esvaziar a lixeira agora</a> </span>
                                </div>
                                <div className={mainmailboxfocus?"div-main-mailbox-cards-body":"div-mailbox-cards-body-disabled"} id="div-cards-body">
                                    {importantmails.map((item, key) => {
                                        return <MainCardMail title={item.title} content={item.content} total={item.total}></MainCardMail>
                                    })}
                                </div>
                                <footer className="div-footer-mailbox-important" id="div-footer-view-mailbox">
                        <div className="footer-view-mailbox-left-content" id="footer-view-mailbox-left-content">
                            <div className="memory-usage-bar" id="memory-usage-bar">
                                <div className="memory-usage-sub-bar" id="memory-usage-sub-bar"></div>
                            </div>
                            <div className="div-memory-usage-count" id="div-memory-usage-count">
                                <div className="memory-usage-count" id="memory-usage-count">
                                    <span className="memory-usage-count-text" id="memory-usage-count-text">0,85 GB de 15 GB usado(s)</span>
                                </div>
                                <div className="div-memory-usage-count-icon" id="div-memory-usage-count-icon">
                                    <div className="memory-usage-count-icon" id="memory-usage-count-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div className="view-mailbox-footer-spacing-div-left" id="view-mailbox-footer-spacing-div-left"></div>
                        <div className="footer-view-mailbox-center-content" id="footer-view-mailbox-center-content">
                            <span className="footer-view-mailbox-help-terms-text" id="footer-view-mailbox-help-terms-text">Termos</span>
                            <span className="spacing-point" id="spacing-point">·</span>
                            <span  className="footer-view-mailbox-help-privacy-text" id="footer-view-mailbox-help-privacy-text">Privacidade</span>
                            <span className="spacing-point" id="spacing-point">·</span>
                            <span className="footer-view-mailbox-help-program-regulations-text" id="footer-view-mailbox-help-program-regulations-text">Regulamentos do programa</span>
                        </div>
                        <div className="view-mailbox-footer-spacing-div-right" id="view-mailbox-footer-spacing-div-right"></div>
                        <div className="footer-view-mailbox-right-content">
                            <div className="footer-view-mailbox-activity-count" id="footer-view-mailbox-activity-count">
                                <span className="footer-view-mailbox-activity-count-text" id="footer-view-mailbox-activity-count-text">Última atividade da conta: há 19 minutos</span>
                            </div>
                            <div className="footer-view-mailbox-activity-details" id="footer-view-mailbox-activity-details">
                                <span className="footer-view-mailbox-activity-details-text" id="footer-view-mailbox-activity-details-text">Detalhes</span>
                            </div>
                        </div>
                    </footer>
                            </div>
                        </div>
                    </div>
                    <div className="footer-mailbox-spacing-div" id="footer-mailbox-spacing-div"></div>
                    <footer className="div-footer-mailbox" id="div-footer-view-mailbox">
                        <div className="footer-view-mailbox-left-content" id="footer-view-mailbox-left-content">
                            <div className="memory-usage-bar" id="memory-usage-bar">
                                <div className="memory-usage-sub-bar" id="memory-usage-sub-bar"></div>
                            </div>
                            <div className="div-memory-usage-count" id="div-memory-usage-count">
                                <div className="memory-usage-count" id="memory-usage-count">
                                    <span className="memory-usage-count-text" id="memory-usage-count-text">0,85 GB de 15 GB usado(s)</span>
                                </div>
                                <div className="div-memory-usage-count-icon" id="div-memory-usage-count-icon">
                                    <div className="memory-usage-count-icon" id="memory-usage-count-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div className="view-mailbox-footer-spacing-div-left" id="view-mailbox-footer-spacing-div-left"></div>
                        <div className="footer-view-mailbox-center-content" id="footer-view-mailbox-center-content">
                            <span className="footer-view-mailbox-help-terms-text" id="footer-view-mailbox-help-terms-text">Termos</span>
                            <span className="spacing-point" id="spacing-point">·</span>
                            <span  className="footer-view-mailbox-help-privacy-text" id="footer-view-mailbox-help-privacy-text">Privacidade</span>
                            <span className="spacing-point" id="spacing-point">·</span>
                            <span className="footer-view-mailbox-help-program-regulations-text" id="footer-view-mailbox-help-program-regulations-text">Regulamentos do programa</span>
                        </div>
                        <div className="view-mailbox-footer-spacing-div-right" id="view-mailbox-footer-spacing-div-right"></div>
                        <div className="footer-view-mailbox-right-content">
                            <div className="footer-view-mailbox-activity-count" id="footer-view-mailbox-activity-count">
                                <span className="footer-view-mailbox-activity-count-text" id="footer-view-mailbox-activity-count-text">Última atividade da conta: há 19 minutos</span>
                            </div>
                            <div className="footer-view-mailbox-activity-details" id="footer-view-mailbox-activity-details">
                                <span className="footer-view-mailbox-activity-details-text" id="footer-view-mailbox-activity-details-text">Detalhes</span>
                            </div>
                        </div>
                    </footer>
                </div>                
                
                <div className={writemodal?'div-write-modal-main-responsivity':'div-write-modal-main-responsivity-disabled'}>
                    <div className={writemodalminimized?'write-modal-main-responsivity-minimized':'write-modal-main-responsivity'} id={'write-modal-main-responsivity'}>
                    <div className={'div-write-modal-responsivity'} id='div-write-modal-responsivity'>
                        <div className={writemodal? 'div-write-modal':'div-write-modal-disabled'} id={writemodal? 'div-write-modal-expanded':'div-write-modal-disabled'}>
                            <div className={writemodalminimized?'write-modal-top-minimized':'write-modal-top'} id={'write-modal-top'}>
                                <div className={'new-message-top-funct'} id={'new-message-top-funct'} onClick={MinimizeWriteModal} >
                                    <div className={'div-new-message-top'} id={'div-new-message-top'}>
                                        <span className={'new-message-top-text'} id={'new-message-top-text'}>Nova mensagem</span>
                                    </div>
                                    <div className='spacing-minimize-top'></div>
                                </div>
                                <div className={'div-write-modal-top-icons'} id={'div-write-modal-top-icons'}>
                                    <div onClick={() => {setWriteModalMinimized(old => !old)}} className={'div-write-modal-minimize-icon'} id={'div-write-modal-minimize-icon'}>
                                        <div className={'write-modal-minimize-icon'} id={'write-modal-minimize-icon'}></div>
                                    </div>
                                    <div onClick={ShowWriteExpandedModal} className={'div-write-modal-expands-icon'} id={'div-write-modal-minimize-icon'}>
                                        <div className={'write-modal-expands-icon'} id={'write-modal-minimize-icon'}></div>
                                    </div>
                                    <div onClick={CloseWriteModal} className={'div-write-modal-close-icon'} id={'div-write-modal-minimize-icon'}>
                                        <div className={'write-modal-close-icon'} id={'write-modal-minimize-icon'}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={'write-modal-center-end'} id={'write-modal-center-end'}>
                                    <div className={'write-modal-main'} id={'write-modal-main'}>
                                        <div className={'write-modal-inputs'} id={'write-modal-inputs'}>
                                            <div className={'div-write-modal-for-text-input'} id={'div-write-modal-for-text-input'}>
                                                <input placeholder='Destinatários' required className={'write-modal-for-text-input'} id={'write-modal-for-text-input'} type="text"/>
                                                <label className={'write-modal-for-text-input-label'} id={'write-modal-for-text-input-label'}></label>
                                            </div>
                                            <div className={'div-write-modal-subject-input'} id={'div-write-modal-subject-input'}>
                                                <input className={'write-modal-subject-input'} id={'write-modal-subject-input'} placeholder='Assunto' type="text"/>
                                            </div>
                                            <div className={'div-write-modal-text-area'} id={'div-write-modal-text-area'}>
                                                <textarea className={'write-modal-text-area'} id={'write-modal-text-area'}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'write-modal-footer'} id={'write-modal-footer'}>
                                        <div className={'write-modal-footer-left-center-button-icons'} id={'write-modal-footer-left-center-button-icons'}>
                                            <div className={'div-write-modal-footer-button'}>
                                                <button className={'write-modal-footer-button'}>Enviar</button>
                                                <div className={'div-write-modal-footer-button-option-icon'} id={'div-write-modal-footer-button-option-icon'}>
                                                    <div className={'write-modal-footer-button-option-icon'} id={'write-modal-footer-button-option-icon'}></div>
                                                </div>
                                            </div>                            
                                            <div title='Opções de formatação' className={'div-write-modal-footer-formatting-icon'} id={'div-write-modal-footer-formatting-icon'}>
                                                <div className={'write-modal-footer-formatting-icon'} id={'write-modal-footer-formatting-icon'}></div>
                                            </div>
                                            <div title='Anexar arquivos' className={'div-write-modal-footer-attach-icon'} id={'div-write-modal-footer-attach-icon'}>
                                                <div className={'write-modal-footer-attach-icon'} id={'write-modal-footer-attach-icon'}></div>
                                            </div>
                                            <div title='Inserir link (Ctrl-K)' className={'div-write-modal-footer-insert-link-icon'} id={'div-write-modal-footer-insert-link-icon'}>
                                                <div className={'write-modal-footer-insert-link-icon'} id={'write-modal-footer-insert-link-icon'}></div>
                                            </div>
                                            <div title='Inserir emoji (Ctrl-Shift-2)' className={'div-write-modal-footer-insert-emoji-icon'} id={'div-write-modal-footer-insert-emoji-icon'}>
                                                <div className={'write-modal-footer-insert-emoji-icon'} id={'write-modal-footer-insert-emoji-icon'}></div>
                                            </div>
                                            <div title='Inserir arquivos com o Google Drive' className={'div-write-modal-footer-insert-files-drive-icon'} id={'div-write-modal-footer-insert-files-drive-icon'}>
                                                <div className={'write-modal-footer-insert-files-drive-icon'} id={'write-modal-footer-insert-files-drive-icon'}></div>
                                            </div>
                                            <div title='Inserir foto' className={'div-write-modal-footer-insert-photo-icon'} id={'div-write-modal-footer-insert-photo-icon'}>
                                                <div className={'write-modal-footer-insert-photo-icon'} id={'write-modal-footer-insert-photo-icon'}></div>
                                            </div>
                                            <div title='Ative / desative o modo confidencial' className={'div-write-modal-footer-confidential-mode-icon'} id={'div-write-modal-footer-confidential-mode-icon'}>
                                                <div className={'write-modal-footer-confidential-mode-icon'} id={'write-modal-footer-confidential-mode-icon'}></div>
                                            </div>
                                            <div title='Inserir assinatura' className={'div-write-modal-footer-insert-signature-icon'} id={'div-write-modal-footer-insert-signature-icon'}>
                                                <div className={'write-modal-footer-insert-signature-icon'} id={'write-modal-footer-insert-signature-icon'}></div>
                                            </div>
                                        </div>
                                        <div className={'write-modal-footer-right-end-button-icons'} id={'write-modal-footer-right-end-button-icons'}>
                                        <div title='Mais opções' className={'div-write-modal-footer-more-options-icon'} id={'div-write-modal-footer-more-options-icon'}>
                                            <div className={'write-modal-footer-more-options-icon'} id={'write-modal-footer-more-options-icon'}></div>
                                        </div>
                                        <div title='Descartar rascunho (Ctrl-Shift-D)' className={'div-write-modal-footer-delete-draft-icon'} id={'div-write-modal-footer-delete-draft-icon'}>
                                            <div className={'write-modal-footer-delete-draft-icon'} id={'write-modal-footer-delete-draft-icon'}></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <div className={'write-modal-responsivity'} id={'write-modal-responsivity'}></div>
                    </div>
                    <div className={'div-write-modal-responsivity-end'}></div>
                </div>
                </div>
                <div className={writeexpandedmodal?'write-modal-expanded-main-responsivity':'write-modal-expanded-main-disabled'} id='write-modal-expanded-main-responsivity'>
                        <div className={'div-write-modal-responsivity'} id='div-write-modal-responsivity'>
                            <div className={writeexpandedmodal? 'div-write-modal-expanded':'div-write-modal-disabled'} id={writeexpandedmodal? 'div-write-modal-expanded':'div-write-modal-disabled'}>
                                <div className={writemodalminimized?'write-modal-top-minimized':'write-modal-top'} id={'write-modal-top'}>
                                    <div className={'new-message-top-funct'} onClick={MinimizeWriteModal} >
                                        <div className={'div-new-message-top'} id={'div-new-message-top'}>
                                            <span className={'new-message-top-text'} id={'new-message-top-text'}>Nova mensagem</span>
                                        </div>
                                        <div className='spacing-minimize-top'></div>
                                    </div>
                                    <div className={'div-write-modal-top-icons'} id={'div-write-modal-top-icons'}>
                                        <div onClick={() => {setWriteModalMinimized(old => !old)}} className={'div-write-modal-minimize-icon'} id={'div-write-modal-minimize-icon'}>
                                            <div className={'write-modal-minimize-icon'} id={'write-modal-minimize-icon'}></div>
                                        </div>
                                        <div onClick={ShowWriteExpandedModal} className={'div-write-modal-expands-icon'} id={'div-write-modal-minimize-icon'}>
                                            <div className={'write-modal-expands-icon'} id={'write-modal-minimize-icon'}></div>
                                        </div>
                                        <div onClick={CloseWriteModal} className={'div-write-modal-close-icon'} id={'div-write-modal-minimize-icon'}>
                                            <div className={'write-modal-close-icon'} id={'write-modal-minimize-icon'}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'write-modal-center-end'}>
                                        <div className={'write-modal-main'} id={'write-modal-main'}>
                                            <div className={'write-modal-inputs'} id={'write-modal-inputs'}>
                                                <div className={'div-write-modal-for-text-input'} id={'div-write-modal-for-text-input'}>
                                                    <input placeholder='Destinatários' required className={'write-modal-for-text-input'} id={'write-modal-for-text-input'} type="text"/>
                                                    <label className={'write-modal-for-text-input-label'} id={'write-modal-for-text-input-label'}></label>
                                                </div>
                                                <div className={'div-write-modal-subject-input'} id={'div-write-modal-subject-input'}>
                                                    <input className={'write-modal-subject-input'} id={'write-modal-subject-input'} placeholder='Assunto' type="text"/>
                                                </div>
                                                <div className={'div-write-modal-text-area'} id={'div-write-modal-text-area'}>
                                                    <textarea className={'write-modal-text-area'} id={'write-modal-text-area'}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'write-modal-footer'} id={'write-modal-footer'}>
                                        <div className={'write-modal-footer-left-center-button-icons'} id={'write-modal-footer-left-center-button-icons'}>
                                            <div className={'div-write-modal-footer-button'}>
                                                <button className={'write-modal-footer-button'}>Enviar</button>
                                                <div className={'div-write-modal-footer-button-option-icon'} id={'div-write-modal-footer-button-option-icon'}>
                                                    <div className={'write-modal-footer-button-option-icon'} id={'write-modal-footer-button-option-icon'}></div>
                                                </div>
                                            </div>                            
                                            <div title='Opções de formatação' className={'div-write-modal-footer-formatting-icon'} id={'div-write-modal-footer-formatting-icon'}>
                                                <div className={'write-modal-footer-formatting-icon'} id={'write-modal-footer-formatting-icon'}></div>
                                            </div>
                                            <div title='Anexar arquivos' className={'div-write-modal-footer-attach-icon'} id={'div-write-modal-footer-attach-icon'}>
                                                <div className={'write-modal-footer-attach-icon'} id={'write-modal-footer-attach-icon'}></div>
                                            </div>
                                            <div title='Inserir link (Ctrl-K)' className={'div-write-modal-footer-insert-link-icon'} id={'div-write-modal-footer-insert-link-icon'}>
                                                <div className={'write-modal-footer-insert-link-icon'} id={'write-modal-footer-insert-link-icon'}></div>
                                            </div>
                                            <div title='Inserir emoji (Ctrl-Shift-2)' className={'div-write-modal-footer-insert-emoji-icon'} id={'div-write-modal-footer-insert-emoji-icon'}>
                                                <div className={'write-modal-footer-insert-emoji-icon'} id={'write-modal-footer-insert-emoji-icon'}></div>
                                            </div>
                                            <div title='Inserir arquivos com o Google Drive' className={'div-write-modal-footer-insert-files-drive-icon'} id={'div-write-modal-footer-insert-files-drive-icon'}>
                                                <div className={'write-modal-footer-insert-files-drive-icon'} id={'write-modal-footer-insert-files-drive-icon'}></div>
                                            </div>
                                            <div title='Inserir foto' className={'div-write-modal-footer-insert-photo-icon'} id={'div-write-modal-footer-insert-photo-icon'}>
                                                <div className={'write-modal-footer-insert-photo-icon'} id={'write-modal-footer-insert-photo-icon'}></div>
                                            </div>
                                            <div title='Ative / desative o modo confidencial' className={'div-write-modal-footer-confidential-mode-icon'} id={'div-write-modal-footer-confidential-mode-icon'}>
                                                <div className={'write-modal-footer-confidential-mode-icon'} id={'write-modal-footer-confidential-mode-icon'}></div>
                                            </div>
                                            <div title='Inserir assinatura' className={'div-write-modal-footer-insert-signature-icon'} id={'div-write-modal-footer-insert-signature-icon'}>
                                                <div className={'write-modal-footer-insert-signature-icon'} id={'write-modal-footer-insert-signature-icon'}></div>
                                            </div>
                                        </div>
                                        <div className={'write-modal-footer-right-end-button-icons'} id={'write-modal-footer-right-end-button-icons'}>
                                            <div title='Mais opções' className={'div-write-modal-footer-more-options-icon'} id={'div-write-modal-footer-more-options-icon'}>
                                                <div className={'write-modal-footer-more-options-icon'} id={'write-modal-footer-more-options-icon'}></div>
                                            </div>
                                            <div title='Descartar rascunho (Ctrl-Shift-D)' className={'div-write-modal-footer-delete-draft-icon'} id={'div-write-modal-footer-delete-draft-icon'}>
                                                <div className={'write-modal-footer-delete-draft-icon'} id={'write-modal-footer-delete-draft-icon'}></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            <div className={'write-modal-responsivity'} id={'write-modal-responsivity'}></div>
                        </div>
                    <div className={'div-write-modal-responsivity-end'}></div>
                
                </div>
            </div>   
        </div>

    )
}
// #2021240f 