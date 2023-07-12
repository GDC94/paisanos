import styled from "@emotion/styled";
import { DEVICES } from "config";

export const CardsSectionContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 3rem;
`;

export const CardSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  @media ${DEVICES.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
