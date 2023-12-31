import styled from "@emotion/styled";
import { DEVICES } from "config";

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: ${(props) => props.theme.size["1.25rem"]};
  padding-bottom: ${(props) => props.theme.size["1.25rem"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContentLeft = styled.div`
  width: 60%;
  display: flex;
`;

export const HeaderContentRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoContainer = styled.div`
  padding-right: ${(props) => props.theme.size["2rem"]};
`;

export const Divider = styled.div`
  width: 2px;
  height: ${(props) => props.theme.size["2.5rem"]};
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.neutrals3};
  @media ${DEVICES.mobileM} {
    display: none;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.theme.size["2rem"]};
  @media ${DEVICES.mobileL} {
    display: none;
  }
`;
