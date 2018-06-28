import React, { Component } from 'react'

import Header from './Header';
import OffCanvasSlide from './OffCanvasSlide';
import Footer from './Footer';
import Empresa from './Empresa';
import Conexoes from './Conexoes'
import Qualidade from './Qualidade';
class Home extends Component {
  render() {
    return (
        <div>
          <Header />
          <Empresa />
          <Conexoes />
          <Qualidade />
          <Footer />
          <OffCanvasSlide />
        </div>
    )
  }
}

export default Home