import styled from "@emotion/styled";
import { DEVICES } from "config";

export const CategorySectionContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 10px;
`;

export const FiltersCategorySectionContent = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${(props) => props.theme.size["0.75rem"]};
  @media ${DEVICES.tablet} {
    justify-content: space-between;
    width: 100%;
    margin: ${(props) => props.theme.size["1rem"]} 0;
  }
`;

export const FiltersContent = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid ${(props) => props.theme.colors.neutrals3};
  border-top-left-radius: ${(props) => props.theme.size["0.875rem"]};
  justify-content: space-between;
  align-items: center;
  @media ${DEVICES.tablet} {
    flex-direction: column;
  }
`;
