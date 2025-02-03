# App Customization Guide

This guide outlines all the customization points in the application where you can modify the appearance and styling.

## 1. Theme Colors

The app uses a comprehensive color system defined in `src/theme/index.ts`. You can customize:

### Primary Colors (Purple-based)
```typescript
primary: {
  25: "#FCFAFF",  // Lightest - backgrounds
  50: "#F9F5FF",  // Very light - hover states
  100: "#F4EBFF", // Light - active states
  200: "#E9D7FE", // Borders
  300: "#D6BBFB", // Disabled states
  400: "#B692F6", // Secondary actions
  500: "#9E77ED", // Base primary color
  600: "#7F56D9", // Hover states
  700: "#6941C6", // Active states
  800: "#53389E", // Dark accents
  900: "#42307D", // Darkest - text
}
```

### Other Color Schemes
- Gray scale (`gray`)
- Error states (`error`)
- Warning states (`warning`)
- Success states (`success`)
- Module-specific colors (`module`)

## 2. Component Styling

### Buttons (`src/theme/button.ts`)
- Three variants available: outline, solid, ghost
- Customizable sizes: sm, md, lg, xl, 2xl
- Modifiable properties:
  - Border radius
  - Font weight
  - Shadow effects
  - Hover/Focus states

### Inputs (`src/theme/input.ts`)
- Height and padding
- Border colors and radius
- Focus states
- Placeholder styling
- Error states

### Modals (`src/theme/modal.ts`)
- Padding
- Background colors
- Shadow effects

### Tooltips (`src/theme/tooltip.ts`)
- Background color
- Border radius
- Padding

### Tabs (`src/theme/tabs.ts`)
- Panel spacing
- Focus states
- Active/Inactive styling

### Accordion (`src/theme/accordion.ts`)
- Border colors and radius
- Panel spacing
- Button styling
- Container styling

## 3. Global Styles

### Typography (`src/theme/index.ts`)
```typescript
textStyles: {
  h1: {
    fontWeight: 700,
    color: "gray.900",
    fontSize: "xl",
    mb: 2,
    letterSpacing: 0.5,
  },
  bold: {
    color: "gray.700",
    fontWeight: 700,
  },
  light: {
    color: "gray.500",
    fontSize: "sm",
  }
}
```

### Font Stacks
```typescript
fonts: {
  heading: "Inter,...",
  body: "Inter,...",
  mono: "Menlo,...",
}
```

### Dark Mode (`src/styles/globals.css`)
```css
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
```

### Scrollbar Styling
```typescript
"*": {
  scrollbarWidth: "6px",
  scrollbarColor: "#7F56D9 transparent",
}
```

## 4. How to Apply Changes

1. **Color Changes**:
   - Locate the color scheme in `src/theme/index.ts`
   - Modify hex values for desired shades
   - Colors cascade through components automatically

2. **Component Styling**:
   - Find component theme file in `src/theme/`
   - Modify `baseStyle`, `variants`, or `sizes`
   - Changes apply globally to all instances

3. **Global Styles**:
   - Edit `src/styles/globals.css` for app-wide styles
   - Modify `src/theme/index.ts` for theme-wide changes

4. **Dark Mode**:
   - Customize dark mode colors in `globals.css`
   - Add component-specific dark mode styles in theme files

## 5. Best Practices

1. **Color Consistency**:
   - Use color tokens from the theme
   - Avoid hardcoding hex values
   - Maintain contrast ratios for accessibility

2. **Component Variants**:
   - Create new variants instead of overriding existing ones
   - Keep variants consistent across similar components

3. **Responsive Design**:
   - Use theme breakpoints for responsive styles
   - Test changes across different screen sizes

4. **Performance**:
   - Minimize CSS-in-JS usage for better performance
   - Use CSS variables for dynamic values
   - Avoid deep nesting of styles 