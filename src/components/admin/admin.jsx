import React, { Component } from 'react'
import { Redirect, Route, Link, Switch } from 'react-router-dom'
import { auth } from './../../FirebaseInit'


import AdminConexoes from './AdminConexoes'
import AdminMensagemHome from './AdminMensagemHome'
import AdminEditarConexao from './AdminEditarConexao'

const AdminHome = props => <p> Painel Administrativo </p>

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthing: true,
      isLoggedIn: false,
      user: null,
      conexoes: {

      },
      isLoading: true,
      saved: false
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
                {/* <li><Link className='uk-link-text' to={`${this.props.match.url}/editar/:id`}><span data-uk-icon='icon: pencil'></span> Editar conexoes</Link></li> */}
                <li><Link className='uk-link-text' to={`${this.props.match.url}/mensagem`}><span data-uk-icon='icon: plus'></span> Mensagem Início</Link></li>
              </ul>
            </div>
          </div>
          <div className='uk-width-expand'>
            <div className='uk-panel'>
              <Switch>
                <Route exact path='/' component={AdminHome} />
                <Route path={`${this.props.match.url}/conexoes/:id`} component={AdminEditarConexao} />
                <Route path={`${this.props.match.url}/conexoes`} component={AdminConexoes} />
                <Route path={`${this.props.match.url}/mensagem`} component={AdminMensagemHome} />
              </Switch>
            </div>
          </div>
        </div>

        <ul>
          {
            Object
              .keys(this.state.conexoes)
              .map(key => this.renderConexoes(key, this.state.conexoes[key]))
          }
        </ul>

      </div>
    )
  }
}


export default Admin