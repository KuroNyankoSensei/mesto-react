function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__containers">
                <div className='popup__container'>
                    <h2 className="popup__title">{props.title}</h2>
                    <form className="form" name={props.name}>
                        {props.children}
                        <button className="popup__button" type="submit">{props.buttonText}</button>
                    </form>
                </div>
                <button className="popup__close" type="button" onClick={props.onClose}></button>
            </div>
        </div>
    )
}

export default PopupWithForm