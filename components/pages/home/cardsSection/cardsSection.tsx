import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./components/cardsGridComponent";
import { ColumnFiltersComponent } from "./components/cardsFiltersComponent";
import { useChallengeState } from "context/challengeContext";
import nfPaisanosDataAdapter from "adapters/nfPaisanosDataAdapter";
import {
  CardSectionContent,
  CardsSectionContainer,
} from "./cardsSection.styles";

const CardsSection = () => {
  const { challengeState } = useChallengeState();
  const { allAunctions } = challengeState;
  const allAunctionsAdapted = nfPaisanosDataAdapter(allAunctions);

  return (
    <CardsSectionContainer>
      <Container>
        <CardSectionContent>
          <ColumnFiltersComponent />
          <CardsGridComponent arrOfAllAunctionsAdapted={allAunctionsAdapted} />
        </CardSectionContent>
      </Container>
    </CardsSectionContainer>
  );
};

export default CardsSection;
