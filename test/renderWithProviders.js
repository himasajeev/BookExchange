import { render } from '@testing-library/react';

const renderWithProviders = (ui, ...options) => {
  return render(ui, ...options);
};

export { renderWithProviders };
