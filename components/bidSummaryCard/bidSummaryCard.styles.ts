import styled from "@emotion/styled";

export const SummaryContainer = styled.div`
  border-radius: ${(props) => props.theme.size["2rem"]};
  background-color: ${(props) => props.theme.colors.neutrals2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.size["2.5rem"]};
  margin-top: ${(props) => props.theme.size["2.5rem"]};
  margin-bottom: ${(props) => props.theme.size["2.5rem"]};
`;

export const BidContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.size["1.5rem"]};
`;

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
