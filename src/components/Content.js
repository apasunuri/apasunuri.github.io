import React, { Component } from 'react';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import ContactForm from './ContactForm';
import 'react-typist/dist/Typist.css';
import '../App.css';

class Content extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
          <h1 className="content-h1">Abhinay Pasunuri</h1>
          <h6>
            <Typist avgTypingDelay={80} stdTypingDelay={35} cursor={{ show: true, blink: true}}>
              Machine Learning Engineer
            </Typist>
          </h6>
          <a href="https://www.linkedin.com/in/abhinay-pasunuri" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size='2x' /></a>
          &nbsp;
          &nbsp;
          <a href="https://www.github.com/apasunuri" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></a>
          &nbsp;
          &nbsp;
          {/*<a href="https://apasunuri.github.io/blog/"><FontAwesomeIcon icon={['fas', 'blog']} size='2x' /></a>
          &nbsp;
          &nbsp;*/}
          <Link id="link" to="content" spy={true} smooth={true} offset={0} duration={600}>
            <FontAwesomeIcon icon={['fa', 'user']} size='2x' />
          </Link>
          &nbsp;
          &nbsp;
          <a data-toggle="collapse" href="#contactTarget" aria-expanded="false" aria-controls="contactTarget"><FontAwesomeIcon icon={['fas', 'envelope-open']} size='2x' /></a>
          <div class="collapse" id="contactTarget">
            <ContactForm />
          </div>
          &nbsp;
          &nbsp;
      </div>
    );
  }
}



export default Content;