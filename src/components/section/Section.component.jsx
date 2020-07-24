import React from 'react';
import { SectionContainer, Overlay } from './Section.styles.component';

const Section = props => {
  return props.withOverlay ? (
    <SectionContainer {...props}>
      <Overlay>{props.children}</Overlay>
    </SectionContainer>
  ) : (
    <SectionContainer {...props}>{props.children}</SectionContainer>
  );
};

export default Section;
