import styled from "@emotion/styled";

export interface TextPaisaProps {
  size?:
    | "0.875"
    | "0.75rem"
    | "1rem"
    | "1.25rem"
    | "1.5rem"
    | "2rem"
    | "3rem"
    | "4rem";
  fontWeight?: 300 | 400 | 500 | 600 | 800;
  color:
    | "neutrals1"
    | "neutrals2"
    | "neutrals4"
    | "neutrals5"
    | "neutrals6"
    | "neutrals7"
    | "neutrals8";
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  textTransform?: "upper";
  lineHeight?: string;
  isPoppins?: boolean;
}

export const TextCommon = styled.div<TextPaisaProps>`
  background-color: transparent;
  font-size: ${(props) =>
    props.theme.size[props.size as keyof typeof props.theme.size] ??
    props.theme.size["0.875rem"]};
  font-weight: ${(props) =>
    props.fontWeight
      ? props.theme.fontWeight[props.fontWeight]
      : props.theme.fontWeight[700]};
  margin-top: ${(props) => props.marginTop ?? "0"};
  margin-bottom: ${(props) => props.marginBottom ?? "0"};
  margin-right: ${(props) => props.marginRight ?? "0"};
  margin-left: ${(props) => props.marginLeft ?? "0"};
  color: ${(props) =>
    props.theme.colors[props.color] ?? props.theme.colors.black};

  text-transform: ${(props) => (props.textTransform ? "uppercase" : "none")};
  font-family: ${(props) =>
    props.isPoppins ? props.theme.fonts.Poppins : props.theme.fonts.DMsans};
  line-height: ${(props) =>
    props.lineHeight
      ? props.theme.size[props.lineHeight as keyof typeof props.theme.size]
      : props.theme.size["1rem"]};
  font-style: normal;

  &.title {
    letter-spacing: -1.28px;
    font-size: "DM Sans", sans-serif;
  }
  &.title-amount {
    letter-spacing: -0.96px;
    font-size: "DM Sans", sans-serif;
  }
`;
