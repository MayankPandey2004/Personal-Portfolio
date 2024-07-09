/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/git-hub.png';
import ContactCard from '../assets/img/ContactCard.png';

export default function Footer() {
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(false);
    const handleModalOpen = () => setShowModal(true);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = ContactCard;
        link.download = 'contact_card.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <footer className='footer'>
            <Container style={{ paddingTop: 50 }}>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <img src={logo} />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/MayankPandey2004/"><img src={navIcon1} alt="Linkedin-Link" /></a>
                            <a href="https://github.com/MayankPandey2004/"><img src={navIcon3} alt="Linkedin-Link" /></a>
                            <a href="#" onClick={handleModalOpen}><img src={navIcon2} alt="Contact Card" /></a>
                        </div>
                        <p>&copy; 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={handleModalClose} style={{ marginTop: 100 }}>
                <Modal.Header>
                    <Modal.Title style={{ color: '#333' }}>Contact Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={ContactCard} alt="Contact Card" className="img-fluid" />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleDownload}>Download</button>
                    <button className="btn btn-primary" onClick={handleModalClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </footer>
    )
}
