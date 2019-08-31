import { render } from '@testing-library/react';

const renderWithProviders = (ui, ...options) => {
  return render(ui, ...options);
};

// eslint-disable-next-line import/prefer-default-export
export { renderWithProviders };
