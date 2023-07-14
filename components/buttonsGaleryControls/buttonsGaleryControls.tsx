import { ButtonPaisa } from "components/commons/buttonPaisa";
import { ArrowBackIcon, ArrowNextIcon } from "components/commons/icons/icons";
import { ButtonsGaleryContent } from "./buttonsGaleryControls.styles";

interface ButtonsGaleryControlsProps {
  goToNextItem: () => void;
  goToPreviousItem: () => void;
}

const ButtonsGaleryControls = ({
  goToNextItem,
  goToPreviousItem,
}: ButtonsGaleryControlsProps) => {
  return (
    <ButtonsGaleryContent>
      <ButtonPaisa
        buttonType={"galery-controls"}
        withoutBorder='without-border'
        icon={<ArrowBackIcon />}
        onClick={goToPreviousItem}
      />
      <ButtonPaisa
        buttonType={"galery-controls"}
        icon={<ArrowNextIcon />}
        onClick={goToNextItem}
      />
    </ButtonsGaleryContent>
  );
};

export default ButtonsGaleryControls;
