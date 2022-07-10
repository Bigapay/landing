import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'DM Sans', sans-serif;
  }
  .reuseModalParentWrapper,
  .reuseModalOverlay {
    z-index: 99999;
    .reuseModalHolder{
      border: 0;
    }
  } 
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans', sans-serif;
  }
  section {
    position: relative;
  }
  p:last-child {
    margin-bottom: 0;
  }
  .reusecore__button {
    font-weight: 500;
  }
  .navbar-buttons {
    float: right;
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
    margin-right: 10px;
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
  .container {
    @media only screen and (max-width: 624px) {
    width: 100%;
    }
    @media only screen and (max-width: 624px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media only screen and (width: 320px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .sticky-active {
    .navbar {
      padding: 20px 0 21px;
      background-color: ${themeGet('colors.white', '#ffffff')};
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .mobile-menu {
        top: 72px;
      }
      ul {
        li {
          &.is-current {
            a {
              color: ${themeGet('colors.primary', '#6C247E')};
            }
          }
        }
      }
      .reusecore__button {
        &.menubar {
          color: ${themeGet('colors.secondary', '#000')};
        }
        &.text {
          color: ${themeGet('colors.secondary', '#000')};
          .btn-icon {
            svg {
              stroke: ${themeGet('colors.secondary', '#000')};
            }
          }
          @media only screen and (max-width: 991px) {
          }
        }
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
`;

export const SectionHeader = styled.header`
  max-width: 480px;
  width: 100%;
  margin: 0 auto 50px;
  text-align: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-bottom: 45px;
  }
  p {
    font-size: 15px;
    font-weight: normal;
    line-height: 2.3;
    margin-bottom: 0px;
    color: ${themeGet('colors.headingColor', '#000000')};
    @media only screen and (max-width: 991px) {
      line-height: 2;
    }
  }
  h2 {
    font-size: 26px;
    line-height: 1.5;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#000000')};
    margin-top: 0;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
    @media only screen and (max-width: 991px) {
      font-size: 24px;
      margin-bottom: 10px;
      line-height: 1.35;
    }
  }
  &.text-white {
    h2,
    p {
      color: ${themeGet('colors.white', '#ffffff')};
    }
  }
`;

export default GlobalStyle;
