import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
    
    render() {
        return (
        <section id="about" className="about mt-5 mb-5 py-3 wow fadeIn" data-wow-delay="0.2s">
            <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOnce={true} 
                    duration={0.5} 
                    delay={500}>
                <div className="row pt-2 mt-5">
                    <div className="col-lg-5 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/66.jpg" className="img-fluid z-depth-1 rounded" alt="My photo"/>
                    </div>
                    <div className="col-lg-6 ml-auto col-md-12 wow fadeIn" data-wow-delay="0.4s">

                        <h3 className="mb-5 dark-grey-text title font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                            <strong>Build your brand with us</strong>
                        </h3>
                        <p align="justify" className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi
                        soluta ratione quisquam, dicta
                        ab cupiditate iure eaque? Repellendus voluptatum, magni impedit delectus, beatae maxime temporibus
                        maiores quibusdam.</p>
                        <p align="justify" className="grey-text">Rem magnam ad perferendis iusto sint tempora ea voluptatibus iure,
                        animi excepturi modi aut possimus
                        in hic molestias repellendus illo ullam odit quia velit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.</p>
                        <p align="justify" className="grey-text mb-5">Incidunt eligendi mollitia labore ipsum ex fugit explicabo saepe
                        error neque beatae in, expedita
                        eveniet quae aliquam assumenda voluptatibus!
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
        </section>);
    }
}