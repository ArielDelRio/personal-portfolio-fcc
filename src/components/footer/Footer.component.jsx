import React from 'react';

import { FooterContainer, Line, FooterMsg } from './Footer.styles';

const Footer = () => (
  <FooterContainer>
    <Line />
    <FooterMsg className="thanks-msg">
      Thanks for your time <span className="fa fa-hand-peace-o" />
    </FooterMsg>
    <FooterMsg className="created-msg">© 2020 Created by ArieldRio</FooterMsg>
  </FooterContainer>
);

export default Footer;
