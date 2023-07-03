import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.css';

export default function App() {
  return (
    <MDBFooter className='footer text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
        <a href='https://www.linkedin.com/in/kase-johnson-02a974205?trk=people-guest_people_search-card'>
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
        </a>

        <a href='https://github.com/Kasej01'>
            <FontAwesomeIcon className="icons" icon={faGithub} />
        </a>
        
        </section>

        <section className=''>
          <MDBRow>

            <MDBCol lg='3' md='4' sm='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>My Info.</h5>

              <ul className='list-unstyled mb-0'>
                <li className="footer-links">
                    Phone: (931)-259-6794
                </li>
                <li className="footer-links">
                    Email: Kasejohnson01@gmail.com
                </li>
                <li className="footer-links">
                  <a href='https://www.linkedin.com/in/kase-johnson-02a974205?trk=people-guest_people_search-card' className='text-white'>
                    LinkedIn
                  </a>
                </li>
                <li className="footer-links">
                  <a href='#!' className='text-white'>
                    Github
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='4' sm='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled'>
                <li className="footer-links">
                    <Link to='/home' className='text-white'>
                        Home
                    </Link>
                </li>
                <li className="footer-links">
                    <Link to='/projects' className='text-white'>
                        Projects
                    </Link>
                </li>
                <li className="footer-links">
                    <Link to='/certification' className='text-white'>
                        Certifications
                    </Link>
                </li>
                <li className="footer-links">
                    <Link to='/contact' className='text-white'>
                        Contact
                    </Link>
                </li>
            </ul>
            </MDBCol>

            <MDBCol lg='6' md='4' sm='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Me</h5>
                <form className="form-inline">
                    <label htmlFor="emailInput">Email address</label>
                    <div className="form-group">
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <label htmlFor="textInput">Password</label>
                    <div className="form-group">
                        <input type="text" className="form-control" id="textInput" placeholder="Enter your message here"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}