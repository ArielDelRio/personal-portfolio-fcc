import styled from 'styled-components';
import Card from '../../card/Card.styles';

export const ProjectContainer = styled.a`
  ${Card}
  margin-bottom: 2.2em;
  width: 400px;
  height: 350px;
  background-color: var(--main-gray);
  text-decoration: none;
  color: var(--main-light);
  padding-bottom: 0.5em;
  overflow: hidden;
  -webkit-transition: -webkit-transform 0.4s;
  /* Safari */
  transition: transform 0.4s, border-color 0.4s, color 0.4s;

  &:hover {
    -ms-transform: scale(1.02);
    /* IE 9 */
    -webkit-transform: scale(1.02);
    /* Safari */
    transform: scale(1.04);
    border-color: var(--main-dark);
    color: var(--main-light-blue);
  }

  @media (max-width: 1300px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 900px) {
    width: 280px;
  }

  @media (max-width: 640px) {
    width: 250px;
  }
`;

export const PreviewProject = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ProjectTitle = styled.div`
  text-align: center;
  font-size: 26px;
  font-family: 'Courier New', Courier, monospace;
  padding-top: 0.5em;

  &::before {
    content: '<';
    opacity: 0;
    color: var(--main-orange);
    transition: 0.4s;
    font-size: 24px;
  }

  &::after {
    content: '/>';
    opacity: 0;
    color: var(--main-orange);
    transition: 0.4s;
    font-size: 24px;
  }

  //   .project:hover .project-tile:after {
  //     opacity: 1;
  //   }
  //   .project:hover .project-tile:before {
  //     opacity: 1;
  //   }

  .project-container:hover &:after {
    opacity: 1;
  }
  .project-container:hover &:before {
    opacity: 1;
  }

  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;
