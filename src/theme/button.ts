// Button Theme Configuration
// This file defines the styling for all button components in the application.
// It includes base styles, variants, and size configurations.

import {
  SystemStyleObject,
  SystemStyleFunction,
  getColor,
} from "@chakra-ui/theme-tools";

// Base button styles that apply to all variants
const baseStyle: SystemStyleObject = {
  fontWeight: 500,              // Medium font weight
  borderRadius: "lg",           // Large border radius
  _disabled: {
    cursor: "not-allowed",     // Show not-allowed cursor on disabled state
    boxShadow: "none",         // Remove shadow when disabled
  },
};

// Outline variant - Button with border and transparent background
const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    borderColor: `${c}.300`,           // Light border color
    _hover: {
      bg: `${c}.50`,                   // Very light background on hover
    },
    _active: {
      bg: "white",                     // White background when clicked
    },
    _focus: {
      bg: "white",
      borderColor: `${c}.300`,         // Same border color on focus
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}`,  // Focus ring
    },
  };
};

// Solid variant - Button with solid background color
const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: `${c}.600`,                    // Default background color
    color: "white",                    // White text
    _hover: {
      bg: `${c}.700`,                  // Darker background on hover
      _disabled: {
        bg: `${c}.200`,                // Light background when disabled
      },
    },
    _active: {
      bg: `${c}.600`,                  // Return to default color when clicked
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}`,  // Focus ring
    },
  };
};

// Ghost variant - Button with light background and colored text
const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: `${c}.50`,                     // Very light background
    color: `${c}.700`,                 // Dark colored text
    _hover: {
      bg: `${c}.100`,                  // Slightly darker background on hover
      _disabled: {
        bg: `${c}.25`,                 // Lighter background when disabled
      },
    },
    _active: {
      bg: `${c}.50`,                   // Return to default background when clicked
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}`,  // Focus ring
    },
  };
};

// Available button variants
const variants = {
  outline: variantOutline,
  solid: variantSolid,
  ghost: variantGhost,
};

// Button size configurations
const sizes: Record<string, SystemStyleObject> = {
  sm: {
    fontSize: "sm",                    // Small text
  },
  md: {
    fontSize: "sm",                    // Small text (same as sm for consistency)
  },
  lg: {
    h: "44px",                        // Larger height
    fontSize: "sm",                    // Small text
    px: 2.5,                          // Horizontal padding
  },
  xl: {
    h: "48px",                        // Extra large height
    fontSize: "md",                    // Medium text
    px: 3,                            // More horizontal padding
  },
  "2xl": {
    fontSize: "lg",                    // Large text
  },
};

// Export the complete button theme configuration
const styles = {
  baseStyle,
  variants,
  sizes,
};

export default styles;
