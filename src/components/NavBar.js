/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/git-hub.png';
import navIcon4 from '../assets/img/nav-icon4.png';
import ContactCard from '../assets/img/ContactCard.png';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
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
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/MayankPandey2004/"><img src={navIcon1} alt="Linkedin-Link" /></a>
                                <a href="https://github.com/MayankPandey2004/"><img src={navIcon3} alt="Linkedin-Link" /></a>
                                <a href="https://x.com/TechMayank2004/"><img src={navIcon4} alt="Twitter-Link" /></a>
                                <a href="#" onClick={handleModalOpen}><img src={navIcon2} alt="Contact Card" /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
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
            </Navbar>
        </Router>
    );
}

export default NavBar;
