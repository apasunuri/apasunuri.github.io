import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from './ProjectCard';
import '../App.css';

class About extends Component {
    state = {
        projects: [
            {
                name: 'Class Dependent Effects of Regularization in Sequential Models and Language Data', 
                description: "An experimental study that was performed to study the effects of Neural Network regularization on class-based accuracies in multiclass classification specifically for sequential models and language data.",
                repo: 'https://github.com/apasunuri/Class-Based-Regularization-Effects-in-NLP',
                languages: [{name: 'Python', percentage: 100.0}],
                date: 'May 30, 2022'
            },
            {
                name: 'GatorNexus', 
                description: 'A web application tool designed to guide Computer Science students in professional and career development by anonymously sharing statistics and visualizations of student academics, skillsets, and demographics.',
                repo: 'https://github.com/apasunuri/gator-nexus',
                languages: [{name: 'JavaScript', percentage: 77.2}, {name: 'CSS', percentage: 11.7}, {name: 'HTML', percentage: 11.1}],
                date: 'April 20, 2021'
            },
            {
                name: 'Pascal Programming Language Interpreter', 
                description: 'An interpreter for the Pascal programming language that was developed using Haskell and functional programming.',
                repo: 'https://github.com/apasunuri/Pascal-Interpreter-Haskell',
                languages: [{name: 'Haskell', percentage: 70.2}, {name: 'Yacc', percentage: 14.0}, {name: 'Pascal', percentage: 10.2}, {name: 'Logos', percentage: 5.6}],
                date: 'May 11, 2020'
            },
        ]
    }

    render() {
    return (
        <div>
            <h2 className="about-h2">About Me</h2>
            &nbsp;
            <p style={{ color: '#000000', 'font-family': 'Montserrat' }}>Hello! I am currently pursuing my Master's degree in Computer Science with a focus on Machine Learning at Columbia University. I completed my undergraduate education at the University of Florida with a degree in Computer Science. I have interests in the fields of Machine Learning, Deep Learning, and Data Science. I greatly enjoy learning, exploring, and developing new things in the realm of Computer Science and Technology.</p>
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