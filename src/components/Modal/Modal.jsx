
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
export default function MyVerticallyCenteredModal({onHide,children,show,info}) {

//   let modalFade= document.documentElement.getElementsByClassName('modal')
// console.log(modalFade);
// modalFade.addEventListener('click',()=>{
//     console.log('hi');
  // })
    return (
      <>
      {show &&(
       <div className='modal-background' onClick={onHide}></div> 
      )}



      <Modal
      show={show}
        size="lg"
        
        onClick={onHide}
    
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          {info && (
                    <img src="../../public/images/similar/Group 32.png" alt="" />
          )}

        <img onClick={onHide} src="../../public/images/similar/🦆 icon _cancel_.png" className='close-modal-icon' alt="" />
        </Modal.Header>
        <Modal.Body>
       {
        children
       }
        </Modal.Body>
       
      </Modal>
      </>
    );
  }
  