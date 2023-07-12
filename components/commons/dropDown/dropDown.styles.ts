import styled from "@emotion/styled";

export const DropDownWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 256px;
  color: ${(props) => props.theme.colors.neutrals2};
  font-size: ${(props) => props.theme.size["1.25rem"]};
  text-transform: uppercase;
  white-space: nowrap;
  position: relative;
`;

export const IconChevronDownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.Poppins};
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutrals1};
  border: 2px solid ${(props) => props.theme.colors.neutrals3};
  border-radius: ${(props) => props.theme.size["0.75rem"]};
  padding-right: ${(props) => props.theme.size["0.5rem"]};
  padding-left: ${(props) => props.theme.size["1rem"]};
  padding-top: ${(props) => props.theme.size["0.5rem"]};
  padding-bottom: ${(props) => props.theme.size["0.5rem"]};
  gap: ${(props) => props.theme.size["0.5rem"]};
  width: 100%;
  svg {
    padding: 10px;
    border: 2px solid ${(props) => props.theme.colors.neutrals3};
    border-radius: 100%;
    width: 34px;
    height: 34px;
    margin-left: ${(props) => props.theme.size["0.375rem"]};
    path {
      fill: ${(props) => props.theme.colors.neutrals4};
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

export const DropDownOptions = styled.div`
  width: 100%;
  opacity: 0;
  pointer-events: none;
  z-index: 99999;
  position: absolute;
  top: ${(props) => props.theme.size["4rem"]};
  right: 0;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

export const SingleOption = styled.div`
  color: ${(props) => props.theme.colors.neutrals8};
  font-size: ${(props) => props.theme.size["0.75rem"]};
  white-space: nowrap;
  text-transform: none;
  line-height: ${(props) => props.theme.size["1.5rem"]};
  font-weight: ${(props) => props.theme.fontWeight[500]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.theme.size["0.5rem"]};
`;

export const DropItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.neutrals2};
  border-radius: ${(props) => props.theme.size["0.75rem"]};
  padding: ${(props) => props.theme.size["0.5rem"]};
  gap: ${(props) => props.theme.size["0.5rem"]};
  cursor: pointer;
  transition: ${(props) => props.theme.transitions["0.3s"]};
  &:hover {
    background-color: ${(props) => props.theme.colors.neutrals1};
  }
`;

export const Item = styled.div`
  width: 100%;
`;

export const DropdownOptionsList = styled.div`
  padding: ${(props) => props.theme.size["0.5rem"]} 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.neutrals2};
  border-radius: ${(props) => props.theme.size["0.75rem"]};
  padding: ${(props) => props.theme.size["0.5rem"]};
`;
