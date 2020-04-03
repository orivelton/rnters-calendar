import React from 'react';

const Footer = () => {
  return(
    <footer className="not_visible_mobile text-left">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 footer_section">
            <p><b>LINKS ÚTEIS</b></p>
            <p><a href="/pt/pages/security">Garantia SafeStuff</a></p>
            <p><a href="/pt/pages/faq">FAQ</a></p>
            <p><a href="/pt/pages/terms">Termos de Serviço</a></p>
            <p><a href="/pt/pages/privacy">Política de Privacidade</a></p>
          </div>
          <div className="col-sm-4 footer_section text-left">
            <p><b>CONNECT</b></p>
            <p className="footer__subscribe_text">Não percas as novidades!</p>
            <form className="footer__subscribe_form form-inline" action="/pt/subscribe_newsletter" accept-charset="UTF-8"
              method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden"
                name="authenticity_token"
                value="pj0JuSmlvEehsiycv4Jpmnz80EhkXOAtf5B+F5W1lYna7Q+AH57LBflwQ59FpaNSm+qyQGVYlpyO3eWhoP5dlw==" />
              <div className="row" style={{ marginBottom: '10px' }}>
                <div className="col-xs-6">
                  <input placeholder="O teu email" className="form-control" required="required" type="email" name="[email]"
                    id="_email" />
                </div>
                <div className="col-xs-6">
                  <input type="submit" name="commit" value="Subscreve" className="btn btn-primary" />
                </div>
              </div>
            </form>
            <p><a className="social_icons" href="https://www.facebook.com/Rnters-452745608263925"><i
                  className="fab fa-facebook-f fa-lg"></i> Like and share</a></p>
            <p><a className="social_icons" href="https://www.instagram.com/rnters.pt/"><i
                  className="fab fa-instagram fa-lg"></i> Follow us</a></p>
          </div>
          <div className="col-sm-4 footer_section">
            <p><b>Para mais informações contacta:</b></p>
            <div className="row">
              <div className="col-sm-2">
                <img
                  style={{height: '50px'}}
                  src="https://d3urocn5qjrv7i.cloudfront.net/assets/logo_brand_primary-576ad0b1b49e8bde9dd8c6ffa1ae8384c65f3fb696589c69897463951fcab743.png"
                  alt="Logo brand primary" />
              </div>
              <div className="col-sm-10">
                <p>
                  <a data-turbolinks="false"
                    href="/en/items/1960-porto-portugal-alugar-babolat-pure-drive-raquete-tenis?change_locale=true">English</a>
                  |
                  <a data-turbolinks="false"
                    href="/pt/items/1960-porto-portugal-alugar-babolat-pure-drive-raquete-tenis?change_locale=true">Português</a>
                </p>
                <p><a className="social_icons" href="mailto:info@rnters.com"><i className="fas fa-envelope fa-lg"></i>
                    info@rnters.com</a></p>
                <p>2016-2020 Rnters &copy;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
