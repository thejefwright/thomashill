import React from 'react';
import styled from 'styled-components';
import { useMenu } from '../utils/menuState';

const HamburgerStyles = styled.div`
  .wrapper {
    /* position: absolute; */
    /* top: 0; */
    /* right: 0;   */
    height: 60px;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    background: var(--primary);
    box-shadow: -2px 2px 3px 0 grey;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    /* z-index: 2; */
  }

  .hamburger {
    position: relative;
    background: white;
    width: 100%;
    height: 3px;
    border-radius: 10px;
    transition: all 0.3s;
  }
  .hamburger:before,
  .hamburger:after {
    content: '';
    top: 10px;
    position: absolute;
    background: white;
    width: 100%;
    height: 3px;
    border-radius: 10px;
  }
  .hamburger:after {
    top: -10px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

export default function Hamburger() {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <HamburgerStyles open={menuOpen}>
      <div className="wrapper" role="button" tabIndex={0} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
    </HamburgerStyles>
  );
}
