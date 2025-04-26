import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');
const queryClient = new QueryClient();

createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
