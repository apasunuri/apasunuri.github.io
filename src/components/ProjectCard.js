import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "react-bootstrap/Card";
import '../App.css';

class ProjectCard extends Component {
  render() {
    return (
        <Card className="card p-3 mb-5 bg-white rounded">
            <Card.Body>
                <Card.Title as="h4" style={{ 'text-align': 'left', color: '#1a222c', 'font-family': 'Montserrat' }}><b>{this.props.project.name}</b></Card.Title>
                <Card.Text style={{ 'text-align': 'left', 'font-family': 'Montserrat' }}>{this.props.project.description}</Card.Text>
                <div align="left">
                    <a href={this.props.project.repo} target="_blank" className="btn btn-secondary">
                        <FontAwesomeIcon icon={['fab', 'github']} /> Repo
                    </a>
                </div>
                <hr />
                <div className="pb-3" align="left" style={{ 'font-family': 'Montserrat' }}>
                    <b>Languages:</b>
                    {
                        this.props.project.languages.map((language) => (
                            <span>
                                &nbsp;
                                <span className="badge badge-primary" style={{ color: '#ffffff' }}>{language.name} {language.percentage}%</span>
                            </span>
                        ))
                    }
                </div>
                <p className="card-text" style={{ 'text-align': 'left' }}>
                    <small className="text-muted" style={{ 'text-align': 'left', color: '#1a222c', 'font-family': 'Montserrat' }}>Updated on {this.props.project.date}</small>
                </p>
            </Card.Body>
        </Card>
    );
  }
}

export default ProjectCard;