import { useRef, useState } from "react";
import { classes } from "utils";
import { ArrowDownIcon } from "../icons/icons";

import {
  DropDownOptions,
  DropdownOptionsList,
  DropDownWrapper,
  DropItem,
  IconChevronDownWrapper,
  Item,
  LinkItem,
  SingleOption,
} from "./dropDown.styles";

type ItemProps = {
  content: string;
  link?: string;
};

interface DropDownComponentProps {
  items: {
    content: string;
    link?: string;
  }[];
  defaultOptionValue?: string;
}

export const DropDownComponent = ({ items }: DropDownComponentProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeMenu = useRef(null);

  return (
    <DropDownWrapper>
      <IconChevronDownWrapper onClick={() => setIsVisible(!isVisible)}>
        hola
        <ArrowDownIcon />
      </IconChevronDownWrapper>
      <DropDownOptions className={classes({ show: isVisible })}>
        <DropdownOptionsList ref={closeMenu}>
          {items?.map((item: ItemProps, k: number) => {
            return item?.link ? (
              <LinkItem
                href={item?.link}
                key={k}
                onClick={() => setIsVisible(false)}
              >
                <DropItem>
                  <SingleOption>{item?.content}</SingleOption>
                </DropItem>
              </LinkItem>
            ) : (
              <Item
                key={k}
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                <DropItem>
                  <SingleOption>{item?.content}</SingleOption>
                </DropItem>
              </Item>
            );
          })}
        </DropdownOptionsList>
      </DropDownOptions>
    </DropDownWrapper>
  );
};
