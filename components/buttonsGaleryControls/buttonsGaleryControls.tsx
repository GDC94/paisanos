import { ButtonPaisa } from "components/commons/buttonPaisa";
import { ArrowBackIcon, ArrowNextIcon } from "components/commons/icons/icons";
import { ButtonsGaleryContent } from "./buttonsGaleryControls.styles";

const ButtonsGaleryControls = () => {
  return (
    <ButtonsGaleryContent>
      <ButtonPaisa
        buttonType={"galery-controls"}
        withoutBorder='without-border'
        icon={<ArrowBackIcon />}
      />
      <ButtonPaisa buttonType={"galery-controls"} icon={<ArrowNextIcon />} />
    </ButtonsGaleryContent>
  );
};

export default ButtonsGaleryControls;
