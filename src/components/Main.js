import React from "react"
import api from "../utils/Api"
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getProfile()
            .then((res) => {
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
            .catch(err => console.log(err))
    }, [])

    React.useEffect(() => {
        api.getCards()
            .then(res => setCards(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                {userAvatar && (<img className="profile__avatar" src={userAvatar} alt="Аватарка" />)}
                    <button className="profile__button-avatar" type="button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__button-editor" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}>
                </button>
            </section>
            <section className="elements">
                <ul className="elements__list"> {
                    cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                            onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main