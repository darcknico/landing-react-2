import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Gallery from "react-photo-gallery";
import {Button} from "@material-ui/core";
import {Animated} from "react-animated-css";
import proyecto_1 from "../../../assets/images/proy_1.jpg";
import proyecto_2 from "../../../assets/images/proy_2.jpg";
import proyecto_3 from "../../../assets/images/proy_3.jpg";
import proyecto_4 from "../../../assets/images/proy_4.jpg";
import proyecto_5 from "../../../assets/images/proy_5.jpg";
import proyecto_6 from "../../../assets/images/proy_6.jpg";

export default class Projects extends Component {
    photos = [
        {
          src: proyecto_1,
          width: 780,
          height: 520,
          type:2,
        },
        {
          src: proyecto_2,
          width: 472,
          height: 708,
          type:1,
        },
        {
          src: proyecto_3,
          width: 780,
          height: 520,
          type:2,
        },
        {
          src: proyecto_4,
          width: 472,
          height: 708,
          type:1,
        },
        {
          src: proyecto_5,
          width: 472,
          height: 708,
          type:1,
        },
        {
          src: proyecto_6,
          width: 780,
          height: 520,
          type:2,
        },
        
    ];

    constructor(props){
      super(props);
      this.state ={
        items:this.photos,
        isVisible:true,
      }
    }

    filter(type){
      this.setState({isVisible:false});
      let items = [];
      switch(type){
        case 1:
          items = this.photos.filter(item=>item.type===1);
          break;
        case 2:
          items = this.photos.filter(item=>item.type===2);
          break;
        default:
          items = this.photos;
          break;
      }
      setTimeout(() => {
        this.setState({ isVisible:true,items });
      }, 500);
    }
    componentDidMount() {
      
    }
      
    render() {
        return (
        <section className="mt-3 mb-5 pt-1 pb-5" id="projects">
            <ScrollAnimation 
                      animateIn="fadeIn" 
                      animateOnce={true} 
                      duration={0.5} 
                      delay={500}>
              <h3 className="text-center title my-5 pt-4 pb-4 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                <strong>Our projects</strong>
              </h3>
            </ScrollAnimation>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center mb-5 pb-2">
                  <Button className="btn-white font-weight-bold waves-effect filter"
                    onClick={()=>this.filter(0)}
                    >All</Button>
                  <Button className="btn-white font-weight-bold waves-effect filter"
                    onClick={()=>this.filter(1)}
                    >Branding</Button>
                  <Button className="btn-white font-weight-bold waves-effect filter"
                    onClick={()=>this.filter(2)}
                    >web design</Button>
                </div>
              </div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.isVisible}>
                <Gallery 
                  photos={this.state.items} 
                  direction={"column"} 
                  columns={3} 
                  targetRowHeight={2} 
                  margin={5} />
              </Animated>
          </section>);
    }
}