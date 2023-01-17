import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districtes</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">B&Bs</li>
          <li className="fListItem">Guest houses</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">All destinations</li>
          <li className="fListItem">All flight destinations</li>
          <li className="fListItem">Discover</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles</li>
          <li className="fListItem">Travel Communities</li>
          <li className="fListItem">Seasonal and holiday deals</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Car hire</li>
          <li className="fListItem">Flight finder</li>
          <li className="fListItem">Restaurant reservations</li>
          <li className="fListItem">Booking.com for Travel Agents</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
          <li className="fListItem">About Booking.com</li>
          <li className="fListItem">Customer Service help</li>
          <li className="fListItem">Partner help</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Press centre</li>
          <li className="fListItem">Safety resource centre</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & Conditions</li>
          <li className="fListItem">Partner dispute</li>
          <li className="fListItem">Privacy & Cookie Statement</li>
          <li className="fListItem">Terms & Conditions</li>
        </ul>
      </div>

      <div id="footer_top_menu" className="footer-top-menu">
        <div className="footer-top-partners clearfix js-footer-top-menu">
          <div className="footerconstraint-inner clearfix">
            <div id="footertopnav-partners" role="navigation">
              <p className="footer-top-partner-text footer-top-partner-buttons">
                Copyright © 2023 Agamir-Booking.com™. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
