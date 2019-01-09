import React from 'react';
import './styles.css';

class Header extends React.Component{
    render(){
        return (
            <div className="header-container">
                <div className="header-image-container">
                    <img className="image" alt="error" src={this.props.image}></img>
                </div>
                <h1 className="header-text">{this.props.title}</h1>
            </div>           
        )
    }
}

export default Header;