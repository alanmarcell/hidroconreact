import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OffCanvasSlide extends Component {
  render() {
    return (
      <div>
        {/*  END PAGE CONTENT */}
        {/*  OFFCANVAS SLIDE MENU*/}
        <div id='offcanvas-slide' data-uk-offcanvas='overlay: true'>
          <div className='uk-offcanvas-bar uk-flex uk-flex-column uk-text-center'>
            <button className='uk-offcanvas-close uk-close-large' type='button' data-uk-close></button>
            <div className='uk-width-auto@m uk-alighn-left'> <img className='uk-width-small' alt='Hidrocon Distribuidora Ltda.' src='images/hidrocon_branco.svg' /> </div>
              <ul className='uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-nav-parent-icon' data-uk-nav data-uk-scrollspy-nav='closest: li; scroll: true; offset: 80'
                data-uk-scroll='duration: 15000'>
                <li><a href='#home'>Início</a></li>
                <li><a href='#empresa'>A Empresa</a></li>
                <li><a href='#conexoes'>Conexões</a></li>
                <li><a href='#qualidade'>Qualidade</a></li>
                <li><a href='#contato'>Contato</a></li>
              </ul>

              <div className=' uk-margin-left uk-flex uk-flex-column uk-text-center sub'>
                <div>
                  Horário de funcionamento
          <div>Seg. a sexta 08:00hs às 12:00hs / 13:15 às 18:00hs</div>
                </div>

              </div>

              <div>
                <div className='uk-grid-small uk-child-width-auto uk-flex-inline' data-uk-grid>
                <div>
                  <Link className='uk-icon-button' to='https://www.facebook.com/hidroconbr/' target="_blank" rel="noopener noreferrer" data-uk-icon='icon: facebook'></Link>
                </div>
                <div>
                  <Link className='uk-icon-button' to='https://www.twitter.com/hidroconbr/' target="_blank" rel="noopener noreferrer" data-uk-icon='icon: twitter'></Link>
                </div>
                <div>
                  <Link className='uk-icon-button' to='mailto:contato@hidroconbr.com' data-uk-icon='icon: mail'></Link>
                </div>
                <div>
                  <Link className='uk-icon-button' to='#' data-uk-icon='icon: receiver'></Link>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/*  END OFFCANVAS SLIDE MENU*/}
        </div>
    )
  }
}

export default OffCanvasSlide