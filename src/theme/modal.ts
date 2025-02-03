// Modal Theme Configuration
// This file defines the styling for all modal components in the application.
// It provides a consistent look and feel for modal dialogs.

import type { SystemStyleObject } from "@chakra-ui/theme-tools";

// Base style for the modal body
const baseStyleBody: SystemStyleObject = {
  p: 6,                    // Padding around modal content
};

// Base style configuration for all modal components
const baseStyle: SystemStyleObject = {
  body: baseStyleBody,     // Apply body styles
};

// Export the complete modal theme configuration
const styles = {
  baseStyle,
};

export default styles;
