
import { Text } from "../commons/text";
import {
  AvatarWrapper,
  ChipContainer,
  InfoWrapper,
  ImageChip
} from "./creatorChip.styles";

interface CreatorChipProps {
  author?: string;
  instantPrice?: string;
  authorAvatar?: string
}

const CreatorChip = ({ author, instantPrice, authorAvatar }: CreatorChipProps) => (
  <ChipContainer>
    {instantPrice && (
      <>
        <AvatarWrapper>
          <ImageChip
            src={"/images/icons/instantPriceIcon.svg"}
            alt='Logo'
            width={40}
            height={40}
          />
        </AvatarWrapper>
        <InfoWrapper>
          <Text
            color='neutrals4'
            text={"Instante Price"}
            size='0.75rem'
            fontWeight={400}
            lineHeight='1.25rem'
          />
          <Text
            color='neutrals8'
            text={instantPrice}
            size='0.875'
            fontWeight={500}
            lineHeight='1.5rem'
            isPoppins
          />
        </InfoWrapper>
      </>
    )}
    {author && authorAvatar && (
      <>
        <AvatarWrapper>
          <ImageChip src={authorAvatar} alt='Logo' width={40} height={40} />
        </AvatarWrapper>
        <InfoWrapper>
          <Text
            color='neutrals4'
            text={"Creator"}
            size='0.75rem'
            fontWeight={400}
            lineHeight='1.25rem'
          />
          <Text
            color='neutrals8'
            text={author}
            size='0.875'
            fontWeight={500}
            lineHeight='1.5rem'
            isPoppins
          />
        </InfoWrapper>
      </>
    )}
  </ChipContainer>
);
export default CreatorChip;
