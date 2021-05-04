import React from 'react';
import styled from 'styled-components';
import { useMenu } from '../utils/menuState';

const HamburgerStyles = styled.div`
  .wrapper {
    height: 60px;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
  }

  .hamburger {
    position: relative;
    background: var(--primary);
    width: 100%;
    height: 3px;
    transition: all 0.3s;
  }
  .hamburger:before,
  .hamburger:after {
    content: '';
    top: 10px;
    position: absolute;
    background: var(--primary);
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
