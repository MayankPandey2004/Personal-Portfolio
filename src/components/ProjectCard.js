/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard({ title, description, imgUrl }) {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl} style={{height:300}}/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
