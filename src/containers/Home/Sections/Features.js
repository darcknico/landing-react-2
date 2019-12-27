import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCogs, faTabletAlt, faChartLine, faUsers, faGem } from '@fortawesome/free-solid-svg-icons';
import image from '../../../assets/images/smartphone_2.png';


export default class Features extends Component {
    delay = 150;
    duration = 0.3;
    render() {
        return (
        <section id="features" className="mb-5 pb-4">
            <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
                <h3 className="text-center title my-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                <strong>Awesome features</strong>
                </h3>
            </ScrollAnimation>
            <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
            <p className="text-center w-responsive mx-auto my-5 grey-text wow fadeIn" data-wow-delay="0.2s">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum
            dolores reiciendis
            ad voluptas, animi obcaecati adipisci sapiente mollitia.
            </p>
            </ScrollAnimation>
            <div className="row features-small wow fadeIn" data-wow-delay="0.4s">
                <div className="col-lg-4 col-md-12">
                    <ScrollAnimation className="row mb-3"
                        animateIn="fadeIn" 
                        animateOnce={true} 
                        duration={this.duration} 
                        delay={this.delay}>
                        <div className="col-2">
                            <Icon className="orange-text" fontSize="large">
                                <FontAwesomeIcon icon={faEdit} />
                            </Icon>
                        </div>
                        <div className="col-10 mb-2">
                            <h5 className="font-weight-bold title">Modern design</h5>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                            nam, aperiam
                            minima.
                            </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation className="row mb-3"
                            animateIn="fadeIn" 
                            animateOnce={true} 
                            duration={this.duration} 
                            delay={this.delay}>
                        <div className="col-2">
                            <Icon className="orange-text" fontSize="large">
                                <FontAwesomeIcon icon={faCogs} />
                            </Icon>
                        </div>
                        <div className="col-10 mb-2">
                            <h5 className="font-weight-bold title">Easy customize</h5>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                            nam, aperiam
                            minima assumenda.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation className="row"
                                animateIn="fadeIn" 
                                animateOnce={true} 
                                duration={this.duration} 
                                delay={this.delay}>
                        <div className="col-2">
                            <Icon className="orange-text" fontSize="large">
                                <FontAwesomeIcon icon={faTabletAlt} />
                            </Icon>
                        </div>
                        <div className="col-10 mb-2">
                            <h5 className="font-weight-bold title">Responsive layouts</h5>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                            nam, aperiam.</p>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-12 mb-1 text-center text-md-left">
                    <img src={image} alt="" className="z-depth-0 img-fluid"/>
                </div>
                <div className="col-lg-4 col-md-12">
                <ScrollAnimation className="row mb-3"
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
                    <div className="col-2">
                        <Icon className="orange-text" fontSize="large">
                            <FontAwesomeIcon icon={faChartLine} />
                        </Icon>
                    </div>
                    <div className="col-10 mb-2">
                        <h5 className="font-weight-bold title">Optymized for SEO</h5>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                        nam, aperiam.</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation className="row mb-3"
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
                    <div className="col-2">
                        <Icon className="orange-text" fontSize="large">
                            <FontAwesomeIcon icon={faUsers} />
                        </Icon>
                    </div>
                    <div className="col-10 mb-2">
                        <h5 className="font-weight-bold title">Technical support</h5>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                        nam, aperiam
                        minima assumenda.</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation className="row"
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
                    <div className="col-2">
                        <Icon className="orange-text" fontSize="large">
                            <FontAwesomeIcon icon={faGem} />
                        </Icon>
                    </div>
                    <div className="col-10 mb-2">
                        <h5 className="font-weight-bold title">High quality</h5>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                        nam, aperiam
                        minima.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </section>);
    }
}