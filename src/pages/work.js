import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';

const WorkStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3rem;
  padding-top: 30%;
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
      {/* <Image /> */}
    </WorkStyles>
  );
}
