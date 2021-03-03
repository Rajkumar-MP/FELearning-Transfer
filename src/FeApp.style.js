import { css } from 'lit-element';

const primaryColor = css`#ab0066`;
const secondaryColor = css`#696969`;
const ternaryColor = css`#f0f0f0`;

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap');
  body {
    background-color: ${ternaryColor};
  }
  :host {
    font-family: 'Roboto Slab', serif;
    display: block;
  }
  .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .card {
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 12%), 0 2px 2px 0 rgb(0 0 0 / 24%);
    padding: 8px 16px;
    cursor: pointer;
  }
  h1 {
    font-weight: 600;
    margin: 1em 0 1.5em;
  }
  .form--input--field label {
    font-size: 24px;
    font-weight: 400;
  }
  .text--align--centre {
    text-align: centre;
  }
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
  .button {
    border-radius: 6px;
    padding: 8px 16px;
    margin: 8px;
    font-size: 20px;
    cursor: pointer;
  }
  .primary--background--color {
    background-color: ${primaryColor};
    color: white;
  }
  .secondary--background--color {
    background-color: ${secondaryColor};
    color: white;
  }
  .primary--color {
    color: ${primaryColor};
  }
  .secondary--color {
    color: ${secondaryColor};
  }
  .form--input--field input {
    border: 1px solid;
    border-radius: 6px;
    padding: 8px;
    margin-top: 8px;
  }
  .form--input--field input:focus {
    border: 2px solid ${primaryColor};
    border-radius: 6px;
    padding: 8px;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  @media only screen and (min-width: 48em) {
    .container {
      width: 46rem;
    }
  }
  @media only screen and (min-width: 75em) {
    .container {
      width: 71rem;
    }
  }
`;
