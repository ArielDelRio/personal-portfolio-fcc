import styled, { css } from 'styled-components';
import Card from '../card/Card.styles';

export const WelcomeCard = styled.div`
  ${Card}
  ${props => {
    if (props.animateZoom) {
      return css`
        -webkit-transition: -webkit-transform 0.4s;
        /* Safari */
        transition: transform 0.4s;

        &:hover {
          -ms-transform: scale(1.02);
          /* IE 9 */
          -webkit-transform: scale(1.02);
          /* Safari */
          transform: scale(1.04);
        }
      `;
    }
  }}

  width: 800px;
  background-color: rgba(34, 31, 31, 0.438);
  cursor: default;
  @media (max-width: 1000px) {
    width: 570px;
  }

  @media (max-width: 640px) {
    width: 350px;
  }

  @media (max-width: 360px) {
    width: 250px;
  }
  margin-top: 15vh;
`;

export const WelcomeTitle = styled.h1`
  text-align: center;
  color: var(--main-light);
  font-size: 3em;
  font-family: cursive;
  font-weight: bolder;
  text-shadow: 2px 2px 4px #000000;

  @media (max-width: 640px) {
    font-size: 2.6em;
  }

  @media (max-width: 360px) {
    font-size: 2em;
  }
`;

export const WelcomeSubtitle = styled.p`
  margin-top: -20px;
  text-align: center;
  color: var(--main-red);
  font-size: 1.8em;
  font-style: italic;
  text-shadow: 2px 2px 4px #000000;

  @media (max-width: 640px) {
    font-size: 1.6em;
  }

  @media (max-width: 360px) {
    font-size: 1.4em;
  }
`;

export const SmileIcon = styled.span`
  color: rgba(251, 189, 5, 0.774);
`;

export const WelcomeSectionContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  top: 25vh;

  @media (max-width: 640px) {
    top: 18vh;
  }

  @media (max-width: 360px) {
    top: 18vh;
  }
`;
