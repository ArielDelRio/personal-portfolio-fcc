import React from 'react';

import {
  WelcomeSectionContainer,
  WelcomeCard,
  WelcomeTitle,
  WelcomeSubtitle,
  SmileIcon
} from './WelcomeSection.styles';

const WelcomeSection = () => (
  <WelcomeSectionContainer>
    <WelcomeCard animateZoom>
      <WelcomeTitle>
        Hello, I'm ArieldRio <SmileIcon className="fa fa-smile-o"></SmileIcon>
      </WelcomeTitle>
      <WelcomeSubtitle>passionate about programming</WelcomeSubtitle>
    </WelcomeCard>
  </WelcomeSectionContainer>
);

export default WelcomeSection;
