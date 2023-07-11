import styled from "@emotion/styled";

export const AssetDetailsContainer = styled.div`
  width: 100%;
`;

export const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.size["2rem"]};
  margin-top: ${(props) => props.theme.size["1.25rem"]};
`;
