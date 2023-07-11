import styled from "@emotion/styled";

export const SearchSectionContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
`;

export const SearchSectionContent = styled.div`
  margin-bottom: ${(props) => props.theme.size["2rem"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputSearch = styled.input`
  caret-color: ${(props) => props.theme.colors.green};
  background-color: transparent;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.colors.neutrals8};
  font-size: ${(props) => props.theme.size["1.5rem"]};
  font-weight: ${(props) => props.theme.fontWeight[400]};
  font-family: ${(props) => props.theme.fonts.Poppins};
  line-height: ${(props) => props.theme.size["2rem"]};
  letter-spacing: -0.24px;
  border-radius: 20px ;
  &::placeholder {
    color: ${(props) => props.theme.colors.neutrals6};
  }
`;
