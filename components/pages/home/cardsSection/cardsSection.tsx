import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./cardsGridComponent";
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
