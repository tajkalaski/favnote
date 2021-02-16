import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];
