import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Nav from './Nav';

const HeaderStyles = styled.div`
  padding: 1rem 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;

  h1 {
    color: var(--primary);
  }
  .link {
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Link className="link" to="/">
        <h1>Thomas Hill Logo</h1>
      </Link>
      <Nav />
      <Hamburger />
    </HeaderStyles>
  );
}
