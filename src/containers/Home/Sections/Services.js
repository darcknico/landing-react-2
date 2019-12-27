import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import {Card,CardActions,CardContent,Button} from '@material-ui/core';

export default class Services extends Component {
    delay = 150;
    duration = 0.3;
    render() {
        return (
        <section id="services" className="mt-3 mb-3 pb-3">
            <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={this.duration} 
                    delay={this.delay}>
                <h3 className="text-center title my-5 pt-4 pb-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                    <strong>Our services</strong>
                </h3>
            </ScrollAnimation>
        <ScrollAnimation className="row"
                animateIn="fadeIn" 
                animateOnce={true} 
                duration={this.duration} 
                delay={this.delay}>
            <div className="col-md-6 mb-4 text-center">
                <Card className="card card-body text-left white hoverable" >
                    <CardContent style={{ padding:0 }}>
                        <p className="font-weight-bold title dark-grey-text text-uppercase spacing mt-4 mx-4">
                            <Icon className="orange-text mr-2" style={{ fontSize: '15px' }}>
                                <FontAwesomeIcon icon={faSquare} />
                            </Icon>
                            Web design
                        </p>
                        <p className="grey-text font-small mx-4">
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente earu
                        proident. Ad vegan excepteur butcher vice lomo leggings.
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className="font-small font-weight-bold orange-text mx-4 mb-0">read more</Button>
                    </CardActions>
                </Card>
            </div>
            <div className="col-md-6 mb-4 text-center">
                <Card className="card card-body text-left white hoverable" >
                    <CardContent style={{ padding:0 }}>
                        <p className="font-weight-bold title dark-grey-text text-uppercase spacing mt-4 mx-4">
                            <Icon className="orange-text mr-2" style={{ fontSize: '15px' }}>
                                <FontAwesomeIcon icon={faSquare} />
                            </Icon>
                            Development
                        </p>
                        <p className="grey-text font-small mx-4">
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente earu
                        proident. Ad vegan excepteur butcher vice lomo leggings.
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className="font-small font-weight-bold orange-text mx-4 mb-0">read more</Button>
                    </CardActions>
                </Card>
            </div>
            <div className="col-md-6 mb-4 text-center">
                <Card className="card card-body text-left white hoverable" >
                    <CardContent style={{ padding:0 }}>
                        <p className="font-weight-bold title dark-grey-text text-uppercase spacing mt-4 mx-4">
                            <Icon className="orange-text mr-2" style={{ fontSize: '15px' }}>
                                <FontAwesomeIcon icon={faSquare} />
                            </Icon>
                            Branding
                        </p>
                        <p className="grey-text font-small mx-4">
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente earu
                        proident. Ad vegan excepteur butcher vice lomo leggings.
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className="font-small font-weight-bold orange-text mx-4 mb-0">read more</Button>
                    </CardActions>
                </Card>
            </div>
            <div className="col-md-6 mb-4 text-center">
                <Card className="card card-body text-left white hoverable" >
                    <CardContent style={{ padding:0 }}>
                        <p className="font-weight-bold title dark-grey-text text-uppercase spacing mt-4 mx-4">
                            <Icon className="orange-text mr-2" style={{ fontSize: '15px' }}>
                                <FontAwesomeIcon icon={faSquare} />
                            </Icon>
                            Marketing
                        </p>
                        <p className="grey-text font-small mx-4">
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente earu
                        proident. Ad vegan excepteur butcher vice lomo leggings.
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className="font-small font-weight-bold orange-text mx-4 mb-0">read more</Button>
                    </CardActions>
                </Card>
            </div>
        </ScrollAnimation>
    </section>);
    }
}