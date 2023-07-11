import { Text } from "components/text";
import { AssetDetailsContainer, CreatorInfo } from "./assetDetails.styles";
import { CreatorChip } from "components/creatorChip";

const AssetDetails = () => {
  return (
    <AssetDetailsContainer>
      <Text
        color='neutrals8'
        text={"the creator network®"}
        size='4rem'
        lineHeight='4rem'
        textType='title'
      />
      <CreatorInfo>
        {[...Array(2)]?.map((_, key: number) => {
          return <CreatorChip key={key} />;
        })}
      </CreatorInfo>
    </AssetDetailsContainer>
  );
};

export default AssetDetails;
