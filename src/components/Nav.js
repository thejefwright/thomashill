import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  align-items: center;

  .link {
    text-decoration: none;
    color: var(--primary);
    font-size: 2rem;
    padding: 0 2rem;
  }

  @media (max-width: 799px) {
    .link {
      display: none;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link className="link" to="/work">
        Work
      </Link>
      <Link className="link" to="/services">
        Services
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
    </NavStyles>
  );
}
