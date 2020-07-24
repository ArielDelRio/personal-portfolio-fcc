import React from 'react';
import {
  ProjectContainer,
  PreviewProject,
  ProjectTitle
} from './Project.styles';

const Project = ({ name, urlLink, urlPreview }) => {
  return (
    <ProjectContainer
      href={urlLink}
      className="project-container"
      target="_blank"
    >
      <PreviewProject loading="lazy" src={urlPreview} alt={name} />
      <ProjectTitle>{name}</ProjectTitle>
    </ProjectContainer>
  );
};

export default Project;
