import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Base from './../FirebaseInit'
import { Object } from 'core-js';
class Conexoes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conexoes: {

      }
    }
  }

  componentDidMount() {
    Base.syncState('conexoes', {
      context: this,
      state: 'conexoes',
      asArray: false
    })
  }

  renderConexoes(conexao) {
    return (
      <div >
        <div className='uk-card uk-card-small uk-card-default uk-card-hover'>
          <div className='uk-card-media-top uk-text-center uk-margin-medium-top'>
            <a className='uk-inline' href={conexao.imagemTabela} data-caption={conexao.nome + ' - ' + conexao.codigo}>
              <div className='uk-inline'>
                <img className='uk-responsive-width' data-src={conexao.imagem} alt={conexao.nome}
                  data-uk-img data-width data-height />
                <div className='uk-position-bottom'>
                  <span className='uk-icon-button' data-uk-icon='plus' data-uk-tooltip='title: Ver tabela técnica; pos: top'></span>
                </div>
              </div>
              <div className='uk-card-body'>
                <div className='uk-h3 uk-card-title uk-text-center titulo_card'>{conexao.nome}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>

        <div>
          <br />
          {/* CONEXOES */}
          <section id='conexoes'>
            <div className='small under' data-uk-sticky='offset: 80; bottom: #conexoes'>
              <div className='uk-container uk-container-large'>
                <div className='uk-grid-large uk-grid'>
                  <div className='uk-width-expand'>
                    <p className='titulo-barra'>Conexões</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className='uk-container'>
              <div data-uk-grid>
                <div className='uk-width-expand@m'>
                  <div className='uk-h2 uk-margin-remove-bottom'>Conexões Galvanizadas de Ferro Fundido Maleável</div>
                </div>
                <div className='uk-width-auto@m'>
                  <button className='uk-button uk-button-text uk-margin-small-right uk-text-capitalize' type='button' data-uk-toggle='target: #espec_tecnica'>Especificações Técnicas</button>
                </div>
              </div>
              <div className='uk-h5 uk-margin-remove-bottom uk-margin-remove-adjacent'>Conexões de Ferro Maleável Galvanizadas Roscas BSP 150lbs de pressão máxima Classe 10 Certificadas ABNT/NBR6943:2000,
      ISO 49 e EN 10242 com Selo do INMETRO.</div>
            </div>

            {/* Modal espec_tecnica */}
            <div id='espec_tecnica' className='uk-modal-container' data-uk-modal>
              <div className='uk-modal-dialog'>
                <button className='uk-modal-close-default' type='button' data-uk-close></button>
                <div className='uk-modal-header'>
                  <h2 className='uk-modal-title'>Especificações Técnicas</h2>
                </div>

                <div className='uk-modal-body' data-uk-overflow-auto>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Aplicações</div>
                    <p>As conexões de ferro fundido maleável GALVANIZADO BSP da MECH são aplicadas em redes para a condução de água potável,
                      gás, vapor, combustível, ar comprimido, rede de prevenção e combate a incêndio e e outras aplicações hidráulicas
            em geral onde o fluido conduzido necessita de proteção interna contra oxidação.</p>
                  </div>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Normas de Fabricação</div>
                    <p>As conexões MECH são produzidas em conformidade com as especificações das normas ABNT NBR 6943, ISO 49 e EN 10242
            e especificações MECH.</p>
                  </div>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Material</div>
                    <p>As conexões MECH são produzidas em ferro maleável preto, em conformidade com as normas ABNT NBR 6590, ISO 5922
            e EN 1542.</p>
                  </div>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Rosca</div>
                    <p>As roscas de vedação das conexões MECH são produzidas em conformidade com as especificações das normas NBR NM ISO
            7-1.</p>
                  </div>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Inspeção</div>
                    <p>As conexões MECH são inspecionadas de modo a garantir as especificações das normas ABNT NBR 6943, ISO 49 e EN 10242.</p>
                  </div>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Marcas</div>
                    <p>As conexões MECH, quando as dimensões permitem, são gravadas com a marca com a identificação do diâmetro nominal.</p>
                  </div>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Proteção Superficial</div>
                    <p>As conexões MECH são produzidas com acabamento galvanizado a fogo (zincagem por imersão a quente), conforme ABNT
            NBR 6323, ISO 49 e EN 10242.</p>
                  </div>
                  <div>
                    <div className='uk-h3 uk-margin-remove-bottom uk-margin-remove-adjacent'>Tabela de Pressão</div>
                  </div>
                  <div className='uk-text-center'>
                    <img src='images/tabela_pressao.png' alt='Tabela de Pressão' />
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className='uk-container'>
              <div className='uk-child-width-1-4@m uk-child-width-1-3@s uk-grid-small' data-uk-scrollspy='cls: uk-animation-fade; target: > div > .uk-card; delay: 200'
                data-uk-grid data-uk-height-match='target: > div > .uk-card' data-uk-lightbox>

                {
                  Object
                    .keys(this.state.conexoes)
                    .map(key => this.renderConexoes(this.state.conexoes[key]))
                }
              </div>
            </div>
          </section>
          {/* FIM CONEXOES */}
        </div>
      </BrowserRouter>
    )
  }
}

export default Conexoes