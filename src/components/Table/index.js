import React from 'react';
import Remove from '../../assets/SVG/cross.svg';
import './styles.css';

class Table extends React.Component {
    render() {
        return (
            <table className="table-beer">
                <thead>
                    <tr>
                        <th>#</th>
                        {this.props.columns.map((item, index) => (
                            <th key={index}>{item.header}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item, index)=>(
                        <tr key={index}>
                            <td width="10%">{index + 1}</td>
                            <td width="30%">
                                <img src={item.image} height="120px" alt="error"></img>
                            </td>
                            <td width="40%">{item.name}</td>
                            <td width="10%">{item.quantity}</td>
                            <td width="10%">
                                <img src={Remove} className="tableButton" alt="error" onClick={item.removeAction}></img>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Table;