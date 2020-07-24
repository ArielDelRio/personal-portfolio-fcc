import React from 'react';
import {
  ProjectsSectionContainer,
  ProjectsHeader,
  ProjectsTitle,
  ArrowIcon,
  ProjectsContainer,
  ProfileLink
} from './ProjectsSection.styles';

import WithScrollingAnimation from '../HOC/WithScrollingAnimation.component';
import Project from './project/Project.component';
import projectsData from './projects.data';

const ArrowIconWithScrollingAnimation = WithScrollingAnimation(ArrowIcon);
const ProjectWithScrollingAnimation = WithScrollingAnimation(Project);
const ProfileLinkWithScrollingAnimation = WithScrollingAnimation(ProfileLink);

const ProjectsSection = () => (
  <ProjectsSectionContainer>
    <ProjectsHeader>
      <ProjectsTitle>These are some of my projects</ProjectsTitle>
      <ArrowIconWithScrollingAnimation
        animationName="fadeInDown"
        animationTime=".8s"
        className="fa fa-arrow-down shadow-effect"
      />
    </ProjectsHeader>

    <ProjectsContainer>
      {projectsData.map(project => (
        <ProjectWithScrollingAnimation
          key={project.id}
          {...project}
          animationName="zoomIn"
          animationTime=".8s"
        ></ProjectWithScrollingAnimation>
      ))}
    </ProjectsContainer>
    <ProfileLinkWithScrollingAnimation
      animationName="fadeIn"
      animationTime=".4s"
      href="https://codepen.io/ArieldRio/"
      target="_blank"
    >
      Show All <span className="fa fa-external-link"></span>
    </ProfileLinkWithScrollingAnimation>
  </ProjectsSectionContainer>
);

export default ProjectsSection;
