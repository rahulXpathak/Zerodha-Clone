import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FBFBFB" }} className="border-top mt-5">
      <div className="container mt-5">
        <div className="row">
          {/* Column 1: Logo, Copyright, Socials */}
          <div className="col-12 col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              style={{ width: "130px" }}
              alt="Logo"
              className="mb-3"
            />
            <p className="small text-muted">
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>
            
            {/* Social Icons Row 1 */}
            <div className="mb-3 social-icons">
              <a href="#" className="text-muted me-3"><i className="fa-brands fa-x-twitter fs-5"></i></a>
              <a href="#" className="text-muted me-3"><i className="fa-brands fa-square-facebook fs-5"></i></a>
              <a href="#" className="text-muted me-3"><i className="fa-brands fa-instagram fs-5"></i></a>
              <a href="#" className="text-muted me-3"><i className="fa-brands fa-linkedin-in fs-5"></i></a>
            </div>
            
            <hr className="w-75" />
            
            {/* Social Icons Row 2 */}
            <div className="mt-3 social-icons">
              <a href="#" className="text-muted me-3"><i className="fa-brands fa-youtube fs-5"></i></a>
              <a href="#" className="text-muted me-3"><i className="fa-brands fa-whatsapp fs-5"></i></a>
              <a href="#" className="text-muted me-3"><i className="fa-brands fa-telegram fs-5"></i></a>
            </div>
          </div>

          {/* Column 2: Account */}
          <div className="col-6 col-md">
            <h5 className="mb-4 text-dark fw-medium">Account</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-dark">Open demat account</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-dark">Minor demat account</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-dark">NRI demat account</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-dark">Commodity</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-6 col-md">
            <h5 className="mb-4 text-dark fw-medium">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact us</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">How to file a complaint?</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Status of your complaints</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-6 col-md">
            <h5 className="mb-4 text-dark fw-medium">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Philosophy</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Press & media</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div className="col-6 col-md">
            <h5 className="mb-4 text-dark fw-medium">Quick links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Upcoming IPOs</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Brokerage charges</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Market holidays</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Economic calendar</a></li>
            </ul>
          </div>
        </div>
        
        {/* Optional: Small legal footer text often found at the very bottom */}
        <div className="row mt-5 pb-3">
             <div className="col text-center">
                 <small className="text-muted" style={{fontSize: "11px"}}>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
                 </small>
             </div>
        </div>
      </div>
    </footer>
  );
}