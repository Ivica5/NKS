import React from 'react';
import './styles.css';

class Grid extends React.Component{
    render(){
        return (
            <div className="grid">
                {this.props.items.map((item,index) => {
                    return item;
                })}
            </div>
        )
    }
}

export default Grid;