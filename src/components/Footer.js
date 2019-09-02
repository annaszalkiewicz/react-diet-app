import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@mdi/react';
import { mdiChevronRight, mdiApple, mdiAndroid } from '@mdi/js';

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
          <Link to="#" className="button_primary footer_button">
            Buy now
            <Icon
              path={mdiChevronRight}
              size={1}
              color="#7c7c7c"
            />
          </Link>
        </div>
      </div>
      <div className="footer_item">
        <h2 className="footer_item--title">Bod•&#275; Trainer in your pocket</h2>
        <p className="footer_item--text">
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <div className="footer_item--buttons">
          <Link to="#" className="button_primary button_footer">
          <Icon
              path={mdiApple}
              size={0.8}
              color="#7c7c7c"
              className="button_primary--icon"
            />
            iOS
            <Icon
              path={mdiChevronRight}
              size={1}
              color="#7c7c7c"
            />
          </Link>
          <Link to="#" className="button_primary button_footer">
          <Icon
              path={mdiAndroid}
              size={0.8}
              color="#7c7c7c"
              className="button_primary--icon"
            />
            Android
            <Icon
              path={mdiChevronRight}
              size={1}
              color="#7c7c7c"
            />
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
          <Link to="#" className="button_primary button_footer">
            Read FAQs
            <Icon
              path={mdiChevronRight}
              size={1}
              color="#7c7c7c"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
