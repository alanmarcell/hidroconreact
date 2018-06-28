// Google Maps
function initMap() {
  var hidrocon = {
    lat: -19.8228134,
    lng: -43.965251
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: hidrocon
  });

  var contentString = `<div id="content">
          <h1 id="firstHeading" class="firstHeading uk-text-primary">Hidrocon</h1>
          <div id="bodyContent">
              <p>Única importadora de conexões galvanizadas certificadas de Minas Gerais, a Hidrocon está conveniente sediada em Belo Horizonte com estoque disponível para pronto atendimento em todo o Brasil.</p>
              <p>Distribuidora autorizada MECH (Jinan Meide Casting Co. Ltd.), maior fabricante mundial de conexões, com qualidade certificada e reconhecida pelo mercado brasileiro.</p>
          </div>
          </div>`;
          
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: hidrocon,
    map: map,
    title: 'Hidrocon'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}


// PDF
    // var options = {
    //   pdfOpenParams: {
    //     scrollbar: '1',
    //     toolbar: '1',
    //     statusbar: '1'
    //   }
    // };

    // PDFObject.embed("./../pdf/codigo_etica_conduta.pdf", "#conduta", options);
    // PDFObject.embed("pdf/catalogo_tecnico.pdf", "#cat_tecnico", options);
    // PDFObject.embed("pdf/bucha_niple.pdf", "#bucha", options);
    // PDFObject.embed("pdf/cotovelos.pdf", "#cotovelo", options);
    // PDFObject.embed("pdf/cruzeta.pdf", "#cruzeta", options);
    // PDFObject.embed("pdf/curvas.pdf", "#curva", options);
    // PDFObject.embed("pdf/flanges.pdf", "#flange", options);
    // PDFObject.embed("pdf/luvas.pdf", "#luva", options);
    // PDFObject.embed("pdf/tampoes_bujoes.pdf", "#tampoes", options);
    // PDFObject.embed("pdf/tes.pdf", "#te", options);
    // PDFObject.embed("pdf/unioes.pdf", "#uniao", options);
    // PDFObject.embed("pdf/portfolio_hidrocon.pdf", "#portfolio", options);
    // PDFObject.embed("pdf/iso9001.pdf", "#iso", options);
    // PDFObject.embed("pdf/certificado_inmetro.pdf", "#certificado", options);
  