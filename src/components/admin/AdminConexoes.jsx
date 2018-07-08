import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Base, { storage } from './../../FirebaseInit'

class AdminConexoes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conexoes: {}
    }
    this.renderConexoes = this.renderConexoes.bind(this)
    this.deletarConexao = this.deletarConexao.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    Base.syncState('conexoes', {
      context: this,
      state: 'conexoes',
      asArray: false
    })
  }

  handleSave(e) {
    const itemConexao = {
      nome: this.nome.value,
      descricao: this.descricao.value,
      codigo: this.codigo.value,
      imagem: this.imagem.files[0],
      imagemTabela: this.imagemTabela.files[0]
    }

    this.setState({ isUploading: true })
    const arquivo = itemConexao.imagem
    const { name } = arquivo

    const ref = storage.ref(name)
    ref.put(arquivo)
      .then(imagem => {
        imagem.ref.getDownloadURL()
          .then(downloadURL => {
            const novaConexao = {
              nome: itemConexao.nome,
              descricao: itemConexao.descricao,
              codigo: itemConexao.codigo,
              imagem: downloadURL
            }
            Base.push('conexoes', {
              data: novaConexao,
              //  { nome, descricao, codigo, imagem },
              then: error => {
                if (!error) {
                  this.nome.value = ''
                  this.descricao.value = ''
                  this.codigo.value = ''
                  this.imagem.value = ''
                  this.imagemTabela.value = ''
                }
              }
            })
            this.setState({ isUploading: false })
          })
      })
    e.preventDefault()
  }

  renderConexoes(key, conexoes) {
    return (
      <li key={key}>
        <button onClick={() => this.deletarConexao(key)}>  Remover  </button>
        <Link to={`/admin/conexoes/${key}`}>  Editar  </Link>
        &nbsp; {conexoes.nome}
      </li>
    )
  }

  deletarConexao(key) {
    Base.remove('conexoes/' + key, error => {
      console.error(error)
    })
  }

  render() {
    if (this.state.isUploading) {
      return (
        <div className='container'>
          Aguarde... <span data-uk-spinner='ratio: 1.5'></span>
        </div>
      )
    }
    return (
      <div>
        <h2> Nova Conexao</h2>
        <input className='uk-input uk-form-width-large' placeholder='Nova conexao' type='text' ref={ref => this.nome = ref} /> <br />
        <input className='uk-input uk-form-width-large' placeholder='descricao' type='text' ref={ref => this.descricao = ref} /> <br />
        <input className='uk-input uk-form-width-large' placeholder='codigo' type='text' ref={ref => this.codigo = ref} /> <br />
        <input className='uk-button uk-button-default' type='file' id='imagem' ref={ref => this.imagem = ref} /> Imagem  <br />
        <input className='uk-button uk-button-default' type='file' id='imagemTabela' ref={ref => this.imagemTabela = ref} /> Imagem Tabela  <br />
        <button className='uk-button uk-button-default' type='button' onClick={this.handleSave}>Salvar conexão</button> <br />

        <div>
          <ul>
            {
              Object
                .keys(this.state.conexoes)
                .map(key => this.renderConexoes(key, this.state.conexoes[key]))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default AdminConexoes