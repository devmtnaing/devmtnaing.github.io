import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="profile">
            <img src="https://scontent-sit4-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12230818_725327144234285_1191128953_n.jpg" alt="my-profile" />
            <nav className="social-section">
              <a href="https://www.facebook.com/minthetnaing" title="facebook" target="_blank">
                <FaFacebook className="social-icons facebook" />
              </a>
              <a href="https://www.instagram.com/mt_naing" title="instagram" target="_blank">
                <FaInstagram className="social-icons instagram" />
              </a>
              <a href="mailto:me@minthetnaing.xyz?Subject=Hey%20Min" title="email">
                <FaEnvelope className="social-icons email" />
              </a>
              <a href="https://www.linkedin.com/in/mtnaing" title="linkedin" target="_blank">
                <FaLinkedin className="social-icons linkedin" />
              </a>
              <a href="https://github.com/devmtnaing" title="github" target="_blank">
                <FaGithub className="social-icons github" />
              </a>
            </nav>
          </section>
          <hgroup>
            <h1>Min Thet Naing</h1>
            <h2>Web Developer</h2>
           </hgroup>
        </header>
      </div>
    );
  }
}

export default App;