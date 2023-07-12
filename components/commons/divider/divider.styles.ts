import styled from "@emotion/styled";
import { DEVICES } from "config";

export const DividerElement = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 2px;
  margin: ${(props) => props.theme.size["1.5rem"]} 0;
  background-color: ${(props) => props.theme.colors.neutrals3};
  @media ${DEVICES.mobileL} {
    display: none;
  }
`;
