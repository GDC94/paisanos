import classes from "../../../utils/classes";
import { ButtonContainer } from "./buttonPaisa.styles";

export interface ButtonPaisaProps {
  buttonType?:
    | "small-outline"
    | "large-solid"
    | "large-outline"
    | "galery-controls";
  text?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  withoutBorder?: "without-border";
}

const ButtonPaisa = ({
  buttonType,
  text,
  icon,
  onClick,
  withoutBorder,
}: ButtonPaisaProps) => {
  return (
    <ButtonContainer
      className={classes(buttonType, withoutBorder)}
      onClick={onClick}
    >
      {icon}
      {text}
    </ButtonContainer>
  );
};

export default ButtonPaisa;
