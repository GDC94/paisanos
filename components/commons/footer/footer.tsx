import React from "react";
import {
  FooterContainer,
  WrapperFooterBottom,
  WrapperFooterTop,
} from "./footer.styles";
import { LogoPaisanos } from "../icons/icons";
import { Text } from "../../text";

export const Footer = () => {
  return (
    <FooterContainer>
      <WrapperFooterTop>
        <LogoPaisanos />
        <Text
          fontWeight={400}
          text={"The New Creative Economy."}
          size='1.5rem'
          color={"neutrals6"}
          marginTop='1.5rem'
          isPoppins
        />
      </WrapperFooterTop>
      <WrapperFooterBottom>
        <Text
          fontWeight={400}
          text={"Created with ❤️ by Germán Derbes Catoni"}
          size='0.75rem'
          color={"neutrals4"}
          isPoppins
        />
      </WrapperFooterBottom>
    </FooterContainer>
  );
};
