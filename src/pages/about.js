import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);

  @media (max-width: 800px) {
    text-align: center;
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
