import React, { useState, useEffect } from 'react';
import { NavbarContainer, NavLink } from './Navbar.styles';

const Navbar = ({ navItems, fixed, navSectionsSync }) => {
  const [state, setstate] = useState(navItems);

  useEffect(() => {
    if (navSectionsSync) {
      const sections = navItems.map(item =>
        document.getElementById(item.sectionTo)
      );
      window.addEventListener('scroll', () => {
        // top scroll position
        const top =
          document.body.scrollTop || document.documentElement.scrollTop;

        let currentSection = null;
        const totalSections = sections.length;

        //all sections below the top scroll
        for (let i = 0; i < totalSections; i++) {
          // i get the section who has the lowest difference because that is the closest active section
          // min value in array
          if (top > sections[i].offsetTop - 100) {
            currentSection =
              currentSection === null
                ? sections[i]
                : top - sections[i].offsetTop - 100 <
                  top - currentSection.offsetTop - 100
                ? sections[i]
                : currentSection;
          }
        }

        const activeSection = navItems.find(item => item.active);

        // if the active section and current section are'nt the same
        if (activeSection.sectionTo !== currentSection.id) {
          // get the NavLink button from navItems  who is going to be activated
          const navLinktoActive = navItems.find(
            item => item.sectionTo === currentSection.id
          );

          // change the active NavLink Button
          changeActive(navLinktoActive.id);
        }
      });
    }
  }, [navItems, navSectionsSync]);

  const handleClick = e => {
    const touchedItemId = e.target.id;
    changeActive(touchedItemId);
  };

  const changeActive = target => {
    setstate(state => {
      //active Item
      state.find(item => item.active).active = false;
      //touched Item
      state.find(item => item.id === target).active = true;
      return [...state];
    });
  };

  return (
    <>
      <NavbarContainer id="navbar" fixed={fixed}>
        {state.map((item, index) => (
          <NavLink
            key={index}
            id={item.id}
            href={item.href || '#' + item.sectionTo}
            className={item.active ? 'active' : ''}
            onClick={handleClick}
            backgroundColor={item.backgroundColor}
            color={item.color}
            hoverColor={item.hoverColor}
          >
            {item.name}
          </NavLink>
        ))}
      </NavbarContainer>
    </>
  );
};

export default Navbar;

Navbar.defaultProps = {
  navSectionsSync: false,
  fixed: true,
  navItems: [
    {
      id: 'navLink1',
      name: 'Nav Link 1',
      // sectionTo: 'navLink1-section',
      active: false,
      backgroundColor: 'var(--main-light-blue)',
      color: 'var(--main-light)',
      hoverColor: 'var(--main-blue)'
    },
    {
      id: 'navLink2',
      name: 'Nav Link 2',
      // sectionTo: 'navLink2-section',
      active: true,
      backgroundColor: 'var(--main-light-blue)',
      color: 'var(--main-light)',
      hoverColor: 'var(--main-blue)'
    },
    {
      id: 'navLink3',
      name: 'Nav Link 3',
      // sectionTo: 'navLink3-section',
      active: false,
      backgroundColor: 'var(--main-light-blue)',
      color: 'var(--main-light)',
      hoverColor: 'var(--main-blue)'
    }
  ]
};
