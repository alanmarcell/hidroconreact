import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <header id='home'>
          <div className='uk-margin uk-position-relative uk-dark'>
            {/*  SLIDESHOW */}
            <div className='uk-margin js-slideshow-animation' data-uk-slideshow='ratio: false'>
              <div className='uk-position-relative uk-visible-toggle uk-dark'>
                <ul className='uk-slideshow-items' uk-height-viewport='min-height: 300'>
                  <li> <img src='images/slide_01.jpg' alt='' data-height data-width data-uk-cover data-uk-img='target: !.uk-slideshow-items > :last-child, !* +*' /></li>
                  <li> <img src='images/dark.jpg' alt='' data-height data-width data-uk-cover data-uk-img='target: !* -*, !* +*' /> </li>
                  <li> <img src='images/light.jpg' alt='' data-height data-width data-uk-cover data-uk-img='target: !* -*, !.uk-slideshow-items > :first-child' /></li>
                </ul>
                <Link className='uk-position-center-left uk-position-small uk-hidden-hover' to='#' data-uk-slidenav-previous data-uk-slideshow-item='previous'></Link>
                <Link className='uk-position-center-right uk-position-small uk-hidden-hover' to='#' data-uk-slidenav-next data-uk-slideshow-item='next'></Link>
              </div>
            </div>
            {/*  END SLIDESHOW */}

            {/*  NAVBAR */}
            <div className='uk-position-top'>
              <div uk-sticky='animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200'>
                <nav className='uk-navbar-container uk-navbar-transparent uk-navbar uk-container uk-container-expand' data-uk-navbar='mode:click'>
                  <div className='uk-navbar-left uk-visible@m'>
                    <ul className='uk-navbar-nav' data-uk-scrollspy-nav='closest: li; scroll: true; offset: 60' data-uk-scroll='duration:1500'>
                      <li><a href='#home'>Início</a></li>
                      <li><Link to={{ hash:'#empresa'}} replace>A Empresa</Link></li>
                      <li><a href='#conexoes'>Conexões</a></li>
                      <li><a href='#qualidade'>Qualidade</a></li>
                      <li><a href='#contato'>Contato</a></li>
                    </ul>
                  </div>
                  {/*  LOGO  */}
                  <div className='uk-navbar-right'>
                    <div className='uk-navbar-item'>
                      {/*   <div> <a href='#'>Logo</a> </div> */}
                      <Link to='#'><img className='uk-width-small' src='images/hidrocon_branco.svg' alt='Hidrocon Distribuidora' /> </Link>
                    </div>
                  </div>
                  {/*  END LOGO  */}
                  {/*  TOGGLE MENU MOBILE */}
                  <div className='uk-navbar-right uk-hidden@m'>
                    {/* <div className='uk-navbar-item'>
                      <div><Link to='#' className='uk-text-meta'>Menu</Link></div>
                    </div> */}
                    <button className='uk-button uk-button-default uk-margin-remove-adjacent' type='button' style={{border: 'none', zIndex: '200'}} data-uk-toggle='target: #offcanvas-slide'><span data-uk-icon='icon: table'>Menu&nbsp;</span></button>
                  </div>
                  {/*  END TOGGLE MENU MOBILE */}
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header