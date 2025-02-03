// Tabs Theme Configuration
// This file defines the styling for all tab components in the application.
// It includes styles for tab panels and individual tabs.

import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

// Base style for tab panels (content area)
const baseStyleTabpanel: SystemStyleObject = {
  p: 0,                    // No padding by default
  pt: 8,                   // Top padding for content spacing
};

// Base style for individual tabs
const baseStyleTab: SystemStyleObject = {
  _focus: {
    boxShadow: "none",     // Remove focus shadow
  },
};

// Combine tab panel and tab styles into base style
const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  tabpanel: baseStyleTabpanel,   // Apply tab panel styles
  tab: baseStyleTab,             // Apply individual tab styles
});

// Export the complete tabs theme configuration
const styles = {
  baseStyle,
};

export default styles;
