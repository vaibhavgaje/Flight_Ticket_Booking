import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import PaymentModal from "./modal";
import Payment from "./Payment";

const BookDemo = () => {
  const [show, setShow] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const hideModal = () => {
    setShow(false);
    setIsPaymentModalOpen(false);
  };
  const toPaymentModal = () => {
    setShow(true);
    setIsPaymentModalOpen(true);
  };
  return (
    <div>
      <button onClick={toPaymentModal}>Book Ticket</button>
      {isPaymentModalOpen && (
        <PaymentModal show={show} handleClose={hideModal}>
          <Payment/>
        </PaymentModal>
      )}
    </div>
  );
};

export default BookDemo;
