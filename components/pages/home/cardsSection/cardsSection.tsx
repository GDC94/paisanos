import { Container } from "layouts/mainLayout";
import { CardNft } from "components/cardNft";
import { CardNftContainer, CardsSectionContainer } from "./cardsSection.styles";

const cardsSection = () => {
  return (
    <CardsSectionContainer>
      <Container>
        <CardNftContainer>
          <CardNft />
          <CardNft />
          <CardNft />
          <CardNft />
        </CardNftContainer>
      </Container>
    </CardsSectionContainer>
  );
};

export default cardsSection;
