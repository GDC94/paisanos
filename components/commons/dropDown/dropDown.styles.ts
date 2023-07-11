import styled from "@emotion/styled";


export const DropDownWrapper = styled.div`
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.neutrals2};
  font-size: ${(props) => props.theme.size["1.25rem"]};
  text-transform: uppercase;
  white-space: nowrap;
  position: relative;
`;

export const IconChevronDownWrapper = styled.div`
  display: flex;
  text-transform: none;
  position: relative;
  svg {
    width: ${(props) => props.theme.size["0.875rem"]};
    height: auto;
    margin-left: ${(props) => props.theme.size["0.375rem"]};
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

export const DropDownOptions = styled.div`
  width: 180px;
  opacity: 0;
  pointer-events: none;
  z-index: 99999;
  position: absolute;
  top: 32px;
  right: 0;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

export const SingleOption = styled.div`
  color: ${(props) => props.theme.colors.neutrals2};
  font-size: ${(props) => props.theme.size["0.875rem"]};
  white-space: nowrap;
  text-transform: none;
`;

export const LinkItem = styled.a`
  width: 100%;
  height: 50px;
`;

export const DropItem = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  padding-top: ${(props) => props.theme.size["1rem"]};
  padding-bottom: ${(props) => props.theme.size["1rem"]};
  padding-left: ${(props) => props.theme.size["1.25rem"]};
  padding-right: ${(props) => props.theme.size["1.25rem"]};
  transition: ${(props) => props.theme.transitions["0.3s"]};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.neutrals3};
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;
`;

export const DropdownOptionsList = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.size["0.375rem"]};
 
  padding: ${(props) => props.theme.size["0.5rem"]} 0;
  overflow: hidden;
`;
