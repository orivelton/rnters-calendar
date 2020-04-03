import React from 'react';
import '../index.scss';

const Header = () => {
  return (
    <>
      <div className="loader-wrapper">
        <div className="container cn">
          <i className="far fa-compass fa-spin fa-3x fa-fw"></i>
        </div>
      </div>
      <nav className="navbar navbar-fixed-top ">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              <a href="/pt">
                <img
                  src="https://d3urocn5qjrv7i.cloudfront.net/assets/logo_simple_small-45464c79c00c4d2f0a0e8e10c6b647eb2b8b569ed4abda9a906fca3f72d6e347.png"
                  alt="Logo simple small" />
              </a> </div>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-menu"
              aria-expanded="false">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>

          <div id="navbar-collapse-menu" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li id="btn_become_owner" className="btn_navbar navbar_option"><a className="monetize_btn"
                  href="/pt/pages/make_money">Adicionar artigos</a></li>
              <li className="btn_navbar not_visible_mobile_lg">
                <div className="dropdown">
                  <a 
                    href
                    aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown"
                    className="dropdown-toggle">
                    <span>Saber mais</span> <span className="caret"></span>
                  </a>
                  <ul id="know_more_selector" className="dropdown-menu">
                    <li><a id="how_it_works" className="navbar_option" href="/pt/pages/how_it_works">Como funciona</a></li>
                    <li><a id="make_money" className="navbar_option" href="/pt/pages/make_money">Owner: Lucrar com o que está
                        parado</a></li>
                    <li><a id="rent_stuff" className="navbar_option" href="/pt/pages/rent_stuff">Renter: Como alugar os meus
                        artigos</a></li>
                    <li><a id="security" className="navbar_option" href="/pt/pages/security">Segurança</a></li>
                  </ul>
                </div>
              </li>
              <li id="btn_how_it_works" className="btn_navbar only_visible_mobile_lg navbar_option"><a
                  href="/pt/pages/how_it_works">Como funciona</a></li>
              <li id="btn_make_money" className="btn_navbar only_visible_mobile_lg navbar_option"><a
                  href="/pt/pages/make_money">Owner: Lucrar com o que está parado</a></li>
              <li id="btn_rent_stuff" className="btn_navbar only_visible_mobile_lg navbar_option"><a
                  href="/pt/pages/rent_stuff">Renter: Como alugar os meus artigos</a></li>
              <li id="btn_security" className="btn_navbar only_visible_mobile_lg navbar_option"><a
                  href="/pt/pages/security">Segurança</a></li>

              <li className="btn_navbar">
                <a className="navbar_option" id="btn_sign_in" href="/pt/users/sign_in">Entrar</a>
              </li>
              <li className="btn_navbar">
                <a className="navbar_option" id="btn_sing_up" href="/pt/users/sign_up">Registar</a>
              </li>
              <li className="btn_navbar not_visible_mobile_lg">
                <div className="dropdown">
                  <a
                    href 
                    aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown"
                    className="dropdown-toggle">
                    <span>pt</span> <span className="caret"></span>
                  </a>
                  <ul id="language_selector" className="dropdown-menu">
                    <li><a data-turbolinks="false"
                        href="/pt/items/1960-porto-portugal-alugar-babolat-pure-drive-raquete-tenis?change_locale=true">Português</a>
                    </li>
                    <li><a data-turbolinks="false"
                        href="/en/items/1960-porto-portugal-alugar-babolat-pure-drive-raquete-tenis?change_locale=true">English</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="btn_navbar only_visible_mobile_lg">
                <a data-turbolinks="false" href="/pt/items/1960-porto-portugal-alugar-babolat-pure-drive-raquete-tenis?change_locale=true">Português</a>
              </li>
              <li className="btn_navbar only_visible_mobile_lg">
                <a 
                  data-turbolinks="false" 
                  href="/en/items/1960-porto-portugal-alugar-babolat-pure-drive-raquete-tenis?change_locale=true"
                >
                  English
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Header;
