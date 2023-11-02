interface ITheme {
  colors: {
    primary: string;
    secondary: string;
  };
  fontSizes: {
    body: string;
    heading: string;
    icon: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: "#BABD92",
    secondary: "black",
  },
  fontSizes: {
    body: "0.938rem",
    heading: "1.85rem",
    icon: "1.5rem",
  },
};

export const getTheme = () => theme;
