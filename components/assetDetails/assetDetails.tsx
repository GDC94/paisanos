import { Text } from "components/commons/text";
import { AssetDetailsContainer, CreatorInfo } from "./assetDetails.styles";
import { CreatorChip } from "components/creatorChip";
import { AdaptedNFPaisanosData } from "typings/adaptersTypings";

interface AssetDetailsProps {
  currentPopularAunctionAdapted: AdaptedNFPaisanosData;
}

const AssetDetails = ({ currentPopularAunctionAdapted }: AssetDetailsProps) => {
  return (
    <AssetDetailsContainer>
      <Text
        color='neutrals8'
        text={currentPopularAunctionAdapted?.author}
        size='4rem'
        lineHeight='4rem'
        textType='title'
      />
      <CreatorInfo>
        <CreatorChip author={currentPopularAunctionAdapted?.author} />
        <CreatorChip
          instantPrice={currentPopularAunctionAdapted?.instantPrice}
        />
      </CreatorInfo>
    </AssetDetailsContainer>
  );
};

export default AssetDetails;
