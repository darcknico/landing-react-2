import React from 'react';
import Layout from './components/layout/layout';
import Home from './containers/Home/Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import "animate.css/animate.min.css";

function App() {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  );
}

export default App;
