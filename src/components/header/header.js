import React, {Component} from 'react';
import './header.css'
import {Navbar,Nav} from 'react-bootstrap';
import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link as LinkScroll, Events } from 'react-scroll';
import Scrollspy from 'react-scrollspy';

export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded:false,
      className:'nav-on-top',
    }
  }

  componentDidMount() {
    Events.scrollEvent.register('begin',this.onScrollBegin.bind(this));
  }

  onScrollBegin(){
    if(this.state.expanded){
      this.setState({expanded:false});
    }
  }

  onScroll(ev){
    if(ev){
      if(ev.id === "home"){
        console.log('HOME');
        this.setState({className:'nav-on-top'});
      } else {
        console.log('NO HOME');
        this.setState({className:'nav-on-scroll'});
      }
    }
  }

  render() {
    return (
      <Navbar 
        collapseOnSelect 
        expand="md" 
        variant="light" 
        fixed="top"
        expanded={this.state.expanded}
        className={this.state.className}
        onToggle={()=>{
          this.setState({expanded:!this.state.expanded});
        }}
        >
        <LinkScroll className="navbar-brand" to="home" smooth={true} duration={500}>Proy. Inf.</LinkScroll>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Scrollspy 
            className="mr-auto navbar-nav " 
            items={ ['home', 'about', 'features','services','team','contact'] } c
            urrentClassName="active" 
            componentTag="div"
            onUpdate={this.onScroll.bind(this)}>
              <LinkScroll className="nav-link" to="home" spy={true} smooth={true} duration={1250}> Home</LinkScroll>
              <LinkScroll className="nav-link" to="about" spy={true} smooth={true} duration={1250}> About me</LinkScroll>
              <LinkScroll className="nav-link" to="features" spy={true} smooth={true} duration={1250}> Features</LinkScroll>
              <LinkScroll className="nav-link" to="services" spy={true} smooth={true} duration={1250}> Services</LinkScroll>
              <LinkScroll className="nav-link" to="team" spy={true} smooth={true} duration={1250}> Team</LinkScroll>
              <LinkScroll className="nav-link" to="contact" spy={true} smooth={true} duration={1250}> Contact</LinkScroll>
          </Scrollspy>
          <div className="navbar-nav">
            <Nav.Link href="#deets">
                <Icon >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Icon>
              </Nav.Link>
              <Nav.Link href="#deets">
                <Icon >
                  <FontAwesomeIcon icon={faTwitter} />
                </Icon>
              </Nav.Link>
              <Nav.Link href="#deets">
                <Icon >
                  <FontAwesomeIcon icon={faInstagram} />
                </Icon>
              </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>);
  }
}