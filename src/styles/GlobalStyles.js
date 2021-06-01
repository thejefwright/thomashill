import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/montserrat/600.css';
import '@fontsource/roboto';

const GlobalStyles = createGlobalStyle`
:root {
  --primary: rgba(97,51,24);
  --background: rgba(185,156,107);
  --second: rgba(213,117,0);
}
*,
*:before,
*:after {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  font-family: roboto;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}

`;
export default GlobalStyles;
