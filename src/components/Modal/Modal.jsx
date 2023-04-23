
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
export default function MyVerticallyCenteredModal({onHide,children,show}) {
    return (
      <Modal
      show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
        <img src="../../public/images/similar/Group 32.png" alt="" />
        <img onClick={onHide} src="../../public/images/similar/🦆 icon _cancel_.png" style={{width:'35px'}} alt="" />
        </Modal.Header>
        <Modal.Body>
       {
        children
       }
        </Modal.Body>
       
      </Modal>
    );
  }
  