import React from 'react';
import './styles.css';

class Icon extends React.Component {
    render(){
        return (
            <div className="icon">
                <a target='blank' href={this.props.href}>
                    <img src={this.props.img} alt="error"></img>
                    <p>{this.props.text}</p>                 
                </a>
            </div>
        )
    }
}

export default Icon;