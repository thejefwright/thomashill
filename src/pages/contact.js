import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
  width: 80%;
  height: 100vh;
  text-align: center;
  margin: auto;
  color: var(--primary);
  h1 {
    margin: 2rem 0;
  }
`;

const FormStyles = styled.form`
  font-size: 2rem;
  width: 100%;
  padding: 2rem;

  input {
    width: 100%;
    height: 4rem;
    background: rgba(0, 0, 0, 0.03);
    padding: 0.5rem;
    font-size: 1.75rem;
    border: 1px solid black;
  }
  textarea {
    width: 100%;
    background: rgba(0, 0, 0, 0.03);
  }

  label {
    display: block;
    text-align: left;
    margin: 1rem 0;
  }

  button {
    display: block;
    background: var(--primary);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 25px;
    padding: 1rem 5rem;
    margin: 2rem auto;
    transition: all 0.3s;
    box-shadow: 0 4px 8px 0 grey;
  }
  @media (max-width: 500px) {
    button {
      transform: translateY(400%);
    }
  }
`;

export default function ContactPage() {
  return (
    <ContactStyles>
      <h1>Fill out the form to contact me.</h1>
      <FormStyles
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thankYou"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="message">How can I help?</label>
        <textarea name="message" id="message" rows="10" required></textarea>
        <button type="submit">Send!</button>
      </FormStyles>
    </ContactStyles>
  );
}
