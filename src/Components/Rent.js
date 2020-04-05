import React from 'react';
import Calendar from './Calendar';

const Rent = () => {
  return(
    <div className="col-sm-4 item_page_right_column" >
      <div className="col-xs-12">
        <div className="panel panel-default user__info_panel" style={{ marginBottom: '10px !important'}}>
          <div className="user__info_panel_body">
            <div className="row" style={{display: 'flex', alignItems: 'center'}}>
              <div className="col-xs-2">
                <div style={{width: '50px', height: '50px', overflow: 'hidden', borderRadius: '50%', margin: '0 auto'}}>
                  <a href="/pt/profile/9194">
                    <img style={{width: '100%', height: 'auto', minWidth: '50px', minHeight: '50px'}}
                      src="https://dc3h9n0uz6yfs.cloudfront.net/users/avatars/000/009/194/thumb_medium/picture?1583404198"
                      alt="Avatar"/>
                  </a>
                </div>
              </div>
              <div className="col-xs-7">
                <div className="user__info_name_social_links_and_level">
                  <strong><a id="owner_name" href="/pt/profile/9194">Owner Name</a></strong>
                  <i className="glyphicon glyphicon-ok-sign"></i>
                </div>
              </div>
              <div className="col-xs-3 user__info_rating cn">

              </div>
            </div>
          </div>

        </div>
        <div className="col-xs-12">
          <div className="panel panel-default item__details_panel ">

            <div className="item__detail_price">
              <strong>€00,00</strong> / dia

            </div>

            <div className="panel-body text-center">
              <Calendar />
              <div className="items__quick_booking_container">
                <button className="btn btn-primary">Default button</button>
              </div>
            </div>

          </div>
        </div>
        <div className="text-center">
          <small> <a id="info_zone_link" href="#info_zone_row">Como funciona</a> / <a id="feedback_zone_link"
              href="#feedback_zone_row">Feedback</a></small>
        </div>
      </div>
    </div>
  )
};

export default Rent;