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
    primary: "#6BA6B6",
    secondary: "#202225",
  },
  fontSizes: {
    body: "1rem",
    heading: "1.5rem",
    icon: "1.5rem",
  },
};

export const getTheme = () => theme;
