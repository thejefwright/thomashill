import React from 'react';
import styled from 'styled-components';

const ServicesStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: var(--primary);
  h1 {
    border-bottom: 2px solid var(--second);
    margin-bottom: 2rem;
    text-align: center;
  }
  ul {
    font-size: 2rem;
  }
  li {
    list-style: circle;
    padding: 1rem 0;
  }
  @media (max-width: 800px) {
  }
`;

export default function ServicesPage() {
  return (
    <ServicesStyles>
      <h1>These are the services that I offer:</h1>
      <hr />
      <div>
        <ul>
          <li>I will design your garden!</li>
          <li>I will install your garden!</li>
          <li>
            I don't want to mow your lawn but I probably will if you pay me
            enough
          </li>
          <li>I might build you a fence? </li>
        </ul>
      </div>
    </ServicesStyles>
  );
}
