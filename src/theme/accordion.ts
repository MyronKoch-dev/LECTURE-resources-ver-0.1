// Accordion Theme Configuration
// This file defines the styling for all accordion components in the application.
// It includes styles for the container, buttons, and panels.

import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

// Base style for the accordion root container
const baseStyleRoot: SystemStyleObject = {
  border: "1px solid",           // Add border
  borderColor: "gray.300",       // Light border color
  borderRadius: "lg",            // Large border radius
};

// Base style for individual accordion items
const baseStyleContainer: SystemStyleObject = {
  borderTopWidth: "1px",         // Top border for separation
  borderColor: "inherit",        // Inherit border color from root
  _first: {
    borderTopWidth: 0,           // Remove top border from first item
  },
  _last: {
    borderBottomWidth: 0,        // Remove bottom border from last item
  },
};

// Base style for accordion buttons (headers)
const baseStyleButton: SystemStyleObject = {
  fontWeight: 700,               // Bold text
  color: "gray.900",             // Dark text color
  px: 5,                         // Horizontal padding
  py: 5,                         // Vertical padding
  _focus: {
    boxShadow: "none",           // Remove focus shadow
  },
};

// Base style for accordion panels (content)
const baseStylePanel: SystemStyleObject = {
  px: 5,                         // Horizontal padding
  pb: 6,                         // Bottom padding
};

// Combine all styles into base style configuration
const baseStyle: PartsStyleObject<typeof parts> = {
  root: baseStyleRoot,           // Apply root styles
  container: baseStyleContainer, // Apply container styles
  button: baseStyleButton,       // Apply button styles
  panel: baseStylePanel,         // Apply panel styles
};

// Export the complete accordion theme configuration
const styles = {
  parts: parts.keys,             // Define component parts
  baseStyle,                     // Apply base styles
};

export default styles;
