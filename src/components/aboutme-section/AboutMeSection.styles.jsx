import styled from 'styled-components';

export const AboutMeContainer = styled.div``;

export const AboutMeHeader = styled.div`
  padding-top: 80px;
  color: var(--main-light);
  font-size: 3em;
  font-family: cursive;
  font-weight: bolder;
  text-shadow: 2px 2px 4px #000000;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 2em;
  }
`;

export const ProfileLinksContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ProfileLink = styled.a`
  text-decoration: none;
  font-size: 2em;
  color: var(--main-light);
  padding: 0.2em;
  margin: 0.5em;
  position: relative;
  transition: 0.4s;

  &:hover {
    -ms-transform: matrix(1.2, 0, 0, 1.3, 0, -10); /* IE 9 */
    -webkit-transform: matrix(1.2, 0, 0, 1.3, 0, -10); /* Safari */
    transform: matrix(1.2, 0, 0, 1.3, 0, -10);
  }

  @media (max-width: 640px) {
    font-size: 1.5em;
    margin: 0.8em;
  }
`;
