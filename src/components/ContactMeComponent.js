import '../styles/ContactMe.css';
import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, { 
      message: message,
      from_name: name,
      to_name: "Korry",
      reply_to: email,
      phone_number: phone,
    }, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div id="contactMe" className="full-page-panel-alternate">
      {window.innerHeight <= window.innerWidth && <><br /></>}
      <h1 style={{ fontSize: "5vw" }}>
        <strong id="contact-header">Contact Me!</strong>
      </h1>
      <p>
        <u>Email:</u> korrytunnicliff@gmail.com
      </p>
      <p> 
        <u>Phone:</u> 720-833-1097
      </p>
      {!submitted && (
        <Form onSubmit={handleSubmit}>
          <br />
          <p>or...</p>
          <br />
          <p>
            <i>Submit a message: </i>
          </p>
          <Row>
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Name: *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-50 form-field-left"
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email: *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-50 form-field-left"
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Control
                  type="text"
                  placeholder="Number: "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-50 form-field-left"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="message" style={{
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Form.Control
                  as="textarea"
                  rows={Math.max(3, Math.ceil(message.length / 50))}
                  placeholder="Message: *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-50 form-field-right"
                />
              </Form.Group>
            </Col>
          </Row>
          <br/>
          <Button variant="primary" type="submit" block="true">
            Submit
          </Button>
        </Form>
      )}
      {submitted && (
        <p>Thank you for contacting me! I will get back to you as soon as possible.</p>
      )}
      <br />
    </div>
  );
};

export default ContactMe;
