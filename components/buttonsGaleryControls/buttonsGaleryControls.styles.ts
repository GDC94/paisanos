import styled from "@emotion/styled";
import { DEVICES } from "config";

export const ButtonsGaleryContent = styled.div`
  width: 100%;
  gap: ${(props) => props.theme.size["0.5rem"]};
  display: flex;
  justify-content: start;
  align-items: center;
  @media ${DEVICES.mobileL} {
    justify-content: center;
  }
`;
