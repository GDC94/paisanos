import { CardNft } from "components/cardNft";
import { CardsGrid } from "./cardsGridComponent.styles";

const CardsGridComponent = () => {
  return (
    <CardsGrid>
      {[...Array(3)]?.map((_, key: number) => {
        return <CardNft key={key} />;
      })}
    </CardsGrid>
  );
};

export default CardsGridComponent;
