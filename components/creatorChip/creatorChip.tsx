import Image from "next/image";
import { Text } from "../commons/text";
import {
  AvatarWrapper,
  ChipContainer,
  InfoWrapper,
} from "./creatorChip.styles";

interface CreatorChipProps {
  author?: string;
  instantPrice?: string;
}

const CreatorChip = ({
  author,
  instantPrice,
}: CreatorChipProps) => (
  <ChipContainer>
    {instantPrice && (
      <>
        <AvatarWrapper>
          <Image
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
    {author && (
      <>
        <AvatarWrapper>
          <Image src={'/images/user.png'} alt='Logo' width={40} height={40} />
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
