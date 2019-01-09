import React from 'react';
import './styles.css';

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-icon-container">
                    {
                        this.props.children
                    }
                </div>               
            </div>
        )
    }
}

export default Footer;