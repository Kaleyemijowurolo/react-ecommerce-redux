import React from "react";
import Button from "../button";
import { FooterWraper } from "./footer.styles";

const Footer = () => {
  return (
    <FooterWraper>
      <Button buttonText="Check Now" />

      <Button secondary buttonText="Subscribe" />
    </FooterWraper>
  );
};

export default Footer;
