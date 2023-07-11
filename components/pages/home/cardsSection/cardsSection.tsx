import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./cardsGrid";
import { CardsSectionContainer } from "./cardsSection.styles";

const cardsSection = () => {
  return (
    <CardsSectionContainer>
      <Container>
        <CardsGridComponent />
      </Container>
    </CardsSectionContainer>
  );
};

export default cardsSection;
