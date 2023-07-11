export const theming = {
  colors: {
    primary: "#FF4069",
    background: "#171717",
    grayLight: "#CBCBCB",
    grayMedium: "#6B6B6B",
    grayDark: "#242424",
    black: "#000000",
    white: "#ffffff",
    green: "#e3fc7b",
    violet: "#8900FA",

    /*neutrals* */
    neutrals1: "#141416",
    neutrals1b: "#000000",
    neutrals2: "#23262F",
    neutrals3: "#353945",
    neutrals4: "#777E90",
    neutrals5: "##B1B5C3",
    neutrals6: "#E6E8EC",
    neutrals7: "#F4F5F6",
    neutrals8: "#FCFCFD",
    /* Primarys */
    primary1: "#3772FF",
    primary1b: "#004CFF",

    primary2: "#9757D7",
    primary3: "#EF466F",
    primary4: "#45B26B",
  },

  transitions: {
    "0.3s": "all 0.3s cubic-bezier(.51,.92,.24,1.15);",
    "0.6s": "0.6s",
  },

  fonts: {
    Poppins: "'Poppins', sans-serif",
    DMsans: "'DM Sans', sans-serif",
  },

  size: {
    "0.5rem": "0.5rem",
    "0.75rem": "0.75rem",
    "0.875rem": "0.875rem",
    "1rem": "1rem",
    "1.5rem": "1.5rem",
    "1.25rem": "1.25rem",
    "1.875rem": "1.875",
    "2rem": "2rem",
    "2.5rem": "2.5rem",
    "3rem": "3rem",
    "4rem": "4rem",
  },
  fontWeight: {
    300: "300",
    400: "400",
    500: "500",
    600: "600",
    700: "700",
    800: "800",
  },
};

export const theme = {
  ...theming,
};

export type MainTheme = typeof theme;
