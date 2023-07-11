import { CardNft } from "components/cardNft";
import { CardsGrid } from "./cardsGridComponent.styles";

const CardsGridComponent = () => {
  return (
    <CardsGrid>
      <CardNft />
      <CardNft />
      <CardNft />
    </CardsGrid>
  );
};

export default CardsGridComponent;
