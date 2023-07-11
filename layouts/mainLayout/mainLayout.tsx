import React from "react";
import { Global as GlobalStyling } from "@emotion/react";

import {
  LayoutContainer,
  LayoutWrapper,
  GlobalStyles,
} from "./mainLayout.styles";
import { Footer } from "components/commons/footer";

export interface MainLayoutProps {
  children?: React.ReactNode;
  full?: boolean;
}

export const MainLayout = ({ children, full }: MainLayoutProps) => {
  return (
    <LayoutContainer>
      <GlobalStyling styles={GlobalStyles} />
      <LayoutWrapper>
        {children}
        {!full && <Footer />}
      </LayoutWrapper>
    </LayoutContainer>
  );
};
