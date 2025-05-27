import { Container, Row, Col, Tab, } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {

    const projects = [
        {
            title: "AWS CloudLearn(LMS)",
            description: "using Next.js, AWS, Vercel, Clerk, Stripe",
            imgUrl: projImg4,
        },
        {
            title: "AskMe App",
            description: "using React.js and Go",
            imgUrl: projImg2,
        },
        {
            title: "Leads Management System",
            description: "using React Natice and Go",
            imgUrl: projImg5,
        },
        {
            title: "DKeeper",
            description: "using Motoko, Js and CSS",
            imgUrl: projImg7,
        },
        {
            title: "Realtime Finger Counter",
            description: "using Python and OpenCV",
            imgUrl: projImg8,
        },
        {
            title: "Realtime WebCam Drawing",
            description: "using Python and OpenCV",
            imgUrl: projImg9,
        },
        {
            title: "Custom Certificate Generator",
            description: "using Next.js and Go",
            imgUrl: projImg6,
        },
        {
            title: "Chat App",
            description: "using React Native and Firebase",
            imgUrl: projImg1,
        },       
        {
            title: "Discord Music Bot",
            description: "using Python and discord.dev",
            imgUrl: projImg3,
        },
        
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>These are some of my recent projects that highlight my diverse skill set in developing responsive web layouts to handling dynamic components in mobile apps. These projects reflect my commitment to continuous learning and innovation in the field of software development.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                            <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"} >
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="back-image"></img>
        </section >
    )
}
export default Projects;
