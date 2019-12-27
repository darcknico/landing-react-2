import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon, Button,FormControl,InputLabel,Input  } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
    delay = 150;
    duration = 0.3;
    render() {
        return (
        <section id="contact" className="mb-5">
            <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
                <h3 className="text-center title my-5 py-4 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                    <strong>Contact us</strong>
                </h3>
            </ScrollAnimation>
            <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
                <p className="text-center grey-text my-5 w-responsive mx-auto wow fadeIn" data-wow-delay="0.2s">Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
                esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>
            </ScrollAnimation>
            <div className="row wow fadeIn" data-wow-delay="0.4s">
                <div className="col-md-8 col-lg-9">
                    <ScrollAnimation 
                        animateIn="fadeIn" 
                        animateOnce={true} 
                        duration={this.duration} 
                        delay={this.delay}>
                        <form>
                            <div className="row">
                                <div className="col-md-6 md-form">
                                    <FormControl fullWidth={true} >
                                        <InputLabel htmlFor="my-input">Your name</InputLabel>
                                        <Input id="form1" type="text" />
                                    </FormControl>
                                </div>
                                <div className="col-md-6 md-form">
                                    <FormControl fullWidth={true} >
                                        <InputLabel htmlFor="my-input">Your email</InputLabel>
                                        <Input id="form2" type="email" />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 md-form">
                                    <FormControl fullWidth={true} >
                                        <InputLabel htmlFor="my-input">Subject</InputLabel>
                                        <Input id="form3" type="text" />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 md-form">
                                    <FormControl fullWidth={true} >
                                        <InputLabel htmlFor="my-input">Your message</InputLabel>
                                        <Input id="form4" type="text" 
                                            multiline={true} 
                                            rows={3}
                                            rowsMax={3}/>
                                    </FormControl>
                                </div>
                            </div>
                        </form>

                        <div className="text-center text-md-left mb-5 mt-4">
                            <Button className="font-weight-bold" size="large" color="secondary">Send</Button>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4 col-lg-3">
                    <ScrollAnimation 
                        animateIn="fadeIn" 
                        animateOnce={true} 
                        duration={this.duration} 
                        delay={this.delay}>
                        <ul className="text-center list-unstyled float-md-right">
                            <li>
                                <Icon className="title" fontSize="large">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </Icon>
                                <p>Fake street, 123, USA</p>
                            </li>

                            <li>
                                <Icon className="title" fontSize="large">
                                    <FontAwesomeIcon icon={faPhone} />
                                </Icon>
                                <i className="fas fa-phone fa-2x title"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li>
                                <Icon className="title" fontSize="large">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Icon>
                                <p>contact@gmail.com</p>
                            </li>
                        </ul>
                    </ScrollAnimation>
                </div>
            </div>
        </section>);
    }
}