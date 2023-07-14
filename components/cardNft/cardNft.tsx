import { Text } from "components/commons/text";
import { OrderIcon } from "components/commons/icons/icons";
import { AdaptedNFPaisanosData } from "typings/adaptersTypings";
import {
  CardNftContainer,
  CoverImage,
  ImageContainer,
  ImgWrapper,
  ColumnContent,
  NameNft,
  PriceNft,
  Stock,
  AvatarOwners,
  OwnerImage,
  OwnersContent,
  CardDivider,
  FooterCard,
  LeftContent,
} from "./cardNft.styles";

interface cardNftProps {
  adaptedNFPaisanosData: AdaptedNFPaisanosData;
}

const CardNft = (adaptedNFPaisanosData: cardNftProps) => {
  const { adaptedNFPaisanosData: singleAunction } = adaptedNFPaisanosData;
  return (
    <CardNftContainer>
      <ImageContainer>
        <ImgWrapper>
          <CoverImage src={singleAunction?.media?.image} loading='lazy' />
        </ImgWrapper>
      </ImageContainer>

      <ColumnContent>
        <Text
          text={"Amazing digital art"}
          color={"neutrals8"}
          fontWeight={400}
          size='1rem'
          lineHeight='1.5rem'
          isPoppins
        />
        <PriceNft>{singleAunction?.instantPrice}</PriceNft>
      </ColumnContent>

      <OwnersContent>
        <AvatarOwners>
          {singleAunction?.bidUsers &&
            singleAunction?.bidUsers?.map((bidUser) => (
              <OwnerImage
                key={bidUser?.id}
                src={bidUser?.avatar}
                loading='lazy'
              />
            ))}
        </AvatarOwners>
        <Stock>{singleAunction?.stock} in stock</Stock>
      </OwnersContent>
      <CardDivider />
      <FooterCard>
        <LeftContent>
          <OrderIcon />
          <Text
            marginLeft='5px'
            text={`Highest bid ${singleAunction?.highestBid}`}
            color={"neutrals4"}
            fontWeight={400}
            size='0.75rem'
            isPoppins
          />
        </LeftContent>
        <Text
          text={"New bid 🔥"}
          color={"neutrals4"}
          fontWeight={400}
          size='0.75rem'
          isPoppins
        />
      </FooterCard>
    </CardNftContainer>
  );
};

export default CardNft;
