import React from "react";

function Card({ onCardClick, card, link, name, likes }) {
    function handleClick() {
        onCardClick(card)
    }
    return (
        <div className="element">
            <img className="element__img" src={link} alt={name} onClick={handleClick} />
            <div className="element__box">
                <h2 className="element__text">{name}</h2>
                <div className="element__likes">
                    <button className="element__like" type="button"></button>
                    <span className="element__like-counter">{likes}</span>
                </div>
                <button className="element__delete" type="button"></button>
            </div>
        </div>
    )
}
export default Card