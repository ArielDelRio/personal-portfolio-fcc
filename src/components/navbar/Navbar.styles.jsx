import styled, { css } from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--main-red);
  border-bottom: 4px outset var(--main-dark);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1;
  ${props => {
    return props.fixed
      ? css`
          position: fixed;
        `
      : css`
          position: relative;
        `;
  }};
`;

export const NavLink = styled.a`
  height: 90px;
  width: 100%;
  text-decoration: none;
  font-size: 1.8em;
  color: var(--main-black);
  text-align: center;
  padding-top: 30px;
  transition: 0.2s;

  &.active {
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: 2.4em;

    :last-child {
      border-left: 2px solid var(--main-dark);
    }
    :first-child {
      border-right: 2px solid var(--main-dark);
    }
    :nth-child(2) {
      border-left: 2px solid var(--main-dark);
      border-right: 2px solid var(--main-dark);
    }
  }

  &:hover {
    background-color: ${props => props.hoverColor};
    color: var(--main-light);

    :last-child {
      border-left: 2px solid var(--main-dark);
    }
    :first-child {
      border-right: 2px solid var(--main-dark);
    }
    :nth-child(2) {
      border-left: 3px solid var(--main-dark);
      border-right: 3px solid var(--main-dark);
    }
  }

  @media (max-width: 640px) {
    font-size: 1.1em;
    &.active {
      font-size: 1.4em;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    height: 70px;
    flex-direction: column;
    font-size: 0.9em;
    &.active {
      font-size: 1.2em;
    }
  }
`;
