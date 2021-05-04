import React from 'react';
import Layout from './src/components/Layout';
import MenuStateProvider from './src/utils/menuState';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <MenuStateProvider>{element}</MenuStateProvider>;
}
