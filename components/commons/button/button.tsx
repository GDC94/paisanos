import Link from "next/link";
import { ButtonWrapper } from "./button.styles";
import { classes } from "utils";
import { ArrowLink } from "../icons";

interface ButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  center?: boolean;
  icon?: JSX.Element;
}

export const Button = ({
  link = "",
  text,
  onClick,
  center,
  icon = <ArrowLink />,
}: ButtonProps) => {
  return (
    <ButtonWrapper className={classes({ center })} onClick={onClick}>
      <Link href={link}>
        {text}
        {icon}
      </Link>
    </ButtonWrapper>
  );
};
