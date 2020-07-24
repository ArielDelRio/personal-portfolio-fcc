import styled from 'styled-components';

export const FooterContainer = styled.div``;

export const Line = styled.hr`
  background-color: var(--main-orange);
  height: 6px;
  border: none;
`;

export const FooterMsg = styled.div`
  color: var(--main-orange);
  text-align: center;
  margin-top: 0.5em;

  &.thanks-msg {
    font-size: 2.5em;
    font-family: cursive;
    font-weight: bold;

    & span {
      color: var(--main-light);
    }

    @media (max-width: 640px) {
      font-size: 2.3em;
    }
  }

  &.created-msg {
    font-size: 2.5em;

    @media (max-width: 640px) {
      font-size: 1.6em;
    }
  }
`;
