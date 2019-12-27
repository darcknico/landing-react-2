import React, {Component} from 'react';
import { Parallax } from 'react-parallax';
import parallax from '../../../assets/images/parallax_1.jpg';

export default class Counter extends Component {
    
    render() {
        return (
        <Parallax
            blur={3}
            bgImage={parallax}
            bgImageAlt="the cat"
            strength={200}
            bgClassName="rgba-gradient"
            style={{ height: '400px'}}
        >
            <div className="flex-center d-flex justify-content-center align-items-center" style={{ height: '400px',background:`-webkit-linear-gradient(45deg,rgb(180,44,58,.7),rgb(225,125,116,.8) 100%)`}}>
                <div className="container">
                    <h3 className="text-center mb-5 pb-4 white-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                    <strong>Some facts about us</strong>
                    </h3>
                    <div className="row text-center">
                        <div className="col-md-3 mb-2">
                            <h1 className="white-text mb-1 font-weight-bold">+950</h1>
                            <p className="white-text">Happy clients</p>
                        </div>
                        <div className="col-md-3 mb-2">
                            <h1 className="white-text mb-1 font-weight-bold">+150</h1>
                            <p className="white-text">Projects completed</p>
                        </div>
                        <div className="col-md-3 mb-2">
                            <h1 className="white-text mb-1 font-weight-bold">+85</h1>
                            <p className="white-text">Winning awards</p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="white-text mb-1 font-weight-bold">+246</h1>
                            <p className="white-text">Cups of coffee</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>);
    }
}