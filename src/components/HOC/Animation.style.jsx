import styled, { css } from 'styled-components';

export const Animation = styled.div`
  ${props => {
    return css`
      display: flex;
      animation-name: ${props.animationName || 'fadeIn'};
      animation-play-state: ${props.animationPlayState ? 'running' : 'paused'};

      animation-duration: ${props.animationTime || '.8s'};
      animation-fill-mode: both;

      @keyframes fadeIn {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translate3d(0, -40%, 0);
        }

        to {
          opacity: 1;
          transform: none;
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translate3d(-100%, 0, 0);
        }

        to {
          opacity: 1;
          transform: none;
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translate3d(100%, 0, 0);
        }

        to {
          opacity: 1;
          transform: none;
        }
      }

      @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale3d(0.3, 0.3, 0.3);
        }

        50% {
          opacity: 1;
        }
      }

      @media (max-width: 640px) {
        animation-name: ${props.animationFirstMobile
          ? 'fadeIn'
          : props.animationName || 'fadeIn'};
      }
    `;
  }}
`;
