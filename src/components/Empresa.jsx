import React, { Component } from 'react'

class Empresa extends Component {
  render() {
    return (
      <div>
        {/* {/* DIVISAO EMPRESA */}
        <section id='empresa'>
          <div className='small under' data-uk-sticky='offset: 80; bottom: #empresa'>
            <div className='uk-container uk-container-large'>
              <div className='uk-grid-large uk-grid'>
                <div className='uk-width-expand'>
                  <p className='titulo-barra'>A Empresa</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div className='uk-container uk-container-large'>
              {/* METADE SLIDESHOW */}
              <div className='uk-child-width-1-2@m' data-uk-grid>
                <div>
                  <div className='js-slideshow-animation' data-uk-slideshow=' autoplay:true; animation: pull'>
                    <div className='uk-position-relative uk-visible-toggle uk-light'>
                      <ul className='uk-slideshow-items'>
                        <li>
                          <img src='images/cotovelo_90.jpeg' alt='' data-uk-cover data-uk-responsive data-uk-img='target: !.uk-slideshow-items > :last-child, !* +*' />
                          {/* <div className='uk-position-center uk-position-small uk-text-center slide-titulo'>
                                <div className='uk-text-large' uk-slideshow-parallax='x: 100,-100'>Heading</div>
                                <p uk-slideshow-parallax='x: 200,-200'>Lorem ipsum dolor sit amet.</p>
                              </div> */}

                        </li>
                        <li>
                          <img src='images/cruzeta.jpeg' alt='' data-uk-cover data-uk-responsive data-uk-img='target: !* -*, !* +*' />
                          {/* <div className='uk-position-center uk-position-small uk-text-center slide-titulo'>
                                  <div className='uk-text-large' uk-slideshow-parallax='x: 100,-100'>Cruzeta</div>
                                  <p uk-slideshow-parallax='x: 200,-200'>Lorem ipsum dolor sit amet.</p>
                                </div> */}
                        </li>
                        <li>
                          <img src='images/curva_45_mf-.jpg' alt='' data-uk-cover data-uk-responsiv data-uk-img='target: !* -*, !.uk-slideshow-items > :first-child' />
                          {/* <div className='uk-position-center  uk-text-center slide-titulo'>
                                    <div className='uk-text-large' uk-slideshow-parallax='x: 100,-100'>Curva 45º M/F</div>
                                    <p uk-slideshow-parallax='x: 200,-200'>Lorem ipsum dolor sit amet.</p>
                                  </div> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Metade texto Empresa */}
                <div>
                  {/* <br /> */}
                  <div className='uk-h4 text'>Importadora e distribuidora de conexões galvanizadas certificadas em Belo Horizonte-MG, atua no mercado desde
                                      julho de 2014 com eficiência em logística e o mais completo estoque disponível para pronto atendimento em
            todo o Brasil.</div>
                  <div className='uk-h4 text'>Distribuidora autorizada <span style={{ color: 'red', fontWeight: 'bold' }}>MECH </span> <img src='images/logo_mech.svg'
                    height='30' width='42' data-uk-svg alt='Distribuidora autorizada MECH' /> (Jinan Meide Casting Co. Ltd.), maior
            fabricante mundial de conexões galvanizadas com qualidade reconhecida em todo o mundo.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FIM EMPRESA */}
      </div>

    )
  }
}

export default Empresa