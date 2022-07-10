import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { openModal, closeModal } from '@redq/reuse-modal';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import LoginModal from '../LoginModal';
import lockIcon from 'common/assets/image/AppCreative/icons/lock.svg';

import NavbarWrapper, { MenuArea, MobileMenu, navbarStyle, button } from './navbar.style';

import { navbar } from 'common/data/AppCreative';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);


  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

    const Navbar = () => {
      const { logoImage, navMenu } = navbar;
      const [state, setState] = useState({
        mobileMenu: false,
      });
    
      const toggleHandler = (type) => {
        if (type === 'menu') {
          setState({
            ...state,
            mobileMenu: !state.mobileMenu,
          });
        }
      };
    
      const scrollItems = [];
    
      navMenu.forEach((item) => {
        scrollItems.push(item.path.slice(1));
      });
    
      const handleRemoveMenu = () => {
        setState({
          ...state,
          mobileMenu: false,
        });
      };

  return (
    <NavbarWrapper className="navbar" {...navbarStyle}>
      <Container>
          <Logo
            href="/"
            logoSrc={logoImage}
            title="BigaPay"
            className="main-logo sticky-logo"
          />
            {/* end of logo */}

          <MenuArea>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}
          <Button
                {...button}
                iconPosition="left"
                icon={<img src={lockIcon?.src} alt="lock icon" />}
                title="Login"
                onClick={handleLoginModal}
                className="navbar_button navbar_button_one"
              />
              <Link href="//apply.bigapay.com">
                <a className="navbar_button navbar_button_two">
                  <Button {...button} title="Sign Up" />
                </a>
              </Link>
          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>
      {/* start mobile menu */}
        <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
            <Container>
              <Scrollspy
                className="menu"
                items={scrollItems}
                offset={-84}
                currentClassName="active"
              >
                {navMenu.map((menu, index) => (
                  <li key={`menu_key${index}`}>
                    <AnchorLink
                      href={menu.path}
                      offset={menu.offset}
                      onClick={handleRemoveMenu}
                    >
                      {menu.label}
                    </AnchorLink>
                  </li>
                ))}
              </Scrollspy>
              <Button
                {...button}
                iconPosition="left"
                icon={<img src={lockIcon?.src} alt="lock icon" />}
                title="Login"
                onClick={handleLoginModal}
                className="navbar_button navbar_button_one"
              />
              <Link href="//apply.bigapay.com">
                <a className="navbar_button navbar_button_two">
                  <Button {...button} title="Sign Up" />
                </a>
              </Link>
            </Container>
          </MobileMenu>
          {/* end of mobile menu */}
          
    </NavbarWrapper>
  );
  Navbar.propTypes = {
    navbarStyle: PropTypes.object,
    button: PropTypes.object,
    row: PropTypes.object,
    menuWrapper: PropTypes.object,
  };

};

export default Navbar;