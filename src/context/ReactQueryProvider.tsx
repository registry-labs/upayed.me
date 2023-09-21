import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 60 * 1 // 1 hour
		},
		mutations: {
			retry: false
		}
	}
});

export function ReactQueryProvider({ children }: PropsWithChildren) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
