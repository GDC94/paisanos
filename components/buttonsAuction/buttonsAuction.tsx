import { ButtonPaisa } from "components/commons/buttonPaisa";
import { AuctionButtonsContent } from "./buttonsAuction.styles";

const ButtonsAuction = () => {
  return (
    <AuctionButtonsContent>
      <ButtonPaisa text='Place a bid' buttonType={"large-outline"} />
      <ButtonPaisa text='View item' buttonType={"large-solid"} />
    </AuctionButtonsContent>
  );
};

export default ButtonsAuction;
