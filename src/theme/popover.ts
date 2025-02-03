// Popover Theme Configuration
// This file defines the styling for all popover components in the application.
// It includes styles for the popover content and body.

import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

// Base style for the popover content container
const baseStyleContent: SystemStyleObject = {
  borderColor: "gray.200",      // Light border color
  borderRadius: "lg",           // Large border radius
  boxShadow: "xl",             // Extra large shadow for depth
  _focus: {
    outline: 0,                // Remove default focus outline
    boxShadow: "none",         // Remove focus shadow
  },
};

// Base style for the popover body
const baseStyleBody: SystemStyleObject = {
  p: 4,                        // Padding around content
};

// Combine content and body styles into base style
const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  content: baseStyleContent,    // Apply content styles
  body: baseStyleBody,         // Apply body styles
});

// Export the complete popover theme configuration
const styles = {
  baseStyle,
};

export default styles;
