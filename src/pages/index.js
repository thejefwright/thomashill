import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import house2 from '../images/house2.jpg';

const HomeStyles = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${house2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  display: grid;
  place-items: center;
  z-index: -1;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .heading {
    color: white;
    text-align: center;
  }
  h1 {
    font-family: montserrat;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    font-size: clamp(5.5rem, 11vw, 12vw);
    font-weight: 400;

    /* letter-spacing: 1px; */
  }
  h2 {
    text-align: match-parent;
    font-size: clamp(3rem, 8vw, 10vw);
    font-weight: 300;
    letter-spacing: 7px;
  }
`;

export default function Home() {
  return (
    <>
      <SEO image={house2} />
      <HomeStyles>
        <div className="heading">
          <h1>Thomas&nbsp;Hill</h1>
          <h2>Garden&nbsp;Design</h2>
        </div>
      </HomeStyles>
    </>
  );
}
