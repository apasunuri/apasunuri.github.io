import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from './ProjectCard';
import '../App.css';

class About extends Component {
    state = {
        projects: [
            {
                name: 'GatorNexus', 
                description: 'A web application tool designed to guide Computer Science students in professional and career development by anonymously sharing statistics and visualizations of student academics, skillsets, and demographics.',
                repo: 'https://github.com/apasunuri/gator-nexus',
                languages: [{name: 'JavaScript', percentage: 77.2}, {name: 'CSS', percentage: 11.7}, {name: 'HTML', percentage: 11.1}],
                date: 'April 20, 2021'
            },
            {
                name: 'Depth and Motion-Aware Frame Interpolation of Computer Graphics', 
                description: 'A Neural Network model that interpolates frames of computer graphics, using the image and the depth and motion vectors of the video frame. Model is trained with computer graphics randomly generated through the Unity engine.',
                repo: 'https://github.com/apasunuri/Deep-Learning-and-CG-Project---Frame-Interpolation',
                languages: [{name: 'Python', percentage: 70.8}, {name: 'C#', percentage: 25.5}, {name: 'ShaderLab', percentage: 2.6}, {name: 'Shell', percentage: 1.1}],
                date: 'December 11, 2020'
            },
            {
                name: 'Pascal Programming Language Interpreter', 
                description: 'An interpreter for the Pascal programming language that was developed using Haskell and functional programming.',
                repo: 'https://github.com/apasunuri/Pascal-Interpreter-Haskell',
                languages: [{name: 'Haskell', percentage: 70.2}, {name: 'Yacc', percentage: 14}, {name: 'Pascal', percentage: 10.2}, {name: 'Logos', percentage: 5.6}],
                date: 'May 11, 2020'
            },
        ]
    }

    render() {
    return (
        <div>
            <h2 className="about-h2">About Me</h2>
            &nbsp;
            <p style={{ color: '#000000', 'font-family': 'Montserrat' }}>Hello! I am currently pursuing my Master's degree in Computer Science with a focus in Machine Learning at Columbia University. I completed my undergraduate education at the University of Florida with a degree in Computer Science. I have interests in the fields of Artificial Intelligence, Machine Learning, Computer Vision, and Math. I greatly enjoy learning, exploring, and developing new things in the realm of Computer Science and Technology.</p>
            <br />
            <h2 className="about-h2">Projects</h2>
            &nbsp;
            <p style={{ color: '#000000', 'font-family': 'Montserrat' }}>Check out some of my projects!</p>
            <Row>
                {
                    this.state.projects.map(
                        (project) => (
                            <Col md={4}>
                                <ProjectCard project={project} />
                            </Col>
                        )
                    )
                }
            </Row>
        </div>
    );
    }
}



export default About;