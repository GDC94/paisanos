import { useState } from "react";
import { classes } from "utils";
import { ArrowDownIcon } from "../icons/icons";
import { Text } from "components/commons/text";
import {
  DropDownOptions,
  DropdownOptionsList,
  DropDownWrapper,
  DropItem,
  IconChevronDownWrapper,
  Item,
  SingleOption,
} from "./dropDown.styles";

type ItemProps = {
  text: string;
  icon?: JSX.Element;
};

interface DropDownComponentProps {
  items: ItemProps[];
  defaultOptionValue?: string;
}

export const DropDownComponent = ({
  items,
  defaultOptionValue = "",
}: DropDownComponentProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultOptionValue);
  return (
    <DropDownWrapper>
      <IconChevronDownWrapper onClick={() => setIsVisible(!isVisible)}>
        <Text text={value} color={"neutrals7"} />
        <ArrowDownIcon />
      </IconChevronDownWrapper>

      <DropDownOptions className={classes({ show: isVisible })}>
        <DropdownOptionsList>
          {items?.map((item: ItemProps, k: number) => (
            <Item
              key={k}
              onClick={() => {
                setIsVisible(false);
                setValue(item?.text);
              }}
            >
              <DropItem>
                <SingleOption>
                  {item.icon}
                  {item.text}
                </SingleOption>
              </DropItem>
            </Item>
          ))}
        </DropdownOptionsList>
      </DropDownOptions>
    </DropDownWrapper>
  );
};
