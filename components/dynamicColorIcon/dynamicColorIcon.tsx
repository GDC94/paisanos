import {
  AllColorsIcon,
  BlackIcon,
  GreenIcon,
  OrangeIcon,
  PinkIcon,
  PurpleIcon,
} from "components/commons/icons/icons";

interface ColorsWithIcon {
  text: string;
  icon: JSX.Element;
}

const DynamicColorIcon = (colors: string[]): ColorsWithIcon[] => {
  const getIconByColor = (color: string): JSX.Element => {
    switch (color) {
      case "green":
        return <GreenIcon />;
      case "pink":
        return <PinkIcon />;
      case "blue":
        return <PurpleIcon />;
      case "black":
        return <BlackIcon />;
      case "orange":
        return <OrangeIcon />;
      default:
        return <BlackIcon />;
    }
  };

  const colorIcons: ColorsWithIcon[] = [];

  colorIcons.push({ text: "All colors", icon: <AllColorsIcon /> });
  colors.forEach((color) => {
    const icon = getIconByColor(color);

    colorIcons.push({ text: color, icon });
  });

  return colorIcons;
};

export default DynamicColorIcon;
