1. **Set Up Theme Switching**:
   - Use Chakra UI's `useColorMode` hook in the `ExchangePage` component to manage the current theme (light or dark).
   - Add a toggle button at the bottom of the `ExchangePage` to switch between light and dark modes.
2. **Pass `colorMode` Prop**:
   - Pass the `colorMode` prop from `ExchangePage` to `ExchangeCard` and `ExchangeCardSummary` components.
3. **Adjust Styles Based on Theme**:
   - In `ExchangePage`, conditionally set the background and text colors based on `colorMode`.
   - In `ExchangeCard`, adjust the background and text colors using the `colorMode` prop to ensure readability in both themes.
   - In `ExchangeCardSummary`, add a `textColor` prop and use it to set text colors for estimated cost, exchange rate, and asset balance.
4. **Ensure Readability**:
   - Use lighter text colors in dark mode for better readability.
   - Adjust background colors to provide sufficient contrast in both light and dark modes.