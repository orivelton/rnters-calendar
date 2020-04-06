import React from 'react';

const Card = () => (
  <div className="col-sm-8 item_page_left_column">
    <div className="panel" style={{marginBottom: '10px'}}>
      <div className="row">
        <div className="col-xs-12">
          <div id="carousel-1960" className="carousel items__page_carousel cn  slide item__carousel"
            data-ride="carousel" data-interval="false">
            <div className="carousel-caption">
              <div>
                <p className="item__tag_label">
                  <a href="/pt/items/search?q=Desporto">Desporto</a>
                </p>
              </div>
            </div>
            <div className="carousel-inner">
              <div className="item active">
                <img alt="Babolat Pure Drive - Raquete Ténis" className="img-responsive center-block"
                  src="https://dc3h9n0uz6yfs.cloudfront.net/item_photos/photos/000/004/739/large/101334_1_5.jpg?1583404891" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="row text-left" style={{padding: '0px 20px'}}>
        <div className="col-xs-12">
          <div className="col-xs-10">
            <h1 id="item_title"><b>Item Name</b></h1>
          </div>
        </div>
        <div className="col-xs-12">
          <span className="item_page_green_all_caps_title"> <i className="glyphicon glyphicon-map-marker"></i> Porto,
            Portugal</span>
        </div>
      </div>

      <div className="row text-left" style={{padding: '0px 20px 40px 20px'}}>
        <div className="col-xs-12">
          Weight unstrung 300 g
          Technology Cortex Pure Feel, FSI Power, GT Technology, Elliptic Beam
          Composition GRAPHITE
          Head Size 99.98 in² / 645 cm²
          Length 26.97 in / 68.5 cm
          Stiffness 72 RA
          Balance unstrung 12.6 in / 32 cm
          Beam Width 23-26-23 mm
          String Pattern 16X19
        </div>
      </div>
    </div>
    <div className="col-xs-12 text-center not_visible_mobile" style={{color: 'grey' }}>
      <div>
        <div className="col-xs-2 text-center">
          <small><b>SABIAS QUE?</b></small>
        </div>
        <div className="col-xs-10 text-left">
          <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="7000"
            style={{background: 'transparent !important'}}>
            <div className="carousel-inner">
              <div className="item active">
                <small>Alugar é, em média, 90% mais barato que comprar. <span
                    className="glyphicon glyphicon-piggy-bank"></span> </small>
              </div>
              <div className="item">
                <small>Podes aumentar o teu rendimento mensal até 20% alugando as tuas coisas. <span
                    className="glyphicon glyphicon-circle-arrow-up"></span></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
