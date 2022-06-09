import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className='page'>
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm
                name='editor'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                title='Редактировать профиль'
                buttonText='Сохранить'
            >
                <input className='form__input' required minLength='2' maxLength='40' id='name' name='name'
                    type='text' placeholder='Имя' />
                <span id='name-error' className='form__error'></span>
                <input className='form__input' required minLength='2' maxLength='200' id='info' name='about'
                    type='text' placeholder='Профессиональная деятельность' />
                <span id='info-error' className='form__error'></span>
            </PopupWithForm>

            <PopupWithForm
                name='add'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                title='Новое место'
                buttonText='Создать'
            >
                <input className='form__input' required minLength='2' maxLength='30' id='title' name='name'
                    type='text' placeholder='Название' />
                <span id='title-error' className='form__error'></span>
                <input className='form__input' required id='link' name='link' type='url'
                    placeholder='Ссылка на картинку' />
                <span id='link-error' className='form__error'></span>

            </PopupWithForm>

            <PopupWithForm
                name='avatar'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                title='Обновить аватар'
                buttonText='Сохранить'
            >
                <input className='form__input' required id='avatar' name='avatar' type='url'
                    placeholder='Cсылка на новый аватар' />
                <span id='avatar-error' className='form__error'></span>
            </PopupWithForm>
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div>

    )
}

export default App
