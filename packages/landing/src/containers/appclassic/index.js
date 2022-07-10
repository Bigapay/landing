import colors from './colors';
export const theme = {
  breakpoints: ['480px', '768px', '990px', '1220px'],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    roboto: '"Roboto", sans-serif',
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors,
  colorStyles: {
    primary: {
      color: colors.primary,
      borderColor: colors.primary,
      '&:hover': {
        color: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    secondary: {
      color: colors.secondary,
      borderColor: colors.secondary,
      '&:hover': {
        color: colors.secondaryHover,
        borderColor: colors.secondaryHover,
      },
    },
    warning: {
      color: colors.yellow,
      borderColor: colors.yellow,
      '&:hover': {
        color: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    error: {
      color: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      '&:hover': {
        color: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    primaryWithBg: {
      color: colors.white,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      '&:hover': {
        backgroundColor: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    secondaryWithBg: {
      color: colors.white,
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
      '&:hover': {
        backgroundColor: colors.secondaryHover,
        borderColor: colors.secondaryHover,
      },
    },
    warningWithBg: {
      color: colors.white,
      backgroundColor: colors.yellow,
      borderColor: colors.yellow,
      '&:hover': {
        backgroundColor: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    errorWithBg: {
      color: colors.white,
      backgroundColor: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      '&:hover': {
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
      },
    },
  },
.sass_app_creative_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;

    .container {
      @media only screen and (max-width: 1366px) {
        max-width: 1170px;
      }
    }
    .mainMenuWrapper {
      flex: 1 1 100%;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }
    }
    .main_menu {
      margin-left: 45px;
      li {
        display: inline-flex;
        padding-left: 13px;
        padding-right: 13px;
        @media (max-width: 1024px) {
          padding-left: 8px;
          padding-right: 8px;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${themeGet('colors.primary')};
          }
        }
        a {
          color: ${themeGet('colors.black')};
          font-size: 15px;
          line-height: 2.2;
          padding: 5px;
          transition: 0.15s ease-in-out;
          &:hover {
            color: ${themeGet('colors.primary')};
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }

    .navbar-buttons {
      margin-left: auto;
      align-items: center;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      button {   
        font-size: 15px;
        line-height: 19px;
        min-height: 45px;
        padding: 0 20px;
        border-radius: 30px;
      }
    }
    .navbar_button_one {
      font-weight: 400;
      background-color: transparent;
      color: ${themeGet('colors.black')};
      padding: 0;
      border: 1px solid ${themeGet('colors.borderColor')};
      .btn-icon {
        margin-right: 9px;
      }
      .btn-text {
        padding: 0;
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button_two {
      display: inline-flex;
      button {
        font-weight: 600;
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet('colors.black')};
        }
      }
    }
  }

  .sticky-nav-active {
    .sass_app_creative_navbar {
      background-color: ${themeGet('colors.white')};
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
    }
    .main-logo {
      opacity: 0;
      visibility: hidden;
    }
    .sticky-logo {
      opacity: 1;
      visibility: visible;
    }
    .main_menu li a {
      color: ${themeGet('colors.headingColor')};
    }
    .main_menu li:hover a,
    .main_menu li.is-current a {
      color: #1089ff;
    }
    .reusecore-drawer__handler {
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet('colors.headingColor')};
        }
      }
    }
    .navbar_button_one {
      background-color: transparent;
      color: ${themeGet('colors.headingColor')};
    }
  }


  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;
    &.alt {
      background-color: ${themeGet('colors.primary', '#10ac84')} !important;
      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    &.video-modal {
      background-color: transparent !important;
    }
    .innerRndComponent {
      padding-right: 0 !important;
    }
  }
  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .reuseModalHolder.login-modal{
    @media (min-width: 768px) {
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #ff4361;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #ff4361;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #ff4361;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }
  buttonStyles: {
    textButton: {
      border: 0,
      color: colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: `${colors.transparent}`,
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: colors.transparent,
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0,
      },
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center',
    },
  },
};
