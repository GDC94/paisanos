import styled from "@emotion/styled";

export const SearchSectionContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
`;

export const SearchSectionContent = styled.div`
  background-color: red;
  height: 40px;
  margin-bottom: ${(props) => props.theme.size["2rem"]};
`;
