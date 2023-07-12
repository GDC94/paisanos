import Image from "next/image";
import { Text } from "../commons/text";
import {
  AvatarWrapper,
  ChipContainer,
  InfoWrapper,
} from "./creatorChip.styles";

const CreatorChip = () => (
  <ChipContainer>
    <AvatarWrapper>
      <Image src='/images/user.png' alt='Logo' width={40} height={40} />
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
        text={"Don Paisano"}
        size='0.875'
        fontWeight={500}
        lineHeight='1.5rem'
        isPoppins
      />
    </InfoWrapper>
  </ChipContainer>
);
export default CreatorChip;
