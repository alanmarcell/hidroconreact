import React, { Component } from 'react'
import { Redirect, Route, Link } from 'react-router-dom'
import { auth } from './../../FirebaseInit'


import AdminConexoes from './AdminConexoes'
import AdminEditarConexao from './AdminEditarConexao'
import AdminMensagemHome from './AdminMensagemHome'

const AdminHome = props => <p> Painel Administrativo </p>

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthing: true,
      isLoggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      // console.log('auth', user)
      // console.log(this.state)
      this.setState({
        isAuthing: false,
        isLoggedIn: !!user,
        user: user
      })
    })
  }
  render() {
    if (this.state.isAuthing) {
      return <p> Aguarde... </p>
    }

    if (!this.state.isLoggedIn) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <div data-uk-grid>
          <div className='uk-width-auto'>
            <div className='uk-panel'>
              <ul className='uk-list'>
                <li> <Link className='uk-link-text' to={`${this.props.match.url}/conexoes`}><span data-uk-icon='icon: plus'></span> Adicionar conexoes</Link></li>
                <li><Link className='uk-link-text' to={`${this.props.match.url}/editar`}><span data-uk-icon='icon: pencil'></span> Editar conexoes</Link></li>
                <li><Link className='uk-link-text' to={`${this.props.match.url}/mensagem`}><span data-uk-icon='icon: pencil'></span> Mensagem Início</Link></li>
              </ul>
            </div>
          </div>
          <h1><Route exact path='/' component={AdminHome} /></h1>
          <div className='uk-width-expand'>
            <div className='uk-panel'>
              <Route path={`${this.props.match.url}/conexoes`} component={AdminConexoes} />
              <Route path={`${this.props.match.url}/editar`} component={AdminEditarConexao} />
              <Route path={`${this.props.match.url}/mensagem`} component={AdminMensagemHome} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default Admin