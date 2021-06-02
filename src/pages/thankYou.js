import React from 'react';
import styled from 'styled-components';

const ThanksStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3rem;
  padding-top: 30%;
  color: var(--primary);
  h1 {
    padding: 3rem;
    text-align: center;
  }
`;

export default function thankYouPage() {
  return (
    <ThanksStyles>
      <h1>Your message was sent.</h1>
      <h1> Thanks for contacting us!</h1>
      <h2>we'll be in touch soon!</h2>
    </ThanksStyles>
  );
}
