import React, { Component } from 'react'
import Base, { storage } from './../../FirebaseInit'
import { Redirect } from 'react-router-dom'

class AdminEditarConexao extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conexao: {},
      isLoading: true,
      saved: false
    }
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    Base.fetch(`conexoes/${id}`, {
      context: this,
      asArray: false,
      then(data) {
        this.setState({ conexao: data, isLoading: false })
      }
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

    const image = this.state.imagem ? this.imagem.files[0] : null

    // this.setState({ isUploading: true })
    // const arquivo = image
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

            const id = this.props.match.params.id
            Base.update(`conexoes/${id}`, {
              data: novaConexao,
              //  { nome, descricao, codigo, imagem },
              then: error => {
                if (!error) {
                  this.setState({ saved: true })
                  // this.nome.value = ''
                  // this.descricao.value = ''
                  // this.codigo.value = ''
                  // this.imagem.value = ''
                  // this.imagemTabela.value = ''
                }
              }
            })
            // this.setState({ isUploading: false })
          })
      })
    e.preventDefault()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className='container'>
          Aguarde... <span data-uk-spinner></span>
        </div>
      )
    }
    if (this.state.saved) {
      return <Redirect to='/admin/conexoes' />
    }
    return (
      <div>
        <h2> Editar conexão</h2>
        <input className='uk-input uk-form-width-large' placeholder='Nova conexao' type='text' defaultValue={this.state.conexao.nome} ref={ref => this.nome = ref} /> <br />
        <input className='uk-input uk-form-width-large' placeholder='descricao' type='text' defaultValue={this.state.conexao.descricao} ref={ref => this.descricao = ref} /> <br />
        <input className='uk-input uk-form-width-large' placeholder='codigo' type='text' defaultValue={this.state.conexao.codigo} ref={ref => this.codigo = ref} /> <br />
        <input className='uk-button uk-button-default' type='file' id='imagem' ref={ref => this.imagem = ref} /> Imagem  <br />
        <input className='uk-button uk-button-default' type='file' id='imagemTabela' ref={ref => this.imagemTabela = ref} /> Imagem Tabela  <br />
        <button className='uk-button uk-button-default' type='button' onClick={this.handleSave}>Salvar edição</button> <br />


      </div>
    )
  }
}

export default AdminEditarConexao