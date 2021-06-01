import React from 'react';
import styled from 'styled-components';

const WorkStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  color: var(--primary);

  @media (max-width: 800px) {
    text-align: center;
  }
  h1 {
    border-bottom: 2px solid var(--second);
    margin-bottom: 2rem;
  }
`;

export default function WorkPage() {
  return (
    <WorkStyles>
      <h1>Look at all the work I've done! I'm a hard worker!</h1>
      <h2>This will be an image gallery of your work</h2>
    </WorkStyles>
  );
}
