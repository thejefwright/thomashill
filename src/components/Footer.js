import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-top: 1px solid var(--primary);
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 1rem 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  p {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <ul>
        <li>
          <a
            href="mailto: jef@jef.pizza?subject=Sick website, bro!"
            target="_blank"
          >
            Email: tj@tjiscool.com
          </a>
        </li>
        <li>
          <a href="tel:2078078527">Call: (207) 555-5555</a>{' '}
        </li>
      </ul>
      <p>&copy; Thomas Hill Garden Design {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
