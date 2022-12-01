import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    letterSpacing: theme.letterSpacing.normal
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextAccent: {
    color: theme.colors.textAccent,
  },
  colorPrimary: {
    color: theme.colors.primary,
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
  center: {
    textAlign: 'center',
  },
  marginBottomWide: {
    marginBottom: theme.marginBottom.marginBottomWide,
  },
});

const Text = ({ color, fontSize, fontWeight, style, textAlign, marginBottom, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textAccent' && styles.colorTextAccent,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'semiBold' && styles.fontWeightSemiBold,
    fontWeight === 'bold' && styles.fontWeightBold,
    textAlign === 'center' && styles.center,
    marginBottom === 'wide' && styles.marginBottomWide, 
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;