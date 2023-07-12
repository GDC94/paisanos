import styled from "@emotion/styled";

export const CategorySectionContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 10px;
`;

export const FiltersCategorySectionContent = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${(props) => props.theme.size["0.75rem"]};
`;

export const FiltersContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
