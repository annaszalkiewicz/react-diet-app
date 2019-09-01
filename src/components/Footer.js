import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_item">
        <h2 className="footer_item--title">Running out of products?</h2>
        <p className="footer_item--text">
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <div className="footer_item--buttons">
          <Link to="#" className="button_primary">
            Buy now
          </Link>
        </div>
      </div>
      <div className="footer_item">
        <h2 className="footer_item--title">Bod•e Trainer in your pocket</h2>
        <p className="footer_item--text">
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <div className="footer_item--buttons">
          <Link to="#" className="button_primary">
            iOS
          </Link>
          <Link to="#" className="button_primary">
            Android
          </Link>
        </div>
      </div>
      <div className="footer_item">
        <h2 className="footer_item--title">Frequently Asked Questions</h2>
        <p className="footer_item--text">
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <div className="footer_item--buttons">
          <Link to="#" className="button_primary">
            Read FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
