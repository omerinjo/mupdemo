import React from 'react'

const Modal = (props) => {
    return (
        <div className={`modal ${props.showModal}`} tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{}</h5>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Zatvori</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal