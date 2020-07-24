export const navItems = [
    {
      id:'projects',
      name:'Projects', 
      sectionTo:'projects-section', 
      active: false, 
      backgroundColor:"var(--main-light-blue)", 
      color:"var(--main-light)",
      hoverColor:"var(--main-blue)"
    }, 
    {
      id:'welcome', 
      name: 'Welcome', 
      sectionTo:'welcome-section', 
      active: true,
      backgroundColor:"var(--main-light-blue)", 
      color:"var(--main-light)",
      hoverColor:"var(--main-blue)"
    },
    {
      id:'about_me', 
      name: 'About me', 
      sectionTo:'about-me-section', 
      active: false,
      backgroundColor:"var(--main-light-blue)", 
      color:"var(--main-light)",
      hoverColor:"var(--main-blue)"
    },
     
   
  ];
  
export const backgroundSections = {
    welcomeSection: `linear-gradient(
        62deg,
        var(--main-gray) 10%,
        var(--main-dark) 100%
      );`,
    projectsSection: `linear-gradient(
      62deg,
      var(--main-light-blue) 10%,
      var(--main-blue) 100%
    );`,
    aboutMeSection: `linear-gradient(
      132deg,
      var(--main-gray) 10%,
      var(--main-light-gray) 100%
    );`,
  };
  