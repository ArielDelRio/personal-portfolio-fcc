import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(96, 96, 96, 0.68);
  width: 100%;
  min-height: 100vh;
`;

export const SectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  ${props => css`
    background: ${props.bgColor};
    background-image: ${props.backgroundImage};
    background-size: cover;
    background-repeat: no-repeat;
  `}
`;
