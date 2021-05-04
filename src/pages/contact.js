import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
  width: 80%;
  height: 100vh;
  text-align: center;
  margin: auto;
  h1 {
    margin: 2rem 0;
  }
`;

const FormStyles = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  font-size: 3rem;
  height: 100%;
  width: 100%;
  padding: 2rem;

  input {
    width: 100%;
    height: 4rem;
    padding: 0.5rem;
    font-size: 1.75rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: var(--green);
    }
  }

  label {
    display: block;
    text-align: left;
    margin: 1rem 0;
  }

  button {
    /* align-self: center; */
    width: auto;
    background: var(--green);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;

export default function ContactPage() {
  return (
    <ContactStyles>
      <h1>
        This is the contact page.
        <br /> I'm working on it.
      </h1>
      <FormStyles>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          // value={values.email}
          // onChange={updateValues}
        />
        <button type="submit">Submit Form!</button>
      </FormStyles>
    </ContactStyles>
  );
}
