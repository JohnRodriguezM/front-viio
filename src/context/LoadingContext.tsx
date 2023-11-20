import { createContext, useState, useCallback } from "react";
import { LoadingContextProps } from "./types/loadingContext.types";

/**
 * Context for managing loading state.
 */
export const LoadingContext = createContext<LoadingContextProps>(
  {} as LoadingContextProps
);

/**
 * Provides a context for managing loading state.
 * @param children - The child components to render.
 * @returns The LoadingProvider component.
 */
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = useCallback((value: boolean) => setLoading(value), []);

  const values = {
    loading,
    setLoading,
    handleLoading,
  };

  return (
    <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
  );
};
