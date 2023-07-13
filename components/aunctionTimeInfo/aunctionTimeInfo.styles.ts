import styled from "@emotion/styled";

export const AuctionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const AuctionTimeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: ${(props) => props.theme.size["0.5rem"]};
`;

export const AuctionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
