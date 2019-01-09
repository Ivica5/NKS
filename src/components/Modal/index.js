import React from 'react';
import './styles.css';
import { Modal } from 'react-bootstrap';

class M extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <Modal.Dialog>
                <div className="modal-header">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="modal-body">
                        {this.props.children}
                </div>
                <div className="modal-footer">
                    {this.props.buttons.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })}
                </div>
            </Modal.Dialog>
        )
    }
}

export default M;