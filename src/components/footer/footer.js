import React, {Component} from 'react';
import './footer.css';
import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGooglePlusG,faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

export default class footer extends Component {
  
    render() {
      return (
      <footer className="page-footer text-center text-md-left unique-color-dark pt-0">
        <div className="top-footer-color">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-md-0">
                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
              </div>
              <div className="col-md-6 col-lg-7 text-center text-md-right">
                <a className="p-2 m-2 fa-lg fb-ic ml-0" href='#home' onClick={e => e.preventDefault()}>
                  <Icon className="white-text mr-lg-4">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Icon>
                </a>
                <a className="p-2 m-2 fa-lg tw-ic" href='#home' onClick={e => e.preventDefault()}>
                  <Icon className="white-text mr-lg-4">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Icon>
                </a>
                <a className="p-2 m-2 fa-lg gplus-ic" href='#home' onClick={e => e.preventDefault()}>
                  <Icon className="white-text mr-lg-4">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </Icon>
                </a>
                <a className="p-2 m-2 fa-lg li-ic" href='#home' onClick={e => e.preventDefault()}>
                  <Icon className="white-text mr-lg-4">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Icon>
                </a>
                <a className="p-2 m-2 fa-lg ins-ic" href='#home' onClick={e => e.preventDefault()}>
                  <Icon className="white-text mr-lg-4">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-4 text-center text-md-left">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 className="spacing font-weight-bold">
                <strong>Company name</strong>
              </h6>
              <hr className="dividerTitle accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
              <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur
                adipisicing elit.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="spacing font-weight-bold">
                <strong>Products</strong>
              </h6>
              <hr className="dividerTitle accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Websites</a>
              </p>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Custom Systems</a>
              </p>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Mobile Development</a>
              </p>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Data Science</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="spacing font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr className="dividerTitle accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Your Account</a>
              </p>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Become an Affiliate</a>
              </p>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Shipping Rates</a>
              </p>
              <p>
                <a href='#home' onClick={e => e.preventDefault()}>Help</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3">
              <h6 className="spacing font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr className="dividerTitle accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
              <p>
                <Icon className="mr-3" fontSize="small">
                  <FontAwesomeIcon icon={faHome} />
                </Icon>
                Fake Street, 123
              </p>
              <p>
                <Icon className="mr-3" fontSize="small">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Icon>
                info@example.com
              </p>
              <p>
                <Icon className="mr-3" fontSize="small">
                  <FontAwesomeIcon icon={faPhone} />
                </Icon>
                + 01 234 567 89
              </p>
              <p>
                <Icon className="mr-3" fontSize="small">
                  <FontAwesomeIcon icon={faPrint} />
                </Icon>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright py-3 text-center wow fadeIn" data-wow-delay="0.3s">
          <div className="container-fluid">
            © 2019 Copyright: <a href="http://proyectosinformaticos.com.ar/" target="_blank" rel="noopener noreferrer"> Proyectos Informaticos </a>
          </div>
        </div>
      </footer>);
  }
}