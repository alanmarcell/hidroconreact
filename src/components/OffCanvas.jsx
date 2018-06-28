import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'



import Home from './Home';
import Login from './admin/Login';
import Admin from './admin/admin';

class OffCanvas extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className='uk-offcanvas-content'>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/admin' component={Admin} />

          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default OffCanvas