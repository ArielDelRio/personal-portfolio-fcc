import styled from 'styled-components';

export const ProjectsSectionContainer = styled.div`
  padding-bottom: 1.5em;
`;

export const ProjectsHeader = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;

export const ProjectsTitle = styled.h1`
  color: var(--main-dark);
  font-size: 48px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 38px;
  }
`;

export const ArrowIcon = styled.span`
  text-shadow: 2.5px 2.5px 2px rgb(175, 168, 168);
  margin: auto;
  font-size: 8em !important;
  color: var(--main-dark);
  @media (max-width: 640px) {
    font-size: 6em !important;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  align-content: space-around;
  padding-top: 2em;
  overflow: hidden;
`;

export const ProfileLink = styled.a`
  display: block;
  width: fit-content;
  margin: auto;
  font-size: 26px;
  padding: 15px 21px;
  background-color: var(--main-gray);
  border-radius: 10px;
  color: var(--main-light);
  border: var(--main-light) solid 2px;
  transition: 0.4s;

  &:hover {
    background-color: var(--main-light);
    color: var(--main-dark);
    border: var(--main-dark) solid 2px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;
