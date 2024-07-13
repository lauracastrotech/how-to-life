import React from 'react';
// import './Modal.css';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close" onClick={onClose}>X</span>
                {children}
            </div>
        </div>
    );
}

export default Modal;