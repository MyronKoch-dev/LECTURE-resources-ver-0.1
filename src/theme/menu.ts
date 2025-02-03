// Base style for the menu list
const baseStyleList = {
  boxShadow: "lg", // Applying a large shadow for depth
  minW: "9rem", // Minimum width for consistency
  py: 0, // No vertical padding for a clean look
  borderRadius: "lg", // Large border radius for a smooth edge
};

// Base style for individual menu items
const baseStyleItem = {
  color: "gray.700", // Default text color for menu items
  py: "0.7rem", // Vertical padding for spacing
  fontSize: "sm", // Small font size for compactness
  fontWeight: 500, // Medium font weight for readability
  _focus: { // Styles applied when an item is focused
    bg: "gray.50", // Light background for focus state
    color: "primary.600", // Primary color for text in focus state
  },
};

// Combining base styles for list and item into a single object
const baseStyle = {
  list: baseStyleList, // Base style for the menu list
  item: baseStyleItem, // Base style for individual menu items
};

// Exporting the base style as the default styles for the menu component
const styles = {
  baseStyle,
};

export default styles;
