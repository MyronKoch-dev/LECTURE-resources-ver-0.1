// Input Theme Configuration
// This file defines the styling for all input components in the application.
// It includes size configurations and variants for different input states.

import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColor } from "@chakra-ui/theme-tools";

// Base size configuration for medium inputs
const size: Record<string, SystemStyleObject> = {
  md: {
    height: "44px",           // Fixed height for consistency
    px: "14px",              // Horizontal padding
    borderRadius: "lg",       // Large border radius
  },
};

// Apply the size configuration to both the input field and any addons
const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  md: {
    field: size.md,          // Main input field
    addon: size.md,          // Input addons (prefixes/suffixes)
  },
};

// Outline variant styling - the default input appearance
const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;

  return {
    field: {
      borderColor: "gray.300",                // Default border color
      _hover: {},                            // No hover effect by default
      _readOnly: {
        boxShadow: "none !important",        // Remove focus shadow in readonly mode
        userSelect: "all",                   // Allow selecting readonly text
      },
      _disabled: {
        opacity: 1,                          // Keep full opacity when disabled
        bg: "gray.50",                       // Light background when disabled
        borderColor: "gray.300",             // Same border color when disabled
        color: "gray.500",                   // Muted text color when disabled
      },
      _invalid: {
        borderColor: "error.300",            // Red border for invalid state
        boxShadow: "none",
        _focus: {
          borderColor: "error.300",          // Keep red border on focus when invalid
          boxShadow: `0 0 0 4px ${getColor(theme, "error.100")}`,  // Red focus ring
        },
      },
      _focus: {
        zIndex: 1,                           // Ensure focus ring is visible
        borderColor: "primary.300",          // Purple border on focus
        boxShadow: `0 0 0 4px ${getColor(theme, "primary.100")}`,  // Purple focus ring
      },
      _placeholder: {
        opacity: 1,                          // Full opacity for placeholder
        color: "gray.500",                   // Gray placeholder text
        fontSize: "md"                       // Medium font size
      },
    },
  };
};

// Available input variants
const variants = {
  outline: variantOutline,    // Currently only outline variant is supported
};

// Export the complete input theme configuration
const styles = {
  sizes,
  variants,
};

export default styles;
