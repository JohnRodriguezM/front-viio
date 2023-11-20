import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadingContext, LoadingProvider } from './LoadingContext';
import { useContext } from 'react';

describe('LoadingProvider', () => {
  it('should render children', () => {
    render(
      <LoadingProvider>
        <div>Child Component</div>
      </LoadingProvider>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });

  it('should set loading state correctly', () => {
    render(
      <LoadingProvider>
        <ChildComponent />
      </LoadingProvider>
    );

    const loadingValue = screen.getByTestId('loading-value');
    expect(loadingValue.textContent).toBe('false');
  });

  it('should update loading state correctly', () => {
    render(
      <LoadingProvider>
        <ChildComponent />
      </LoadingProvider>
    );

    const toggleButton = screen.getByTestId('toggle-button');
    const loadingValue = screen.getByTestId('loading-value');

    expect(loadingValue.textContent).toBe('false');

    // Simulate a click event to toggle the loading state
    toggleButton.click();

    expect(loadingValue.textContent).toBe('true');
  });
});

const ChildComponent = () => {
  const { loading, handleLoading } = useContext(LoadingContext);

  return (
    <div>
      <div data-testid="loading-value">{loading.toString()}</div>
      <button data-testid="toggle-button" onClick={() => handleLoading(!loading)}>
        Toggle Loading
      </button>
    </div>
  );
};