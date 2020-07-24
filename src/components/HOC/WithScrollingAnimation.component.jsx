import React, { useEffect, useState, useRef } from 'react';
import { Animation } from './Animation.style';

// animations enabled = [fadeIn, fadeInDown, fadeInLeft, fadeInRight, zoomIn]

const WithScrollingAnimation = Component => {
  const ScrollingAnimation = ({ ...props }) => {
    const [readyToView, setreadyToView] = useState(false);
    const ref = useRef('');

    useEffect(() => {
      const element = ref.current;
      window.addEventListener('scroll', () => {
        const top =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (top > element.offsetTop - 500) setreadyToView(true);
      });
    }, []);

    return (
      <Animation
        ref={ref}
        animationPlayState={readyToView}
        animationName={props.animationName}
        animationTime={props.animationTime}
        animationFirstMobile={props.animationFirstMobile}
      >
        <Component
          {...props}
          style={{ visibility: readyToView ? 'visible' : 'hidden' }}
        />
      </Animation>
    );
  };
  return ScrollingAnimation;
};

export default WithScrollingAnimation;
