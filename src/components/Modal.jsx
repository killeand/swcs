import Button from './Button';
import '../styles/Modal.css';

export default function Modal({ title, children, className, onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal-dialog">
                <div className="modal-handle">
                    <div className="modal-title">{(title)?title:""}</div>
                    <Button color="red" className="bi-x-lg" onClick={(onClose)?onClose:()=>console.error("Modal component needs onClose prop... did you forget it?")} />
                </div>
                <div className={"modal-content " + (className)?className:""}>
                    {children}
                </div>
            </div>
        </div>
    );
}