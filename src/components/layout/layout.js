import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css'

export default class layout extends Component {

  render() {
    return(
      <React.Fragment>
        <Header></Header>
          {this.props.children}
        <Footer></Footer>
      </React.Fragment>
    );
  }
}