import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const WrapperFooterTop = styled.div`
  padding-bottom: ${(props) => props.theme.size["3rem"]};
`;

export const WrapperFooterBottom = styled.div`
  width: 100%;
  padding-top: ${(props) => props.theme.size["2rem"]};
  padding-bottom: ${(props) => props.theme.size["4rem"]};
  border-top: 1px solid ${(props) => props.theme.colors.neutrals3};
`;
