import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import avatar_1 from "../../../assets/images/avatar_1.png";
import avatar_2 from "../../../assets/images/avatar_2.png";
import avatar_3 from "../../../assets/images/avatar_3.png";
import avatar_4 from "../../../assets/images/avatar_4.png";

export default class Team extends Component {
    
    render() {
        return (
        <section className="team-section pb-5" id="team">
            <ScrollAnimation 
                      animateIn="fadeIn" 
                      animateOnce={true} 
                      duration={0.5} 
                      delay={500}>
                <h3 className="text-center title my-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                <strong>Our amazing team</strong>
                </h3>
            </ScrollAnimation>
            <p className="text-center w-responsive mx-auto my-5 grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Fugit, error amet numquam iure provident voluptate
            esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
            </p>
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="card card-body">
                        <CardActionArea>
                            <div className="avatar mx-auto mt-3 mb-3">
                                <CardMedia
                                    component="img"
                                    className="rounded-circle"
                                    image={avatar_1}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent style={{ padding:0 }}>
                                <Typography variant="h6" component="h6" className="font-weight-bold title">
                                    Anna Deynah
                                </Typography>
                                <p className="font-small grey-text">Graphic designer</p>
                            </CardContent>
                            <ul className="list-unstyled">
                                <a className="p-2 m-2 fa-lg fb-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Icon>
                                </a>
                                <a className="p-2 m-2 fa-lg fb-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Icon>
                                </a>
                                <a className="p-2 m-2 fa-lg ins-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Icon>
                                </a>
                            </ul>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="card card-body">
                        <CardActionArea>
                            <div className="avatar mx-auto mt-3 mb-3">
                                <CardMedia
                                    component="img"
                                    className="rounded-circle"
                                    image={avatar_2}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent style={{ padding:0 }}>
                                <Typography variant="h6" component="h6" className="font-weight-bold title">
                                    John Doe
                                </Typography>
                                <p className="font-small grey-text">Web developer</p>
                            </CardContent>
                            <ul className="list-unstyled">
                                <a className="p-2 m-2 fa-lg fb-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Icon>
                                </a>
                                <a className="p-2 m-2 fa-lg ins-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Icon>
                                </a>
                            </ul>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="card card-body">
                        <CardActionArea>
                            <div className="avatar mx-auto mt-3 mb-3">
                                <CardMedia
                                    component="img"
                                    className="rounded-circle"
                                    image={avatar_3}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent style={{ padding:0 }}>
                                <Typography variant="h6" component="h6" className="font-weight-bold title">
                                    Maria Smith
                                </Typography>
                                <p className="font-small grey-text">Photographer</p>
                            </CardContent>
                            <ul className="list-unstyled">
                                <a className="p-2 m-2 fa-lg fb-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Icon>
                                </a>
                                <a className="p-2 m-2 fa-lg fb-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Icon>
                                </a>
                                <a className="p-2 m-2 fa-lg ins-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Icon>
                                </a>
                            </ul>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="card card-body">
                        <CardActionArea>
                            <div className="avatar mx-auto mt-3 mb-3">
                                <CardMedia
                                    component="img"
                                    className="rounded-circle"
                                    image={avatar_4}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent style={{ padding:0 }}>
                                <Typography variant="h6" component="h6" className="font-weight-bold title">
                                    Tom Adams
                                </Typography>
                                <p className="font-small grey-text">Backend developer</p>
                            </CardContent>
                            <ul className="list-unstyled">
                                <a className="p-2 m-2 fa-lg fb-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Icon>
                                </a>
                                <a className="p-2 m-2 fa-lg fb-ic" href='#home' onClick={e => e.preventDefault()}>
                                    <Icon className="orange-text">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Icon>
                                </a>
                            </ul>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </section>);
    }
}