import React , {Component } from 'react';
import About from './Sections/About';
import Counter from './Sections/Counter';
import Features from './Sections/Features';
import Services from './Sections/Services';
import Projects from './Sections/Projects';
import Team from './Sections/Team';
import Contact from './Sections/Contact';
import image from '../../assets/images/smartphone_2.png';
import background from '../../assets/images/background_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '@material-ui/core';

export default class Home extends Component{
    
    componentDidMount() {
        
    }

    render(){
        
        return(
        <React.Fragment>
            <section className="view intro-2" id="home">
                <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={0.5} 
                    delay={500}
                    style={{
                        backgroundImage: `url(${background})`,
                    }}>
                <div className="container d-flex justify-content-center align-items-center" style={{
                        height: '100vh',
                    }}>
                    <div className="row flex-center pt-5 mt-3">
                        <div className="col-md-12 col-lg-6 text-center text-md-left margins">
                            <div className="dark-grey-text">
                                <h1 className="display-4 title mt-md-5 mt-lg-0 font-weight-bold wow fadeIn" data-wow-delay="0.3s">
                                    <strong>Creative agency</strong>
                                </h1>
                                <hr className="hr-light wow fadeIn" data-wow-delay="0.3s"/>
                                <h6 className="grey-text wow fadeIn" data-wow-delay="0.3s">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Rem repellendus quasi fuga nesciunt
                                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                                    iste.
                                </h6>
                                <br/>
                                <Button size="large" >
                                    Portfolio
                                </Button>
                                <Button size="large" variant="contained" color="secondary">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                            <img src={image} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </section>
            <main>
                <div className="container">
                    <About></About>
                    <Features></Features>
                </div>
                <Counter></Counter>
                <div className="container-fluid light-grey-background">
                    <div className="container py-4">
                        <Services></Services>
                        <hr className="mt-5"></hr>
                        <Projects></Projects>
                        <hr className="mt-5"></hr>
                        <Team></Team>
                        <hr></hr>
                        <Contact></Contact>
                    </div>
                </div>
            </main>
        </React.Fragment>);
    }
}

