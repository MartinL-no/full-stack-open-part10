import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    letterSpacing: theme.letterSpacing.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextAccent: {
    color: theme.colors.textAccent,
  },
  colorTextError: {
    color: theme.colors.textError,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightSemiBold: {
    fontWeight: theme.fontWeights.semiBold,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  marginBottomWide: {
    marginBottom: theme.marginBottom.marginBottomWide,
  },
  textAlignCenter: {
    textAlign: theme.textAlign.textAlignCenter,
  },
});

const Text = ({
  color,
  fontSize,
  fontWeight,
  style,
  marginBottom,
  textAlign,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textError" && styles.colorTextError,
    color === "textAccent" && styles.colorTextAccent,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "semiBold" && styles.fontWeightSemiBold,
    fontWeight === "bold" && styles.fontWeightBold,
    marginBottom === "wide" && styles.marginBottomWide,
    textAlign === "center" && styles.textAlignCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
