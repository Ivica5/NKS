import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

class Nav extends React.Component {

    render() {
        return (
            <div className="navigation">
                <ul>
                    {this.props.nav.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

export default Nav;