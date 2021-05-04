import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <MobileMenu />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
