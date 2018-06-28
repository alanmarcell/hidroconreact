import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        {/* FOOTER */}
        <section id='contato'>
          <footer>
            <div className='small under' data-uk-sticky='offset: 80; bottom: #contato'>
              <div className='uk-container uk-container-large'>
                <div className='uk-grid-large uk-grid'>
                  <div className='uk-width-expand'>
                    <p className='titulo-barra'>Contato</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className='uk-container uk-container-large'>
              {/* Endereço */}
              <ul className='uk-grid-small uk-grid-match uk-child-width-expand' data-uk-grid>
                <li className='uk-width-large@s'>
                  <p className='uk-h4'>Envie sua mensagem!</p>
                  <form id='gform' method='POST' action='https://script.google.com/macros/s/AKfycbyyr2LoiyQ4Otg_i4xeT4pixxpqA785rw7J3IkIeMxPGZIyV1dA/exec'>
                    <label className='sr-only'></label>
                    <input id='honeypot' type='text' name='honeypot' value='' autoComplete='mail' />
                    <div className='uk-margin uk-margin-small'>
                      <input className='uk-input' type='text' name='name' placeholder='Nome' autoComplete='name' />
                    </div>
                    <div className='uk-margin uk-margin-small'>
                      <input className='uk-input' type='email' name='email' placeholder='Seu endereço de email' autoComplete='mail' />
                    </div>
                    <div className='uk-margin uk-margin-small'>
                      <input className='uk-input' type='number' name='phone' placeholder='Telefone' autoComplete='tel-national' />
                    </div>
                    <div className='uk-margin uk-margin-small'>
                      <input className='uk-input' type='text' name='subject' placeholder='Assunto' />
                    </div>
                    <div className='uk-margin uk-margin-small'>
                      <textarea className='uk-textarea' rows='6' name='message' placeholder='O que deseja falar com a gente hoje?'></textarea>
                    </div>
                    <button className='uk-button uk-button-default ' type='submit'>Enviar</button>
                    <input type='hidden' name='_subject' value='Novo contato pelo site!' />
                    <input type='hidden' name='_language' value='pt-BR' />
                    <input type='text' name='_gotcha' style={{ display: 'none' }} />
                  </form>

                  <div style={{ display: 'none' }} id='thankyou_message'>
                    <h2><em>Obrigado!</em> Já entraremos em contato com você!</h2>
                  </div>
                </li>
                <li>
                  <div id='map'></div>
                </li>
              </ul>
              {/* Endereco */}
            </div>
            <br /><br />
            <div id='wrapper'>
              <div className='uk-container'>
                <div data-uk-grid>
                  <div className='uk-width-expand@m'>
                    <div className='uk-panel uk-padding'>
                      <div>
                        <div className='uk-text-lead uk-margin-remove-bottom uk-margin-remove-adjacent font-footer'>Hidrocon Importação e Distribuição Ltda.</div>
                        <div className='uk-h4 uk-margin-remove-bottom uk-margin-remove-adjacent font-footer'>Razão Social: IMEC Importação Exportação e Comércio Ltda.</div>
                        <div className='uk-h5 uk-margin-remove-bottom uk-margin-remove-adjacent font-footer'>CNPJ: 18.973.753/0001-49</div>
                        <div className='uk-h5 uk-margin-remove-bottom uk-margin-remove-adjacent font-footer'>Inscrição Estadual: 002.233.002.00-31</div>
                        <br />
                        <span className='uk-margin-small-right' data-uk-icon='location'></span>Rua Augusto Franco, 66 - Bairro São
                João Batista - Belo Horizonte/MG - CEP: 31515-240
                <br />
                        <span className='uk-margin-small-right' data-uk-icon='receiver'></span>(31) 3047 9628 / 3408 6061
                <br />
                        <span className='uk-margin-small-right' data-uk-icon='mail'></span><a href='mailto:hidroconmg@hotmail.com' className='font-footer'>hidroconmg@hotmail.com</a>
                      </div>
                    </div>
                  </div>


                  <div className='uk-width-auto'>
                    <div className='uk-panel uk-padding'>
                      <div>
                        <div className='uk-h2 uk-margin-remove-bottom uk-margin-remove-adjacent font-footer'>Horário de funcionamento</div>
                        <div className='uk-h5 uk-margin-remove-bottom uk-margin-remove-adjacent font-footer'>Seg. a sexta 08:00hs às 12:00hs e 13:15hs às 18:00hs</div>
                      </div>
                      <br />
                      <div>
                        <img src='images/bureau-veritas.svg' alt='Bureau Veritas' height='120' width='150px' data-uk-svg />
                        <img src='images/inmetro.svg' alt='Inmetro' height='120' width='150px' data-uk-svg />
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </footer>
        </section>

        <section id='final'>
          <div className='uk-section uk-section-default uk-section-secondary uk-section-small uk-text-center'>
            <div className='uk-container'>
              <span>
                <div data-uk-svg>
                  <span data-uk-icon='code' style={{ color: 'tomato' }}></span> com <span uk-icon='heart' style={{ color: 'tomato' }}></span> por
      <a href='https://tofanelli.github.io' target='_blank' rel='noopener noreferrer' className='uk-text-meta'> Tofanelli</a>
                </div>
              </span>
            </div>
          </div>
        </section>
        {/* FIM FOOTER */}
      </div>
    )
  }
}

export default Footer