import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Nav from './Nav';

const HeaderStyles = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  border-bottom: 1px solid var(--second);
  transition: all 0.3s;
  h1 {
    color: var(--primary);
  }
  .link {
    text-decoration: none;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (min-width: 800px) {
    padding: 1.5rem 0;
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
