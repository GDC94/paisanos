import { Text } from "components/text";
import {
  AuctionContent,
  AuctionItem,
  AuctionTimeContainer,
  BidContent,
  SummaryContainer,
} from "./bidSummaryCard.styles";

const BidSummaryCard = () => {
  return (
    <SummaryContainer>
      <BidContent>
        <Text
          color='neutrals8'
          text={"Current Bid"}
          size='1rem'
          lineHeight='1.5rem'
          fontWeight={500}
          isPoppins
        />
        <Text
          color='neutrals8'
          text={"1.00 ETH"}
          size='3rem'
          lineHeight='3.5rem'
          textTransform='upper'
          textType='title-amount'
        />
        <Text
          color='neutrals4'
          text={"$3,618.36"}
          size='1.5rem'
          lineHeight='2rem'
          fontWeight={600}
          isPoppins
        />
      </BidContent>
      <AuctionContent>
        <Text
          color='neutrals8'
          text={"Auction ending in"}
          size='1rem'
          lineHeight='1.5rem'
          fontWeight={500}
          isPoppins
        />
        <AuctionTimeContainer>
          <AuctionItem>
            <Text
              color='neutrals8'
              text={"19"}
              size='2rem'
              lineHeight='2.5rem'
            />
            <Text
              color='neutrals4'
              text={"Hrs"}
              size='1rem'
              lineHeight='1.5rem'
              fontWeight={500}
              isPoppins
            />
          </AuctionItem>
          <AuctionItem>
            <Text
              color='neutrals8'
              text={"24"}
              size='2rem'
              lineHeight='2.5rem'
            />
            <Text
              color='neutrals4'
              text={"mins"}
              size='1rem'
              lineHeight='1.5rem'
              fontWeight={500}
              isPoppins
            />
          </AuctionItem>
          <AuctionItem>
            <Text
              color='neutrals8'
              text={"19"}
              size='2rem'
              lineHeight='2.5rem'
            />
            <Text
              color='neutrals4'
              text={"secs"}
              size='1rem'
              lineHeight='1.5rem'
              fontWeight={500}
              isPoppins
            />
          </AuctionItem>
        </AuctionTimeContainer>
      </AuctionContent>
    </SummaryContainer>
  );
};

export default BidSummaryCard;
