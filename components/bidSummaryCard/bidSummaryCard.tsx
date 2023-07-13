import { Text } from "components/commons/text";
import { BidContent } from "./bidSummaryCard.styles";

import { EthPriceInfo } from "typings/responses";

interface BidSummaryCardProps {
  ethInformation: EthPriceInfo;
}

const BidSummaryCard = ({ ethInformation }: BidSummaryCardProps) => {
  return (
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
          text={`${ethInformation?.eth} ETH`}
          size='3rem'
          lineHeight='3.5rem'
          textTransform='upper'
          textType='title-amount'
        />
        <Text
          color='neutrals4'
          text={`$ ${ethInformation?.usd}`}
          size='1.5rem'
          lineHeight='2rem'
          fontWeight={600}
          isPoppins
        />
      </BidContent>

  );
};

export default BidSummaryCard;
