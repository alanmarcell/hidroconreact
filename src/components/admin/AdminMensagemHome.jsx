import React, { Component } from 'react'
import Base, { storage } from './../../FirebaseInit'

class MensagemHome extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      mensagens: {},
    })

    this.handleSave = this.handleSave.bind(this)
    this.renderMensagens = this.renderMensagens.bind(this)
    this.excluirMensagem = this.excluirMensagem.bind(this)
  }

  componentDidMount() {
    Base.syncState('mensagens', {
      context: this,
      state: 'mensagens',
      asArray: false
    })
  }

  handleSave(e) {
    // const nome = this.nome.value
    // const tipoMensagem = this.state.tipo === 'mensagem' ? this.mensagem.value : null
    // const tipoImagem = this.state.tipo === 'imagem' ? this.imagem.files[0] : null
    // const tipoImagem = this.imagem

    const itemMensagem = {
      nome: this.nome.value,
      imagem: this.imagem
    }

    this.setState({ isUploading: true })
    const arquivo = itemMensagem.imagem.files[0]
    const { name } = arquivo

    const ref = storage.ref(name)
    ref.put(arquivo)
      .then(imagem => {
        imagem.ref.getDownloadURL()
          .then(downloadURL => {
            const novaMensagem = {
              nome: itemMensagem.nome,
              // mensagem: this.tipoMensagem.value,
              imagem: downloadURL
            }

            Base.push('mensagens', {
              data: novaMensagem,
              // data: { nome, tipoImagem },
              then: error => {
                if (!error) {
                  this.nome.value = ''
                  // this.setState({ tipo: '' })
                  // if (this.mensagem) {
                  //   this.mensagem.value = ''
                  // }
                  if (this.imagem) {
                    this.imagem.value = ''
                  }
                }
              }
            })
          })
          this.setState({ isUploading: false })
      })

    e.preventDefault()
  }



  excluirMensagem(key) {
    Base.remove('mensagens/' + key, error => {
      console.error(error)
    })
  }
  renderMensagens(key, mensagem) {
    return (
      <li className='uk-list' key={key}>
        {mensagem.nome}  &nbsp;&nbsp;&nbsp;
        {/* <button className='uk-button uk-button-default' onClick={() => this.editarMensagem()}> Editar </button> &nbsp; */}
        <button className='uk-button uk-button-default' onClick={() => this.excluirMensagem(key)}> Remover </button>
      </li>

    )
  }


  render() {
    if (this.state.isUploading) {
      return (
        <div className='container'>
          <span className='uk-margin-small-right' data-uk-spinner='ratio: 1'>Aguarde...</span>
        </div>
      )
    }

    return (
      <div>

        <div>
          <form>
            <fieldset className='uk-fieldset'>

              <legend className='uk-legend'>Mensagem para aparecer no início</legend>

              <div className='uk-margin'>
                <input className='uk-input' type='text' placeholder='Nome da mensagem' ref={ref => this.nome = ref} />
              </div>
              <div>
                <input className='uk-button uk-button-default' type='file' id='imagem' ref={ref => this.imagem = ref} />Imagem  <br />
              </div>

              <button className='uk-button uk-button-default' type='button' onClick={this.handleSave}>Salvar mensagem</button> <br />
            </fieldset>
          </form>
        </div>

        <ul className='uk-list uk-list-large'>
          {
            Object
              .keys(this.state.mensagens)
              .map(key => this.renderMensagens(key, this.state.mensagens[key]))
          }
        </ul>

      </div>
    )
  }
}

export default MensagemHome