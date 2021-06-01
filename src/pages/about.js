import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--primary);
  padding: 0 3rem;
  padding-top: 30%;

  @media (max-width: 800px) {
    /* text-align: center; */
  }
`;

export default function AboutPage() {
  return (
    <AboutStyles>
      <h1>
        I'm a cool guy with a super awesome beard and I love to design gardens.
      </h1>
    </AboutStyles>
  );
}
