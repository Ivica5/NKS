import React from 'react';
import './styles.css';

class Button extends React.Component{
    render(){
        return (
            <button className="button" onClick={this.props.click}>{this.props.text}</button>
        )
    }
}

export default Button;