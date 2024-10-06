import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import React from 'react'

const PaymentModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default PaymentModal