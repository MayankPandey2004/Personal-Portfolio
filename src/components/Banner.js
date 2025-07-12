/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.gif'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["AWS Certified SA", "Full Stack Developer", "Native App Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150); 
    const [pause, setPause] = useState(false);
    const period = 2000;

    useEffect(() => {
        if (pause) return;

        const timeout = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(timeout);
    }, [text, pause]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setPause(true);
            setTimeout(() => {
                setIsDeleting(true);
                setPause(false);
            }, period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }

        // Adjust typing speed
        if (isDeleting) {
            setDelta(75); // faster deleting
        } else {
            setDelta(150); // slower typing
        }
    };

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Mayank`}</h1>
                                    <h1><span className='wrap'>{text}</span></h1>
                                    <p>I'm a computer science student proficient in C, C++, Java, Python, and web/app development using React, PHP, MySQL, and React Native. This is my portfolio...</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} style={{ position: 'relative', bottom: 100 }} alt="Header-Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
