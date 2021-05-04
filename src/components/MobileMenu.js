import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useMenu } from '../utils/menuState';

const MobileNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 60%;
  background: white;
  background: var(--background);
  /* padding: 0 3rem; */
  margin: auto 0;
  z-index: 1;
  box-shadow: 1px 1px 8px 0 var(--primary);
  transition: all 0.3s;
  opacity: 0;
  transform: scale(0);
  transform-origin: top right;
  ${(props) => props.open && `transform: scale(1);`};
  ${(props) => props.open && `opacity: 1;`};

  ul {
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
  }
  .link {
    padding: 1.5rem 1rem;
    align-content: flex-start;
    color: var(--primary);
    /* color: black; */
    font-size: 3rem;
    text-decoration: none;
    border-bottom: 2px solid var(--primary);
    transition: all 0.8s;
    opacity: 0;
    transform: scale(0);
    transform-origin: bottom left;
    ${(props) => props.open && `transform: scale(1);`};
    ${(props) => props.open && `opacity: 1;`};
  }
  .link:hover {
    border-bottom: 2px solid var(--primary);
  }
  button {
    background: var(--background);
    border: none;
    color: var(--primary);
    font-size: 6rem;
    position: absolute;
    top: 3rem;
    right: 3rem;
    /* width: 6rem; */
    /* height: 6rem; */
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export default function MobileMenu() {
  const { menuOpen, closeMenu } = useMenu();
  return (
    <MobileNav open={menuOpen}>
      <button onClick={closeMenu}>&times;</button>
      <ul onClick={closeMenu}>
        <Link open={menuOpen} className="link" to="/work">
          Work
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/">
          About
        </Link>
        <Link className="link" to="/">
          Services
        </Link>
      </ul>
    </MobileNav>
  );
}
