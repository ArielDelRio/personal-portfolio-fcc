import React from 'react';
import {
  AboutMeHeader,
  AboutMeContainer,
  ProfileLinksContainer,
  ProfileLink
} from './AboutMeSection.styles';

const AboutMeSection = () => (
  <AboutMeContainer>
    <AboutMeHeader>
      <h2>Let's work together...</h2>
    </AboutMeHeader>

    <ProfileLinksContainer>
      <ProfileLink
        href="https://www.linkedin.com/in/ariel-del-rio-94b34a185/"
        target="_blank"
      >
        <span className="fa fa-linkedin-square"></span> Linkedin
      </ProfileLink>

      <ProfileLink href="https://github.com/ArielDelRio" target="_blank">
        <span className="fa fa-github"></span> Github
      </ProfileLink>

      <ProfileLink
        href="https://www.facebook.com/ariel.delrio.73"
        target="_blank"
      >
        <span className="fa fa-facebook-official"></span> Facebook
      </ProfileLink>

      <ProfileLink
        href="https://www.freecodecamp.org/ariel_del_rio"
        target="_blank"
      >
        <span className="fa fa-free-code-camp"></span> FreeCodeCamp
      </ProfileLink>
      <ProfileLink href="mailto:arieldelrioviamonte@gmail.com" target="_blank">
        <span className="fa fa-google"></span> Gmail
      </ProfileLink>
      <ProfileLink
        href="https://www.sololearn.com/Profile/4499345"
        target="_blank"
      >
        <span className="fa fa-link"></span> Sololearn
      </ProfileLink>
    </ProfileLinksContainer>
  </AboutMeContainer>
);

export default AboutMeSection;
