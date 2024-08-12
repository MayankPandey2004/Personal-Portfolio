/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cppIcon from '../assets/img/cpp-icon.png'; 
import cIcon from '../assets/img/c-icon.png';    // Example path
import javaIcon from '../assets/img/java-icon.svg';  // Example path
import htmlIcon from '../assets/img/html-icon.png';  // Example path
import cssIcon from '../assets/img/css-icon.png';    // Example path
import jsIcon from '../assets/img/javascript-icon.png'; // Example path
import tsIcon from '../assets/img/typescript-icon.png'; // Example path
import mysqlIcon from '../assets/img/mysql-icon.png'; // Example path
import reactjsIcon from '../assets/img/reactjs-icon.png'; // Example path
import reactnativeIcon from '../assets/img/reactnative-icon.svg'; // Example path
import bootstrapIcon from '../assets/img/bootstrap-icon.svg'; // Example path
import colorSharp from '../assets/img/color-sharp.png';

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container style={{paddingTop:200,paddingBottom:100}}>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Skills</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '3rem' }}>
                                Proficient in various programming languages and development tools, ensuring high-quality software solutions.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={cppIcon} alt='C/C++' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>C++</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={cIcon} alt='C/C++' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>C</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={javaIcon} alt='Java' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>Java</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={htmlIcon} alt='HTML' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>HTML</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={cssIcon} alt='CSS' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>CSS</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={jsIcon} alt='JavaScript' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>JavaScript</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={tsIcon} alt='TypeScript' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>TypeScript</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={mysqlIcon} alt='MySQL' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>MySQL</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={reactjsIcon} alt='ReactJS' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>ReactJS</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={reactnativeIcon} alt='React Native' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>React Native</h3>
                                </div>
                                <div className='item' style={{ padding: '20px', textAlign: 'center' }}>
                                    <img src={bootstrapIcon} alt='Bootstrap' style={{ maxWidth: '110px', height: '100px', marginBottom: '20px' }} />
                                    <h3>Bootstrap</h3>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} style={{ position: 'absolute', left: 0, bottom: 0, zIndex: -1, width: '50%', height: 'auto' }} />
        </section>
    );
}
