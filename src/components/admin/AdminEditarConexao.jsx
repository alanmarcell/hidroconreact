import React, { Component } from 'react'
import Base, { storage } from './../../FirebaseInit'
import { Link, Redirect } from 'react-router-dom'

class AdminEditarConexao extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conexao: {

      },
      isLoading: true,
      saved: false
    }

    this.renderConexoes = this.renderConexoes.bind(this)
    this.deletarConexao = this.deletarConexao.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    Base.fetch(`conexoes/${id}`, {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          conexao: data,
          isLoading: false
        })
        console.log(data)
      }
    })
  }

  deletarConexao(key) {
    Base.remove('conexoes/' + key, error => {
      console.error(error)
    })
    // const { [key]: undefined, ...newConexao } = this.state.conexoes
    // this.setState({
    //   conexoes: newConexao
    // })
  }

  // handleSave() {

  //   const nome = this.nome.value
  //   const descricao = this.descricao.value
  //   const codigo = this.codigo.value

  //   const id = this.props.match.params.id

  //   Base.update(`conexoes/${id}`, {
  //     data: { nome, descricao, codigo },
  //     then: error => {
  //       if (!error) {
  //         this.setState({ saved: true })
          // this.nome.value = ''
          // this.descricao.value = ''
          // this.codigo.value = ''
  //       }
  //     }
  //   })
  // }


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
        {conexoes.nome}
        <Link to={`/admin/editar/${key}`} onClick={() => 1}>  Editar  </Link>
        <button onClick={() => this.deletarConexao(key)}>  Remover  </button>
      </li>
    )
  }

  render() {
    if (this.state.isLoading) {
      return <p>Carregando...</p>
    }

    if (this.state.saved) {
      return <Redirect to='/editar' />
    }
    return (
      <div>
        <div>
          <h2> Editar Conexao</h2>
          <ul>
            {
              Object
                .keys(this.state.conexao)
                .map(key => this.renderConexoes(key, this.state.conexao[key]))
            }
          </ul>
          <input placeholder='Nova conexao' defaultValue={this.state.conexao.nome} type='text' ref={ref => this.nome = ref} /><br />
          <input placeholder='descricao' defaultValue={this.state.conexao.descricao} type='text' ref={ref => this.descricao = ref} /><br />
          <input placeholder='codigo' defaultValue={this.state.conexao.codigo} type='text' ref={ref => this.codigo = ref} /><br />
          <button onClick={this.handleSave}>Salvar edicao</button>
        </div>

      </div>
    )
  }
}

export default AdminEditarConexao