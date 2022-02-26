import { css } from "styled-components";

/**
 * @desc    Extra Small Devices
 * @divice  mobile phone
 * @screen  576px and down
 */
export function xsm(props) {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `;
}
/**
 * @desc    Small Devices
 * @divice  small tablets
 * @screen  576px and up
 */
export function sm(props) {
  return css`
    @media only screen and (min-width: 576px) {
      ${props}
    }
  `;
}
/**
 * @desc    Medium Devices
 * @divice  Tablets
 * @screen  768px and up
 */
export function md(props) {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
}
/**
 * @desc    Large Devices
 * @divice  Labtop
 * @screen  992px and up
 */
export function lg(props) {
  return css`
    @media only screen and (min-width: 992px) {
      ${props}
    }
  `;
}

/**
 * @desc    Extra Large Devices
 * @divice  PC
 * @screen  1200px and up
 */
export function xl(props) {
  return css`
    @media only screen and (min-width: 1200px) {
      ${props}
    }
  `;
}
