import React from 'react';
import styled from 'styled-components';

const WorkStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export default function WorkPage() {
  return (
    <WorkStyles>
      <h1>Look at all the work I've done! I'm a hard worker!</h1>
    </WorkStyles>
  );
}
