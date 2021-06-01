import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import styled from 'styled-components';

const InnerStyles = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <MobileMenu />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </>
  );
}
