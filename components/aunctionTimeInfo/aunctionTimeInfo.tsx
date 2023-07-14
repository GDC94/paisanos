import { Text } from "components/commons/text";
import {
  AuctionContent,
  AuctionItem,
  AuctionTimeContainer,
} from "./aunctionTimeInfo.styles";

interface AunctionTimeInfoProps {
  auctionEnds: {
    time: {
      hours: string;
      mins: string;
      secs: string;
    };
  };
}

const AunctionTimeInfo = ({ auctionEnds }: AunctionTimeInfoProps) => {
  return (
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
            text={auctionEnds?.time?.hours}
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
            text={auctionEnds?.time?.mins}
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
            text={auctionEnds?.time?.secs}
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
  );
};

export default AunctionTimeInfo;
