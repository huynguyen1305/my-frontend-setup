import type { DefaultOptions } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

const queryConfigOption: DefaultOptions = {
  queries: {
    useErrorBoundary: false,
    refetchOnWindowFocus: false,
    // retry: false,
    // retry: 10,
    // retryDelay(failureCount) {
    //   return Math.min(1000 * 2 ** failureCount, 30000);
    // },
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfigOption,
});
