import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PdfViewer from './pdf'

class Qualidade extends Component {
  render() {
    return (
      <div>
        <br />
        {/* QUALIDADE */}
        <section id='qualidade'>
          <div className='small under' data-uk-sticky='offset: 80; bottom: #qualidade'>
            <div className='uk-container uk-container-large'>
              <div className='uk-grid-large uk-grid'>
                <div className='uk-width-expand'>
                  <p className='titulo-barra'>Qualidade</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='uk-container uk-container-small'>
            <div className='uk-h4 text'>Fabricadas pela Jinan Meide Casting Co. Ltd., detentora do mais moderno parque de Ciência e Tecnologia e a mais automatizada
          fábrica de conexões de ferro fundido do mundo, as conexões <span style={{ color: 'red', fontWeight: 'bold' }}>MECH </span><img
                src='images/logo_mech.svg' height='30' width='42' data-uk-svg alt='Distribuidora autorizada MECH' /> são fabricadas sob
          os mais modernos processos produtivos e por isso vendidas em mais de 130 países.</div>
            <div className='uk-h4 text'>O compromisso com a qualidade está diretamente proporcional à experiência de mais de 50 anos como empresa líder no
              setor.
        </div>
            <div className='uk-h4 text'>Cada conexão <span style={{ color: 'red', fontWeight: 'bold' }}>MECH </span> <img src='images/logo_mech.svg' height='30'
              width='42' data-uk-svg alt='Distribuidora autorizada MECH' /> é submetida a testes e avaliações técnicas individuais que
          atendem as mais rígidas normas mundiais que as reconhecem como “produto de alta de tecnologia”.</div>
            <div className='uk-h4 text'>
              O diâmetro nominal está apresentado em polegadas (variando de 1/8' a 6').
        </div>
            <div className='uk-h4 text'>
              <strong>PROCESSO PRODUTIVO</strong>: As conexões <span style={{ color: 'red', fontWeight: 'bold' }}>MECH </span><img src='images/logo_mech.svg'
                height='30' width='42' data-uk-svg alt='Distribuidora autorizada MECH' /> são produzidas através da fundição de ferro
maleável preto, especificado na norma ABNT NBR 6590 e galvanizadas à fogo através de zincagem por imersão a quente
conforme ABNT NBR 6323.
        </div>
            <div className='uk-h4 text'>
              <strong>NORMAS DE FABRICAÇÃO E INSPEÇÃO</strong>: As conexões <span style={{ color: 'red', fontWeight: 'bold' }}>MECH </span><img
                src='images/logo_mech.svg' height='30' width='42' data-uk-svg alt='Distribuidora autorizada MECH' />, são produzidas e
inspecionadas em conformidade com as especificações das normas ABNT NBR 6943:2000, ISO 49 e EN 10242.
        </div>
            <div className='uk-h4 text'>
              <strong>ROSCAS</strong>: As roscas de vedação são produzidas em conformidade com a NBR NM-ISO 7-1.
        </div>
            <div className='uk-h4 text'>
              <strong>RESISTÊNCIA HIDROSTÁTICA</strong>: As conexões <span style={{ color: 'red', fontWeight: 'bold' }}>MECH </span><img
                src='images/logo_mech.svg' height='30' width='42' data-uk-svg alt='Distribuidora autorizada MECH' />, são projetadas e
ensaiadas de tal forma a suportarem, na temperatura ambiente, pressões internas de 10 Mpa.
        </div>
            <div className='uk-h4 text'>
              <strong>PRESSÃO MÁXIMA</strong>: As conexões <span style={{ color: 'red', fontWeight: 'bold' }}>MECH </span><img src='images/logo_mech.svg'
                height='30' width='42' data-uk-svg alt='Distribuidora autorizada MECH' />, se aplicam para o uso na condução de fluidos
sob a pressão máxima de serviço de 2,5Mpa em temperaturas entre 120ºC e 300ºC, e de 2,0Mpa na temperatura de 300ºC.
        </div>
          </div>
          <br />
          <br />
          <br />
          <div className='uk-container'>
            <div className='uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small' data-uk-grid data-uk-scrollspy='cls: uk-animation-fade; target: > div > .animation; delay: 200'>

              {/* Código de Ética e Conduta */}
              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #codigo_etica_conduta'><img src='pdf/codigo_etica_conduta.jpg' alt='Código de Ética e Conduta' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Código de Ética e Conduta</p>
                  </div>
                </div>

                {/* Modal */}

                <div id='codigo_etica_conduta' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='conduta'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Código de Ética e Conduta" data='./../pdf/codigo_etica_conduta.pdf'>
                      <p>Este browser não permite a visualização de arquivos PDF neste formato. Por favor, faça o <Link to='./../pdf/codigo_etica_conduta.pdf' download> download</Link> dele para o visualizar.
                      </p>
                      </object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim codigo_etica_conduta */}

              {/* Catálogo Técnico */}
              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #catalogo_tecnico'><img src='pdf/catalogo_tecnico.jpg' alt='Catálogo Técnico' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Catálogo Técnico</p>
                  </div>
                </div>

                {/* Modal*/}
                <div id='catalogo_tecnico' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='cat_tecnico'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Catálogo Técnico" data='./../pdf/catalogo_tecnico.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Catálogo Técnico */}

              {/* Bucha/Niple */}
              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #bucha_niple'><img src='pdf/bucha_niple.jpg' alt='Bucha/Niple' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Bucha / Niple</p>
                  </div>
                </div>

                {/* Modal*/}
                <div id='bucha_niple' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='bucha'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Bucha / Niple" data='./../pdf/bucha_niple.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Bucha/Niple */}

              {/* Cotovelos */}
              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #cotovelos'><img src='pdf/cotovelos.jpg' alt='Cotovelos' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Cotovelos</p>
                  </div>
                </div>

                {/* Modal */}
                <div id='cotovelos' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='cotovelos'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Cotovelos" data='./../pdf/cotovelos.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Cotovelos */}

              {/* Cruzetas */}
              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #cruzetas'><img src='pdf/cruzeta.jpg' alt='Cruzetas' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Cruzetas</p>
                  </div>
                </div>

                {/* Modal */}
                <div id='cruzetas' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='cruzeta'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Código de Ética e Conduta" data='./../pdf/cruzeta.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Cruzetas */}

              {/* Curvas */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #curvas'><img src='pdf/curvas.jpg' alt='Curvas' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Curvas</p>
                  </div>
                </div>
                {/* Modal */}

                <div id='curvas' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='curva'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Curvas" data='./../pdf/curvas.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Curvas */}

              {/* Flanges */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #flanges'><img src='pdf/flanges.jpg' alt='Flanges' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Flanges</p>
                  </div>
                </div>

                {/* Modal */}

                <div id='flanges' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='flanges'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Flanges" data='./../pdf/flanges.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Flanges */}

              {/* Luvas */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #luvas'><img src='pdf/luvas.jpg' alt='Luvas' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Luvas</p>
                  </div>
                </div>
                {/* Modal */}

                <div id='luvas' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div >
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Luvas" data='./../pdf/luvas.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Luvas */}

              {/* Tampoes / Bujoes */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #tampoes_bujoes'><img src='pdf/tampoes_bujoes.jpg' alt='Tampões / Bujões' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Tampões / Bujões</p>
                  </div>
                </div>
                {/* Modal */}
                <div id='tampoes_bujoes' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='tampoes'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Tampões / Bujões" data='./../pdf/tampoes_bujoes.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Tampoes / Bujoes */}

              {/* Tes */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #tes'><img src='pdf/tes.jpg' alt='Tês' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Tês</p>
                  </div>
                </div>
                {/* Modal */}

                <div id='tes' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='te'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Tês" data='./../pdf/tes.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Tes  */}

              {/* Unioes */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #unioes'><img src='pdf/unioes.jpg' alt='Uniões' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Uniões</p>
                  </div>
                </div>

                {/* Modal */}

                <div id='unioes' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='uniao'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Uniões" data='./../pdf/unioes.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim unioes  */}

              {/* Portfolio Hidrocon */}
              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #port_hidrocon'><img src='pdf/portfolio_hidrocon.jpg' alt='Portfolio Hidrocon' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Portfolio Hidrocon</p>
                  </div>
                </div>
                {/* Modal */}
                <div id='port_hidrocon' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='portfolio'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Portfolio Hidrocon" data='./../pdf/portfolio_hidrocon.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Portfolio Hidrocon */}

              {/* ISO 9001 */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #iso9001'><img src='pdf/iso9001.jpg' alt='ISO9001 Jinan Meide Casting Co.' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>ISO9001 Jinan Meide Casting Co.</p>
                  </div>
                </div>
                {/* Modal */}

                <div id='iso9001' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='iso'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="ISO9001 Jinan Meide Casting Co." data='./../pdf/iso9001.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim ISO9001 */}

              {/* Certificado Inmetro */}

              <div className='uk-text-center'>
                <div className='uk-inline uk-dark animation'>
                  <button className='uk-button uk-button-text uk-margin-small-right' type='button' data-uk-toggle='target: #cert_inmetro'><img src='pdf/certificado_inmetro.jpg' alt='Certificado Inmetro' /></button>
                  <div className='uk-overlay uk-overlay-primary uk-position-bottom revistaPdf '>
                    <p>Certificado Inmetro</p>
                  </div>
                </div>
                {/* Modal */}

                <div id='cert_inmetro' className='uk-modal-container' data-uk-modal>
                  <div className='uk-modal-dialog modalPDF'>
                    <button className='uk-modal-close-outside' type='button' data-uk-close></button>
                    <div id='certificado'>
                      <object style={{ width: '100%', height: '80vh' }} aria-label="Certificado Inmetro" data='./../pdf/certificado_inmetro.pdf'></object>
                    </div>
                  </div>
                </div>
              </div>
              {/* fim Certificado Inmetro */}

            </div>
          </div>
        </section>
        {/* {/* FIM QUALIDADE */}
      </div>
    )
  }
}

export default Qualidade