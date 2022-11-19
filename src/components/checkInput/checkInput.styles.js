import styled from "styled-components";
import { colors } from "../../lib/colors";

export const CheckInputWrapper = styled.input`
  border: 0.5px solid #bdbdbd;
  width: ${({ size }) => (size ? size : "15px")};
  height: ${({ size }) => (size ? size : "15px")};

  &[type="checkbox"] {
    background-color: ${colors.white};
    -moz-appearance: none;
    -o-appearance: none;
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    /* width: 1.15em; */
    /* height: 1.15em; */
    border-radius: 0.15em;
    transform: translateY(-0em);
    display: grid;
    place-content: center;
  }

  &[type="checkbox"]:checked {
    border: none;
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
  }

  &[type="checkbox"]::before {
    content: "";
    width: ${({ size }) => (size ? size : "12px")};
    height: ${({ size }) => (size ? size : "12px")};
    transform: scale(0);
    transform-origin: center center;
    transition: 200ms transform ease-in-out;
    clip-path: polygon(19% 50%, 15% 60%, 50% 100%, 100% 10%, 95% 0%, 50% 85%);

    /* Windows High Contrast Mode */
    background-color: ${colors.white};
  }

  &[type="checkbox"]:checked::before {
    transform: scale(0.8);
  }

  /* -------------FOR RADIO INPUT-------------- */

  &[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: ${colors.white};
    /* Not removed via appearance */
    margin: 0;
    font-family: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border-radius: 50%;
    border: 1px solid red;
    /* transform: translateY(-0.075em); */

    display: grid;
    place-content: center;
  }

  &[type="radio"]::before {
    content: "";
    width: 0.75em;
    height: 0.75em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em red;
  }

  &[type="radio"]:checked::before {
    transform: scale(1);
  }
`;
