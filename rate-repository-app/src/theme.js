import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "black",
    textSecondary: '#404040',
    textAccent: 'white',
    textError: "#d73a4a",
    primary: '#e1e4e8',
    secondary: 'white',
    accent: '#0366d6'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    semiBold: '500',
    bold: '700',
  },
  marginBottom: {
    marginBottomWide: 6,
  },
  letterSpacing: {
    normal: -0.25,
  },
  textAlign: {
    textAlignCenter: 'center',
  },
};

export default theme;