import { Theme } from '@radix-ui/themes';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

import useAuth from '@/core/hooks/useAuth/useAuth';

const router = createRouter({
  routeTree,
  context: {
    isAuthenticated: false
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const { authState } = useAuth();

  return (
    <Theme appearance='dark'>
      <RouterProvider router={router} context={{ isAuthenticated: authState.isAuthenticated }} />
    </Theme>
  );
};
