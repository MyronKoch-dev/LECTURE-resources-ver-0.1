import { SystemStyleObject } from "@chakra-ui/theme-tools";

// Base style for headings, applying to all sizes and variants
const baseStyle: SystemStyleObject = {
  fontWeight: "400", // Setting the base font weight to 400
};

// Size configurations for headings
const sizes: Record<string, SystemStyleObject> = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"], // Font size for 4xl size
    lineHeight: 1, // Line height for 4xl size
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"], // Font size for 3xl size
    lineHeight: 1, // Line height for 3xl size
  },
  "2xl": {
    fontSize: ["2xl", null, "40px"], // Font size for 2xl size
    lineHeight: [1.2, null, "56px"], // Line height for 2xl size
  },
  xl: {
    fontSize: ["3xl", null, "4xl"], // Font size for xl size
    lineHeight: [1.33, null, 1.2], // Line height for xl size
  },
  lg: {
    fontSize: ["2xl", null, "3xl"], // Font size for lg size
    lineHeight: [1.33, null, 1.2], // Line height for lg size
  },
  md: {
    fontSize: "xl", // Font size for md size
    lineHeight: 1.2, // Line height for md size
  },
  sm: {
    fontSize: "md", // Font size for sm size
    lineHeight: 1.2, // Line height for sm size
  },
  xs: {
    fontSize: "sm", // Font size for xs size
    lineHeight: 1.2, // Line height for xs size
  },
};

// Variant configurations for headings
const variants = {
  variants: {
    brand: {
      fontWeight: "400", // Font weight for brand variant
      fontSize: "lg", // Font size for brand variant
    },
  },
};

// Combining base style, sizes, and variants into a single styles object
const styles = {
  baseStyle,
  variants,
  sizes,
};

export default styles;
