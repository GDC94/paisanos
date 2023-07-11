import { Text } from "components/text";
import { OrderIcon } from "components/commons/icons/icons";
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

/*
interface cardNftProps {
  nftName?: string;
}
*/
const CardNft = () => (
  <CardNftContainer>
    <ImageContainer>
      <ImgWrapper>
        <CoverImage
          src={"/images/jon-tyson-gnFiwlyBH-A-unsplash 1.png"}
          loading='lazy'
        />
      </ImgWrapper>
    </ImageContainer>

    <ColumnContent>
      <NameNft>Amazing digital art</NameNft>
      <PriceNft>2.45 ETH</PriceNft>
    </ColumnContent>

    <OwnersContent>
      <AvatarOwners>
        <OwnerImage src={"/images/user.png"} loading='lazy' />
        <OwnerImage src={"/images/user.png"} loading='lazy' />
        <OwnerImage src={"/images/user.png"} loading='lazy' />
      </AvatarOwners>
      <Stock>3 in stock</Stock>
    </OwnersContent>
    <CardDivider />
    <FooterCard>
      <LeftContent>
        <OrderIcon />
        <Text
          marginLeft='5px'
          text={"Highest bid"}
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

export default CardNft;
