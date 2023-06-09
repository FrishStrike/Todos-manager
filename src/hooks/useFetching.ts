import { useState } from "react";

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<any>();

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, isError];
};
