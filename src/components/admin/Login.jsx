import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './../../FirebaseInit'

class Login extends Component {
  constructor(props) {
    super(props)

    this.email = null
    this.password = null

    this.state = {
      isLoggedIn: false,
      error: false,
      isLogging: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({
      isLogging: true,
      error: false
    })
    auth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.setState({
          isLoggedIn: true
        })
      })
      .catch(error => {
        console.error('error', error)
        this.setState({
          error: true,
          isLogging: false
        })
      })
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/admin' />
    }
    return (
      <div>
        <div className='uk-container uk-container-large'>
          <div className='uk-margin-auto-vertical'>
            <form>
              <div className='uk-margin-small'>
                <div className='uk-inline'>
                  <span className='uk-form-icon' data-uk-icon='icon: user'></span>
                  <input placeholder='Usuário' autoComplete='email' className='uk-input' type='email' ref={ref => this.email = ref} />
                </div>
              </div>

              <div className='uk-margin-small'>
                <div className='uk-inline'>
                  <span className='uk-form-icon' data-uk-icon='icon: lock'></span>
                  <input placeholder='Senha' autoComplete='password' className='uk-input' type='password' ref={ref => this.password = ref} />
                </div>
              </div>
              <button disabled={this.state.isLogging} className='uk-button uk-button-default' onClick={this.handleLogin}>Entrar</button>
              {this.state.error && <p> email e/ou senha invalidos </p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login