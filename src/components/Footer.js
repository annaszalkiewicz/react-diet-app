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
          <Link to="#" className="button_primary">
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
        <h2 className="footer_item--title">Bod•e Trainer in your pocket</h2>
        <p className="footer_item--text">
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <div className="footer_item--buttons">
          <Link to="#" className="button_primary">
          <Icon
              path={mdiApple}
              size={1}
              color="#7c7c7c"
            />
            iOS
            <Icon
              path={mdiChevronRight}
              size={1}
              color="#7c7c7c"
            />
          </Link>
          <Link to="#" className="button_primary">
          <Icon
              path={mdiAndroid}
              size={1}
              color="#7c7c7c"
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
          <Link to="#" className="button_primary">
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
