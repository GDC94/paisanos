import classes from "../../utils/classes";
import { TextCommon, TextPaisaProps } from "./text.styles";

export interface TextProps extends TextPaisaProps {
  textType?: "title" | "title-amount";
  text: string;
}
const Text = ({ textType, text, ...restProps }: TextProps) => (
  <TextCommon {...restProps} className={classes(textType)}>
    {text}
  </TextCommon>
);

export default Text;
