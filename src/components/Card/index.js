import React from 'react';
import './styles.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-favourite-icon">
                    <img src={props.star} className="favouriteIcon" alt="error" onClick = {props.onClickFavourite}></img>
                </div>
                <div className="card-image-container">
                    <img src={props.image} alt="error"></img>
                </div>
                <div className="card-info-icon">
                    <img src={props.info} alt="error" onClick = {props.onClickInfo}></img>
                </div>
                <div className="card-add-icon">
                    <img src={props.cart} className="cardAdd" alt="error" onClick = {props.onClickCart}></img>
                </div>
            </div>
            <div className="card-footer">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;