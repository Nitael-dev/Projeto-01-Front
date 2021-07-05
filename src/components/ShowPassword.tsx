import "../styles/ShowPassword.scss"

interface CheckboxProps {
    func?: () => void
}

export function ShowPassword({...props}: CheckboxProps) {


    return (
        <div className="div-show-password">
            <input onClick={props.func} className="show-password" id="show-password" type='checkbox' />
            <div className="div-checkbox"></div>
            <label id="show-password-label" className="label-show-password" htmlFor="show-password">Mostrar senha</label>
        </div>
    )
}