import styled from "@emotion/styled";

export const ChipContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.size["0.5rem"]};
`;

export const AvatarWrapper = styled.div`
  min-width: ${(props) => props.theme.size["2rem"]};
  object-fit: cover;
`;

export const CollectionImg = styled.img`
  min-width: ${(props) => props.theme.size["2rem"]};
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ImageChip = styled.img`
  width: ${(props) => props.theme.size["2.5rem"]};
  height: ${(props) => props.theme.size["2.5rem"]};
  border-radius: 50%;
`;
